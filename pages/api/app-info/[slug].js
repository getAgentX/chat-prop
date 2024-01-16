// pages/api/app-info.js

import axios from "axios";
import llmateConfig from "@/llmate.cofig";

export default async function handler(req, res) {
  const { slug } = req.query;

  const chatPropObject = llmateConfig.apps.find((app) => app.slug === slug);

  try {
    const appInfoUrl = `${process.env.API_URL}app-run/${req.query.id}/`;

    const response = await axios.get(appInfoUrl, {
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
