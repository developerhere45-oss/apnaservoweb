import type { Metadata } from 'next';
import { createLeadershipMetadata, leadershipProfiles } from '../leadership';
import ProfilePage from '../profile-page';

export const metadata: Metadata = createLeadershipMetadata(leadershipProfiles.coFounder);

export default function CoFounderPage() {
  return <ProfilePage profile={leadershipProfiles.coFounder} />;
}
