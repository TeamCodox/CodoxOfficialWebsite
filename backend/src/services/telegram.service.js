import { env } from "../config/env.js";

const sendTelegramMessage = async (message) => {
  const telegramUrl = `https://api.telegram.org/bot${env.telegramBotToken}/sendMessage`;

  const response = await fetch(telegramUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: env.telegramChatId,
      text: message,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.ok) {
    console.error("Telegram API error:", data);

    throw new Error("Failed to send Telegram notification.");
  }

  return data;
};

export default sendTelegramMessage;