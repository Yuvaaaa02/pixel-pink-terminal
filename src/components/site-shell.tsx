import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const eventHref = pathname === "/" ? "#events" : "/#events";
  const linkClass = "terminal-nav-link";
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link to="/" className="brand-mark" onClick={() => setOpen(false)} aria-label="AI Kshetra home">
          <span aria-hidden="true">&gt;_</span> AI_KSHETRA
        </Link>
        <Button variant="ghost" size="icon" className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </Button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          <Link to="/" className={linkClass} activeOptions={{ exact: true }} onClick={() => setOpen(false)}>[ Home ]</Link>
          <a href={eventHref} className={linkClass} onClick={() => setOpen(false)}>[ Events ]</a>
          <Link to="/about" className={linkClass} onClick={() => setOpen(false)}>[ About ]</Link>
          <Link to="/register" className={`${linkClass} nav-register`} onClick={() => setOpen(false)}>[ Register ]</Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-shell footer-grid">
        <div className="footer-intro">
          <p className="footer-logo">AI KSHETRA<span className="cursor">_</span></p>
          <p>Empowering the next generation of tech innovators.</p>
          <p>Join us for a celebration of technology, creativity, and code.</p>
        </div>
        <div>
          <p className="footer-heading">QUICK LINKS</p>
          <Link to="/">Home</Link><br />
          <a href="/#events">Events</a><br />
          <Link to="/about">About Us</Link><br />
          <a href="#contact">Contact</a>
        </div>
        <div id="contact">
          <p className="footer-heading">CONTACT</p>
          <p><strong>Dr. M. Sridhar</strong><br />Professor &amp; Convener, AI Kshetra<br /><a href="tel:+919989784709">+91 99897 84709</a></p>
          <p><strong>G.N.V Nihar</strong><br />Coordinator, AI Kshetra<br /><a href="tel:+917093725382">+91 70937 25382</a></p>
        </div>
      </div>
      <div className="footer-terminal">$ echo "NEXAA × CSE (AI &amp; ML) × COLORIDO 2K25"</div>
    </footer>
  );
}

export function PageLayout({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main>{children}</main><SiteFooter /></>;
}

export function TerminalFrame({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`terminal-frame ${className}`}>
      <div className="terminal-frame-title"><span aria-hidden="true">$ </span>{title}</div>
      <div className="terminal-frame-body">{children}</div>
    </section>
  );
}

export function SectionHeading({ kicker, children }: { kicker: string; children: ReactNode }) {
  return <div className="section-heading"><p>{`// ${kicker}`}</p><h2>{children}<span className="cursor" aria-hidden="true">_</span></h2></div>;
}
