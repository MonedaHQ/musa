import Link from 'next/link';
import styles from './styles/button.module.css';

function Button({
  children,
  onClick,
  href = null,
  variant,
  onMouseEnter = null,
  onMouseLeave = null,
  type = 'button',
  active = false,
  disabled = false,
}) {
  const commonClassName = `${styles.button} ${styles[variant]} ${
    active ? styles[`active-${variant}`] : ''
  } ${disabled ? styles.disabled : ''}`;

  if (href) {
    return (
      <Link
        href={href}
        className={commonClassName}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          } else if (onClick) {
            onClick(e);
          }
        }}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={commonClassName}
        type={type}
        onClick={disabled ? undefined : onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

export default Button;
