// pages/api/create-chat.js

import axios from "axios";
import llmateConfig from "@/llmate.cofig";

export default async function handler(req, res) {
  const { slug } = req.query;

  const chatPropObject = llmateConfig.apps.find((app) => app.slug === slug);

  try {
    const chatUrl = `${process.env.API_URL}chat/create/`;

    const response = await axios.post(chatUrl, req.body, {
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
