'use client';

import Image from 'next/image';
import { FormEvent, useState } from 'react';

export default function AdminDashboard({ initialAuthenticated }: { initialAuthenticated: boolean }) {
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    const data = await response.json();

    if (!response.ok) {
      setStatus('error');
      setMessage(data.error || 'Login failed.');
      return;
    }

    setPassword('');
    setAuthenticated(true);
    setStatus('idle');
  }

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    setAuthenticated(false);
  }

  if (!authenticated) {
    return (
      <main className="adminPage">
        <section className="adminLogin">
          <Image className="adminLogo" src="/apnaapna.webp" alt="ApnaServo" width={420} height={420} sizes="120px" />
          <h1>Waitlist Admin</h1>
          <p>Enter your admin password to view the current waitlist delivery setup.</p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={status === 'loading'}
              required
            />
            <button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Checking...' : 'Login'}
            </button>
          </form>
          {message ? <p className="adminError">{message}</p> : null}
        </section>
      </main>
    );
  }

  return (
    <main className="adminPage">
      <section className="adminShell">
        <header className="adminHeader">
          <div>
            <Image className="adminLogo" src="/apnaapna.webp" alt="ApnaServo" width={420} height={420} sizes="120px" />
            <h1>Waitlist Delivery</h1>
            <p>New waitlist signups are sent directly to Telegram and are not stored in a database.</p>
          </div>
          <button className="ghostButton" onClick={handleLogout}>Logout</button>
        </header>

        <div className="adminMetrics">
          <div><strong>0</strong><span>Stored members</span></div>
          <div><strong>Telegram</strong><span>Delivery channel</span></div>
          <div><strong>Private</strong><span>Bot token scope</span></div>
        </div>
      </section>
    </main>
  );
}
