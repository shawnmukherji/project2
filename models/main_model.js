var orm = require("../config/orm.js");

console.log(" Made it to main_model.js");

// Call the ORM functions using specific input for the ORM
var mapping = {
  toWorktickets: function(cb) {
    console.log("main_model.js toWorktickets initiated");
    orm.showWorktickets("Worktickets", function(res){
      cb(res);
    });
  },
  toTenant: function(cb) {
    orm.showTenants("Worktickets", function(res){ // Change 'Worktickets' to 'Tenants' after tenants table is added to the database
      cb(res);
    });
  },
  toLandlord: function(cb) {
    orm.showLandlords("Worktickets", function(res){ // Change 'Worktickets' to 'Landlords' after landlords table is added to the database
      cb(res);
    });
  }
};

module.exports = mapping;