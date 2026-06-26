'use client';
import { useState, FormEvent } from 'react';

export default function Guestbook() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const charCount = message.length;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;
    setStatus('loading');

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const res = await fetch(`${API_URL}/api/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="guestbook" className="py-20 px-4 sm:px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="reveal text-center mb-12">
          <h2 className="font-pixel text-2xl sm:text-3xl text-void inline-block bg-sun px-6 py-2 brutal-border brutal-shadow-sm">GIRISH.EXE</h2>
          <p className="font-mono text-xs text-gray-500 mt-4">establish_connection // send_packet</p>
        </div>

        <div className="reveal bg-white brutal-border p-8 sm:p-12 rounded-none" style={{ boxShadow: '8px 8px 0 #FFD600', borderColor: '#000' }}>
          <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-4">
            <div className="flex gap-4 flex-col sm:flex-row">
              <input 
                type="text" 
                placeholder="Name *"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 font-mono text-sm text-void brutal-border rounded-none focus:outline-none focus:border-sun bg-cream"
                style={{ borderColor: '#000' }}
              />
              <input 
                type="email" 
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 font-mono text-sm text-void brutal-border rounded-none focus:outline-none focus:border-sun bg-cream"
                style={{ borderColor: '#000' }}
              />
            </div>
            <textarea 
              rows={4} 
              placeholder="Type your message here... *"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value.substring(0, 2000))}
              className="w-full p-4 font-mono text-sm text-void brutal-border rounded-none focus:outline-none focus:border-sun resize-none placeholder-gray-500 bg-cream" 
              style={{ borderColor: '#000' }}
            ></textarea>
            
            <div className="flex justify-between items-center mt-3">
              <span className="font-mono text-[10px] text-gray-600">Stored securely · <span className="text-void font-bold">{charCount}</span>/2000</span>
              <button disabled={status === 'loading'} type="submit" className="brutal-btn bg-red-500 text-white px-8 py-2.5 text-xs rounded-none font-sans font-extrabold tracking-wide disabled:opacity-50">
                {status === 'loading' ? 'SENDING...' : 'SEND'}
              </button>
            </div>
            
            {status === 'success' && <div className="mt-4 font-mono text-sm text-mint text-center">✓ Packet sent! Connection established.</div>}
            {status === 'error' && <div className="mt-4 font-mono text-sm text-red-500 text-center">✗ Error sending packet. Try again later.</div>}
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="https://github.com/G1r1shCodes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 brutal-border rounded-none transition-all hover:-translate-y-1" style={{ background: '#FFF8E7', borderColor: '#000', boxShadow: '3px 3px 0 #FFD600' }}>
              <span className="iconify text-void" data-icon="lucide:github" data-width="22"></span>
              <div><p className="font-pixel text-[10px] font-bold text-void">GITHUB</p><p className="font-mono text-[9px] text-gray-600">G1r1shCodes</p></div>
            </a>
            <a href="https://linkedin.com/in/girishkumarcs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 brutal-border rounded-none transition-all hover:-translate-y-1" style={{ background: '#FFF8E7', borderColor: '#000', boxShadow: '3px 3px 0 #00D4FF' }}>
              <span className="iconify" data-icon="lucide:linkedin" data-width="22" style={{ color: '#0097b2' }}></span>
              <div><p className="font-pixel text-[10px] font-bold" style={{ color: '#0097b2' }}>LINKEDIN</p><p className="font-mono text-[9px] text-gray-600">girishkumarcs</p></div>
            </a>
            <a href="mailto:girishyadav.cs@gmail.com" className="flex items-center gap-3 p-4 brutal-border rounded-none transition-all hover:-translate-y-1" style={{ background: '#FFF8E7', borderColor: '#000', boxShadow: '3px 3px 0 #FF6B9D' }}>
              <span className="iconify" data-icon="lucide:mail" data-width="22" style={{ color: '#FF6B9D' }}></span>
              <div><p className="font-pixel text-[10px] font-bold" style={{ color: '#FF6B9D' }}>EMAIL</p><p className="font-mono text-[9px] text-gray-600">girishyadav.cs</p></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
