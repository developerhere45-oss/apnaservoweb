import type { Metadata } from 'next';
import { LegalPage, contactDetails } from '../legal-pages';
import { paymentsPricingRefundResponsibility } from '../legal-content';

export const metadata: Metadata = {
  title: 'Refund Policy | ApnaServo',
  description: 'Refund and payment responsibility information for ApnaServo users.'
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Refund Policy"
      title="Refund Policy"
      intro="This page explains how payment responsibility, refund discussions, and service-related payment resolutions are handled on ApnaServo."
      sections={[
        paymentsPricingRefundResponsibility,
        {
          title: 'Before You Confirm Work',
          items: [
            'Review the quotation, work scope, payment method, and service expectations before approving any service.',
            'Ask the service professional for clarification if pricing, materials, or timing is unclear.',
            'Service availability, estimates, and arrival time may vary by location, work type, inspection, and professional availability.'
          ]
        },
        {
          title: 'Support for Payment Issues',
          body: 'If you need help documenting a payment or service issue, contact ApnaServo support. We may help review available booking, communication, and support details where operationally possible.'
        },
        {
          title: 'Contact',
          body: `For refund-policy questions, contact ${contactDetails.email} or ${contactDetails.phone}.`
        }
      ]}
      cta={{
        title: 'Need help with a service issue?',
        text: 'Contact ApnaServo support with booking details, screenshots, payment references, and a short description of the issue.',
        href: '/contact-us',
        label: 'Contact Support'
      }}
    />
  );
}
