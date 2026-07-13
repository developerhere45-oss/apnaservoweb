import type { Metadata } from 'next';
import { absoluteUrl, siteUrl } from './site';

export type LeadershipProfile = {
  name: string;
  jobTitle: 'Founder' | 'Co-Founder';
  designation: string;
  path: '/founder' | '/co-founder';
  seoTitle: string;
  seoDescription: string;
  biography: string;
  responsibilities: string;
};

export const leadershipProfiles = {
  founder: {
    name: 'Dijendra Mallah',
    jobTitle: 'Founder',
    designation: 'Founder of ApnaServo',
    path: '/founder',
    seoTitle: 'Dijendra Mallah – Founder of ApnaServo',
    seoDescription:
      'Dijendra Mallah is the Founder of ApnaServo, a Guwahati-based home-services platform connecting customers with trusted local service professionals.',
    biography:
      'Based in Guwahati, Assam, Dijendra Mallah is the Founder of ApnaServo. He helped turn a simple everyday challenge - finding a trusted local professional when help was needed - into a platform designed to make home services easier to access.',
    responsibilities:
      'At ApnaServo, Dijendra helps guide the founding mission: creating trust between customers and skilled local professionals while building meaningful work opportunities through technology.'
  },
  coFounder: {
    name: 'Pinku Chetry',
    jobTitle: 'Co-Founder',
    designation: 'Co-Founder of ApnaServo',
    path: '/co-founder',
    seoTitle: 'Pinku Chetry – Co-Founder of ApnaServo',
    seoDescription:
      'Pinku Chetry is the Co-Founder of ApnaServo, a Guwahati-based home-services platform focused on dependable local home services.',
    biography:
      'Based in Guwahati, Assam, Pinku Chetry is the Co-Founder of ApnaServo. He was part of the late-night conversation that inspired the question behind ApnaServo: how can people find trusted local professionals more simply?',
    responsibilities:
      "At ApnaServo, Pinku helps shape the platform's focus on dependable local services, clear communication and genuine work opportunities for skilled professionals."
  }
} as const satisfies Record<string, LeadershipProfile>;

export function createLeadershipMetadata(profile: LeadershipProfile): Metadata {
  const url = absoluteUrl(profile.path);

  return {
    title: profile.seoTitle,
    description: profile.seoDescription,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true
      }
    },
    openGraph: {
      type: 'profile',
      url,
      siteName: 'ApnaServo',
      title: profile.seoTitle,
      description: profile.seoDescription
    },
    twitter: {
      card: 'summary',
      title: profile.seoTitle,
      description: profile.seoDescription
    }
  };
}

export function createLeadershipSchema(profile: LeadershipProfile) {
  const profileUrl = absoluteUrl(profile.path);
  const organizationId = `${siteUrl}/#organization`;
  const organization = {
    '@id': organizationId,
    '@type': 'Organization',
    name: 'ApnaServo',
    url: siteUrl
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@id': profileUrl,
        '@type': 'ProfilePage',
        name: profile.seoTitle,
        url: profileUrl,
        mainEntity: { '@id': `${profileUrl}#person` },
        about: { '@id': `${profileUrl}#person` }
      },
      {
        '@id': `${profileUrl}#person`,
        '@type': 'Person',
        name: profile.name,
        jobTitle: profile.jobTitle,
        description: profile.seoDescription,
        url: profileUrl,
        worksFor: organization,
        affiliation: organization,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Guwahati',
          addressRegion: 'Assam',
          addressCountry: 'India'
        }
      }
    ]
  };
}
