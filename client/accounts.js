Accounts.onEmailVerificationLink(function(tok, done){
  Accounts.verifyEmail(tok, function(err){
    if(err){
      console.error(err);
    }else{
      done();
    }
  });
});

Accounts.onResetPasswordLink(function(tok, done){
  Session.set("passwordResetToken", tok);

  Accounts.doneResettingPassword = done;

  Router.go("passwordReset");
});


