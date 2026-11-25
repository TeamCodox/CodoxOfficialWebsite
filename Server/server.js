
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

app.use(express.json({ limit: "10kb" }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

app.post(
  "/api/contact",
  contactLimiter,
  async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;

      // Validate required fields
      if (
        !name?.trim() ||
        !email?.trim() ||
        !phone?.trim() ||
        !service?.trim() ||
        !message?.trim()
      ) {
        return res.status(400).json({
          success: false,
          message: "Please fill all required fields.",
        });
      }

      // Basic input validation
      if (
        name.length > 100 ||
        email.length > 254 ||
        phone?.length > 15 ||
        service?.length > 50 ||
        message.length > 3000
      ) {
        return res.status(400).json({
          success: false,
          message: "One or more fields are too long.",
        });
      }

      const telegramMessage = `
        🔔 NEW WEBSITE INQUIRY

        👤 Name: ${name}
        📧 Email: ${email}
        📞 Phone: ${phone || "Not provided"}

        🛠 Service: ${service || "Not specified"}

        💬 Message:
        ${message}`;

      const telegramResponse = await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: telegramMessage,
          }),
        }
      );

      const telegramData = await telegramResponse.json();

      if (!telegramResponse.ok || !telegramData.ok) {
        console.error("Telegram API error:", telegramData);

        return res.status(502).json({
          success: false,
          message: "Unable to send inquiry notification.",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Inquiry submitted successfully!",
      });

    } catch (error) {
      console.error("Contact form error:", error);

      return res.status(500).json({
        success: false,
        message: "Something went wrong.",
      });
    }
  }
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
