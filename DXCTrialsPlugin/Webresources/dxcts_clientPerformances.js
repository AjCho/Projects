
function CalculateRating(executionContext) {
    var formContext = executionContext.getFormContext();
    //old
    //var ratings = Xrm.Page.getAttribute("dxcts_ratings").getValue();
    var ratings = formContext.getAttribute("dxcts_ratings").getValue(); // -- new
    //old
    //Xrm.Page.getAttribute("dxcts_ratingvalue").setValue(ratings);
    formContext.getAttribute("dxcts_ratingvalue").setValue(ratings); // -- new
    console.log("rating = " + ratings);
    console.log("executionContext = ", executionContext);

    var guid = formContext.data.entity.getId();

    //var guid = Xrm.Page.data.entity.getId();
    console.log("guid = " + guid);
    //Xrm.WebApi.updateRecord("dxcts_creditperformance", guid, { "statecode": 1 }).then(
    //    function success(result) {
    //        //formContext.data.refresh(true);
    //        //Alert.hide();
    //    },
    //    function (error) {
    //        console.log(error.message);
    //    }
    //);

}



