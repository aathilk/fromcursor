// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
interface Iproduct{
    name:string;
    price:number;
    display():void
}

var product:Iproduct={
    name:"soa",
    price:45,
    display() {
        console.log(this.name)
    },
     
}

 

console.log(product);