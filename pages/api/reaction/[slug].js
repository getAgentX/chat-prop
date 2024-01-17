// pages/api/reaction.js

import axios from "axios";
import llmateConfig from "@/llmate.config";

export default async function handler(req, res) {
  const { slug } = req.query;

  const chatPropObject = llmateConfig.apps.find((app) => app.slug === slug);

  const { id, data } = req.body;

  const apiUrl = `${process.env.API_URL}chat/message/${id}/reaction/`;

  const payload = {
    user_reaction: data,
  };

  try {
    const response = await axios.put(apiUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": chatPropObject.api_key,
      },
    });

    // Assuming response.data contains the relevant information you want to send
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
