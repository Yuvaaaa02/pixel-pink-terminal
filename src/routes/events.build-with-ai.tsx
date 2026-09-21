import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock3, MapPin, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageLayout, SectionHeading, TerminalFrame } from "@/components/site-shell";

const criteria = ["Relevance & clarity of problem statement", "Innovation & creativity", "Technical correctness & feasibility", "Quality and completeness of prototype", "Clarity of presentation & Q&A", "Scalability, impact, and future potential"];
const rules = ["Teams of 2–4 with one designated leader.", "All members must be registered students of a recognised institution.", "AI tools and open-source libraries are allowed with acknowledgement.", "Plagiarism or copying another team's work leads to disqualification.", "Time limits and organiser instructions must be followed.", "Judges' and organisers' decisions are final and binding."];

export const Route = createFileRoute("/events/build-with-ai")({
  head: () => ({ meta: [
    { title: "Build with AI Hackathon — AI Kshetra 2026" },
    { name: "description", content: "Build and pitch a practical AI prototype at AI Kshetra 2026." },
    { property: "og:title", content: "Build with AI Hackathon — AI Kshetra 2026" },
    { property: "og:description", content: "A two-round, on-campus AI prototype hackathon for student teams." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: EventPage,
});

function EventPage() {
 return <PageLayout><div className="inner-page content-shell event-page">
  <header className="page-intro event-intro"><p className="eyebrow">// EVENT_001 / AI PROTOTYPE HACKATHON</p><h1>BUILD WITH AI<span className="cursor">_</span></h1><p>&gt; Ideas become prototypes. Prototypes create impact.</p></header>
  <div className="meta-strip"><span><Trophy /> AI Prototype Hackathon</span><span><Users /> 2–4 members</span><span><MapPin /> Offline · On Campus</span></div>
  <SectionHeading kicker="01 / TIMELINE">SCHEDULE &amp; VENUE</SectionHeading>
  <div className="schedule-grid">
   <TerminalFrame title="round_01 --screening"><div className="round-number">01</div><h3>Preliminary Round · MCQ</h3><p className="schedule-time"><CalendarDays /> DEC 26 <Clock3 /> 1:30 PM–5:00 PM</p><p>15-minute objective quiz at HT-1 / HT-2 Labs, Hi-Tech Block.</p><p className="highlight">🏆 Top 15 teams shortlisted.</p></TerminalFrame>
   <TerminalFrame title="round_02 --prototype"><div className="round-number">02</div><h3>Main Round · Prototype</h3><p className="schedule-time"><CalendarDays /> DEC 27 <Clock3 /> 10:00 AM–3:00 PM</p><p>Build, demonstrate, and pitch your prototype at HT-1 / HT-2 Labs.</p></TerminalFrame>
  </div>
  <TerminalFrame title="cat event_overview.txt" className="prose-frame"><h2>About the Event</h2><p>The main objective of Build with AI is to encourage students to convert their ideas into practical AI solutions. Teams can work on domains like healthcare, education, agriculture, smart campus, automation, environment, and more.</p><p>Participants are expected to think end-to-end: from clearly defining the problem and choosing data, to model design, implementation, evaluation and a realistic demonstration of impact.</p></TerminalFrame>
  <div className="two-column event-columns">
   <TerminalFrame title="./rounds --format"><h2>Rounds &amp; Format</h2><h4>ROUND 1 — SCREENING</h4><p>20-question, time-bound MCQ quiz on AI/ML basics, Python, data handling, and logical reasoning. The top 15 teams qualify.</p><h4>ROUND 2 — PROTOTYPE &amp; PITCH</h4><p>Problem statements are revealed at the event. Build a functional demo and present the motivation, architecture, live workflow, impact, limitations, and future scope.</p></TerminalFrame>
   <TerminalFrame title="./judge --criteria"><h2>Judging Criteria</h2><ol className="numbered-list">{criteria.map((item, i) => <li key={item}><span>0{i + 1}</span>{item}</li>)}</ol></TerminalFrame>
  </div>
  <TerminalFrame title="cat rules.md"><h2>Rules &amp; Guidelines</h2><ul className="rule-list">{rules.map((rule) => <li key={rule}><span aria-hidden="true">&gt;</span>{rule}</li>)}</ul></TerminalFrame>
  <SectionHeading kicker="02 / REWARDS">PRIZES</SectionHeading>
  <div className="prize-grid">{["1ST", "2ND", "3RD"].map((place) => <div className="prize" key={place}><Trophy /><span>{place} PRIZE</span><strong>₹ ______</strong></div>)}</div>
  <div className="two-column coordinators">
   <TerminalFrame title="students --contact"><h3>Student Coordinators</h3><p>G.N.V Nihar<br /><a href="tel:+917093725382">+91 70937 25382</a></p><p>K. Joseph Prem Kumar<br /><a href="tel:+919392122287">+91 93921 22287</a></p></TerminalFrame>
   <TerminalFrame title="faculty --contact"><h3>Faculty Coordinators</h3><p>Mr. Muvva Praveen Kumar <small>Build with AI Coordinator</small></p><p>Mrs. Vasanthi Yarra</p><p>Mrs. Koppolu Sireesha</p></TerminalFrame>
  </div>
  <SectionHeading kicker="03 / ARCHIVE">EVENT GALLERY</SectionHeading>
  <div className="gallery-grid">{Array.from({ length: 6 }, (_, i) => <div className="gallery-placeholder" key={i} role="img" aria-label={`Event photo placeholder ${i + 1}`}><span>▓▓▓ PHOTO_{String(i + 1).padStart(2, "0")} ▓▓▓</span><small>[ AWAITING_UPLOAD ]</small></div>)}</div>
  <div className="bottom-cta"><p>&gt; TEAM READY. IDEAS LOADED.</p><Button asChild variant="terminal" size="lg"><Link to="/register">[ REGISTER_FOR_THIS_EVENT ] <ArrowRight /></Link></Button></div>
 </div></PageLayout>;
}
