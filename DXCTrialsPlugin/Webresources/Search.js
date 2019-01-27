function setRatingFilter(executionContext) {
    var formContext = executionContext.getFormContext(); // get the form context
    var ratingSubGrid = formContext.getControl("Credit_Performance"); //Sub-grid is on the Form

    ratingSubGrid.addPreSearch(filterRatings(executionContext));
}

function filterRatings(executionContext) {
    var formContext = executionContext.getFormContext();
    var ratingSubGrid = formContext.getControl("Credit_Performance"); //Sub-grid is on the Form
    var ratingName = formContext.getAttribute("dxcts_searchratingname").getValue();

    var ratingsFilter = '   <filter type="and"> '
        + '       <condition attribute="dxcts_work" operator="eq" uiname="AU client for Customization" uitype="dxcts_work" value="{A2EE1E83-DCEE-E811-A98A-000D3AA2C0C7}" /> '
        + '       <condition attribute="dxcts_accountscreditperformanceid" operator="eq" uiname="Adventure Works" uitype="account" value="{A8A19CDD-88DF-E311-B8E5-6C3BE5A8B200}" /> '
        + '       <condition attribute="statuscode" operator="eq" value="1" /> '
        + '       <condition attribute="dxcts_name" operator="like" value="%' + ratingName + '%" />'
        + '   </filter> ';
    ratingSubGrid.addCustomFilter(ratingsFilter, "dxcts_creditperformance");
}

function FetchViaName(executionContext) {
    var formContext = executionContext.getFormContext();
    var globalContext = Xrm.Utility.getGlobalContext();
    var version = globalContext.getVersion();
    var ratingName = formContext.getAttribute("dxcts_searchratingname").getValue();
    var ratingSubGrid = formContext.getControl("Credit_Performance"); //Sub-grid is on the Form
    //var ratingSubGrid = window.parent.document.getElementById("Credit_Performance");
    console.log("subgrid name = ", ratingSubGrid);
    var fetchXmlQuery = '<fetch version="1.0" output-format="xml - platform" mapping="logical" distinct="false"> '
        + '<entity name = "dxcts_creditperformance" > '
        + '<attribute name="dxcts_creditperformanceid" /> '
        + '<attribute name="dxcts_name" /> '
        + '   <attribute name="createdon" /> '
        + '   <order attribute="dxcts_name" descending="false" /> '
        + '   <filter type="and"> '
        + '       <condition attribute="dxcts_work" operator="eq" uiname="AU client for Customization" uitype="dxcts_work" value="{A2EE1E83-DCEE-E811-A98A-000D3AA2C0C7}" /> '
        + '       <condition attribute="dxcts_accountscreditperformanceid" operator="eq" uiname="Adventure Works" uitype="account" value="{A8A19CDD-88DF-E311-B8E5-6C3BE5A8B200}" /> '
        + '       <condition attribute="statuscode" operator="eq" value="1" /> '
        + '   </filter> '
        + ' </entity > '
        + ' </fetch > ';
    var encodedFetchXml = encodeURI(fetchXmlQuery);
    var queryPath = "/api/data/v" + version.substring(0, 3) + "/dxcts_creditperformances?fetchXml=" + encodedFetchXml;
    var requestPath = globalContext.getClientUrl() + queryPath;
    if (ratingSubGrid == null) {
        setTimeout(function () { FetchViaName(executionContext); }, 2000); //if the grid hasn’t loaded run this again
        return;
    }
    else if (ratingName != null) {
        if (ratingName.length >= 3) {
            console.log("length = 3 =========");
            var req = new XMLHttpRequest();
            req.open("GET", requestPath);
            req.withCredentials = true;
            req.setRequestHeader("Accept", "application/json");
            req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            req.onreadystatechange = function () {
                if (this.readyState === 4) {
                    this.onreadystatechange = null;
                    if (this.status === 200) {
                        var returned = JSON.parse(this.responseText);
                        var results = returned.value;
                        console.log("Results = " + results);
                    }
                    else {
                        //alert(this.statusText);
                    }
                }
            };
            req.send();

            ratingSubGrid.getGrid().SetParameter("fetchXml", fetchXmlQuery); //Unable to get property 'SetParameter' of undefined or null reference
            ratingSubGrid.getGrid().Refresh(); //refresh the sub grid using the new fetch xml

            //var RatingsIFollow = {
            //    dxcts_work: "{A2EE1E83-DCEE-E811-A98A-000D3AA2C0C7}", 
            //    dxcts_accountscreditperformanceid: "{A8A19CDD-88DF-E311-B8E5-6C3BE5A8B200}",
            //    statuscode: 1,
            //    dxcts_name = "Rating 1.1"
            //}
            ////Set the view using RatingsIFollow
            //formContext.getControl("Credit_Performance").getViewSelector().setCurrentView(fetchXmlQuery);
            //debugger;
            //filterRatings(executionContext);
            //console.log("filterRatings(ratingSubGrid, ratingName) Complete=---------------------------");
            //setRatingFilter(executionContext);
        }
    }


    console.log(requestPath);

}



//// A namespace defined for SDK sample code
//// You should define a unique namespace for your libraries
//var Sdk = window.Sdk || {};
//debugger;
//Sdk.setRatingFilter = function (executionContext) {

//    // get the form context
//    formContext = executionContext.getFormContext();
//    ratingSubGrid.addPreSearch(Sdk.filterRatings);
//}

//Sdk.filterRatings = function () {
//    var ratingsFilter = '   <filter type="and"> '
//        + '       <condition attribute="dxcts_work" operator="eq" uiname="AU client for Customization" uitype="dxcts_work" value="{A2EE1E83-DCEE-E811-A98A-000D3AA2C0C7}" /> '
//        + '       <condition attribute="dxcts_accountscreditperformanceid" operator="eq" uiname="Adventure Works" uitype="account" value="{A8A19CDD-88DF-E311-B8E5-6C3BE5A8B200}" /> '
//        + '       <condition attribute="statuscode" operator="eq" value="1" /> '
//        + '       <condition attribute="dxcts_name" operator="like" value="%' + ratingName + '%" />'
//        + '   </filter> ';
//    ratingSubGrid.addCustomFilter(ratingsFilter, "dxcts_creditperformance");
//}