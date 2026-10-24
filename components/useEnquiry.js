'use client';

import { useState } from 'react';

// Shared submit logic for the contact and wholesale forms.
export default function useEnquiry(formName) {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  async function onSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries());
    setStatus('sending');
    setMessage('');
    setErrors({});
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, form: formName }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus('error');
        setErrors(json.errors || {});
        setMessage(json.error || 'Your message wasn’t sent. Try again.');
        return;
      }
      formEl.reset();
      setStatus('sent');
      setMessage('Thanks — your message has been sent. We’ll reply by email.');
    } catch {
      setStatus('error');
      setMessage('Your message wasn’t sent because the connection dropped. Check your connection and try again.');
    }
  }

  function onReset() {
    setStatus('idle');
    setMessage('');
    setErrors({});
  }

  return { status, message, errors, onSubmit, onReset };
}
