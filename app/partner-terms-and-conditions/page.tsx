import type { Metadata } from 'next';
import { LegalPage, contactDetails } from '../legal-pages';
import { paymentsPricingRefundResponsibility } from '../legal-content';

export const metadata: Metadata = {
  title: 'Partner Terms & Conditions | ApnaServo',
  description: 'Partner Terms and Conditions for ApnaServo service professionals.'
};

export default function PartnerTermsPage() {
  return (
    <LegalPage
      eyebrow="Partner Terms"
      title="Partner Terms & Conditions"
      intro="These Partner Terms apply to electricians, plumbers, AC technicians, carpenters, painters, cleaners, pest control experts, and other independent service professionals using ApnaServo."
      sections={[
        {
          title: 'Independent Service Professional Status',
          body: 'Service professionals using ApnaServo are independent providers. ApnaServo is a platform for discovery, communication, lead generation, and support. Nothing in these Partner Terms creates an employment, agency, franchise, partnership, or exclusive contractor relationship.'
        },
        {
          title: 'Partner Eligibility and Verification',
          items: [
            'Partners must provide accurate identity, contact, profession, preferred operating area, experience, and verification information.',
            'ApnaServo may request face verification, background checks, skill details, or supporting documents before activating or continuing a partner profile.',
            'ApnaServo may approve, reject, pause, suspend, or remove a partner profile for safety, quality, fraud prevention, incorrect information, or policy violations.'
          ]
        },
        {
          title: 'Service Quality and Conduct',
          items: [
            'Partners must communicate professionally with customers and ApnaServo support.',
            'Partners must inspect customer requirements honestly and provide clear service scope before starting work.',
            'Partners are responsible for tools, workmanship, safety precautions, materials used, and legal compliance related to their services.',
            'Partners must not harass, threaten, mislead, overcharge, or misuse customer information.'
          ]
        },
        paymentsPricingRefundResponsibility,
        {
          title: 'Customer Data and Communication',
          items: [
            'Customer details shared through ApnaServo must be used only for the relevant service request.',
            'Partners must not sell, share, publish, or misuse customer phone numbers, addresses, photos, job details, or communication history.',
            'Partners should use ApnaServo communication features where available to keep discussions clear and traceable.'
          ]
        },
        {
          title: 'Suspension and Removal',
          body: 'ApnaServo may restrict, suspend, or remove partner access for poor service quality, unsafe behavior, repeated complaints, fraud, fake documents, privacy misuse, abusive communication, or violation of these Partner Terms.'
        },
        {
          title: 'Support Contact',
          body: `Partners can contact ApnaServo at ${contactDetails.email} or ${contactDetails.phone} for onboarding, profile updates, service issues, or policy questions.`
        }
      ]}
    />
  );
}
