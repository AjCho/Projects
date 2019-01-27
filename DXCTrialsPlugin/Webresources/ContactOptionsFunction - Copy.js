//#region // For Gender //
var dxcts_gender = "gendercode";
var iBoy = "inptBoy";
var iGirl = "inptGirl";
var boy = "boy";
var girl = "girl";
var imgBoy = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactGenderMale-No";
var imgSlctdBoy = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactGenderMale-Yes";
var imgGirl = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactGenderFemale-No";
var imgSlctdGirl = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactGenderFemale-Yes";
function ChangeGenderImageOnSelect(gender) {
    if (gender == boy) {
        BoySelected();
    }
    else if (gender == girl) {
        GirlSelected();
    }
}
function BoySelected() {
    document.getElementById(iBoy).src = imgSlctdBoy;
    document.getElementById(iGirl).src = imgGirl;
    window.parent.Xrm.Page.getAttribute(dxcts_gender).setValue(1);
    //formContext.getAttribute("gendercode").setValue(1);
}
function GirlSelected() {
    document.getElementById(iBoy).src = imgBoy;
    document.getElementById(iGirl).src = imgSlctdGirl;
    //formContext.getAttribute("gendercode").setValue(2);
    window.parent.Xrm.Page.getAttribute(dxcts_gender).setValue(2);
}
//#endregion

//#region // For Civil Status //
var dxc_civilstatus = "familystatuscode";
var iSingle = "inptSingle";
var iMarried = "inptMarried";
var single = "single";
var married = "married";
var imgSingle = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactCivilStatusSingle-No";
var imgSingle = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactCivilStatusSingle-No";
var imgSlctdSingle = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactCivilStatusSingle-Yes";
var imgMarried = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactCivilStatusMarried-No";
var imgSlctdMarried = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactCivilStatusMarried-Yes";
function ChangeCivilStatImageOnSelect(civil) {
    if (civil == single) {
        SingleSelected();
    }
    else if (civil == married) {
        MarriedSelected();
    }
}
function SingleSelected() {
    document.getElementById(iSingle).src = imgSlctdSingle;
    document.getElementById(iMarried).src = imgMarried;
    window.parent.Xrm.Page.getAttribute(dxc_civilstatus).setValue(1);
}
function MarriedSelected() {
    document.getElementById(iSingle).src = imgSingle;
    document.getElementById(iMarried).src = imgSlctdMarried;
    window.parent.Xrm.Page.getAttribute(dxc_civilstatus).setValue(2);
}
//#endregion

//#region // Surfer //
var dxc_surfer = "dxc_surfer";
var iSurfer = "inptSurfer";
var iNotSurfer = "inptNotSurfer"
var surfer = "surfer";
var notSurfer = "not surfer";
function ChangeSurferOnSelect(surf) {
    // Note: Since this is a single toggle, when the value is yes then we tick it,
    // the passing value should be false, and vice versa.
    if (surf == surfer) {
        ToggleSwitchONOff(iNotSurfer, iSurfer);

    }
    else if (surf == notSurfer) {
        ToggleSwitchONOff(iSurfer, iNotSurfer);

    }
}
//#endregion

//#region // Hiker //
var dxc_hiker = "dxc_hiker";
var iHiker = "inptHiker";
var iNotHiker = "inptNotHiker"
var hiker = "hiker";
var notHiker = "not hiker";
function ChangeHikerOnSelect(hike) {
    // Note: Since this is a single toggle, when the value is yes then we tick it,
    // the passing value should be false, and vice versa.
    if (hike == hiker) {
        ToggleSwitchONOff(iNotHiker, iHiker);

    }
    else if (hike == notHiker) {
        ToggleSwitchONOff(iHiker, iNotHiker);

    }
}
//#endregion

//#region // Senior Citizen //
var dxc_seniorCitizen = "dxc_seniorcitizen";
var iSenior = "inptSeniorCitizen";
var iNotSenior = "inptNotSeniorCitizen"
var senior = "senior citizen";
var notSenior = "not senior citizen";
function ChangeSeniorCitizenOnSelect(isSenior) {
    // Note: Since this is a single toggle, when the value is yes then we tick it,
    // the passing value should be false, and vice versa.
    if (isSenior == senior) {
        ToggleSwitchONOff(iNotSenior, iSenior);

    }
    else if (isSenior == notSenior) {
        ToggleSwitchONOff(iSenior, iNotSenior);

    }
}

//#endregion


//#region // Age Group //
var dxc_agegroup = "dxc_agegroup";

var iAge18to25 = "inptAge18to25Yes";
var iNotAge18to25 = "inptAge18to25No";
var iAge26to40 = "inptAge26to40Yes";
var iNotAge26to40 = "inptAge26to40No";
var iAge41to65 = "inptAge41to65Yes";
var iNotAge41to65 = "inptAge41to65No";
var iAge65Plus = "inptAge65andUpYes";
var iNotAge65Plus = "inptAge65andUpNo";

var age18to25 = "age 18 to 25";
var age26to40 = "age 26 to 40";
var age41to65 = "age 41 to 65";
var age65plus = "age 65 and up";
var ageNot18to25 = "not Age 18 to 25";
var ageNot26to40 = "not age 26 to 40";
var ageNot41to65 = "not age 41 to 65";
var ageNot65plus = "not age 65 and up";

var imgAge18to25 = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactAgeGroup18-25-No";
var imgSlctdAge18to25 = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactAgeGroup18-25-Yes";

var imgAge26to40 = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactAgeGroup26-40-No";
var imgSlctdAge26to40 = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactAgeGroup26-40-Yes";

var imgAge41to65 = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactAgeGroup41-65-No";
var imgSlctdAge41to65 = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactAgeGroup41-65-Yes";

var imgAge65Plus = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactAgeGroup65Plus-No";
var imgSlctdAge65Plus = "https://dxctrialsubscription.crm5.dynamics.com//WebResources/dxc_ContactAgeGroup65Plus-Yes";

function ChangeAgeGroupImageOnSelect(ages) {
    if (ages == ageNot18to25) // age 18 - 25, Value = 1
    {
        Age18to25_Selected();
    } else if (ages == ageNot26to40) // age 26 - 40, Value = 2
    {
        Age26to40_Selected();
    } else if (ages == ageNot41to65) // age 41 - 65, Value = 3
    {
        Age41to65_Selected();
    } else if (ages == ageNot65plus) // age 65 ++, Value = 4
    {
        Age65Plus_Selected();
    } else {
        TickOffALLAgeGroup();
    }
}
function Age18to25_Selected() {
    TickAge18to25();
    window.parent.Xrm.Page.getAttribute(dxc_agegroup).setValue(1);
    //formContext.getAttribute("dxc_agegroup").setValue(1);
}
function Age26to40_Selected() {
    TickAge26to40();
    window.parent.Xrm.Page.getAttribute(dxc_agegroup).setValue(2);
    //formContext.getAttribute("dxc_agegroup").setValue(2);
}
function Age41to65_Selected() {
    TickAge41to65();
    window.parent.Xrm.Page.getAttribute(dxc_agegroup).setValue(3);
    //formContext.getAttribute("dxc_agegroup").setValue(3);
}
function Age65Plus_Selected() {
    TickAge65Plus();
    window.parent.Xrm.Page.getAttribute(dxc_agegroup).setValue(4);
    //formContext.getAttribute("dxc_agegroup").setValue(4);
}
//#endregion

//#region // VIP //
var dxc_vip = "dxc_vip";
var iVIP = "inptVIPYes";
var iNotVIP = "inptVIPNo"
var VIP = "vip";
var notVIP = "not vip";
function ChangeVIPOnSelect(isVIP) {
    // Note: Since this is a single toggle, when the value is yes then we tick it,
    // the passing value should be false, and vice versa.
    if (isVIP == VIP) {
        ToggleSwitchONOff(iNotVIP, iVIP);
        window.parent.Xrm.Page.getAttribute(dxc_vip).setValue(2);
    }
    else if (isVIP == notVIP) {
        ToggleSwitchONOff(iVIP, iNotVIP);
        window.parent.Xrm.Page.getAttribute(dxc_vip).setValue(1);

    }
}
//#endregion

//#region // Upsell //
var dxc_upsell = "dxc_upsell";
var iUpsell = "inptUpsellYes";
var iNotUpsell = "inptUpsellNo"
var upsell = "upsell";
var notUpsell = "not upsell";
function ChangeUpsellOnSelect(upsells) {
    // Note: Since this is a single toggle, when the value is yes then we tick it,
    // the passing value should be false, and vice versa.
    if (upsells == upsell) {
        ToggleSwitchONOff(iNotUpsell, iUpsell);
        window.parent.Xrm.Page.getAttribute(dxc_upsell).setValue(2);
    }
    else if (upsells == notUpsell) {
        ToggleSwitchONOff(iUpsell, iNotUpsell);
        window.parent.Xrm.Page.getAttribute(dxc_upsell).setValue(1);

    }
}
//#endregion

//#region // For Discount //
var dxc_discount = "dxc_discount";
var iDiscounted = "inptDiscounted";
var iNotDiscounted = "inptNotDiscounted"
var discounted = "discounted";
var notDiscounted = "not discounted";
function ChangeDiscountedOnSelect(discount) {
    // Note: Since this is a single toggle, when the value is yes then we tick it,
    // the passing value should be false, and vice versa.
    if (discount == discounted) {
        ToggleSwitchONOff(iNotDiscounted, iDiscounted);
        window.parent.Xrm.Page.getAttribute(dxc_discount).setValue(2);
    }
    else if (discount == notDiscounted) {
        ToggleSwitchONOff(iDiscounted, iNotDiscounted);
        window.parent.Xrm.Page.getAttribute(dxc_discount).setValue(1);

    }
}
//#endregion

//#region // Onload of function //
function Onloader() {
    OnloadGender();
    OnloadCivilStat();
    OnloadSurfer();
    OnloadHiker();
    OnloadSeniorCitizen()
    // Next Line
    OnloadAgeGroup();
    OnloadVIP();
    OnloadUpsell();
    OnloadDiscount();

}

function OnloadGender() {
    var dxcts_genders = window.parent.Xrm.Page.getAttribute(dxcts_gender).getValue();
    // For Gender
    if (dxcts_genders == 1) {
        BoySelected();
    } else if (dxcts_genders == 2) {
        GirlSelected();
    }
}
function OnloadCivilStat() {
    var dxc_civilstatuses = window.parent.Xrm.Page.getAttribute(dxc_civilstatus).getValue();
    // For Civil Status
    if (dxc_civilstatuses == 1) {
        SingleSelected();
    } else if (dxc_civilstatuses == 2) {
        MarriedSelected();
    }
}
function OnloadSurfer() {
    // For Surfer
    try {
        var dxc_surfers = window.parent.Xrm.Page.getAttribute(dxc_surfer).getValue();
        if (dxc_surfers == 1) {
            ToggleSwitchONOff(iSurfer, iNotSurfer);
        } else {
            ToggleSwitchONOff(iNotSurfer, iSurfer);
        }
    } catch (err) {
        console.log("error = " + err);
        // Default toggle off
        ToggleSwitchONOff(iNotSurfer, iSurfer);
    }
}
function OnloadHiker() {
    try {
        var dxc_hikers = window.parent.Xrm.Page.getAttribute(dxc_hiker).getValue();
        // For Hiker
        if (dxc_hikers == 1) {
            ToggleSwitchONOff(iHiker, iNotHiker);
        } else {
            ToggleSwitchONOff(iNotHiker, iHiker);
        }
    } catch (err) {
        console.log("error = " + err);
        // Default toggle off
        ToggleSwitchONOff(iNotHiker, iHiker);
    }
}
function OnloadSeniorCitizen() {
    // For Senior Citizen
    try {
        var dxc_seniorCitizens = window.parent.Xrm.Page.getAttribute(dxc_seniorCitizen).getValue();
        if (dxc_seniorCitizens == 1) {
            ToggleSwitchONOff(iSenior, iNotSenior);
        } else {
            ToggleSwitchONOff(iNotSenior, iSenior);
        }
    } catch (err) {
        console.log("error = " + err);
        // Default toggle off
        ToggleSwitchONOff(iNotSenior, iSenior);
    }
}

function OnloadAgeGroup() {
    try {
        var dxc_agegroups = window.parent.Xrm.Page.getAttribute(dxc_agegroup).getValue();
        // For Discount
        if (dxc_agegroups == 1) {
            // age 18 - 25, Value = 1
            TickAge18to25();
        } else if (dxc_agegroups == 2) {
            // age 26 - 40, Value = 2
            TickAge26to40();
        } else if (dxc_agegroups == 3) {
            // age 41 - 65, Value = 3
            TickAge41to65();
        } else if (dxc_agegroups == 4) {
            // age 65 ++, Value = 4
            TickAge65Plus();
        } else {
            // Default toggle off
            TickOffALLAgeGroup();
        }
    } catch (err) {
        console.log("error = " + err);
        // Default toggle off
        TickOffALLAgeGroup();
    }
}
function OnloadVIP() {
    try {
        var dxc_vips = window.parent.Xrm.Page.getAttribute(dxc_vip).getValue();
        // For Discount
        if (dxc_vips == 1) {
            ToggleSwitchONOff(iVIP, iNotVIP);
        } else {
            ToggleSwitchONOff(iNotVIP, iVIP);
        }
    } catch (err) {
        console.log("error = " + err);
        // Default toggle off
        ToggleSwitchONOff(iNotVIP, iVIP);
    }
}
function OnloadUpsell() {
    try {
        var dxc_upsells = window.parent.Xrm.Page.getAttribute(dxc_upsell).getValue();
        // For Discount
        if (dxc_upsells == 1) {
            ToggleSwitchONOff(iUpsell, iNotUpsell);
        } else {
            ToggleSwitchONOff(iNotUpsell, iUpsell);
        }
    } catch (err) {
        console.log("error = " + err);
        // Default toggle off
        ToggleSwitchONOff(iNotUpsell, iUpsell);
    }
}
function OnloadDiscount() {
    try {
        var dxc_discounts = window.parent.Xrm.Page.getAttribute(dxc_discount).getValue();
        // For Discount
        if (dxc_discounts == 1) {
            ToggleSwitchONOff(iDiscounted, iNotDiscounted);
        } else {
            ToggleSwitchONOff(iNotDiscounted, iDiscounted);
        }
    } catch (err) {
        console.log("error = " + err);
        // Default toggle off
        ToggleSwitchONOff(iNotDiscounted, iDiscounted);
    }
}
//#endregion

//#region // Helper //
function ToggleSwitchONOff(elemnOn, elemOff) {
    var On = document.getElementById(elemnOn);
    var Off = document.getElementById(elemOff);
    if (On != null && Off != null) {
        //On.style.display = null; // This will display the element.
        On.removeAttribute("style");
        Off.style.display = "none"; // Display None: it hides the control. by setting the property of element style="display:none" element will not rendered in webpage and not take place
    }
}

function TickAge18to25() {
    // age 18 - 25, Value = 1
    ToggleSwitchONOff(iAge18to25, iNotAge18to25);
    ToggleSwitchONOff(iNotAge26to40, iAge26to40);
    ToggleSwitchONOff(iNotAge41to65, iAge41to65);
    ToggleSwitchONOff(iNotAge65Plus, iAge65Plus);
}
function TickAge26to40() {
    // age 26 - 40, Value = 2
    ToggleSwitchONOff(iNotAge18to25, iAge18to25);
    ToggleSwitchONOff(iAge26to40, iNotAge26to40);
    ToggleSwitchONOff(iNotAge41to65, iAge41to65);
    ToggleSwitchONOff(iNotAge65Plus, iAge65Plus);
}
function TickAge41to65() {
    // age 41 - 65, Value = 3
    ToggleSwitchONOff(iNotAge18to25, iAge18to25);
    ToggleSwitchONOff(iNotAge26to40, iAge26to40);
    ToggleSwitchONOff(iAge41to65, iNotAge41to65);
    ToggleSwitchONOff(iNotAge65Plus, iAge65Plus);
}
function TickAge65Plus() {
    // age 65 ++, Value = 4
    ToggleSwitchONOff(iNotAge18to25, iAge18to25);
    ToggleSwitchONOff(iNotAge26to40, iAge26to40);
    ToggleSwitchONOff(iNotAge41to65, iAge41to65);
    ToggleSwitchONOff(iAge65Plus, iNotAge65Plus);
}
function TickOffALLAgeGroup() {
    // ALL Age group was tick off
    ToggleSwitchONOff(iNotAge18to25, iAge18to25);
    ToggleSwitchONOff(iNotAge26to40, iAge26to40);
    ToggleSwitchONOff(iNotAge41to65, iAge41to65);
    ToggleSwitchONOff(iNotAge65Plus, iAge65Plus);
}
//#endregion
