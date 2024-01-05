// pages/api/app-run.js

export default async function handler(req, res) {
  try {
    const apiUrl = `${process.env.API_URL}app/${process.env.API_ID}/run/`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.API_KEY,
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
