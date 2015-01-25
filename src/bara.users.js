/**
* Copyright (c) 2015 Forfuture LLC <we@forfuture.co.ke>
*/


angular.module("Bara")


.factory("BaraUsers", ["$resource", "BASE_URL", function($resource, BASE_URL) {
  return $resource(BASE_URL + "/users", null, {
    login: { method: "POST", params: { username: "@username", password: "@password" } }
  });
}]);
