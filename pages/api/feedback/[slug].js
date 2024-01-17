// pages/api/feedback.js

import axios from "axios";
import llmateConfig from "@/llmate.config";

export default async function handler(req, res) {
  const { slug } = req.query;

  const chatPropObject = llmateConfig.apps.find((app) => app.slug === slug);

  const { messageId, feedbackValue } = req.body;

  const apiUrl = `${process.env.API_URL}chat/message/${messageId}/feedback/`;

  const payload = {
    user_feedback: feedbackValue,
  };

  try {
    const response = await axios.put(apiUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": chatPropObject.api_key,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
