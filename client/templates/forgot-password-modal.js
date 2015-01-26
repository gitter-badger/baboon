Template.forgotPasswordModal.events({
  "submit form": function(e, tmpl){
    e.preventDefault();
    var email = tmpl.$("[name=email]").val();

    if(email){
      Accounts.forgotPassword({email: email});

      UI.setTextFeedback("An email with password reset instructions has been sent");

      $("#forgot-password-modal").modal("hide");
    }
    return false;
  }
});
