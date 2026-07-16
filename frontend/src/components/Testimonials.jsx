import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Quote } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/pagination'

const TESTIMONIALS = [
  {
    quote:
      'Our lobby used to feel like a train station. Now people check their phone, step out for coffee, and come back right on time.',
    name: 'Priya Nair',
    role: 'Clinic Manager, Sunrise Health Center',
  },
  {
    quote:
      'We cut average wait complaints to almost zero in the first month. Staff love the call-next button as much as customers love the alerts.',
    name: 'Daniel Osei',
    role: 'Branch Head, Coastal Community Bank',
  },
  {
    quote:
      'Setting up a new counter takes minutes, not IT tickets. Rolling out to five more branches was the easiest part of our year.',
    name: 'Meera Kulkarni',
    role: 'Operations Lead, Vertex Retail Group',
  },
  {
    quote:
      'The live dashboard tells us exactly when to open a second window before the line even starts forming.',
    name: 'Thomas Reyes',
    role: 'Service Desk Supervisor, Northgate DMV Office',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container-app">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-500">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-white">
            Calmer lobbies, happier teams
          </h2>
        </div>

        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={false}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {TESTIMONIALS.map(({ quote, name, role }) => (
              <SwiperSlide key={name} className="h-auto">
                <div className="flex h-full flex-col rounded-2xl glass p-7">
                  <Quote className="h-6 w-6 text-brand-500" />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700 dark:text-ink-100/80">
                    {quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-fuchsia-500 text-sm font-semibold text-white">
                      {name.split(' ').map((n) => n[0]).join('')}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink-900 dark:text-white">{name}</p>
                      <p className="text-xs text-ink-500 dark:text-ink-100/60">{role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
