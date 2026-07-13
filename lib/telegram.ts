const TELEGRAM_API_BASE = 'https://api.telegram.org';

type TelegramSendMessageResponse = {
  ok: boolean;
  description?: string;
};

function getTelegramConfig() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID.');
  }

  return { botToken, chatId };
}

export async function sendWaitlistSignupToTelegram(email: string) {
  const { botToken, chatId } = getTelegramConfig();
  const timestamp = new Date().toISOString();
  const text = `\u{1F680} New Waitlist Signup\n\nEmail: ${email}\nTime: ${timestamp}`;

  const response = await fetch(`${TELEGRAM_API_BASE}/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text
    })
  });

  let data: TelegramSendMessageResponse | undefined;

  try {
    data = await response.json();
  } catch {
    data = undefined;
  }

  if (!response.ok || !data?.ok) {
    console.error('telegram_waitlist_send_error', {
      status: response.status,
      description: data?.description || response.statusText
    });
    throw new Error('Telegram message was not sent.');
  }
}
