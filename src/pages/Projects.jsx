import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { useState } from 'react'

export default function Projects() {
  const [c, setC] = useState('All')
  const cats = ['All', ...new Set(projects.map((p) => p.category))]
  const list = c === 'All' ? projects : projects.filter((p) => p.category === c)

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-bold">Projects</h1>
      <div className="mt-6 flex flex-wrap gap-2">
        {cats.map((x) => (
          <button
            key={x}
            onClick={() => setC(x)}
            className={`rounded-full px-4 py-2 text-sm ${c === x ? 'bg-accent text-white' : 'border border-line text-mute'}`}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <div key={p.slug} className="card flex flex-col overflow-hidden">
            <Link to={'/projects/' + p.slug} className="aspect-video overflow-hidden bg-surface">
              <img
                src={import.meta.env.BASE_URL + p.image.replace(/^\//, '')}
                alt={`${p.name} project screenshot`}
                className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
              />
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs text-mute">{p.category} · {p.status}</span>
              <h2 className="mt-2 text-xl font-semibold">{p.name}</h2>
              <p className="text-sm text-accent">{p.subtitle}</p>
              <p className="mt-3 flex-1 text-sm text-mute">{p.summary}</p>
              <div className="mt-4 flex gap-3 text-sm">
                <Link to={'/projects/' + p.slug} className="font-semibold text-accent">Details</Link>
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-mute hover:text-ink">GitHub</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-mute hover:text-ink">Live</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}