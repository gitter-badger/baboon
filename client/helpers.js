_.each({
  isAdmin: function(u){
    var user = u || Meteor.user();

    return user && _.contains(user.roles, "admin");
  },
  users: function(){
    return Meteor.users.find({ points: { $gt: 0 }});
  },
  uservulns: function(userid){
    return Vulnerabilities.find({
      user: userid,
      accepted: true
    });
  },
  badgeImage: function(id){
    return Badges.findOne(id).imageUrl;
  },
  avatarUrlFor: function(user){
    return (user && (user.profile || {}).avatarUrl) || "/images/timthumb.png";
  },
  submissionAllowed: function(){
    var max = ((Meteor.settings || {}).public || {}).MAX_PENDING_SUBMISSIONS || 10;

    return Meteor.userId() && (Vulnerabilities.find({
      user: Meteor.userId(),
      accepted: false
    }).count() < max);    
  }
}, function(fn, name){
  Template.registerHelper(name, fn);
});
