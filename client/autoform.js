AutoForm.hooks({
  submitVulnerabilityForm: {
    before: {
      submitVulnerability: function(doc, template) {
        // TODO: add some nice styling to this popup
        var r = confirm("Please confirm: You have read and understood the rules of the bug bounty program. You are responsible for any tax implications of any reward you receive and must comply with all tax laws applicable to any rewards that we may issue you. We cannot issue rewards to individuals who are on sanctions lists, or who are located in countries that are on sanctions lists. You must comply with all applicable local, state, national, and international laws, rules, and regulations in connection with your participation in this program.");
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
