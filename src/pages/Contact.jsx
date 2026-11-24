import {useState} from 'react'

const formspreeEndpoint = 'https://formspree.io/f/xoedykqe'

export default function Contact() {
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const submit = async event => {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {Accept: 'application/json'},
        body: new FormData(event.currentTarget),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => null)
        const message = result?.errors?.map(item => item.message).join(' ')
        throw new Error(message || 'Unable to send your message. Please try again.')
      }

      setForm({name: '', email: '', message: ''})
      setShowSuccess(true)
    } catch (submissionError) {
      setError(submissionError instanceof Error
        ? submissionError.message
        : 'Unable to send your message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <input
            required
            name="name"
            value={form.name}
            onChange={event => setForm({...form, name: event.target.value})}
            placeholder="Name"
            className="w-full rounded-lg border border-line bg-surface px-4 py-2"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={event => setForm({...form, email: event.target.value})}
            placeholder="Email"
            className="w-full rounded-lg border border-line bg-surface px-4 py-2"
          />
          <textarea
            required
            name="message"
            value={form.message}
            onChange={event => setForm({...form, message: event.target.value})}
            placeholder="Message"
            rows={5}
            className="w-full rounded-lg border border-line bg-surface px-4 py-2"
          />
          {error && <p role="alert" className="text-sm text-red-500">{error}</p>}
          <button type="submit" disabled={submitting} className="btn btn-primary disabled:opacity-60">
            {submitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </section>

      {showSuccess && (
        <div
          className="fixed inset-0 z-[300] grid place-items-center bg-black/60 px-4"
          onClick={() => setShowSuccess(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            className="card w-full max-w-md p-8 text-center shadow-xl"
            onClick={event => event.stopPropagation()}
          >
            <h2 id="contact-success-title" className="text-2xl font-semibold text-accent">
              Thank you!
            </h2>
            <p className="mt-2 text-mute">Your message has been sent successfully. I'll get back to you soon.</p>
            <button onClick={() => setShowSuccess(false)} className="btn btn-primary mt-6">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
