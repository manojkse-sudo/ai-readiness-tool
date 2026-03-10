"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Assessment() {

const router = useRouter();

const questions: string[] = [
"Does your organization have a clearly defined AI strategy aligned with business goals?",
"How actively is senior leadership sponsoring AI initiatives?",
"How well has your organization identified potential AI use cases?",
"Have you launched AI pilots or proof-of-concepts?",
"How accessible is your organizational data for AI?",
"How mature are your data governance practices?",
"Does your organization have responsible AI policies?",
"How prepared are you to manage AI risks?",
"Do you have internal AI expertise?",
"How well do business and technology teams collaborate on AI?",
"How committed is your organization to investing in AI?",
"How open is your organization’s culture to AI-driven change?"
];

const [answers,setAnswers] = useState<number[]>(Array(12).fill(0));

function updateAnswer(index:number,value:number){

const updated = [...answers];
updated[index] = value;

setAnswers(updated);

}

function submit(){

localStorage.setItem("answers",JSON.stringify(answers));

router.push("/results");

}

return(

//<div style={{padding:"40px",maxWidth:"800px",margin:"auto",fontFamily:"Arial"}}>

<div style={{maxWidth:"900px",
margin:"40px auto",
background:"white",
padding:"40px",
borderRadius:"10px",
boxShadow:"0 10px 25px rgba(0,0,0,0.1)"}}>

<h1>AI Readiness Assessment</h1>

<p>Please rate each statement from 1 (Low) to 5 (High)</p>

{questions.map((q,i)=>(

<div key={i} style={{marginBottom:"25px"}}>

<p><b>{i+1}. {q}</b></p>

{[1,2,3,4,5].map(v=>(
<label key={v} style={{marginRight:"15px"}}>
<input
type="radio"
name={`q${i}`}
value={v}
onChange={()=>updateAnswer(i,v)}
/> {v}
</label>
))}

</div>



))}

<button
onClick={submit}
style={{
padding:"12px 20px",
fontSize:"16px",
marginTop:"20px",
cursor:"pointer"
}}
>

Submit Assessment

</button>

</div>

);

}