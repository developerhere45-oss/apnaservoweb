import type { Metadata } from 'next';
import { createLeadershipMetadata, leadershipProfiles } from '../leadership';
import ProfilePage from '../profile-page';

export const metadata: Metadata = createLeadershipMetadata(leadershipProfiles.founder);

export default function FounderPage() {
  return <ProfilePage profile={leadershipProfiles.founder} />;
}
