/**
* Copyright (c) 2015 Forfuture LLC <we@forfuture.co.ke>
*/


angular.module("Bara")


.factory("CountryFactory", ["$resource", function($resource) {
  "use strict";
  return $resource("/country/:countryName/:resource", null, {
    get: {
      method: "GET",
      params: { countryName: "@countryName" }
      isArray: true
    },
    getNotifications: {
      method: "GET",
      params: {
        countryName: "@countryName",
        resource: "notifications"
      },
      isArray: true
    },
    postNotification: {
      method: "POST",
      params: {
        countryName: "@countryName",
        resource: "notifications"
      }
    }
  });
}]);
