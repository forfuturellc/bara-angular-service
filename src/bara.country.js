/**
* Copyright (c) 2015 Forfuture LLC <we@forfuture.co.ke>
*/


angular.module("Bara")


.factory("CountryFactory", ["$resource", "BASE_URL", function($resource, BASE_URL) {
  "use strict";
  return $resource(BASE_URL + "/country/:countryName/:resource", null, {
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
