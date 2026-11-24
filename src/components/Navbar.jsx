import {useEffect, useRef, useState} from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'
import Logo from './Logo.jsx'
import {ChevronDown, MenuIcon, MoonIcon, SunIcon, XIcon} from './Icons.jsx'

const MORE_GROUPS = [
  {
    label: 'Skills & Learning',
    links: [
      ['Tech Stack', '/tech-stack'],
      ['Education', '/education'],
      ['Experience', '/experience'],
    ],
  },
  {
    label: 'Work & Offerings',
    links: [
      ['Services', '/services'],
      ['Journey', '/journey'],
      ['Workspace', '/workspace'],
    ],
  },
  {
    label: 'Content',
    links: [
      ['Blog', '/blog'],
      ['FAQ', '/faq'],
    ],
  },
]

const PRIMARY_LINKS = [
  ['Home', '/', true],
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Skills', '/skills'],
]

const morePaths = MORE_GROUPS.flatMap(group => group.links.map(([, path]) => path))

const desktopLinkClass = ({isActive}) =>
  `rounded-lg px-3 py-2 text-sm transition-colors ${
    isActive
      ? 'bg-accent/10 font-medium text-accent'
      : 'text-mute hover:bg-surface hover:text-ink'
  }`

const mobileLinkClass = ({isActive}) =>
  `flex items-center rounded-xl px-4 py-3 text-sm transition-colors ${
    isActive
      ? 'bg-accent/10 font-medium text-accent'
      : 'text-mute hover:bg-surface hover:text-ink'
  }`

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'dark')
  const location = useLocation()
  const moreRef = useRef(null)
  const moreButtonRef = useRef(null)
  const firstMoreLinkRef = useRef(null)

  const isMoreActive = morePaths.some(
    path => location.pathname === path || location.pathname.startsWith(`${path}/`),
  )

  useEffect(() => {
    setMobileOpen(false)
    setMobileMoreOpen(false)
    setMoreOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch (error) {
      // Theme changes still apply when browser storage is unavailable.
    }
    document.querySelector('meta[name=theme-color]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0a1226' : '#f5f8ff',
    )
  }, [theme])

  useEffect(() => {
    if (!moreOpen) return undefined

    const handlePointerDown = event => {
      if (!moreRef.current?.contains(event.target)) setMoreOpen(false)
    }
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setMoreOpen(false)
        moreButtonRef.current?.focus()
        return
      }

      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
      const links = Array.from(moreRef.current?.querySelectorAll('[data-more-link]') || [])
      if (links.length === 0) return

      const currentIndex = links.indexOf(document.activeElement)
      if (document.activeElement === moreButtonRef.current && event.key === 'ArrowDown') {
        event.preventDefault()
        firstMoreLinkRef.current?.focus()
      } else if (currentIndex >= 0) {
        event.preventDefault()
        const step = event.key === 'ArrowDown' ? 1 : -1
        links[(currentIndex + step + links.length) % links.length]?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [moreOpen])

  const toggleTheme = () => setTheme(current => current === 'dark' ? 'light' : 'dark')

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" aria-label="Prayash Shrestha, home" className="flex shrink-0 items-center gap-2">
          <Logo size={32}/>
          <span className="font-semibold tracking-tight">Prayash Shrestha</span>
        </Link>

        <nav aria-label="Main" className="hidden flex-1 items-center justify-end gap-1 lg:flex">
          {PRIMARY_LINKS.map(([label, path, exact]) => (
            <NavLink key={path} to={path} end={exact} className={desktopLinkClass}>
              {label}
            </NavLink>
          ))}

          <div ref={moreRef} className="relative">
            <button
              ref={moreButtonRef}
              type="button"
              aria-expanded={moreOpen}
              aria-controls="more-menu"
              onClick={() => setMoreOpen(open => !open)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors ${
                isMoreActive || moreOpen
                  ? 'bg-accent/10 font-medium text-accent'
                  : 'text-mute hover:bg-surface hover:text-ink'
              }`}
            >
              More
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`}/>
            </button>

            <div
              id="more-menu"
              aria-label="More pages"
              aria-hidden={!moreOpen}
              className={`absolute right-0 top-full z-50 mt-3 w-[min(22rem,calc(100vw-2rem))] origin-top-right rounded-2xl border border-line bg-surface p-2 shadow-2xl shadow-black/20 transition-all duration-200 ease-out ${
                moreOpen
                  ? 'visible translate-y-0 scale-100 opacity-100'
                  : 'invisible pointer-events-none -translate-y-2 scale-[0.98] opacity-0'
              }`}
            >
              {MORE_GROUPS.map(group => (
                <section key={group.label} className="py-1">
                  <h2 className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-mute">
                    {group.label}
                  </h2>
                  <div className="grid grid-cols-2 gap-1">
                    {group.links.map(([label, path], index) => (
                      <NavLink
                        key={path}
                        ref={group === MORE_GROUPS[0] && index === 0 ? firstMoreLinkRef : undefined}
                        data-more-link
                        to={path}
                        onClick={() => setMoreOpen(false)}
                        className={({isActive}) =>
                          `rounded-xl px-3 py-2.5 text-sm transition-colors ${
                            isActive
                              ? 'bg-accent/10 font-medium text-accent'
                              : 'text-mute hover:bg-bg hover:text-ink'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <NavLink
            to="/contact"
            className={({isActive}) =>
              `btn btn-primary ml-2 whitespace-nowrap px-4 py-2 ${isActive ? 'ring-2 ring-accent/30 ring-offset-2 ring-offset-bg' : ''}`
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-mute transition-colors hover:bg-surface hover:text-ink"
          >
            {theme === 'dark'
              ? <SunIcon className="h-5 w-5"/>
              : <MoonIcon className="h-5 w-5"/>}
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-mute transition-colors hover:bg-surface hover:text-ink lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(open => !open)}
          >
            {mobileOpen ? <XIcon className="h-5 w-5"/> : <MenuIcon className="h-5 w-5"/>}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-line/70 bg-bg/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl space-y-3">
            <div className="grid grid-cols-2 gap-1">
              {PRIMARY_LINKS.map(([label, path, exact]) => (
                <NavLink key={path} to={path} end={exact} className={mobileLinkClass}>
                  {label}
                </NavLink>
              ))}
            </div>

            <section className="overflow-hidden rounded-2xl border border-line">
              <button
                type="button"
                aria-expanded={mobileMoreOpen}
                aria-controls="mobile-more-links"
                onClick={() => setMobileMoreOpen(open => !open)}
                className={`flex w-full items-center justify-between px-4 py-3 text-sm font-medium transition-colors ${
                  isMoreActive ? 'text-accent' : 'text-mute hover:bg-surface hover:text-ink'
                }`}
              >
                More pages
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileMoreOpen ? 'rotate-180' : ''}`}/>
              </button>

              {mobileMoreOpen && (
                <div id="mobile-more-links" className="border-t border-line px-2 py-2">
                  {MORE_GROUPS.map(group => (
                    <section key={group.label} className="py-1">
                      <h2 className="px-3 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-mute">
                        {group.label}
                      </h2>
                      <div className="grid grid-cols-2 gap-1">
                        {group.links.map(([label, path]) => (
                          <NavLink key={path} to={path} className={mobileLinkClass}>
                            {label}
                          </NavLink>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              )}
            </section>

            <NavLink to="/contact" className="btn btn-primary flex w-full justify-center">
              Contact
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}
