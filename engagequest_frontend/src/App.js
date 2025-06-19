import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";

// ---- Theming Colors ----
const COLORS = {
  primary: "#000000",
  secondary: "#ff0000",
  accent: "#d49d25",
  background: "#fff",
  text: "#000"
};

// ---- Navigation Menu ----
const features = [
  { path: "/challenges", name: "Offline Challenges" },
  { path: "/location-checkin", name: "Location Check-in" },
  { path: "/voice-notes", name: "Voice Notes" },
  { path: "/friend-verification", name: "Friend Verification" },
  { path: "/ai-prompts", name: "AI Reflection Prompts" },
  { path: "/rewards", name: "Rewards" },
  { path: "/moment-lock", name: "Moment Lock" },
  { path: "/challenge-management", name: "Challenge Management" },
  { path: "/profile", name: "User Profile" },
  { path: "/location-verification", name: "Location Verification" },
  { path: "/voice-note-handling", name: "Voice Note Handling" },
  { path: "/badge-system", name: "Badge System" },
];

// ---- Layout Helpers ----
function MainLayout({ children }) {
  return (
    <div className="app" style={{ minHeight: "100vh", background: COLORS.background, color: COLORS.text }}>
      <nav
        className="navbar"
        style={{
          background: COLORS.primary,
          color: COLORS.accent,
          borderBottom: `2px solid ${COLORS.accent}`
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div className="logo" style={{ color: COLORS.accent, fontWeight: 700, fontSize: "1.25rem" }}>
            <span style={{ color: COLORS.secondary, fontWeight: 900 }}>◎</span> EngageQuest
          </div>
          <NavLinks />
        </div>
      </nav>
      <main style={{ marginTop: 80, flex: 1 }}>
        <div className="container">{children}</div>
      </main>
    </div>
  );
}

function NavLinks() {
  return (
    <ul style={{ display: "flex", listStyle: "none", gap: 16, margin: 0, padding: 0 }}>
      {features.slice(0, 7).map((f) => (
        <li key={f.path}>
          <Link
            to={f.path}
            style={{
              textDecoration: "none",
              color: COLORS.text,
              background: COLORS.accent,
              padding: "8px 16px",
              borderRadius: 6,
              fontWeight: 500,
              fontSize: "0.98rem"
            }}
          >
            {f.name}
          </Link>
        </li>
      ))}
      <li>
        <div style={{ color: COLORS.secondary, fontWeight: "bold", padding: "0 10px" }}>|</div>
      </li>
      {features.slice(7).map((f) => (
        <li key={f.path}>
          <Link
            to={f.path}
            style={{
              textDecoration: "none",
              color: COLORS.secondary,
              background: "#faf7ee",
              border: `1px solid ${COLORS.secondary}`,
              padding: "8px 14px",
              borderRadius: 6,
              fontWeight: 500,
              fontSize: "0.95rem"
            }}
          >
            {f.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// ---- Feature Pages (minimal functional stubs) ----

// PUBLIC_INTERFACE
function ChallengesPage() {
  /** Displays Offline Challenges */
  return (
    <PageShell title="Offline Challenges" color={COLORS.primary}>
      <p>View and participate in daily and weekly quests to engage offline.</p>
      <ul>
        <li>Challenge 1: Walk in the park</li>
        <li>Challenge 2: Read a book offline</li>
        <li>Challenge 3: Help a friend</li>
      </ul>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function LocationCheckinPage() {
  /** Displays Location Check-in functionality */
  return (
    <PageShell title="Location Check-in" color={COLORS.secondary}>
      <p>Check in to a real-world location to complete quests.</p>
      <button style={btnStyle(COLORS.secondary)}>Check-in Now</button>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function VoiceNotesPage() {
  /** Voice Notes Recording page */
  return (
    <PageShell title="Voice Notes Recording" color={COLORS.accent}>
      <p>Record and submit a voice note as proof of your quest completion.</p>
      <button style={btnStyle(COLORS.accent)}>Record Voice Note</button>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function FriendVerificationPage() {
  /** Friend Verification feature page */
  return (
    <PageShell title="Friend Verification" color={COLORS.secondary}>
      <p>Let a friend confirm your participation in a challenge.</p>
      <button style={btnStyle(COLORS.secondary)}>Send Verification Request</button>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function AIReflectionPromptsPage() {
  /** Displays AI Reflection Prompts */
  return (
    <PageShell title="AI Reflection Prompts" color={COLORS.accent}>
      <p>Reflect on your activity with these AI-generated questions.</p>
      <blockquote style={{ fontStyle: "italic", background: "#fffbe8", borderLeft: `4px solid ${COLORS.accent}`, padding: "10px 20px", marginTop: 16 }}>
        "What was the most meaningful moment of this challenge for you?"
      </blockquote>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function RewardsPage() {
  /** Reward System Display page */
  return (
    <PageShell title="Reward System" color={COLORS.primary}>
      <p>See your progress, badges earned, and forest growth!</p>
      <div style={{ display: "flex", gap: 24, margin: "24px 0" }}>
        <StatCard label="Points" value={1240} color={COLORS.primary} />
        <StatCard label="Badges" value={5} color={COLORS.accent} />
        <StatCard label="Forest Level" value="Sprout" color={COLORS.secondary} />
      </div>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function MomentLockPage() {
  /** Moment Lock Feature: silence notifications */
  return (
    <PageShell title="Moment Lock" color={COLORS.primary}>
      <p>Stay focused during your challenge! Moment Lock will keep distractions away.</p>
      <button style={btnStyle(COLORS.primary)}>Enable Moment Lock</button>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function ChallengeManagementPage() {
  /** Challenge CRUD UI */
  return (
    <PageShell title="Challenge Management" color={COLORS.secondary}>
      <p>Create, update, and manage your challenges here.</p>
      <button style={btnStyle(COLORS.secondary)}>Create New Challenge</button>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function UserProfilePage() {
  /** User Profile Management */
  return (
    <PageShell title="User Profile" color={COLORS.primary}>
      <p>View and edit your profile, track your progress, and manage verification status.</p>
      <button style={btnStyle(COLORS.accent)}>Edit Profile</button>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function LocationVerificationPage() {
  /** Location Verification Page */
  return (
    <PageShell title="Location Verification" color={COLORS.secondary}>
      <p>Verify your location check-ins and add a witness.</p>
      <button style={btnStyle(COLORS.secondary)}>Verify Location</button>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function VoiceNoteHandlingPage() {
  /** Handle storing and retrieving voice notes */
  return (
    <PageShell title="Voice Note Handling" color={COLORS.accent}>
      <p>Access and manage your previously submitted voice notes as proof.</p>
      <button style={btnStyle(COLORS.accent)}>My Voice Notes</button>
    </PageShell>
  );
}

// PUBLIC_INTERFACE
function BadgeSystemPage() {
  /** Reward & Badge System management */
  return (
    <PageShell title="Badge System" color={COLORS.secondary}>
      <p>Track your badges and achievements as you progress!</p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Badge label="Explorer" color={COLORS.secondary} />
        <Badge label="Collaborator" color={COLORS.accent} />
        <Badge label="Forest Guardian" color={COLORS.primary} />
      </div>
    </PageShell>
  );
}

// ---- Reusable UI Components ----

function PageShell({ title, color, children }) {
  return (
    <section style={{ background: "#f9f9f9", borderRadius: 12, boxShadow: "0 1px 6px 0 rgba(0,0,0,0.07)", padding: 36, marginTop: 28 }}>
      <h2 style={{ color, marginTop: 0 }}>{title}</h2>
      {children}
    </section>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        boxShadow: `0 1px 5px 0 rgba(0,0,0,0.09)`,
        padding: "16px 28px",
        minWidth: 120,
        textAlign: "center",
        borderTop: `3px solid ${color}`,
      }}
    >
      <div style={{ fontSize: 28, fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: 16, color: "#666" }}>{label}</div>
    </div>
  );
}

function Badge({ label, color }) {
  return (
    <span
      style={{
        background: color,
        color: "#fff",
        padding: "8px 16px",
        fontWeight: 500,
        borderRadius: 20,
        marginRight: 7,
        fontSize: "1.02rem",
        letterSpacing: 0.5
      }}
    >
      {label}
    </span>
  );
}

function btnStyle(bg) {
  return {
    background: bg,
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "10px 22px",
    fontWeight: 500,
    fontSize: "1.08rem",
    marginTop: 16,
    cursor: "pointer",
    outline: "none"
  };
}

// ---- App Routing ----

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Navigate to="/challenges" replace />} />
          <Route path="/challenges" element={<ChallengesPage />} />
          <Route path="/location-checkin" element={<LocationCheckinPage />} />
          <Route path="/voice-notes" element={<VoiceNotesPage />} />
          <Route path="/friend-verification" element={<FriendVerificationPage />} />
          <Route path="/ai-prompts" element={<AIReflectionPromptsPage />} />
          <Route path="/rewards" element={<RewardsPage />} />
          <Route path="/moment-lock" element={<MomentLockPage />} />
          <Route path="/challenge-management" element={<ChallengeManagementPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/location-verification" element={<LocationVerificationPage />} />
          <Route path="/voice-note-handling" element={<VoiceNoteHandlingPage />} />
          <Route path="/badge-system" element={<BadgeSystemPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

// PUBLIC_INTERFACE
function NotFoundPage() {
  /** 404 fallback */
  return (
    <PageShell title="Page Not Found" color={COLORS.secondary}>
      <p>The page you are looking for does not exist.</p>
      <Link to="/challenges" style={btnStyle(COLORS.accent)}>
        Go to Home
      </Link>
    </PageShell>
  );
}

export default App;
