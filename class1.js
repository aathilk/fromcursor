// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
var _a;
var passanger2 = /** @class */ (function () {
    function passanger2(Firstname, Lastname, flyerno) {
        this.Fname = Firstname;
        this.Lname = Lastname;
        this.flyerno = flyerno;
    }
    return passanger2;
}());
// if(typeof(passanger)==undefined){
//     console.log("passanger is undefined")   
// }
var passanger7 = new passanger2("Mohammed", "aathil");
console.log({
    Fname: passanger7.Fname,
    Lname: passanger7.Lname,
    flyerno: (_a = passanger7.flyerno) !== null && _a !== void 0 ? _a : "N/A" // Display "N/A" if flyerno is undefined
});
