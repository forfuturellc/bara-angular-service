/**
* Canned Data similar to that shown in Example reponses in Bara Docs
* See Docs here: http://dev.forfuture.co.ke/docs
* 
* Copyright (c) 2015 Forfuture LLC <we@forfuture.co.ke>
*/


angular.service("BaraServiceDataFixtures", [function() {
  "use strict";

  var countries = [
    {id: 1, name: "kenya"},
    {id: 2, name: "uganda"}
  ];

  var notifications = [
    {id: 21, countryId: 1, routeId: 2, message: "accident at strathmore",
    username: "gocho", timestamp: "1420293828184", votes: 101},
    {id: 22, countryId: 2, routeId: 1, message: "traffic jam at rongai",
    username: "felin", timestamp: "1420293828948", votes: 10}
  ];

  var routes = [
    {id: 1, pointA: "nairobi-cbd", pointB: "ongata-rongai"},
    {id: 2, pointA: "juja", pointB: "thika"}
  ];

  var transports = [
    {id: 1, name: "road"},
    {id: 2, name: "water"}
  ];

  this.getCountries = function() { return countries; };
  this.getNotifications = function() { return notifications; };
  this.getRoutes = function() { return routes; };
  this.getTransports = function() { return transports; };
  this.get = function() {
    return {
      countries: this.getCountries(),
      notifications: this.getNotifications(),
      routes: this.getRoutes(),
      transports: this.getTransports()
    };
  };


}]);
