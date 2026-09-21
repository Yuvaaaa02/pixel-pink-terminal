import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BusFront, CalendarDays, Clock3, MapPin, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CampusVisual } from "@/components/campus-visual";
import { PageLayout, SectionHeading, TerminalFrame } from "@/components/site-shell";

const BANNER = ` █████╗ ██╗    ██╗  ██╗███████╗██╗  ██╗███████╗████████╗██████╗  █████╗
██╔══██╗██║    ██║ ██╔╝██╔════╝██║  ██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗
███████║██║    █████╔╝ ███████╗███████║█████╗     ██║   ██████╔╝███████║
██╔══██║██║    ██╔═██╗ ╚════██║██╔══██║██╔══╝     ██║   ██╔══██╗██╔══██║
██║  ██║██║    ██║  ██╗███████║██║  ██║███████╗   ██║   ██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝    ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
                          2 0 2 6`;

const contacts = {
  transport: [
    ["Dr. K. Praveen Kumar", "9849652027"], ["Dr. Md. Hashher Sk.", "9642135090"], ["Sri. N. Dharani Kumar", "9618923836"],
  ],
  stay: [
    ["Mr. B. Sriram", "9059999801"], ["Mr. G. Ravi", "9440722191"], ["Mr. Sk. Mohammad Rasool", "9493775374"],
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "AI Kshetra 2026 — NEXAA" },
    { name: "description", content: "Join AI Kshetra 2026 for AI challenges, collaboration, and technology at R.V.R. & J.C. College of Engineering." },
    { property: "og:title", content: "AI Kshetra 2026 — NEXAA" },
    { property: "og:description", content: "A celebration of technology, creativity, and code." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomePage,
});

function HomePage() {
  return <PageLayout>
    <section className="hero" id="home">
      <div className="scan-sweep" aria-hidden="true" />
      <div className="content-shell hero-inner">
        <div className="hero-copy">
          <div className="presenter-tag" aria-hidden="true">┌── &gt;_ NEXAA PRESENTS ──┐</div>
          <h1 className="sr-only">AI Kshetra 2026</h1>
          <pre className="ascii-banner" aria-hidden="true">{BANNER}</pre>
          <div className="mobile-banner" aria-hidden="true">AI<br />KSHETRA<span>2026</span></div>
          <p className="hero-prompt type-line">&gt; Empowering the next generation of tech innovators.<span className="cursor">▮</span></p>
          <p className="hero-tagline">Join us for a celebration of technology, creativity, and code.</p>
          <div className="hero-actions">
            <Button asChild variant="terminal" size="lg"><Link to="/register">[ REGISTER_NOW ]</Link></Button>
            <Button asChild variant="terminalOutline" size="lg"><a href="#events">[ VIEW_EVENTS ]</a></Button>
          </div>
          <div className="hero-meta"><span><CalendarDays /> DEC 26–27</span><span><MapPin /> RVR&amp;JC CAMPUS</span></div>
        </div>
        <CampusVisual />
      </div>
    </section>

    <section className="page-section" id="events">
      <div className="content-shell">
        <SectionHeading kicker="01 / PROGRAM">UPCOMING EVENTS</SectionHeading>
        <article className="event-card">
          <div className="event-index">EVENT_001</div>
          <div><p className="eyebrow">AI PROTOTYPE HACKATHON</p><h3>Build with AI</h3><p>Turn a real-world challenge into a working AI prototype, then pitch its impact.</p>
            <div className="event-facts"><span><CalendarDays /> Dec 26–27</span><span><Clock3 /> 2 rounds</span><span><MapPin /> HT-1 / HT-2</span></div>
          </div>
          <Button asChild variant="terminalOutline"><Link to="/events/build-with-ai">VIEW DETAILS <ArrowRight /></Link></Button>
        </article>
      </div>
    </section>

    <div className="circuit-divider" aria-hidden="true">──●───┬───●───┬───●──[ AI ]──●───┬───●───┬───●──</div>

    <section className="page-section hospitality">
      <div className="content-shell">
        <SectionHeading kicker="02 / SUPPORT">HOSPITALITY &amp; TRANSPORT</SectionHeading>
        <div className="two-column">
          <TerminalFrame title="./transport --route">
            <div className="panel-icon"><BusFront /></div><h3>Transportation</h3>
            <p>Buses will be arranged from nearby towns so participants can reach R.V.R. &amp; J.C. College of Engineering comfortably.</p>
            <dl className="data-list"><div><dt>Bus Availability</dt><dd>Guntur &amp; Chilakaluripeta</dd></div><div><dt>Timings</dt><dd>7:00 AM &amp; 9:00 AM</dd></div></dl>
            <h4>Staff Coordinators</h4>
            <ContactList entries={contacts.transport} />
            <Button variant="terminalOutline" disabled title="Route information will be added soon">[ VIEW_ROUTE_INFO ]</Button>
          </TerminalFrame>
          <TerminalFrame title="./accommodation --check-in">
            <div className="panel-icon"><UtensilsCrossed /></div><h3>Accommodation</h3>
            <p>Comfortable stays, curated meals, and a helpdesk for students travelling from more than 50 km away.</p>
            <div className="stay-grid"><div><h4>For Girls · Guntur</h4><p>Dr. N.C. Kotaiah<br />Convener, Girls Hostel<br /><a href="tel:9490776067">94907 76067</a></p></div><div><h4>For Boys · Campus</h4><p>Dr. B. Vara Prasada Rao<br />Convener, Boys Hostel<br /><a href="tel:9849717299">98497 17299</a></p></div></div>
            <h4>Staff Coordinators</h4><ContactList entries={contacts.stay} />
          </TerminalFrame>
        </div>
      </div>
    </section>
  </PageLayout>;
}

function ContactList({ entries }: { entries: string[][] }) {
  return <ul className="contact-list">{entries.map(([name, phone]) => <li key={phone}><span>{name}</span><a href={`tel:${phone}`}>{phone?.replace(/(\d{5})(\d{5})/, "$1 $2")}</a></li>)}</ul>;
}
