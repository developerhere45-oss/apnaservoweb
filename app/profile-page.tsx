import Image from 'next/image';
import Link from 'next/link';
import type { LeadershipProfile } from './leadership';
import { createLeadershipSchema } from './leadership';
import styles from './leadership-profile.module.css';

export default function ProfilePage({ profile }: { profile: LeadershipProfile }) {
  const schema = createLeadershipSchema(profile);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="ApnaServo home">
          <Image src="/apnaservo-wordmark.png" alt="ApnaServo" width={969} height={257} priority sizes="168px" />
        </Link>
        <Link className={styles.homeLink} href="/">ApnaServo</Link>
      </header>

      <main className={styles.main}>
        <section className={styles.intro} aria-labelledby="profile-name">
          <span className={styles.eyebrow}>ApnaServo leadership</span>
          <h1 id="profile-name">{profile.name}</h1>
          <p className={styles.designation}>{profile.designation}</p>
          <p className={styles.introText}>{profile.biography}</p>
        </section>

        <dl className={styles.facts}>
          <div><dt>Organisation</dt><dd>ApnaServo</dd></div>
          <div><dt>Based in</dt><dd>Guwahati, Assam, India</dd></div>
          <div><dt>Profile status</dt><dd>Official leadership profile</dd></div>
        </dl>

        <div className={styles.content}>
          <section aria-labelledby="role-heading">
            <span className={styles.sectionLabel}>Role and responsibilities</span>
            <h2 id="role-heading">Connection with ApnaServo</h2>
            <p>{profile.responsibilities}</p>
          </section>
          <section aria-labelledby="profiles-heading">
            <span className={styles.sectionLabel}>Official profiles</span>
            <h2 id="profiles-heading">Public links</h2>
            <div className={styles.placeholder}>
              <p>No verified public social profile link has been provided.</p>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>ApnaServo - Trusted home services and meaningful opportunities in Guwahati.</footer>
    </div>
  );
}
