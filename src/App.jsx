export default function UnderConstructionPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex items-center justify-center px-4 sm:px-6 py-6 sm:py-10">
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-12rem] left-[-10rem] w-[24rem] sm:w-[34rem] h-[24rem] sm:h-[34rem] rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute bottom-[-14rem] right-[-8rem] w-[26rem] sm:w-[36rem] h-[26rem] sm:h-[36rem] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      <div className="relative z-10 w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_0_80px_rgba(255,255,255,0.04)]">

          {/* Top Border Accent */}
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="p-5 sm:p-8 md:p-12 lg:p-14">
            <div className="flex flex-col gap-10 sm:gap-14">

              {/* Brand */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                  <div className="relative flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-white/15 bg-white/[0.03] shadow-inner">
                    <span className="text-lg sm:text-xl font-semibold tracking-[0.2em] ml-1">
                      LT
                    </span>

                    <div className="absolute inset-0 rounded-2xl bg-white/[0.02]" />
                  </div>

                  <div className="min-w-0">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.12em] sm:tracking-[0.2em] truncate">
                      Liege Technologies
                    </h1>

                    <p className="text-white/45 text-[10px] sm:text-sm tracking-[0.18em] sm:tracking-[0.35em] uppercase mt-1">
                      Building Something Exceptional
                    </p>
                  </div>
                </div>

                {/* Status Pill */}
                <div className="flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs sm:text-sm text-white/65">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  Live Development
                </div>
              </div>

              {/* Hero */}
              <div className="space-y-5 sm:space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl xl:text-[5.5rem] leading-[0.95] font-semibold tracking-tight max-w-4xl">
                  Website Under
                  <br />
                  Construction
                </h2>

                <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                  We’re crafting a modern digital experience focused on design,
                  performance, and intelligent solutions. The full experience is
                  launching soon.
                </p>
              </div>

              {/* Status Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/35 mb-4 sm:mb-5">
                    Status
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                    <p className="text-lg sm:text-xl font-medium">
                      Actively Developing
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/35 mb-4 sm:mb-5">
                    Focus
                  </p>

                  <p className="text-lg sm:text-xl font-medium leading-snug text-white/90">
                    AI • Design • Engineering
                  </p>
                </div>

                <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 transition-all duration-300 hover:bg-white/[0.05] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/35 mb-4 sm:mb-5">
                    Launch
                  </p>

                  <p className="text-lg sm:text-xl font-medium text-white/90">
                    Coming Soon
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between pt-5 border-t border-white/10">
                <a
                  href="mailto:hello@liege.solutions"
                  className="group inline-flex w-full sm:w-fit items-center justify-center gap-3 rounded-2xl bg-white px-6 sm:px-8 py-4 text-black text-sm sm:text-base font-medium transition-all duration-300 hover:scale-[1.02]"
                >
                  Contact Us

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <div className="text-xs sm:text-sm text-white/30 tracking-wide text-center md:text-right">
                  © 2026 LIEGE. All rights reserved.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}