const svg = (d, p) => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>{d}</svg>

export const GitHub = p => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>

export const LinkedIn = p => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.54h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.58V21h-4z"/></svg>

export const Instagram = p => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>

export const Mail = p => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>

// Navigation icons
export const ChevronDown = p => svg(<polyline points="6 9 12 15 18 9"/>, p)
export const MenuIcon = p => svg(<><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></>, p)
export const XIcon = p => svg(<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>, p)
export const SunIcon = p => svg(<><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></>, p)
export const MoonIcon = p => svg(<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>, p)

// Dropdown category icons
export const TechStackIcon = p => svg(<><polygon points="12 2 2 7 12 12 22 7 12 2"/><line x1="2" y1="7" x2="22" y2="7"/><path d="M2 12l10 10 10-10"/></>, p)
export const EducationIcon = p => svg(<><path d="M22 10v6M22 10l-5-5-5 5M22 10l-3-3"/><path d="M4 8a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4"/></>, p)
export const ExperienceIcon = p => svg(<><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><line x1="16" y1="21" x2="16" y2="23"/><line x1="8" y1="21" x2="8" y2="23"/><line x1="3" y1="11" x2="21" y2="11"/><line x1="12" y1="7" x2="12" y2="11"/></>, p)
export const ServicesIcon = p => svg(<><circle cx="12" cy="12" r="3"/><path d="M19.4 15A1.65 1.65 0 0 0 20 15.5A1.65 1.65 0 0 0 19.4 16A1.65 1.65 0 0 0 18.5 15.5A1.65 1.65 0 0 0 19.4 15ZM18 12A1.65 1.65 0 0 0 19 13.5A1.65 1.65 0 0 0 18 15A1.65 1.65 0 0 0 17 13.5A1.65 1.65 0 0 0 18 12ZM13.5 19.5A1.65 1.65 0 0 0 13 18.5A1.65 1.65 0 0 0 12.5 18A1.65 1.65 0 0 0 12 17.5A1.65 1.65 0 0 0 11.5 18A1.65 1.65 0 0 0 11 18.5A1.65 1.65 0 0 0 10.5 19A1.65 1.65 0 0 0 11.5 20A1.65 1.65 0 0 0 13.5 19.5ZM4.6 15A1.65 1.65 0 0 0 5.5 15.5A1.65 1.65 0 0 0 4.6 16A1.65 1.65 0 0 0 3.5 15.5A1.65 1.65 0 0 0 4.6 15ZM18.4 9.5A1.65 1.65 0 0 0 17.5 10.5A1.65 1.65 0 0 0 18.4 11.5A1.65 1.65 0 0 0 19.5 10.5A1.65 1.65 0 0 0 18.4 9.5ZM8.5 8A1.65 1.65 0 0 0 9.5 9A1.65 1.65 0 0 0 8.5 10A1.65 1.65 0 0 0 7.5 9A1.65 1.65 0 0 0 8.5 8ZM15 4.5A1.65 1.65 0 0 0 14 5.5A1.65 1.65 0 0 0 15 6.5A1.65 1.65 0 0 0 16 5.5A1.65 1.65 0 0 0 15 4.5ZM5.5 16.5A1.65 1.65 0 0 0 6.5 15.5A1.65 1.65 0 0 0 5.5 14.5A1.65 1.65 0 0 0 4.5 15.5A1.65 1.65 0 0 0 5.5 16.5Z"/></>, p)
export const JourneyIcon = p => svg(<><path d="M5 19L9 12l4 7"/><circle cx="12" cy="5" r="2"/></>, p)
export const WorkspaceIcon = p => svg(<><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="21"/></>, p)
export const BlogIcon = p => svg(<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="16" y2="13"/><line x1="18" y1="13" x2="18" y2="13"/><line x1="20" y1="13" x2="20" y2="13"/></>, p)
export const FaqIcon = p => svg(<><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></>, p)
