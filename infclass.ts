// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
interface Iflight{
    from:string;
    to:string;
    
}

class flight implements Iflight{
    from: string;
    to: string;

    constructor(from:string,to:string){
        this.from=from;
        this.to=to;
    }
}
var flight1=new flight("au","us")
console.log(flight1)