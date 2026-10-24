export default function FormField({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  required,
  autoComplete,
  textarea,
  options,
  error,
  wide,
}) {
  const inputId = id || `f-${name}`;
  const errorId = `${inputId}-error`;
  const common = {
    id: inputId,
    name,
    required,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
  };

  let control;
  if (textarea) {
    control = <textarea {...common} rows={5} placeholder={placeholder} />;
  } else if (options) {
    control = (
      <select {...common} defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  } else {
    control = <input {...common} type={type} placeholder={placeholder} autoComplete={autoComplete} />;
  }

  return (
    <div className={`field${wide ? ' field--wide' : ''}${error ? ' has-error' : ''}`}>
      <label htmlFor={inputId}>
        {label}
        {required && <span className="field__req" aria-hidden="true"> *</span>}
      </label>
      {control}
      {error && (
        <p className="field__error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}
