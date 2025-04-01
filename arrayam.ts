// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
var vaccanies:any=["j&j","sputnik","phizer"];
vaccanies.push("covaxin");
console.log("Array push "+ vaccanies)

//for in
console.log("for in loop")
for(var item in vaccanies){
    console.log(vaccanies[item])
}

//destructering

var [a, b, c, d] = vaccanies;
console.log(a,",",b,",",c,",",d)