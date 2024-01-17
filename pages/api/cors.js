// pages/api/create-chat.js

import axios from "axios";
import llmateConfig from "@/llmate.config";

export default async function handler(req, res) {
    const {
        query: { uri },
        headers: { host },
      } = req;

      const corsUrl = `${process.env.CORS_ANYWHERE_URL}`;

    
    console.log("uri", corsUrl+uri);

  try {

    const response = await axios.get(corsUrl+uri, {
      headers: {
        "Content-Type": "application/json",
        "Origin": host
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
