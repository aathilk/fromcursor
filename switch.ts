// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
const num:number = 2;
switch(num){
    case 1:
    var data:any = prompt("enter your age");
    console.log(data);
    break;

    case 2:
        var x:number = 6
        if(x===5){
            var a:number=10;
            var b:number=10
            console.log(a+b);
        }else{
            var student ={
                name:"aathil",
                age:22
            };
            for(var item in student){
                console.log(item);
               console.log(student[item]);
            }
        }
        break;
    case 3:
        console.log("three")
        break;
    default:
        console.log("enter valid num")


}