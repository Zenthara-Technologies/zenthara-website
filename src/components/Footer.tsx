export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="logo footer-logo"><span className="logo-mark">⚡</span>Zenthara</div>
          <p className="muted">End‑to‑end cloud, web, and data solutions.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-slate-100">Company</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-slate-100">Services</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="/#services">Web Development</a></li>
            <li><a href="/#services">Cloud Migration</a></li>
            <li><a href="/#services">Data Engineering</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-slate-100">Contact</h4>
          <ul className="space-y-2 text-slate-300">
            <li><a href="mailto:info@zentharatechnologies.com">info@zentharatechnologies.com</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© <span id="year">{new Date().getFullYear()}</span> Zenthara. All rights reserved.</span>
        <div className="footer-links flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
