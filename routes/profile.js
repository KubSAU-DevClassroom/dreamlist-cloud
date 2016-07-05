-var profile = require("../lib/profile");
 -
  exports.retrieveProfile = function (req, res) {
 -  profile.retrieveProfile({
 -  }, function (err, profile) {
 -    if (err) {
 -      res.json({
 -        success: false
 -      });
 -      return;
 -    }
 -    res.json({
 -      success: true,
 -      data: profile
 -    });
 -  });
 -};
 -
 -exports.addProfile = function (req, res) {
 -  profile.addProfile({
 -    created: Date(),
 -    modified: Date(),
 -    name: "Kasha",
 -    description: "test str",
 -    avatar: "http://d2.christiantoday.com/en/full/21113/zoe-saldana-as-neytiri-in-avatar.jpg"
 -  },function (err, profile){
 -    if (err) {
 -      res.json({
 -        success: false
 -      });
 -      return;
 -    }
 -    res.json({
 -      success: true
 -    });
 -  });
 +  res.send();
  };
  
 -exports.updateProfile = function (req, res) {
 -  profile.updateProfile({
 -    name: "ne Kasha",
 -    description: "ne test str",
 -    avatar: "http://risovach.ru/upload/2013/05/mem/oformi_19855739_orig_.jpeg"
 -  },
 -    function (err, profile){
 -    if (err) {
 -      res.json({
 -        success: false
 -      });
 -      return;
 -    }
 -    res.json({
 -      success: true
 -    });
 -  });
 +exports.saveProfile = function (req, res) {
 +  res.send();
  };
