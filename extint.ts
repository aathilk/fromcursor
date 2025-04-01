// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
interface hardware{
    specs:string;
    battery:string;
    weight:number|String;
}

interface software{
    ui:string;
    os:string;
    version:number;
}

interface mobile extends hardware,software{
    name:string;
    release_date:number;
}

var mymobile:mobile={
    specs:"good",
    battery:"500mah",
    weight:"30kd",
    ui:"mi os",
    version:3.4,
    name:"oneplus",
    release_date:2034,  
    os:"ui",
}
console.log(mymobile);

interface flight{
    from:string;
    to:string;
}
var flight1:flight={
    from:"delhi",
    to:"mumbai"
}
console.log(flight1);