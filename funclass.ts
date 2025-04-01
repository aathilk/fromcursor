// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
class passangers{
    fname:string;
    lname:string;
    age:number;

    constructor(fname:string,lname:string,age:number){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }

    display(){
        (console.log(this.fname+this.lname+this.age));
    }
}

var passanger1=new passangers("mohammed","aathil",24);
console.log(passanger1)

for(let item in passanger1){
    
    if(passanger1[item] instanceof Function){
        continue;
    }else{
        console.log(passanger1[item])
        console.log(item)
    }
}

