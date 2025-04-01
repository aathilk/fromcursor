// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
interface Iadd{
    (x:number,y:number):number
}

interface Isub{
    (x:number,y:number):number
}

var add:Iadd
var sub:Isub

add=function(x:number,y:number):number{
    return x+y
}

sub=(x:number,y:number):number=>{
    return x*y
}

console.log(add(2,3));
console.log(add(3,4))