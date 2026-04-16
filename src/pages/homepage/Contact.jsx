import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { MdLocationPin, MdEmail, MdPhone } from 'react-icons/md';
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from 'react-icons/fa';
import { FaSquareWhatsapp, FaXTwitter } from 'react-icons/fa6';

import { useContactUs } from '@/hooks/useContact';
import Section from '@/components/Section';
import Button from '@/components/Button';
import FormInput from '@/components/formElements/FormInput';
import WordAnimator from '@/components/WordAnimator';

import styles from './styles/contact.module.css';

function Contact() {
  return (
    <Section color="grey" id="contact">
      <div className={styles.container}>
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
}

function ContactInfo() {
  const socialLinks = [
    // { icon: <FaXTwitter />, href: '#' },
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/company/projectmusa',
    },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/projectmusa/' },
    // { icon: <FaFacebookF />, href: '#' },
  ];

  return (
    <div className={styles.infoColumn}>
      <div className={styles.infoGroup}>
        <div className={styles.infoItem}>
          <div className={styles.iconCircle}>
            <MdLocationPin />
          </div>
          <div>
            <h5>Address</h5>
            <Button
              variant="link-light"
              href="https://maps.app.goo.gl/cUF1GfY8RxJurt947"
            >
              12, Abeke Animashaun, Lekki Phase 1, Lagos Nigeria
            </Button>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconCircle}>
            <MdEmail />
          </div>
          <div>
            <h5>Email</h5>
            <Button variant="link-light" href="mailto:info@monedaafrica.com">
              info@monedaafrica.com
            </Button>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconCircle}>
            <MdPhone />
          </div>
          <div>
            <h5>Phone number</h5>
            <Button variant="link-light" href="tel:+2348185000400">
              +234 818 500 0400
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.socials}>
        <h5>Social Media</h5>
        <div className={styles.socialIcons}>
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} className={styles.socialIcon}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const { contactUs, isSubmitting } = useContactUs();
  const { register, handleSubmit, formState, reset } = useForm();

  // eslint-disable-next-line
  const { errors } = formState;

  function onSubmit(data) {
    contactUs(data, {
      onSuccess: () => reset(),
    });
  }

  return (
    <div className={styles.formColumn}>
      <WordAnimator as="h2" text="Send us a Message" />

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <FormInput
              type="text"
              placeholder="First Name"
              name="firstName"
              register={register}
              validation={{ required: 'First name is required' }}
              error={errors.firstName}
            />
          </div>
          <div className={styles.inputGroup}>
            <FormInput
              type="text"
              placeholder="Last Name"
              name="lastName"
              register={register}
              validation={{ required: 'Last name is required' }}
              error={errors.lastName}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <FormInput
              type="email"
              placeholder="Email"
              name="email"
              register={register}
              validation={{ required: 'Email is required' }}
              error={errors.email}
            />
          </div>
          <div className={styles.inputGroup}>
            <FormInput
              type="text"
              placeholder="Phone Number (optional)"
              name="phoneNumber"
              register={register}
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <FormInput
            isTextArea
            placeholder="Message"
            name="message"
            register={register}
            validation={{ required: 'Message is required' }}
            error={errors.message}
            rows={1}
          />
        </div>

        <div className={styles.formFooter}>
          <Button
            type="submit"
            variant="secondary"
            className='rounded-[4px] !px-[3.25rem]'
            disabled={isSubmitting}
            // className={styles.submitBtn}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </Button>

          <Button
            href="https://wa.link/ihxcl6"
            className={styles.whatsappLink}
            variant="link-light"
          >
            <div className={styles.whatsappIcon}>
              <FaWhatsapp />
            </div>
            Message Us on WhatsApp
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
