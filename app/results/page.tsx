"use client";

import { useEffect, useState } from "react";

export default function Results() {

const [score,setScore] = useState<number | null>(null);
const [level,setLevel] = useState<string>("");

useEffect(()=>{

const stored = localStorage.getItem("answers");

if(!stored) return;

const answers:number[] = JSON.parse(stored);

const total = answers.reduce((a,b)=>a+b,0);

let maturity = "";

if(total <= 20) maturity = "AI Explorer";
else if(total <= 35) maturity = "AI Emerging";
else if(total <= 50) maturity = "AI Advancing";
else maturity = "AI Leader";

setScore(total);
setLevel(maturity);

},[]);

return(

<div style={{padding:"40px",maxWidth:"800px",margin:"auto",fontFamily:"Arial"}}>

<h1>Your AI Readiness Score</h1>

<h2>{score} / 60</h2>

<h3>{level}</h3>

<p>
Enter your email to receive your detailed AI readiness report.
</p>

<input
placeholder="Work Email"
style={{padding:"10px",width:"300px"}}
/>

<br/><br/>

<button
style={{
padding:"12px 20px",
fontSize:"16px",
cursor:"pointer"
}}
>
Get Full Report
</button>

</div>

);

}