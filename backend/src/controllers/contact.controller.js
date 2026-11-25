import contactValidator from "../validators/contact.validator.js";
import sendTelegramMessage from "../services/telegram.service.js";

const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, phone, service, message } = req.body;

    // Validate request
    const validationError = contactValidator(req.body);

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    // Prepare Telegram message
    const telegramMessage = `
🔔 NEW INQUIRY

👤 Name: ${name.trim()}
📧 Email: ${email.trim()}
📞 Phone: ${phone.trim()}

🛠 Service: ${service.trim()}

💬 Message:
${message.trim()}
`;

    // Send Telegram notification
    await sendTelegramMessage(telegramMessage);

    return res.status(200).json({
      success: true,
      message: "Inquiry submitted successfully!",
    });

  } catch (error) {
    next(error);
  }
};

export default submitContactForm;