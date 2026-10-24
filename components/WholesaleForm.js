'use client';

import { businessTypes, countries, usStates } from '@/data/forms';
import FormField from './FormField';
import useEnquiry from './useEnquiry';

const fields = [
  { name: 'firstName', label: 'First Name', placeholder: 'Enter First Name', autoComplete: 'given-name', required: true },
  { name: 'lastName', label: 'Last Name', placeholder: 'Enter Last Name', autoComplete: 'family-name', required: true },
  { name: 'companyName', label: 'Company Name', placeholder: 'Enter Company Name', autoComplete: 'organization', required: true },
  { name: 'email', label: 'Email', placeholder: 'Enter Your Email ID', type: 'email', autoComplete: 'email', required: true },
  { name: 'phone', label: 'Phone Number', placeholder: 'Enter Your Phone Number', type: 'tel', autoComplete: 'tel', required: true },
  { name: 'address1', label: 'Address line 1', placeholder: 'Address line 1', autoComplete: 'address-line1' },
  { name: 'address2', label: 'Address line 2', placeholder: 'Address line 2', autoComplete: 'address-line2' },
  { name: 'city', label: 'City', placeholder: 'Enter City Name', autoComplete: 'address-level2' },
  { name: 'state', label: 'State', placeholder: 'Select Your State', options: usStates },
  { name: 'country', label: 'Country', placeholder: 'Select Your Country', options: countries, required: true },
  { name: 'postcode', label: 'Zip/Postal Code', placeholder: 'Zip/Postal Code', autoComplete: 'postal-code' },
  { name: 'businessType', label: 'Business Type', placeholder: 'Select Your BusinessType', options: businessTypes, required: true },
  { name: 'comments', label: 'Comments', placeholder: 'Enter Your Comments', textarea: true, wide: true },
];

export default function WholesaleForm() {
  const { status, message, errors, onSubmit, onReset } = useEnquiry('wholesale');

  return (
    <form className="form form--panel" onSubmit={onSubmit} onReset={onReset}>
      <fieldset>
        <legend>Your details</legend>
        <div className="form__grid">
          {fields.slice(0, 5).map((f) => (
            <FormField key={f.name} id={`ws-${f.name}`} {...f} error={errors[f.name]} />
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Address</legend>
        <div className="form__grid">
          {fields.slice(5, 11).map((f) => (
            <FormField key={f.name} id={`ws-${f.name}`} {...f} error={errors[f.name]} />
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Your business</legend>
        <div className="form__grid">
          {fields.slice(11).map((f) => (
            <FormField key={f.name} id={`ws-${f.name}`} {...f} error={errors[f.name]} />
          ))}
        </div>
      </fieldset>
      <div className="hp" aria-hidden="true">
        <label htmlFor="ws-website">Website</label>
        <input id="ws-website" name="website" tabIndex={-1} autoComplete="off" />
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
