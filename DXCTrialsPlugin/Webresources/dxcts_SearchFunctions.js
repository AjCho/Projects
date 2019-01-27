//function FetchViaName(executionContext) {
//    var formContext = executionContext.getFormContext();
//    var globalContext = Xrm.Utility.getGlobalContext();
//    var version = globalContext.getVersion();
//    var ratingName = formContext.getAttribute("dxcts_searchratingname").getValue();
//    var ratingSubGrid = formContext.getControl("Credit_Performance"); //Sub-grid is on the Form
//    //var ratingSubGrid = window.parent.document.getElementById("Credit_Performance");
//    console.log("subgrid name = ", ratingSubGrid);
//    var fetchXmlQuery = '<fetch version="1.0" output-format="xml - platform" mapping="logical" distinct="false"> '
//        + '<entity name = "dxcts_creditperformance" > '
//        + '<attribute name="dxcts_creditperformanceid" /> '
//        + '<attribute name="dxcts_name" /> '
//        + '   <attribute name="createdon" /> '
//        + '   <order attribute="dxcts_name" descending="false" /> '
//        + '   <filter type="and"> '
//        + '       <condition attribute="dxcts_work" operator="eq" uiname="AU client for Customization" uitype="dxcts_work" value="{A2EE1E83-DCEE-E811-A98A-000D3AA2C0C7}" /> '
//        + '       <condition attribute="dxcts_accountscreditperformanceid" operator="eq" uiname="Adventure Works" uitype="account" value="{A8A19CDD-88DF-E311-B8E5-6C3BE5A8B200}" /> '
//        + '       <condition attribute="statuscode" operator="eq" value="1" /> '
//        + '       <condition attribute="dxcts_name" operator="like" value="%' + ratingName + '%" />'
//        + '   </filter> '
//        + ' </entity > '
//        + ' </fetch > ';
//    var encodedFetchXml = encodeURI(fetchXmlQuery);
//    var queryPath = "/api/data/v" + version.substring(0, 3) + "/dxcts_creditperformances?fetchXml=" + encodedFetchXml;
//    var requestPath = globalContext.getClientUrl() + queryPath;
//    //if (ratingSubGrid == null) {
//    //    setTimeout(function () { FetchViaName(executionContext); }, 2000); //if the grid hasn’t loaded run this again
//    //    //return;
//    //}
//    //else
//    if (ratingSubGrid != null) {
//        var subRowCount = ratingSubGrid.getGrid().getTotalRecordCount();
//        console.log("subRowCount = " + subRowCount);
//        debugger;
//        if (subRowCount > 0) {
//            //ratingSubGrid.control.SetParameter("fetchXml", fetchXmlQuery); //Unable to get property 'SetParameter' of undefined or null reference
//            var ratingsFilter = '   <filter type="and"> '
//                + '       <condition attribute="dxcts_work" operator="eq" uiname="AU client for Customization" uitype="dxcts_work" value="{A2EE1E83-DCEE-E811-A98A-000D3AA2C0C7}" /> '
//                + '       <condition attribute="dxcts_accountscreditperformanceid" operator="eq" uiname="Adventure Works" uitype="account" value="{A8A19CDD-88DF-E311-B8E5-6C3BE5A8B200}" /> '
//                + '       <condition attribute="statuscode" operator="eq" value="1" /> '
//                + '       <condition attribute="dxcts_name" operator="like" value="%' + ratingName + '%" />'
//                + '   </filter> ';
//            ratingSubGrid.addCustomFilter(ratingsFilter);
//            ratingSubGrid.Refresh(); //refresh the sub grid using the new fetch xml
//        } else {
//            setTimeout(function () { FetchViaName(executionContext); }, 2000);
//            return;
//        }
//        //if (ratingName != null && ratingName.length >= 3) {
//        //    console.log("length = 3 =========");
//        //    var req = new XMLHttpRequest();
//        //    req.open("GET", requestPath);
//        //    req.withCredentials = true;
//        //    req.setRequestHeader("Accept", "application/json");
//        //    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
//        //    req.onreadystatechange = function () {
//        //        if (this.readyState === 4) {
//        //            this.onreadystatechange = null;
//        //            if (this.status === 200) {
//        //                var returned = JSON.parse(this.responseText);
//        //                var results = returned.value;
//        //                console.log("Results = " + results);
//        //            }
//        //            else {
//        //                //alert(this.statusText);
//        //            }
//        //        }
//        //    };
//        //    req.send();
//        //}
//    }
//    console.log(requestPath);
//}

function SearchRatingSubGrid(executionContext) {
    var formContext = executionContext.getFormContext();
    // Credit_Performance : is name of subgrid given on Form.
    // You need the code below because using SetParameter in formContext.getControl("Credit_Performance") will not work.
    var objSubGrid = window.parent.document.getElementById("Credit_Performance");

    var formContext = executionContext.getFormContext();
    var globalContext = Xrm.Utility.getGlobalContext();
    var version = globalContext.getVersion(); // Get the crm version eg: 9.0

    // CRM loads subgrid after form is loaded.. so when we are adding script on form load.. need to wait unitil subgrid is loaded. 
    // thats why adding delay..
    if (objSubGrid == null) {
        setTimeout(SearchRatingSubGrid(executionContext), 5000);
    } else {
        // When subgrid is loaded, get rating name value
        var curId = formContext.data.entity.getId();
        var curName = formContext.getAttribute("dxcts_name").getValue();
        var ratingName = formContext.getAttribute("dxcts_searchratingname").getValue();
        var dateFrom = formContext.getAttribute("dxcts_searchdatefrom").getValue();
        var dateTo = formContext.getAttribute("dxcts_searchdateto").getValue();
        var workAccount = formContext.getAttribute("dxcts_workaccount").getValue();
        // Create FetchXML for sub grid to filter records, Also Check the Appropriate FetchXml to be used.
        var FetchXml = "";
        if (dateFrom != null && dateTo != null) {
            // getMonth() function start at 0 as January.
            FetchXml = fetchXMLDate(curName, curId, workAccount, (dateFrom.getFullYear() + "-" + (dateFrom.getMonth() + 1) + "-" + dateFrom.format("dd")), (dateTo.getFullYear() + "-" + (dateTo.getMonth() + 1) + "-" + dateTo.format("dd")));
        } else if (ratingName != null) {
            FetchXml = fetchXMLName(curName, curId, workAccount, ratingName);
        }

        // Layout of subgrid.
        var LayoutXml = fetchLayout();

        // Apply layout and filtered fetchXML
        objSubGrid.control.SetParameter("layoutXml", LayoutXml);
        objSubGrid.control.SetParameter("fetchXml", FetchXml);

        // Refresh grid to show filtered records only. 
        objSubGrid.control.Refresh();
    }
}

function SearchSectionVisibility(executionContext) {
    var formContext = executionContext.getFormContext();
    var searchOption = formContext.getAttribute("dxcts_searchoptions").getValue();
    // Default
    if (searchOption == null || searchOption == 1) {
        formContext.getAttribute("dxcts_searchoptions").setValue(1); // Set to default option
        formContext.getControl('dxcts_searchratingname').setVisible(true);
        formContext.getControl('dxcts_searchdatefrom').setVisible(false);
        formContext.getControl('dxcts_searchdateto').setVisible(false);
    } else {
        formContext.getControl('dxcts_searchratingname').setVisible(false);
        formContext.getControl('dxcts_searchdatefrom').setVisible(true);
        formContext.getControl('dxcts_searchdateto').setVisible(true);
    }
    debugger;
    var objSubGrid = window.parent.document.getElementById("Credit_Performance");
    var conSubGrid = formContext.getControl("Credit_Performance");
    var subRowCount = conSubGrid.getGrid().getTotalRecordCount();
    if (formContext.ui.getFormType() == 2) // If formType = 2 or update visibility is true.
    {
        setVisbility(formContext, "Details", "Search", true);
    } else if (formContext.ui.getFormType() == 1) // If formType = 1 or create visibility is false.
    {
        setVisbility(formContext, "Details", "Search", false);
    }
}

function setVisbility(formContext, tabName, sectionName, command) {
    var tabObj = formContext.ui.tabs.get(tabName);
    var sectionObj = tabObj.sections.get(sectionName);
    sectionObj.setVisible(command);
}

function ClearSearchParams(executionContext) {
    var formContext = executionContext.getFormContext();
    // Clear the search values
    formContext.getAttribute("dxcts_searchratingname").setValue("");
    formContext.getAttribute("dxcts_searchdatefrom").setValue("");
    formContext.getAttribute("dxcts_searchdateto").setValue("");
}

function fetchXMLName(curName, curId, workAccount, ratingName) {
    var FetchXml = '<fetch version="1.0" output-format="xml - platform" mapping="logical" distinct="false"> '
        + '<entity name = "dxcts_creditperformance" > '
        + '<attribute name="dxcts_creditperformanceid" /> '
        + '<attribute name="dxcts_name" /> '
        + '<attribute name="dxcts_work" /> '
        + '<attribute name="dxcts_ratings" /> '
        + '<attribute name="dxcts_comments" /> '
        + '<attribute name="dxcts_sugestions" /> '
        + '   <attribute name="createdon" /> '
        + '   <order attribute="dxcts_name" descending="false" /> '
        + '   <filter type="and"> '
        + '       <condition attribute="dxcts_work" operator="eq" uiname="' + curName + '" uitype="dxcts_work" value="' + curId + '" /> '
        + '       <condition attribute="dxcts_accountscreditperformanceid" operator="eq" uiname="' + workAccount[0].name + '" uitype="account" value="' + workAccount[0].id + '" /> '
        + '       <condition attribute="statuscode" operator="eq" value="1" /> '
        + '       <condition attribute="dxcts_name" operator="like" value="%' + ratingName + '%" />'
        + '   </filter> '
        + ' </entity > '
        + ' </fetch > ';

    return FetchXml;
}

function fetchXMLDate(curName, curId, workAccount, dateFrom, dateTo) {
    var FetchXml = '<fetch version="1.0" output-format="xml - platform" mapping="logical" distinct="false"> '
        + '<entity name = "dxcts_creditperformance" > '
        + '<attribute name="dxcts_creditperformanceid" /> '
        + '<attribute name="dxcts_name" /> '
        + '<attribute name="dxcts_work" /> '
        + '<attribute name="dxcts_ratings" /> '
        + '<attribute name="dxcts_comments" /> '
        + '<attribute name="dxcts_sugestions" /> '
        + '   <attribute name="createdon" /> '
        + '   <order attribute="dxcts_name" descending="false" /> '
        + '   <filter type="and"> '
        + '       <condition attribute="dxcts_work" operator="eq" uiname="' + curName + '" uitype="dxcts_work" value="' + curId + '" /> '
        + '       <condition attribute="dxcts_accountscreditperformanceid" operator="eq" uiname="' + workAccount[0].name + '" uitype="account" value="' + workAccount[0].id + '" /> '
        + '       <condition attribute="statuscode" operator="eq" value="1" /> '
        + '       <condition attribute ="createdon" operator ="on-or-after" value ="' + dateFrom + '"/> '
        + '       <condition attribute ="createdon" operator ="on-or-before" value ="' + dateTo + '"/> '
        //+ '       <condition attribute ="createdon" operator ="on-or-after" value ="' + "2018-12-06" + '"/> '
        //+ '       <condition attribute ="createdon" operator ="on-or-before" value ="' + "2018-12-06" + '"/> '
        + '   </filter> '
        + ' </entity > '
        + ' </fetch > ';

    return FetchXml;
}

function fetchLayout() {
    var LayoutXml = "<grid name='resultset' object='8' jump='new_name' select='1' preview='1' icon='1'>" +
        " <row name='result' id='new_boat'>" +
        " <cell name='dxcts_name' width='100' />" +
        " <cell name='dxcts_work' width='200' />" +
        " <cell name='dxcts_ratings' width='100' />" +
        " <cell name='dxcts_comments' width='200' />" +
        " <cell name='dxcts_sugestions' width='200' />" +
        " </row>" +
        " </grid>";
    return LayoutXml;
}

