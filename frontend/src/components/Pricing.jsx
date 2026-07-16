import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    tagline: 'For a single counter or desk',
    monthly: 0,
    yearly: 0,
    features: [
      'Up to 50 tickets / month',
      '1 counter',
      'SMS notifications',
      'Basic analytics',
    ],
  },
  {
    name: 'Growth',
    tagline: 'For growing teams with multiple counters',
    monthly: 29,
    yearly: 24,
    highlighted: true,
    features: [
      'Unlimited tickets',
      'Up to 5 counters',
      'SMS + WhatsApp notifications',
      'Advanced analytics & exports',
      'Priority customer flagging',
    ],
  },
  {
    name: 'Enterprise',
    tagline: 'For multi-branch operations',
    monthly: null,
    yearly: null,
    features: [
      'Unlimited counters & branches',
      'Custom integrations & SSO',
      'Dedicated onboarding',
      'SLA-backed support',
    ],
  },
]

function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="container-app">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
            Simple pricing that scales with your lobby
          </h2>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full glass p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !yearly ? 'bg-gradient-to-r from-brand-500 to-fuchsia-500 text-white' : 'text-ink-600 dark:text-ink-100/70'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                yearly ? 'bg-gradient-to-r from-brand-500 to-fuchsia-500 text-white' : 'text-ink-600 dark:text-ink-100/70'
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs opacity-80">Save 18%</span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map(({ name, tagline, monthly, yearly: yearlyPrice, features, highlighted }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 ${
                highlighted
                  ? 'bg-gradient-to-br from-brand-600 via-brand-500 to-fuchsia-500 text-white shadow-2xl shadow-brand-500/30 lg:-my-4 lg:py-12'
                  : 'glass text-ink-900 dark:text-white'
              }`}
            >
              {highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-600 shadow">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold">{name}</h3>
              <p className={`mt-1 text-sm ${highlighted ? 'text-white/80' : 'text-ink-500 dark:text-ink-100/60'}`}>
                {tagline}
              </p>

              <div className="mt-6">
                {monthly === null ? (
                  <span className="text-3xl font-semibold">Let's talk</span>
                ) : (
                  <>
                    <span className="text-4xl font-semibold font-mono">
                      ${yearly ? yearlyPrice : monthly}
                    </span>
                    <span className={`text-sm ${highlighted ? 'text-white/70' : 'text-ink-400'}`}>
                      {' '}/ month
                    </span>
                  </>
                )}
              </div>

              <ul className="mt-7 space-y-3 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? 'text-white' : 'text-brand-500'}`} />
                    <span className={highlighted ? 'text-white/90' : 'text-ink-600 dark:text-ink-100/70'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#newsletter"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                  highlighted
                    ? 'bg-white text-brand-600 hover:bg-white/90'
                    : 'bg-ink-900 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-white/90'
                }`}
              >
                {monthly === null ? 'Contact sales' : 'Get started'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
