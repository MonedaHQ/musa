import styles from './styles/forminput.module.css';

function FormInput({
  type = 'text',
  placeholder,
  register,
  name,
  validation = {},
  error,
  isTextArea = false,
  rows = 1,
  className = '',
}) {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      {isTextArea ? (
        <textarea
          id={name}
          rows={rows}
          placeholder={placeholder}
          className={styles.textarea}
          {...register(name, validation)}
        />
      ) : (
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          className={styles.input}
          {...register(name, validation)}
        />
      )}
      <span className={styles.underline} />
      {error && <p className={styles.warning}>{error.message}</p>}
    </div>
  );
}

export default FormInput;
