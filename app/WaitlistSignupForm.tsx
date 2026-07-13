'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Mail, Users } from 'lucide-react';

export default function WaitlistSignupForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setMessage(data.message || 'You are on the waitlist.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <form className="waitCard" onSubmit={handleSubmit} noValidate>
      <span className="waitCardIcon" aria-hidden="true"><Users size={34} /></span>
      <h3>Join Our <span>Waitlist</span></h3>
      <p>Get early access and exclusive launch offers.</p>
      <label className="waitEmailLabel" htmlFor="waitlist-email">Email address</label>
      <div className="waitFormFields">
          <span className="waitEmailIcon" aria-hidden="true"><Mail size={24} /></span>
          <input
            id="waitlist-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Enter your email address"
            value={email}
            disabled={status === 'loading'}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="rippleBtn" type="submit" disabled={status === 'loading'}>
            <span>{status === 'loading' ? 'Joining...' : 'Notify Me'}</span>
            <ArrowRight size={23} aria-hidden="true" />
          </button>
      </div>
      {message ? (
        <p className={`formNotice ${status}`} role={status === 'error' ? 'alert' : 'status'} aria-live="polite">
          {message}
        </p>
      ) : null}
      <div className="waitSeparator waitDesktopProof" />
      <div className="waitProof waitDesktopProof">
        <div className="miniFaces" aria-hidden="true">
          <span>A</span><span>P</span><span>S</span><span>G</span><b>AS</b>
        </div>
        <p><strong>Launching in Guwahati</strong> selected areas first</p>
      </div>
    </form>
  );
}
