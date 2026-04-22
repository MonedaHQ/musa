import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Section from '@/components/Section';
import Button from '@/components/Button';
import FormInput from '@/components/formElements/FormInput';
import { useNewsletter } from '@/hooks/useNewsletter';
import styles from './styles/subscribe.module.css';

export default function Subscribe() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { newsletterSignup, isSigningUp } = useNewsletter();

  function onSubmit(data) {
    const newData = {
      email: data.email,
      listId: 56,
      attributes: { FIRSTNAME: data.firstName, LASTNAME: data.lastName },
    };

    newsletterSignup(newData, { onSettled: () => reset() });
  }

  return (
    <Section color="light" id="subscribe">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/dizzy-messages.png"
            alt="Stay ahead with Musa"
            width={800}
            height={800}
            className={styles.image}
            draggable={false}
          />
        </div>

        <div className={styles.content}>
          <h4 className="text-[14px] text-[#9E9E9E] font-regular">
            STAY AHEAD WITH MUSA
          </h4>
          <p className={styles.description}>
            Be the first to know about new features, expert tips, and the latest
            updates. Sign up for our newsletter and unlock the full potential of
            <br />
            Musa.
          </p>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <FormInput
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  register={register}
                  validation={{ required: true }}
                />
              </div>
              <div className={styles.inputGroup}>
                <FormInput
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  register={register}
                  validation={{ required: true }}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <FormInput
                type="email"
                placeholder="Email"
                name="email"
                register={register}
                validation={{ required: true }}
              />
            </div>

            <div className={styles.buttonWrapper}>
              <Button type="submit" variant="secondary" className='rounded-[4px]' disabled={isSigningUp}>
                {isSigningUp ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
