export function generateRecommendations(score:number){

let gaps:string[]=[]
let recommendations:string[]=[]

if(score <= 20){

gaps=[
"No defined AI strategy",
"Lack of AI skills",
"No data infrastructure"
]

recommendations=[
"AI Strategy Roadmap Workshop",
"Executive AI Awareness Program",
"AI Capability Building"
]

}

else if(score <= 35){

gaps=[
"Early-stage AI initiatives",
"Limited governance framework",
"No structured AI roadmap"
]

recommendations=[
"AI Strategy Development",
"AI Governance Framework",
"AI Use Case Discovery Workshop"
]

}

else if(score <= 50){

gaps=[
"Scaling AI initiatives",
"Operationalizing AI programs"
]

recommendations=[
"Enterprise AI Operating Model",
"AI Center of Excellence Setup",
"AI Portfolio Management"
]

}

else{

gaps=[
"Optimizing AI investments",
"Scaling enterprise-wide AI adoption"
]

recommendations=[
"AI Transformation Acceleration",
"Responsible AI Governance",
"Advanced AI Innovation Labs"
]

}

return {gaps,recommendations}

}