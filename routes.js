Router.route("/", function(){
  this.render("homePage");
}, { name: "home" });

Router.route("/vulnerability/new", function(){
  this.render("newVulnerabilityPage");
}, { name: "newVulnerability" });

Router.route("/users/:_id", function(){
  this.render("userProfilePage", {data: Meteor.users.findOne(this.params._id)});
}, { name: "userProfile" });

Router.route("/password-reset", function(){
  this.render("passwordResetPage");
}, { name: "passwordReset" });
