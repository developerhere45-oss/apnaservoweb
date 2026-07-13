import type { Metadata } from 'next';
import { LegalPage, contactDetails } from '../legal-pages';

export const metadata: Metadata = {
  title: 'Delete Account Policy | ApnaServo',
  description: 'Request deletion of your ApnaServo account and associated data.'
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      eyebrow="Account Deletion"
      title="Delete Account Policy"
      intro="This page provides a public pathway to request deletion of your ApnaServo account and associated personal data."
      sections={[
        {
          title: 'How to Request Account Deletion',
          items: [
            `Email ${contactDetails.email} with the subject “Delete My ApnaServo Account”.`,
            'Include your registered name, phone number, email address, and whether you are a customer or service partner.',
            'If you have pending bookings, refunds, complaints, or partner settlements, mention those details so our support team can resolve them before deletion.',
            `You can also call ${contactDetails.phone} for assistance with the deletion request.`
          ]
        },
        {
          title: 'What Will Be Deleted',
          items: [
            'Account profile information such as name, email, phone number, saved address, and login-related account data.',
            'Personal data associated with your customer account or service partner account, where deletion is legally and operationally permitted.',
            'Waitlist signup emails are not saved in an ApnaServo database.'
          ]
        },
        {
          title: 'Data That May Be Retained',
          items: [
            'Records required for legal, tax, accounting, fraud prevention, safety, dispute, chargeback, or law enforcement purposes.',
            'Limited booking or transaction records needed to resolve open service issues, refunds, complaints, or partner settlements.',
            'Anonymized or aggregated analytics that no longer identify you personally.'
          ]
        },
        {
          title: 'Processing Timeline',
          body: 'We aim to acknowledge deletion requests within 7 business days and complete eligible deletion within 30 days, unless additional time is required for legal, fraud prevention, security, or unresolved service issues.'
        },
        {
          title: 'Important Notes',
          items: [
            'Deleting your account is permanent and may remove access to booking history, support history, saved addresses, partner profile, and future account features.',
            'Temporary account deactivation is not treated as account deletion.',
            'If you reinstall the app after deletion, you may need to create a new account.'
          ]
        }
      ]}
      cta={{
        title: 'Start your deletion request',
        text: 'Send an account deletion request from your registered email or include your registered phone number for verification.',
        href: `mailto:${contactDetails.email}?subject=Delete%20My%20ApnaServo%20Account`,
        label: 'Email Deletion Request'
      }}
    />
  );
}
