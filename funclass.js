// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
// (C) 1994-2025 Rocket Software, Inc. or its affiliates.
// ROCKET SOFTWARE, INC. CONFIDENTIAL
/*Copyright (c) Microsoft Corporation */
/*Copyright (c) Microsoft Corporation */
var passangers = /** @class */ (function () {
    function passangers(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    passangers.prototype.display = function () {
        (console.log(this.fname + this.lname + this.age));
    };
    return passangers;
}());
var passanger1 = new passangers("mohammed", "aathil", 24);
console.log(passanger1);
for (var item in passanger1) {
    if (passanger1[item] instanceof Function) {
        continue;
    }
    else {
        console.log(passanger1[item]);
        console.log(item);
    }
}
