Template.resetPasswordForm.events({
  "submit form": function(e, tmpl){
    e.preventDefault();
    var pass = tmpl.$("[name = password]").val(),
        pass2 = tmpl.$("[name = password-repeat]").val();

    if(pass !== pass2){
      UI.setTextFeedback("Passwords don't match", "Please try again", "alert-danger");
      return false;
    }

    var tok = Session.get("passwordResetToken");

    if(!tok) {
      UI.setTextFeedback("No password reset token found.", "You can only reset your password by following a link sent to you in an email", "alert-danger");
      Router.go("home");
      return false;
    }

    Accounts.resetPassword(tok, pass, function(){
      Accounts.doneResettingPassword();
      Accounts.doneResettingPassword = undefined;
      UI.setTextFeedback("Your password has been reset");
      Router.go("home");
    });

    Session.set("passwordResetToken");
    return false;
  }
});
