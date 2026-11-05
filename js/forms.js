import { apiBaseUrl, company } from './config.js';

function whatsappLink(payload) {
  const lines = [
    `Hi Akash NextGen IT, I'm ${payload.name || ''}.`,
    payload.subject ? `Subject: ${payload.subject}` : '',
    payload.message || '',
    payload.email ? `Email: ${payload.email}` : ''
  ].filter(Boolean);
  return `${company.whatsappUrl}?text=${encodeURIComponent(lines.join('\n'))}`;
}

function showFallback(status, payload) {
  status.dataset.state = 'error';
  status.textContent = 'We could not send this through the form right now. ';
  const link = document.createElement('a');
  link.href = whatsappLink(payload);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Send it on WhatsApp instead →';
  status.appendChild(link);
}

export function initialiseContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (!form || !status) return;
  const button = form.querySelector('button[type="submit"]');
  const idleLabel = button.innerHTML;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      status.dataset.state = 'error';
      status.textContent = 'Please complete the required fields with a valid email address.';
      form.reportValidity();
      return;
    }
    const payload = Object.fromEntries(new FormData(form));
    if (!apiBaseUrl) { showFallback(status, payload); return; }

    button.disabled = true;
    button.textContent = 'Sending…';
    status.textContent = '';
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000); // free hosting can be slow to wake up
    try {
      const response = await fetch(`${apiBaseUrl}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error?.message || 'Unable to send your message.');
      form.reset();
      status.dataset.state = 'success';
      status.textContent = 'Thank you. Your enquiry has been received and we will reply within one business day.';
    } catch (error) {
      showFallback(status, payload);
    } finally {
      clearTimeout(timer);
      button.disabled = false;
      button.innerHTML = idleLabel;
    }
  });
}
