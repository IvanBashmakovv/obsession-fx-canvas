import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

interface LeadPayload {
  variant: 'education' | 'pro' | 'contact' | 'mentor';
  plan?: string;
  price?: string;
  name: string;
  method: string;
  contact: string;
  lang: 'en' | 'sk';
  interest?: string;
  experience?: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');
    if (!BOT_TOKEN || !CHAT_ID) {
      return new Response(JSON.stringify({ error: 'Telegram not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const payload = (await req.json()) as LeadPayload;
    if (!payload?.name || !payload?.contact || !payload?.method || !payload?.variant) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const headers: Record<string, string> = {
      education: '🟡 <b>NEW LEAD — EDUCATION 299€</b>',
      pro: '🟣 <b>WAITLIST — EDUCATION PRO 699€</b>',
      contact: '📩 <b>CONTACT FORM</b>',
      mentor: '⭐ <b>MENTOR APPLICATION</b>',
    };

    const lines = [
      headers[payload.variant] ?? '🔔 <b>NEW LEAD</b>',
      '',
      `👤 <b>Name:</b> ${payload.name}`,
      `📱 <b>Via:</b> ${payload.method}: ${payload.contact}`,
    ];
    if (payload.plan) lines.push(`📦 <b>Plan:</b> ${payload.plan}`);
    if (payload.price) lines.push(`💰 <b>Price:</b> ${payload.price}`);
    if (payload.interest) lines.push(`📦 <b>Interest:</b> ${payload.interest}`);
    if (payload.experience) lines.push(`📝 <b>Experience:</b> ${payload.experience}`);
    lines.push(`🌐 <b>Lang:</b> ${(payload.lang ?? 'en').toUpperCase()}`);
    lines.push(`⏰ <b>Time:</b> ${new Date().toISOString()}`);

    const tgRes = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: lines.join('\n'),
        parse_mode: 'HTML',
      }),
    });

    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error('Telegram error', tgRes.status, errText);
      return new Response(JSON.stringify({ error: 'Telegram send failed' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: (e as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
