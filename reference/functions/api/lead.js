// Cloudflare Pages Function: POST /api/lead
// Env vars (sätts i CF Pages → Settings → Environment variables, som Secrets):
//   SUPABASE_URL          t.ex. https://xxxx.supabase.co
//   SUPABASE_SERVICE_KEY  service_role-nyckeln (ENDAST här, aldrig i klientkod)
//   RESEND_API_KEY        (valfri — utan den skippas mejlnotisen)
//   NOTIFY_EMAIL          din adress för notiser

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "invalid json" }, 400);
  }

  // Honeypot: fältet är osynligt för människor — ifyllt = bot. Svara 200 så boten är nöjd.
  if (body.company_website) return json({ ok: true });

  const domain = sanitizeDomain(body.domain);
  const email = String(body.email || "").trim().toLowerCase();

  if (!domain || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: "domain och giltig email krävs" }, 400);
  }

  // 1) Spara i Supabase (REST, service-key server-side)
  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: env.SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${env.SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({ domain, email, source: "landing" }),
  });

  if (!res.ok) {
    console.log("supabase error", res.status, await res.text());
    return json({ error: "storage failed" }, 502);
  }

  // 2) Notifiera (best effort — får aldrig fälla svaret till besökaren)
  if (env.RESEND_API_KEY && env.NOTIFY_EMAIL) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Hälsokoll <noreply@winberghmedia.se>",
          to: [env.NOTIFY_EMAIL],
          subject: `Ny hälsokoll begärd: ${domain}`,
          text: `Domän: ${domain}\nE-post: ${email}\n\nKör auditmotorn och skicka rapporten inom 2 arbetsdagar.`,
        }),
      });
    } catch (e) {
      console.log("notify failed", e);
    }
  }

  return json({ ok: true });
}

function sanitizeDomain(input) {
  if (!input) return null;
  let d = String(input).trim().toLowerCase();
  d = d.replace(/^https?:\/\//, "").replace(/^www\./, "").split(/[/?#\s]/)[0];
  // a.se är kortast tänkbara; tillåt bokstäver (inkl åäö via punycode-läge), siffror, bindestreck, punkter
  if (!/^[a-z0-9åäö][a-z0-9åäö.-]{2,250}\.[a-z]{2,}$/.test(d)) return null;
  return d;
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
