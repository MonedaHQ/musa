import Button from '../Button';
import styles from './styles/formbody.module.css';

function FormBody({ children, disabled = false }) {
  return (
    <div className={styles.formBody}>
      <div className={styles.formFields}>{children}</div>
      <div className={styles.buttonContainer}>
        <Button variant="submit" type="submit" disabled={disabled}>
          {disabled ? 'Loading...' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}

export default FormBody;
