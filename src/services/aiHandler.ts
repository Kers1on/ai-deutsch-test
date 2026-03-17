import axios from "axios";
import { ipcMain } from "electron";
import dotenv from "dotenv";
import { TestSettings } from "../types/test";
import { Prompt } from "./prompt";

dotenv.config();

ipcMain.handle("generate-test", async (_, settings: TestSettings) => {
  const { level, type, topic, count } = settings;

  const prompt = Prompt({ level, type, topic, count });

  const response = await axios.post(
    "https://router.huggingface.co/v1/chat/completions",
    {
      model: "openai/gpt-oss-120b:groq",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.data;
});
