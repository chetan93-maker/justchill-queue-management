import { motion } from 'framer-motion'
import { Circle, PhoneCall, TrendingUp } from 'lucide-react'

const QUEUE_ROWS = [
  { ticket: 'A-039', name: 'Being served', wait: 'Counter 1', status: 'active' },
  { ticket: 'A-040', name: 'Waiting', wait: '~3 min', status: 'idle' },
  { ticket: 'A-041', name: 'Waiting', wait: '~5 min', status: 'idle' },
  { ticket: 'A-042', name: 'Waiting', wait: '~6 min', status: 'idle' },
]

function DashboardPreview() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <div className="container-app grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Staff dashboard
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
            One screen to run the whole counter
          </h2>
          <p className="mt-4 text-lg text-ink-600 dark:text-ink-100/70 max-w-md">
            Call the next customer, glance at wait times, and spot bottlenecks
            before they build up — all from a single, calm dashboard.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              'Call, skip, or recall any ticket in one tap',
              'See average wait time update as you serve',
              'Flag priority customers without leaving the queue',
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-ink-600 dark:text-ink-100/70">
                <Circle className="mt-1 h-2 w-2 shrink-0 fill-brand-500 text-brand-500" />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative"
        >
          <div className="rounded-2xl glass shadow-2xl shadow-brand-900/10 overflow-hidden">
            {/* browser chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink-900/5 dark:border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs text-ink-400">app.justchill.io/queue</span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-ink-900 dark:text-white">
                  Counter 3 · Live queue
                </h3>
                <span className="flex items-center gap-1 text-xs font-medium text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  4 waiting
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {QUEUE_ROWS.map((row) => (
                  <div
                    key={row.ticket}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                      row.status === 'active'
                        ? 'bg-gradient-to-r from-brand-500/10 to-fuchsia-500/10 border border-brand-500/20'
                        : 'bg-ink-900/5 dark:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-semibold text-ink-900 dark:text-white">
                        {row.ticket}
                      </span>
                      <span className="text-xs text-ink-500 dark:text-ink-100/60">
                        {row.name}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-ink-600 dark:text-ink-100/70">
                      {row.wait}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-fuchsia-500 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25"
              >
                <PhoneCall className="h-4 w-4" />
                Call next ticket
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="animate-float-slow absolute -left-6 -bottom-6 rounded-xl glass px-4 py-3 shadow-lg hidden sm:flex items-center gap-2"
          >
            <TrendingUp className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-medium text-ink-700 dark:text-ink-100">
              Wait time down 22% today
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default DashboardPreview
