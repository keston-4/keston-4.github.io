import { useId } from 'react'

export function Section({ title, colour, icon, children }) {
  let id = useId()
  // className={`md:border-l md:${colour || 'border-zinc-100'} md:pl-6 md:dark:${colour || 'border-zinc-700'}/40`}

  return (
    <section
      aria-labelledby={id}
      className={`md:border-l md:${colour || 'border-zinc-100'} md:pl-6 md:dark:${colour || 'border-zinc-700'}/40 ${colour}`}
    >

      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <div className="flex items-start gap-4">
          <div>{icon}</div>
            <h2
              id={id}
              className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
            >
              {title}
            </h2>
        </div>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
