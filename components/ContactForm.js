'use client';

import { contactFields } from '@/data/forms';
import FormField from './FormField';
import useEnquiry from './useEnquiry';

export default function ContactForm({ idPrefix = 'contact' }) {
  const { status, message, errors, onSubmit, onReset } = useEnquiry('contact');

  return (
    <form className="form" onSubmit={onSubmit} onReset={onReset} noValidate={false}>
      <div className="form__grid">
        {contactFields.map((f) => (
          <FormField key={f.name} id={`${idPrefix}-${f.name}`} {...f} error={errors[f.name]} />
        ))}
        <div className="hp" aria-hidden="true">
          <label htmlFor={`${idPrefix}-website`}>Website</label>
          <input id={`${idPrefix}-website`} name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
        {message}
      </p>
      <div className="form__actions">
        <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Submit'}
        </button>
        <button type="reset" className="btn btn--quiet">
          Cancel
        </button>
      </div>
    </form>
  );
}
