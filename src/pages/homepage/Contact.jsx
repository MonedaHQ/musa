import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

import { HiBuildingOffice2 } from 'react-icons/hi2';
import { RiWhatsappFill } from 'react-icons/ri';
import { FaCircleCheck } from 'react-icons/fa6';
import { MdCancel, MdEmail, MdPhone } from 'react-icons/md';

import { useContactUs } from '@/hooks/useContact';

import Section from '@/components/Section';
import Button from '@/components/Button';
import FormMain from '@/components/formElements/FormMain';
import FormContainer from '@/components/formElements/FormContainer';
import FormBody from '@/components/formElements/FormBody';
import FormInput from '@/components/formElements/FormInput';
import Loader from '@/components/Loader';

import styles from './styles/contact.module.css';

const contactInformation = [
  {
    title: 'Phone number',
    label: '+234 818 500 0400',
    link: 'tel:+2348185000400',
    icon: <MdPhone />,
  },
  {
    title: 'Email',
    label: 'musa@moneda.africa',
    link: 'mailto:musa@moneda.africa',
    icon: <MdEmail />,
  },
  {
    title: 'Office Address',
    label: '12, Abeke Animashaun, Lekki Phase 1, Lagos',
    link: 'https://maps.app.goo.gl/xod8EyenNrV8sRYx6',
    icon: <HiBuildingOffice2 />,
  },
  {
    title: 'WhatsApp',
    label: 'Send us a message',
    link: 'https://wa.link/ihxcl6',
    icon: <RiWhatsappFill />,
  },
];

function Contact() {
  return (
    <Section color="grey">
      <div className={styles.mainParent} id="contact">
        <ContactInfoDisplay />
        <ContactForm />
      </div>
    </Section>
  );
}

function ContactInfoDisplay() {
  return (
    <div className={styles.contactInfoParent}>
      {contactInformation.map((contact) => (
        <ContactCard contact={contact} key={contact.title} />
      ))}
    </div>
  );
}

function ContactCard({ contact }) {
  return (
    <div className={styles.contactCard}>
      <div className={styles.icon}>{contact.icon}</div>
      <div className={styles.contact}>
        <h4>{contact.title}</h4>
        <Button variant="link-light" href={contact.link}>
          {contact.label}
        </Button>
      </div>
    </div>
  );
}

function ContactForm() {
  const { contactUs, isSubmitting } = useContactUs();
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const formActions = { register, errors };

  const router = useRouter();
  const { status } = router.query;

  const renderContent = () => {
    switch (status) {
      case 'success':
        return <Success />;
      case 'error':
        return <Failed />;
      default:
        return (
          <>
            <div className={styles.formHeading}>
              <h3>Send us a Message</h3>
              <p>
                Please verify your information before sending your message. We
                will respond to your inquiry promptly.
              </p>
            </div>
            <FormFields
              contactUs={contactUs}
              isSubmitting={isSubmitting}
              formActions={formActions}
              handleSubmit={handleSubmit}
            />
          </>
        );
    }
  };
  return (
    <div className={styles.formParent}>
      {isSubmitting && <Loader />}
      {!isSubmitting && <> {renderContent()}</>}
    </div>
  );
}

function Success() {
  return (
    <div className={`${styles.notificationContainer} ${styles.success}`}>
      <FaCircleCheck />
      <p>We&lsquo;d be in touch within the next 24 hours</p>
    </div>
  );
}

function Failed() {
  const router = useRouter();

  function failedSubmission() {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, status: '' },
      },
      undefined,
      { shallow: true }
    );
  }
  return (
    <div className={`${styles.notificationContainer} ${styles.failed}`}>
      <MdCancel />
      <p>Something went wrong, please try again</p>
      <Button variant="secondary" onClick={() => failedSubmission()}>
        Try again
      </Button>
    </div>
  );
}

function FormFields({ contactUs, formActions, isSubmitting, handleSubmit }) {
  const router = useRouter();

  function onSubmit(data) {
    const newData = {
      subject: 'Contact Form Submission',
      data,
    };
    console.log(newData);
    contactUs(newData);
  }

  return (
    // <FormMain>
    <FormContainer
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      padding={false}
    >
      <FormBody disabled={isSubmitting}>
        <FormInput
          type="text"
          id="first_name"
          label="First name"
          placeholder="John"
          formActions={formActions}
        />
        <FormInput
          type="text"
          id="last_name"
          label="Last name"
          placeholder="Doe"
          formActions={formActions}
        />
        <FormInput
          type="email"
          id="email"
          label="Email"
          placeholder="j.doe@example.com"
          formActions={formActions}
        />
        <FormInput
          type="number"
          id="phone_number"
          label="Phone number (optional)"
          placeholder="080123456789"
          formActions={formActions}
          required={false}
        />
        <div className={styles.textarea}>
          <FormInput
            type="textarea"
            id="description"
            label="Message"
            placeholder="Your message goes here"
            formActions={formActions}
          />
        </div>
      </FormBody>
    </FormContainer>
    // </FormMain>
  );
}

export default Contact;
