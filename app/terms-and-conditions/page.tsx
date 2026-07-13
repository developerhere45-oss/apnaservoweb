import type { Metadata } from 'next';
import { LegalPage, contactDetails } from '../legal-pages';
import { paymentsPricingRefundResponsibility } from '../legal-content';

export const metadata: Metadata = {
  title: 'Terms & Conditions | ApnaServo',
  description: 'Terms and Conditions for using ApnaServo.'
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Terms & Conditions"
      intro="These Terms govern access to and use of ApnaServo’s website, waitlist, app, service booking features, and partner services."
      sections={[
        {
          title: 'Acceptance of Terms',
          body: 'By accessing ApnaServo or using our services, you agree to these Terms. If you do not agree, do not use the platform.'
        },
        {
          title: 'About ApnaServo',
          body: 'ApnaServo is a Guwahati-based home services platform that connects customers with home service professionals such as electricians, plumbers, AC technicians, carpenters, painters, pest control experts, and other local service providers.'
        },
        {
          title: 'User Responsibilities',
          items: [
            'Provide accurate account, contact, location, and booking information.',
            'Use ApnaServo only for lawful and genuine home service requests.',
            'Treat service professionals and support staff respectfully.',
            'Do not misuse the app, submit false requests, interfere with platform security, or attempt unauthorized access.'
          ]
        },
        {
          title: 'Service Professionals',
          items: [
            'Professionals are expected to provide accurate profile details and comply with verification, quality, safety, and conduct requirements.',
            'ApnaServo may suspend, remove, or restrict a professional account for fraud, safety issues, poor conduct, false information, or policy violations.',
            'Professionals are responsible for licenses, tools, workmanship, taxes, and legal compliance applicable to their services.'
          ]
        },
        {
          title: 'Bookings, Estimates, and Payments',
          items: [
            'ApnaServo is launching in Guwahati with phased area-wise expansion and is currently available across selected areas of Guwahati.',
            'Serviceability is validated after the customer selects or shares a location during the booking flow.',
            'If a location is not supported, the booking flow may show: “ApnaServo is not available in your area yet. We are expanding across Guwahati and will be there soon.”',
            'Service availability, arrival time, pricing, and estimates may vary based on location, work type, inspection, and professional availability.',
            'Any quotation should be reviewed and confirmed before work begins.',
            'ApnaServo may update fees, service availability, or internal partner service zones as the platform grows.'
          ]
        },
        paymentsPricingRefundResponsibility,
        {
          title: 'Limitation of Liability',
          body: 'To the maximum extent permitted by law, ApnaServo is not liable for indirect, incidental, special, consequential, or punitive damages. Our role is to facilitate service discovery, booking, communication, and support.'
        },
        {
          title: 'Account Suspension',
          body: 'We may suspend or terminate access if a user violates these Terms, causes safety concerns, submits fraudulent requests, abuses support, or misuses the platform.'
        },
        {
          title: 'Contact',
          body: `For questions about these Terms, contact ${contactDetails.email} or ${contactDetails.phone}.`
        }
      ]}
    />
  );
}
