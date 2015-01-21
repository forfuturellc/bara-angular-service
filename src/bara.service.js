/**
* An Angular Service providing access to the Bara API
* See API here: http://dev.forfuture.co.ke/docs/api
* 
* Copyright (c) 2015 Forfuture LLC <we@forfuture.co.ke>
*/


angular.module("Bara", [])


.service("BaraService", [function() {
  "use strict";

  // acts as a cache of all data retrieved
  var data = {
    notifications: [],
    routes: [],
    saccos: []
  };

  // allows initializing service with canned data
  this.initializeData = function(_data) {
    if (! _data) { return; }
    if (_data.notifications) { data.notifications = _data.notifications; }
    if (_data.routes) { data.routes = _data.routes; }
    if (_data.saccos) { data.saccos = _data.saccos; }
  };

  // acts a holder for methods related to notifications
  this.notifications = {};

  /**
  * Returns notifications
  */
  this.notifications.get = function(id) {
    id = parseInt(id);
    if (typeof id === "number") {
      var total_num = data.notifications.length;
      for (var index = 0; index < total_num; index++) {
        if (data.notifications[index].id === id) {
          return data.notifications[index];
        }
      }
    }
    return data.notifications;
  };


  /**
  * votes up a notification
  *
  * @param  {String}  id -- id of the notifcation
  */
  this.notifications.voteUp = function(id) {
    // Missing hook
    return true;
  };


  /**
  * votes down a notification
  *
  * @param  {String} id -- id of the notifcation
  */
  this.notifications.voteDown = function(id) {
    // Missing hook
    return true;
  };

}]);
