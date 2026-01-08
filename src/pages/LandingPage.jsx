import React, { useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, CalendarDays, Compass, HelpCircle, LogIn, Search, Wallet, Menu, X } from "lucide-react";
import { DATA } from "../data/PMBData";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PMB UNPAS Homepage – UI component siap preview
 * - Single-file React component
 * - Tailwind-only styling
 * - Data-driven (edit copy in DATA)
 * - Mobile-first
 */

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

function A({ href, children }) {
  return (
    <a
      href={href}
      className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400"
    >
      {children}
    </a>
  );
}

function Button({ href, children, variant = "primary", rightIcon }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[0.99]";

  // const styles = {
  //   primary: "bg-neutral-900 text-white hover:bg-neutral-800",
  //   secondary: "bg-white text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50",
  //   ghost: "text-neutral-900 hover:bg-neutral-100",
  // };

  const styles = {
    primary:
      "bg-[#7F6B5D] text-white hover:bg-[#6F5C4F]",
    secondary:
      "bg-white text-[#7F6B5D] ring-1 ring-[#E6E1DE] hover:bg-[#F3F0EE]",
    ghost:
      "text-[#7F6B5D] hover:bg-[#F3F0EE]",
  };

  return (
    <A href={href}>
      <span className={cx(base, styles[variant])}>
        {children}
        {rightIcon}
      </span>
    </A>
  );
}

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cx(
        "rounded-full px-3 py-1 text-xs font-medium ring-1 transition",
        active
          ? "bg-neutral-900 text-white ring-neutral-900"
          : "bg-white text-neutral-700 ring-neutral-200 hover:bg-neutral-50"
      )}
    >
      {label}
    </button>
  );
}

function Section({ id, eyebrow, title, desc, children }) {
  return (
    <section id={id} className="py-10 sm:py-14">
      <Container>
        <div className="max-w-2xl lg:max-w-3xl">
          {eyebrow && (
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
              <BadgeCheck className="h-4 w-4" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            {title}
          </h2>
          {desc && <p className="mt-2 text-base text-neutral-600">{desc}</p>}
        </div>
        <div className="mt-6">{children}</div>
      </Container>
    </section>
  );
}

function Card({ children, className }) {
  return (
    <div
      className={cx(
        "rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200",
        className
      )}
    >
      {children}
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-200">
      <div className="text-2xl font-bold text-neutral-900">{value}</div>
      <div className="mt-1 text-xs font-medium text-neutral-600">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-neutral-200" />;
}

export default function PMBUnpasHomepagePreview() {
  const d = DATA;

  // demo finder state
  const [query, setQuery] = useState("");
  const [facultyChip, setFacultyChip] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredProdi = useMemo(() => {
    const q = query.trim().toLowerCase();
    return d.programFinder.list
      .filter((x) => (q ? x.name.toLowerCase().includes(q) || x.meta.toLowerCase().includes(q) : true))
      .filter((x) => (facultyChip ? x.meta.includes(facultyChip) : true));
  }, [query, facultyChip, d.programFinder.list]);


  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top Bar */}
      {d.topBar.show && !mobileMenuOpen ? (
        // <div className="border-b border-neutral-200 bg-white">
        <div className="border-b border-[#E6E1DE] bg-[#F3F0EE]">
          <Container>
            <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
              {/* <div className="text-sm font-medium text-neutral-800">{d.topBar.announcement}</div> */}
              <div className="text-sm font-semibold text-[#4B3F36]">{d.topBar.announcement}</div>
              <div className="flex flex-wrap gap-2">
                {d.topBar.links.map((l) => (
                  <A key={l.label} href={l.href}>
                    {/* <span className="text-xs font-semibold text-neutral-700 hover:text-neutral-900">{l.label}</span> */}
                    <span className="text-xs font-semibold text-[#7F6B5D] hover:text-[#6F5C4F]">{l.label}</span>
                  </A>
                ))}
              </div>
            </div>
          </Container>
        </div>
      ) : null}

      {/* Header */}
      {/* <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur"> */}
      <header className="sticky top-0 z-40 border-b border-[#E6E1DE] bg-white/90 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* <div className="grid h-10 w-10 place-items-center rounded-2xl bg-neutral-900 text-white"> */}
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#7F6B5D] text-white">
                <span className="text-sm font-black">U</span>
              </div>
              <div className="leading-tight">
                {/* <div className="text-sm font-extrabold">{d.header.brand}</div>
                <div className="text-xs text-neutral-600">pmb.unpas.ac.id</div> */}
                <div className="text-sm font-extrabold text-[#4B3F36]">{d.header.brand}</div>
                <div className="text-xs text-[#7F6B5D]">pmb.unpas.ac.id</div>
              </div>
            </div>

            <nav className="hidden items-center gap-5 lg:flex">
              {d.header.nav.map((n) => (
                <A key={n.label} href={n.href}>
                  {/* <span className="text-sm font-semibold text-neutral-700 hover:text-neutral-900">{n.label}</span> */}
                  <span className="text-sm font-semibold text-[#7F6B5D] hover:text-[#6F5C4F]">{n.label}</span>
                </A>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-2">
                <Button
                  href={d.header.ctas.secondary.href}
                  variant="secondary"
                  rightIcon={<LogIn className="h-4 w-4" />}
                >
                  {d.header.ctas.secondary.label}
                </Button>
                <Button
                  href={d.header.ctas.primary.href}
                  variant="primary"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {d.header.ctas.primary.label}
                </Button>
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                className="relative grid h-10 w-10 place-items-center rounded-xl ring-1 ring-[#E6E1DE] text-[#7F6B5D] hover:bg-[#F3F0EE] lg:hidden"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <X className="h-5 w-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                      animate={{ opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute"
                    >
                      <Menu className="h-5 w-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-16 z-50 border-b border-neutral-200 bg-white lg:hidden"
          >
            <Container>
              <nav className="flex flex-col gap-3 py-4">
                {d.header.nav.map((n) => (
                  <A key={n.label} href={n.href}>
                    <div
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50"
                    >
                      {n.label}
                    </div>
                  </A>
                ))}

                <div className="mt-3 grid gap-2">
                  <Button
                    href={d.header.ctas.primary.href}
                    variant="primary"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    {d.header.ctas.primary.label}
                  </Button>

                  <Button
                    href={d.header.ctas.secondary.href}
                    variant="secondary"
                    rightIcon={<LogIn className="h-4 w-4" />}
                  >
                    {d.header.ctas.secondary.label}
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#FDBF07] to-white">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F3F0EE] px-3 py-1 text-xs font-semibold text-[#7F6B5D]">
                <CalendarDays className="h-4 w-4" />
                {d.hero.kicker}
              </div>
              <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">{d.hero.headline}</h1>
              <p className="mt-3 max-w-2xl text-base text-neutral-600 sm:text-lg">{d.hero.subheadline}</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={d.hero.ctas.primary.href} variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  {d.hero.ctas.primary.label}
                </Button>
                <Button href={d.hero.ctas.secondary.href} variant="secondary" rightIcon={<Compass className="h-4 w-4" />}>
                  {d.hero.ctas.secondary.label}
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {d.hero.badges.map((b) => (
                  <span key={b} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl bg-[#1A5F5C] p-6 text-white shadow-xl">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
                {/* <img
                  src="/11.png"
                  alt="Mahasiswi UNPAS"
                  className="pointer-events-none absolute bottom-0 right-0 z-0 h-[260px] object-contain opacity-95"
                /> */}
                <motion.img
                  src="/11.png"
                  alt="Mahasiswi UNPAS"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 0.95, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                  className="pointer-events-none absolute bottom-0 right-0 z-0 h-[260px] object-contain"
                />

                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/10" />

                <div className="relative">
                  <div className="text-xs font-semibold text-white/80">Ringkas & jelas</div>
                  <div className="mt-2 text-xl font-extrabold">Mulai dari sekarang</div>
                  <p className="mt-2 text-sm text-white/80">
                    Daftar lebih awal untuk amankan benefit Gelombang 1, proses lebih cepat, dan dapat pendampingan sampai
                    registrasi.
                  </p>

                  <div className="mt-5 grid gap-3">
                    {d.quickActions.map((qa) => {
                      const Icon = qa.icon;
                      return (
                        <A key={qa.title} href={qa.href}>
                          <div className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 hover:bg-white/15">
                            <div className="flex items-center gap-3">
                              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="text-sm font-bold">{qa.title}</div>
                                <div className="text-xs text-white/75">{qa.desc}</div>
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </A>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Jalur Masuk */}
      <Section id="jalur" title={d.paths.headline} desc={d.paths.subheadline}>
        <div className="grid gap-4 lg:grid-cols-3">
          {d.paths.cards.map((c) => (
            <Card
              key={c.id}
              className={cx(
                "group flex flex-col transition-all duration-300 ease-out",
                "hover:-translate-y-1 hover:scale-[1.03] hover:shadow-lg",
                "hover:ring-2 hover:ring-[#7F6B5D]",
                c.highlight
                  ? "ring-2 ring-neutral-900 shadow-md"
                  : "ring-1 ring-neutral-200"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  {/* <div className="text-lg font-extrabold">{c.title}</div> */}
                  <div className="text-lg font-extrabold transition-colors group-hover:text-[#1A5F5C]">
                    {c.title}
                  </div>
                  <div className="mt-1 text-sm font-medium text-neutral-600">{c.subtitle}</div>
                </div>
                {c.highlight ? (
                  <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-bold text-white">Rekomendasi</span>
                ) : null}
              </div>

              <div className="mt-4">
                <div className="text-xs font-bold text-neutral-800">Cocok untuk:</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                  {c.whoFor.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <div className="text-xs font-bold text-neutral-800">Keunggulan:</div>
                <ul className="mt-2 space-y-2">
                  {c.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-neutral-700">
                      <BadgeCheck className="mt-0.5 h-4 w-4 text-neutral-900" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {c.eta ? <div className="mt-4 text-xs font-semibold text-neutral-600">{c.eta}</div> : null}

              <div className="mt-auto pt-5">
                <Button
                  href={c.cta.href}
                  variant="secondary"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {c.cta.label}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why now */}
      <Section title={d.whyNow.headline}>
        <div className="grid gap-4 lg:grid-cols-4">
          {d.whyNow.points.map((p) => (
            <Card key={p.title}>
              <div className="text-sm font-extrabold">{p.title}</div>
              {p.desc ? <div className="mt-2 text-sm text-neutral-600">{p.desc}</div> : null}
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button href={d.whyNow.cta.href} variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
            {d.whyNow.cta.label}
          </Button>
        </div>
      </Section>

      {/* Fee teaser */}
      <Section id="biaya" title={d.feeTeaser.headline} desc={d.feeTeaser.subheadline}>
        <div className="grid gap-4 lg:grid-cols-12">
          <Card className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-3">
              {d.feeTeaser.bullets.map((b) => (
                <div key={b} className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
                  <div className="text-sm font-bold">{b}</div>
                  <div className="mt-1 text-xs text-neutral-600">Cek simulasi untuk detail per prodi.</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <Button href={d.feeTeaser.primary.href} variant="primary" rightIcon={<Wallet className="h-4 w-4" />}>
                {d.feeTeaser.primary.label}
              </Button>
              <Button href={d.feeTeaser.secondary.href} variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {d.feeTeaser.secondary.label}
              </Button>
            </div>
          </Card>

          <Card className="lg:col-span-5">
            <div className="text-sm font-extrabold">Tips untuk orang tua</div>
            <p className="mt-2 text-sm text-neutral-600">
              Fokus dulu ke <b>biaya awal</b> dan <b>skema cicilan</b>. Rincian komponen bisa dilihat per fakultas/prodi.
            </p>
            <div className="mt-4 rounded-2xl bg-neutral-900 p-4 text-white">
              <div className="text-xs font-semibold text-white/80">CTA paling aman</div>
              <div className="mt-1 text-base font-extrabold">Simulasikan dulu, lalu daftar</div>
              <div className="mt-3">
                <Button href={d.feeTeaser.primary.href} variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Simulasi Sekarang
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Program finder */}
      <Section id="prodi" title={d.programFinder.headline} desc={d.programFinder.subheadline}>
        <div className="grid gap-4 lg:grid-cols-12">
          <Card className="lg:col-span-7">
            <div className="flex items-center gap-2 rounded-2xl bg-neutral-50 px-4 py-3 ring-1 ring-neutral-200">
              <Search className="h-5 w-5 text-neutral-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={d.programFinder.placeholder}
                className="w-full bg-transparent text-sm outline-none"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Chip
                label="Semua"
                active={!facultyChip}
                onClick={() => setFacultyChip("")}
              />
              {d.programFinder.chips.map((c) => (
                <Chip
                  key={c}
                  label={c}
                  active={facultyChip === c}
                  onClick={() => setFacultyChip(c)}
                />
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              {filteredProdi.slice(0, 6).map((p) => (
                <div key={p.name} className="flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
                  <div>
                    <div className="text-sm font-extrabold">{p.name}</div>
                    <div className="mt-1 text-xs text-neutral-600">{p.meta}</div>
                  </div>
                  <Button href="#/prodi/detail" variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    Lihat Prodi
                  </Button>
                </div>
              ))}

              {filteredProdi.length === 0 ? (
                <div className="rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-600 ring-1 ring-neutral-200">
                  Tidak ada hasil. Coba kata kunci lain.
                </div>
              ) : null}
            </div>

            <div className="mt-5">
              <Button href={d.programFinder.cta.href} variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {d.programFinder.cta.label}
              </Button>
            </div>
          </Card>

          <Card className="lg:col-span-5">
            <div className="text-sm font-extrabold">Biar cepat cocok</div>
            <p className="mt-2 text-sm text-neutral-600">
              Kalau sudah punya prodi incaran, lanjut ke <b>cek jalur</b> supaya tahu opsi paling cepat dan sesuai.
            </p>
            <div className="mt-4">
              <Button href="#/cek-jalur" variant="primary" rightIcon={<Compass className="h-4 w-4" />}>
                Cek Jalur yang Cocok
              </Button>
            </div>
            <div className="mt-4 rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
              <div className="text-xs font-bold text-neutral-800">Catatan</div>
              <div className="mt-1 text-sm text-neutral-600">
                Potongan jalur/gelombang berbeda dengan beasiswa. Detail ada di halaman beasiswa.
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Timeline */}
      <Section id="jadwal" title={d.timeline.headline}>
        <div className="grid gap-4 lg:grid-cols-12">
          <Card className="lg:col-span-8">
            <ol className="grid gap-3">
              {d.timeline.steps.map((s, idx) => (
                <li key={s.title} className="flex gap-3 rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
                  <div className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-neutral-900 text-white">
                    <span className="text-sm font-black">{idx + 1}</span>
                  </div>
                  <div>
                    <div className="text-sm font-extrabold">{s.title}</div>
                    {s.desc ? <div className="mt-1 text-sm text-neutral-600">{s.desc}</div> : null}
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-5">
              <Button href={d.timeline.cta.href} variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {d.timeline.cta.label}
              </Button>
            </div>
          </Card>

          <Card className="lg:col-span-4">
            <div className="text-sm font-extrabold">Checklist cepat</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4" />
                Siapkan data identitas & kontak
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4" />
                Tentukan prodi incaran
              </li>
              <li className="flex items-start gap-2">
                <BadgeCheck className="mt-0.5 h-4 w-4" />
                Siapkan dokumen pendukung (sesuai jalur)
              </li>
            </ul>
            <div className="mt-4 rounded-2xl bg-neutral-900 p-4 text-white">
              <div className="text-xs font-semibold text-white/80">Mulai dari yang paling mudah</div>
              <div className="mt-1 text-base font-extrabold">Buat akun dulu</div>
              <div className="mt-3">
                <Button href="#/daftar" variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Buat Akun
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Help */}
      <Section id="bantuan" title={d.help.headline} desc={d.help.subheadline}>
        <div className="grid gap-4 lg:grid-cols-12">
          <Card className="lg:col-span-7">
            <div className="text-xs font-bold text-neutral-800">Panduan</div>
            <div className="mt-3 grid gap-2">
              {d.help.guides.map((g) => (
                <A key={g.label} href={g.href}>
                  <div className="flex items-center justify-between rounded-2xl bg-neutral-50 px-4 py-3 ring-1 ring-neutral-200 hover:bg-white">
                    <div className="text-sm font-semibold text-neutral-800">{g.label}</div>
                    <ArrowRight className="h-4 w-4 text-neutral-600" />
                  </div>
                </A>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-5">
            <div className="text-sm font-extrabold">Customer Support</div>
            <p className="mt-2 text-sm text-neutral-600">{d.help.cs.note}</p>
            <div className="mt-4">
              <Button href={d.help.cs.href} variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {d.help.cs.label}
              </Button>
            </div>
            <div className="mt-3 text-xs font-semibold text-neutral-600">{d.help.cs.hours}</div>
          </Card>
        </div>
      </Section>

      {/* Social proof */}
      <Section title={d.socialProof.headline}>
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-2">
            {d.socialProof.stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>

          <Card className="lg:col-span-6">
            <div className="text-sm font-extrabold">Testimoni</div>
            <div className="mt-3 grid gap-3">
              {d.socialProof.testimonials.map((t) => (
                <div key={t.quote} className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
                  <div className="text-sm font-semibold text-neutral-800">“{t.quote}”</div>
                  <div className="mt-2 text-xs font-semibold text-neutral-600">
                    {t.name} • {t.meta}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button href={d.socialProof.cta.href} variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                {d.socialProof.cta.label}
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title={d.faq.headline}>
        <Card>
          <div className="grid gap-3">
            {d.faq.items.map((it, idx) => (
              <details key={it.q} className="group rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm font-extrabold">
                    <HelpCircle className="h-4 w-4" />
                    {idx + 1}. {it.q}
                  </div>
                  <span className="text-xs font-semibold text-neutral-600 group-open:hidden">Buka</span>
                  <span className="text-xs font-semibold text-neutral-600 hidden group-open:inline">Tutup</span>
                </summary>
                <div className="mt-3 text-sm text-neutral-600">{it.a}</div>
              </details>
            ))}
          </div>
          <Divider />
          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="text-sm text-neutral-600">Butuh jawaban lebih lengkap?</div>
            <Button href={d.faq.cta.href} variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
              {d.faq.cta.label}
            </Button>
          </div>
        </Card>
      </Section>

      {/* Final banner */}
      <section className="pb-14">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-neutral-900 p-8 text-white">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-black tracking-tight sm:text-3xl">{d.finalBanner.headline}</h3>
                <p className="mt-2 text-sm text-white/80 sm:text-base">{d.finalBanner.subheadline}</p>
              </div>
              <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
                <Button href={d.finalBanner.primary.href} variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  {d.finalBanner.primary.label}
                </Button>
                <Button href={d.finalBanner.secondary.href} variant="secondary" rightIcon={<Compass className="h-4 w-4" />}>
                  {d.finalBanner.secondary.label}
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-xs font-semibold text-neutral-500">© UNPAS • PMB 2026</div>
        </Container>
      </section>
    </div>
  );
}