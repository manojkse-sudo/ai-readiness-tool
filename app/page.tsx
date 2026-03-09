import Link from "next/link";

export default function Home() {
  return (
    <div style={{fontFamily:"Arial",padding:"40px",maxWidth:"800px",margin:"auto"}}>
      <h1>AI Readiness Assessment</h1>

      <p>
        Assess your organization's readiness for AI transformation in just 3 minutes.
      </p>

      <p>
        Identify strategic gaps across AI strategy, data, governance, and skills.
      </p>

      <Link href="/assessment">
        <button style={{padding:"12px 20px",fontSize:"16px"}}>
          Start Assessment
        </button>
      </Link>
    </div>
  );
}