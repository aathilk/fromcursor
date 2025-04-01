// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
var greet =():string=>{
    return "hello"
}

console.log(greet());

//passing parameters

var welcome=(nu1:number,nu2:number):number=>{
    return nu1*nu2
}

console.log(welcome(0,0));

//prompt

var name1:string|null= prompt("enter the name")

var getname =(namee:string):string=>{
    return `your name is ${namee}`
}

console.log(getname(name1));

