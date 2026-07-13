import type { Metadata } from 'next';
import { LegalPage, contactDetails } from '../legal-pages';

export const metadata: Metadata = {
  title: 'Privacy Policy | ApnaServo',
  description: 'Privacy Policy for ApnaServo, a Guwahati-based home services platform.'
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="This Privacy Policy explains how ApnaServo collects, uses, stores, protects, shares, and deletes user information for our website and mobile app services."
      sections={[
        {
          title: 'Developer and App Information',
          body: `ApnaServo is a Guwahati-based home services platform operating in selected serviceable areas during launch. For privacy questions or data requests, contact us at ${contactDetails.email} or ${contactDetails.phone}.`
        },
        {
          title: 'Information We Collect',
          items: [
            'Account information such as name, email address, phone number, and login details when you create or use an account.',
            'Service booking information such as selected service, address or approximate location, booking time, job notes, uploaded photos, and service status.',
            'Professional profile information for service partners such as name, phone number, profession, verification status, preferred operating area, and service history.',
            'Communication information such as support messages, chat or call metadata, and feedback submitted to ApnaServo.',
            'Device and usage information such as app version, device type, crash logs, diagnostics, IP address, and basic analytics used to keep the service secure and reliable.',
            'Payment-related status or transaction references when payments are enabled. ApnaServo does not store full card, UPI PIN, or banking credentials.'
          ]
        },
        {
          title: 'How We Use Information',
          items: [
            'To create and manage user accounts, send waitlist signup notifications, service requests, bookings, and support workflows.',
            'To validate serviceability after a customer selects or shares a location and connect supported bookings with verified home service professionals.',
            'To verify professionals, prevent fraud, protect users, and improve service quality.',
            'To send booking updates, launch updates, service notifications, safety messages, and customer support responses.',
            'To improve ApnaServo’s app, website, reliability, security, and user experience.'
          ]
        },
        {
          title: 'Data Sharing',
          items: [
            'We share necessary booking details with assigned service professionals so they can complete the requested service.',
            'We may use trusted service providers for hosting, database storage, email delivery, analytics, security, and customer support.',
            'We may disclose information if required by law, legal process, safety concerns, fraud prevention, or to protect the rights of ApnaServo, users, or service partners.',
            'We do not sell personal information.'
          ]
        },
        {
          title: 'Security Practices',
          items: [
            'We use technical and organizational safeguards designed to protect user information.',
            'Access to operational data is restricted to authorized personnel or systems that need it for service delivery.',
            'No internet service can be guaranteed to be completely secure, but we work to protect user data from unauthorized access, misuse, or loss.'
          ]
        },
        {
          title: 'Data Retention and Deletion',
          items: [
            'We retain account, booking, and support data only as long as needed for service delivery, legal compliance, fraud prevention, dispute handling, and business records.',
            'Users can request account and associated data deletion through the Delete Account page.',
            'Some records may be retained where required by law, tax, security, fraud prevention, chargeback handling, or unresolved disputes.'
          ]
        },
        {
          title: 'Children’s Privacy',
          body: 'ApnaServo is intended for users who can legally book home services. We do not knowingly collect personal data from children. If you believe a child has provided personal data, contact us for removal.'
        },
        {
          title: 'Changes to This Policy',
          body: 'We may update this Privacy Policy as ApnaServo evolves. Material updates will be reflected on this page with a revised update date.'
        }
      ]}
      cta={{
        title: 'Need to delete your account?',
        text: 'Use our public account deletion request page to ask ApnaServo to delete your account and associated personal data.',
        href: '/delete-account',
        label: 'Request Account Deletion'
      }}
    />
  );
}
