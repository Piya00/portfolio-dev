export default function Logo({size=36,draw=false}){return(
<svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="PS monogram"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#60a5fa"/><stop offset="1" stopColor="#2563eb"/></linearGradient></defs>
<rect width="64" height="64" rx="16" fill="#0a1226" stroke="#1f2f55"/>
<path d="M16 50V14h15a10 10 0 0 1 0 20H16" fill="none" stroke="url(#lg)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" style={draw?{strokeDasharray:200,animation:'logoDraw 1s ease forwards'}:{}}/>
<path d="M48 20c-3-4-14-5-14 2 0 8 14 4 14 12 0 7-12 7-16 1" fill="none" stroke="#e8efff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={draw?{strokeDasharray:200,animation:'logoDraw 1s .2s ease forwards'}:{}}/></svg>)}
