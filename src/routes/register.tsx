import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, Terminal, Users } from "lucide-react";
import { useMemo, useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageLayout } from "@/components/site-shell";

const memberSchema = z.object({
  participantId: z.string().trim().min(1, "Participant ID is required").max(30),
  regno: z.string().trim().min(2, "Registration number is required").max(40),
  name: z.string().trim().min(2, "Enter a full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().regex(/^\d{10}$/, "Enter a 10-digit phone number"),
  gender: z.enum(["Male", "Female", "Other"], { message: "Select a gender" }),
});
type Member = z.infer<typeof memberSchema>;
type Field = keyof Member;
const emptyMember = (index: number): Member => ({ participantId: `AIK26-P${String(index + 1).padStart(2, "0")}`, regno: "", name: "", email: "", phone: "", gender: "" as Member["gender"] });
const fields: { key: Exclude<Field, "gender">; label: string; type: string; placeholder: string }[] = [
 { key: "participantId", label: "Participant ID", type: "text", placeholder: "AIK26-P01" }, { key: "regno", label: "Registration Number", type: "text", placeholder: "Enter regno" }, { key: "name", label: "Full Name", type: "text", placeholder: "Enter full name" }, { key: "email", label: "Email", type: "email", placeholder: "name@example.com" }, { key: "phone", label: "Phone Number", type: "tel", placeholder: "10-digit number" },
];

export const Route = createFileRoute("/register")({
 head: () => ({ meta: [
  { title: "Register — AI Kshetra 2026" }, { name: "description", content: "Register a team of two to four students for Build with AI at AI Kshetra 2026." },
  { property: "og:title", content: "Register for AI Kshetra 2026" }, { property: "og:description", content: "Create your team registration for the Build with AI hackathon." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
 ]}), component: RegisterPage,
});

function RegisterPage() {
 const [members, setMembers] = useState<Member[]>([emptyMember(0), emptyMember(1)]);
 const [errors, setErrors] = useState<Record<string, string>>({});
 const [teamId, setTeamId] = useState("");
 const validation = useMemo(() => z.array(memberSchema).min(2).max(4).safeParse(members), [members]);
 const update = (index: number, field: Field, value: string) => {
  setMembers((current) => current.map((member, i) => i === index ? { ...member, [field]: field === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value } : member));
  setErrors((current) => { const next = { ...current }; delete next[`${index}.${field}`]; return next; });
 };
 const submit = (event: FormEvent) => {
  event.preventDefault(); const result = z.array(memberSchema).min(2).max(4).safeParse(members);
  if (!result.success) { const next: Record<string, string> = {}; result.error.issues.forEach((issue) => { next[issue.path.join(".")] = issue.message; }); setErrors(next); setTeamId(""); return; }
  const code = `AIK26-${Math.random().toString(36).slice(2, 7).toUpperCase()}`; setTeamId(code); setErrors({}); window.scrollTo({ top: 0, behavior: "smooth" });
 };
 if (teamId) return <PageLayout><div className="inner-page content-shell success-page"><div className="success-terminal"><Terminal /><p>[ REGISTRATION_SUCCESSFUL ]</p><h1>Team ID: #{teamId}</h1><p>Your local registration check is complete. Save this ID for reference.</p><Button variant="terminalOutline" onClick={() => setTeamId("")}>[ REGISTER_ANOTHER_TEAM ]</Button></div></div></PageLayout>;
 return <PageLayout><div className="inner-page content-shell register-page">
  <header className="page-intro"><p className="eyebrow">// EVENT_001 / TEAM INTAKE</p><h1>REGISTRATION FORM<span className="cursor">_</span></h1><p>&gt; Build your team. Minimum 2, maximum 4 members.</p></header>
  <div className="registration-status"><Users /><span>TEAM_SIZE</span><strong>{members.length} / 4</strong><div className="member-dots">{[0,1,2,3].map((i) => <i className={i < members.length ? "active" : ""} key={i} />)}</div></div>
  <form onSubmit={submit} noValidate>
   <div className="member-stack">{members.map((member, index) => <section className="member-block" key={index}>
    <div className="member-heading"><div><span>MEMBER_{String(index + 1).padStart(2, "0")}</span><h2>{index === 0 ? "Team Leader" : "Team Member"}</h2></div>{members.length > 2 && index > 0 && <Button type="button" variant="terminalOutline" size="sm" onClick={() => setMembers((current) => current.filter((_, i) => i !== index))}><Minus /> REMOVE</Button>}</div>
    <div className="form-grid">{fields.map((field) => <label key={field.key}><span>{field.label} *</span><Input type={field.type} value={member[field.key]} maxLength={field.key === "email" ? 255 : field.key === "name" ? 100 : 40} onChange={(e) => update(index, field.key, e.target.value)} aria-invalid={Boolean(errors[`${index}.${field.key}`])} placeholder={field.placeholder} />{errors[`${index}.${field.key}`] && <small role="alert">{errors[`${index}.${field.key}`]}</small>}</label>)}
     <label><span>Gender *</span><select value={member.gender} onChange={(e) => update(index, "gender", e.target.value)} aria-invalid={Boolean(errors[`${index}.gender`])}><option value="">Select gender</option><option>Male</option><option>Female</option><option>Other</option></select>{errors[`${index}.gender`] && <small role="alert">{errors[`${index}.gender`]}</small>}</label>
    </div>
   </section>)}</div>
   <div className="form-actions">{members.length < 4 && <Button type="button" variant="terminalOutline" onClick={() => setMembers((current) => [...current, emptyMember(current.length)])}><Plus /> ADD_MEMBER</Button>}<Button type="submit" variant="terminal" size="lg" disabled={!validation.success}>[ SUBMIT_REGISTRATION ]</Button></div>
   <p className="form-note">// Registration is currently a local preview. No participant data is transmitted or stored.</p>
  </form>
 </div></PageLayout>;
}
