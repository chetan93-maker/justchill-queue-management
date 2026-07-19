import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronLeft, Eye, EyeOff, Lock, Mail } from 'lucide-react'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#04050f] text-white">
      <div className="container-app flex min-h-screen items-center justify-center py-10">
        <div className="w-full overflow-hidden rounded-[2rem] bg-[#060916] shadow-[0_60px_140px_rgba(0,0,0,0.55)]">
          <div className="grid min-h-[720px] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative overflow-hidden border-r border-white/5 bg-[#090c16] px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-16">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.18),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_28%)]" />
              <div className="absolute inset-x-0 bottom-0 mx-auto h-80 w-[92%] rounded-[2.75rem] bg-[#111827]/40 blur-3xl" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl w-fit">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-fuchsia-500 text-white shadow-lg shadow-brand-500/20">
                      JC
                    </span>
                    <span className="font-semibold tracking-tight">JustChill</span>
                  </div>

                  <div className="mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1325]/80 p-6 shadow-[0_35px_90px_rgba(15,23,42,0.35)] sm:max-w-none">
                    <div className="relative aspect-[1/0.66] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-slate-900 to-[#211a3a]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),transparent_40%)]" />
                      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[#8b5cf6]/30 blur-3xl" />
                      <div className="absolute right-8 bottom-10 h-20 w-20 rounded-full bg-[#ec4899]/30 blur-3xl" />
                      <div className="absolute inset-x-0 top-12 mx-auto h-44 w-4/5 rounded-[2.25rem] bg-[#f3f4ff]/10 shadow-[inset_0_0_90px_rgba(255,255,255,0.08)]" />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                      Master your operations with intelligent flow.
                    </h1>
                    <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                      Join thousands of service leaders optimizing customer wait times with JustChill's predictive analytics.
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { title: 'Real-time Analytics', description: 'Track queue performance live' },
                    { title: 'Predictive Insights', description: 'Stay ahead of demand' },
                  ].map((item) => (
                    <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.3)]">
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-2 text-sm text-white/60">{item.description}</p>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-white/40">© 2026 JustChill Operations Inc. All rights reserved.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
              <div className="relative z-10 w-full max-w-md">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Back to home
                  </Link>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[0.35em] text-white/60">
                    Login
                  </span>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-[#0f1222] p-6 shadow-[0_40px_70px_rgba(0,0,0,0.3)] sm:p-8">
                  <div className="space-y-3 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-300">Welcome back</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Welcome back</h2>
                    <p className="text-sm leading-6 text-white/70">Enter your credentials to access your workspace.</p>
                  </div>

                  <form className="mt-8 space-y-6">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-white/80">Email Address</label>
                      <div className="relative rounded-[1.5rem] border border-white/20 bg-[#060812] px-4 py-3">
                        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                        <input
                          type="email"
                          placeholder="name@company.com"
                          className="w-full bg-transparent pl-11 text-sm text-white placeholder:text-white/40 outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm font-medium text-white/80">
                        <span>Password</span>
                        <a href="#" className="text-sm text-brand-300 transition hover:text-brand-200">
                          Forgot password?
                        </a>
                      </div>
                      <div className="relative rounded-[1.5rem] border border-white/20 bg-[#060812] px-4 py-3">
                        <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          className="w-full bg-transparent pl-11 pr-11 text-sm text-white placeholder:text-white/40 outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((current) => !current)}
                          className="absolute right-4 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/5 text-white/60 transition hover:bg-white/10 hover:text-white"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <label className="inline-flex items-center gap-3 text-sm text-white/70">
                      <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-[#060812] accent-brand-500" />
                      Keep me signed in for 30 days
                    </label>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-[1.5rem] bg-gradient-to-r from-brand-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:brightness-110"
                    >
                      Sign In
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <div className="relative py-4">
                      <div className="absolute inset-x-0 top-1/2 border-t border-white/10" />
                      <p className="relative mx-auto w-fit bg-[#060712] px-4 text-center text-[11px] uppercase tracking-[0.35em] text-white/60">
                        or continue with
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-[1.5rem] border border-white/10 bg-[#060812] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70">
                          <Mail className="h-4 w-4" />
                        </span>
                        Google
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-[1.5rem] border border-white/10 bg-[#060812] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70">
                          <Check className="h-4 w-4" />
                        </span>
                        GitHub
                      </button>
                    </div>
                  </form>
                </div>

                <p className="text-center text-sm text-white/60">
                  Don&apos;t have an account?{' '}
                  <Link to="/register" className="font-semibold text-brand-300 transition hover:text-brand-200">
                    Get started for free
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
