import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'Do my customers need to download an app?',
    a: 'No. Customers join a queue by scanning a QR code or opening a link in their browser. Everything works from a mobile web page, so there\'s nothing to install.',
  },
  {
    q: 'Can I run multiple counters or branches at once?',
    a: 'Yes. The Growth plan supports up to 5 counters, and Enterprise supports unlimited counters across as many branches as you need, each with its own queue and staff logins.',
  },
  {
    q: 'What happens if a customer misses their turn?',
    a: 'Staff can recall a ticket, push it back a few spots, or mark it as a no-show directly from the dashboard, and the customer is notified either way.',
  },
  {
    q: 'How do notifications reach customers?',
    a: 'By SMS on the Starter plan, and by SMS or WhatsApp on Growth and Enterprise. You can customize the message and timing for each queue.',
  },
  {
    q: 'Is there a contract or can I cancel anytime?',
    a: 'All plans are month-to-month with no lock-in. Yearly billing is available for a discount, and you can switch or cancel from your account at any time.',
  },
]

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl glass overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm sm:text-base font-medium text-ink-900 dark:text-white">
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink-900/5 dark:bg-white/10 text-ink-700 dark:text-ink-100"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-ink-600 dark:text-ink-100/70">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container-app max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.q}
              {...faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
