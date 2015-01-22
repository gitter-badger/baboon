AutoForm.hooks({
  submitVulnerabilityForm: {
    before: {
      submitVulnerability: function(doc, template) {
        // TODO: add some nice styling to this popup
        var r = confirm("TODO: legal disclaimer text here!");
        if (r == true) {
          return doc
        } else {
          return false
        }
      }
    },
    after: {
      submitVulnerability: function(err, res){
        if(err){
          UI.setTextFeedback("Error",err.reason || "Vulnerability submission failed",{
            type: "alert-danger"
          });
        }else{
          Router.go("/");
          UI.setTextFeedback("Thank you!", "Vulnerability has been submitted",{
            type: "alert-success"
          });
        }
      }
    }
  }
});
