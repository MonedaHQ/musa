const url = `${process.env.NEXT_PUBLIC_API}/general/brevo/contacts`;

export async function newsletterApi(data) {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    let message = `Fetch failed: ${res.status} ${res.statusText}`;
    try {
      const contentType = res.headers.get('content-type');
      const text = await res.text();

      if (text && contentType?.includes('application/json')) {
        try {
          const json = JSON.parse(text);
          message = json?.message || JSON.stringify(json);
        } catch {
          message = text;
        }
      } else if (text && !contentType?.includes('text/html')) {
        message = text;
      }
      // ignore HTML responses and keep fallback message
    } catch (e) {
      // ignore parse errors and keep fallback message
    }
    throw new Error(message);
  }

  return await res.json();
}
