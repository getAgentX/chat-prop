// pages/api/app-run.js
import llmateConfig from "@/llmate.config";

export default async function handler(req, res) {
  const { slug } = req.query;

  const chatPropObject = llmateConfig.apps.find((app) => app.slug === slug);

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.setHeader("Transfer-Encoding", "chunked");
  res.setHeader("Connection", "keep-alive");

  try {
    const apiUrl = `${process.env.API_URL}app/${chatPropObject.app_id}/run/`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": chatPropObject.api_key,
      },
      body: JSON.stringify(req.body),
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    async function sendEvent(data) {
      res.write(`${data}`);
    }

    async function closeConnection() {
      res.end();
    }

    async function processResponse({ done, value }) {
      if (done) {
        closeConnection();
        return;
      }

      const chunk = decoder.decode(value);
      sendEvent(chunk);

      return reader.read().then(processResponse);
    }

    reader.read().then(processResponse);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}
