export default function Education() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Education</h1>
      <h2 className="mt-8 text-2xl font-semibold">Academic Background</h2>
      <div className="mt-6 space-y-6">
        <article className="card p-6">
          <h3 className="text-xl font-semibold">
            Bachelor of Computer Information Systems and Technology (BCSIT)
          </h3>
          <p className="mt-2 text-mute">Pokhara University, Nepal</p>
          <p className="mt-1 text-sm text-accent">Currently pursuing - 5th Semester</p>
        </article>
        <article className="card p-6">
          <h3 className="text-xl font-semibold">
            Higher Secondary Education (+2) - Computer Science
          </h3>
          <p className="mt-2 text-mute">NIST College, Nepal</p>
          <p className="mt-1 text-sm text-accent">GPA: 3.22</p>
        </article>
      </div>
    </section>
  )
}