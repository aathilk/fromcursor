// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
var vaccanies = ["j&j", "sputnik", "phizer"];
vaccanies.push("covaxin");
console.log("Array push " + vaccanies);
//for in
console.log("for in loop");
for (var item in vaccanies) {
    console.log(vaccanies[item]);
}
//destructering
var a = vaccanies[0], b = vaccanies[1], c = vaccanies[2], d = vaccanies[3];
console.log(a, ",", b, ",", c, ",", d);
