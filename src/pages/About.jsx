import {Link} from 'react-router-dom';import {profile} from '../data/profile.js';import {techStack} from '../data/skills.js'
export default function About(){return(<section className="mx-auto max-w-7xl px-4 py-16">
<h1 className="text-4xl font-bold">About Me</h1>
<p className="mt-4 max-w-3xl text-lg text-mute">{profile.intro}</p>
<div className="mt-10 grid gap-6 md:grid-cols-2">
<div className="card p-6"><h2 className="text-xl font-semibold">Background</h2><p className="mt-3 text-mute">I'm {profile.name}, an {profile.title} based in {profile.location}. I'm passionate about turning ideas into useful technology through web development and AI.</p></div>
<div className="card p-6"><h2 className="text-xl font-semibold">Career Goals</h2><p className="mt-3 text-mute">Open to {profile.openTo.join(', ')}. I aim to grow as a software engineer and contribute to meaningful projects.</p></div>
<div className="card p-6"><h2 className="text-xl font-semibold">Interests</h2><p className="mt-3 text-mute">Web development, AI integration, problem solving, and continuous learning.</p></div>
<div className="card p-6"><h2 className="text-xl font-semibold">Tech I Use</h2><div className="mt-3 flex flex-wrap gap-2">{techStack.slice(0,8).map(t=><span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{t}</span>)}</div></div>
</div>
<div className="mt-8"><Link to="/contact" className="btn btn-primary">Get in Touch</Link></div>
</section>)}