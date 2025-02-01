import styles from './styles/section.module.css';

function Section({
  children,
  color = 'light',
  paddingTop = true,
  paddingBottom = true,
  id = null,
}) {
  return (
    <section
      className={`${styles.section} ${paddingTop ? '' : styles.noTopPad} ${
        styles[color]
      } ${paddingBottom ? '' : styles.noBottomPad}`}
      id={id ? id : ''}
    >
      <main className={`${styles.margin} `}>{children}</main>
    </section>
  );
}

export default Section;
