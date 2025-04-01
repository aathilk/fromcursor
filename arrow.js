// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
var greet = function () {
    return "hello";
};
console.log(greet());
//passing parameters
var welcome = function (nu1, nu2) {
    return nu1 * nu2;
};
console.log(welcome(0, 0));
//prompt
var name1 = prompt("enter the name");
var getname = function (name1) {
    return "your name is ".concat(name1);
};
console.log(getname(name1));
