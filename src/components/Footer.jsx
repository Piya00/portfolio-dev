import {Link} from 'react-router-dom'
import Logo from './Logo.jsx'
import {GitHub,Instagram,LinkedIn} from './Icons.jsx'
import {profile} from '../data/profile.js'

const quickLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Skills', '/skills'],
  ['Contact', '/contact'],
]

const exploreLinks = [
  ['Education', '/education'],
  ['Experience', '/experience'],
  ['Tech Stack', '/tech-stack'],
  ['Services', '/services'],
  ['Journey', '/journey'],
  ['Workspace', '/workspace'],
  ['Blog', '/blog'],
  ['FAQ', '/faq'],
]

const linkClass = 'footer-link inline-block text-sm transition duration-200 hover:translate-x-1'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})
  const instagramUrl = profile.instagram

  return (
    <footer className="site-footer mt-24 border-t">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={40}/>
            <p className="footer-heading text-lg font-semibold tracking-tight">{profile.name}</p>
          </div>
          <p className="footer-accent mt-2 text-sm font-medium">{profile.title}</p>
          <p className="footer-muted mt-1 text-sm">{profile.location}</p>
          <p className="footer-muted mt-4 max-w-sm text-sm leading-6">
            Building web applications and AI-powered projects while continuously learning new technologies.
          </p>
        </div>

        <nav aria-label="Quick navigation">
          <h2 className="footer-heading text-sm font-semibold">Quick Navigation</h2>
          <div className="mt-4 grid gap-3">
            {quickLinks.map(([label, path]) => (
              <Link key={path} to={path} className={linkClass}>{label}</Link>
            ))}
          </div>
        </nav>

        <nav aria-label="Explore">
          <h2 className="footer-heading text-sm font-semibold">Explore</h2>
          <div className="mt-4 grid gap-3">
            {exploreLinks.map(([label, path]) => (
              <Link key={path} to={path} className={linkClass}>{label}</Link>
            ))}
          </div>
        </nav>

        <div>
          <h2 className="footer-heading text-sm font-semibold">Connect</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {instagramUrl ? (
              <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="footer-social grid h-11 w-11 place-items-center rounded-full border transition duration-200 hover:-translate-y-1">
                <Instagram/>
              </a>
            ) : (
              <div title="Instagram URL not added yet" className="footer-placeholder flex h-11 items-center gap-2 rounded-full border border-dashed px-3" aria-label="Instagram URL placeholder">
                <Instagram/>
                <span className="text-xs">Add URL</span>
              </div>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="footer-social grid h-11 w-11 place-items-center rounded-full border transition duration-200 hover:-translate-y-1">
                <GitHub/>
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer-social grid h-11 w-11 place-items-center rounded-full border transition duration-200 hover:-translate-y-1">
                <LinkedIn/>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom mx-auto flex max-w-7xl flex-col gap-4 border-t px-4 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link to="/privacy" className="footer-bottom-link transition">Privacy Policy</Link>
          <button type="button" onClick={scrollToTop} className="footer-bottom-link transition">Back to Top ↑</button>
        </div>
      </div>
    </footer>
  )
}
