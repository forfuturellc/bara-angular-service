/**
* Copyright (c) 2015 Forfuture LLC <we@forfuture.co.ke>
*/


angular.module("Bara")


.factory("NotificationFactory", ["$resource", function($resource) {
  "use strict";
  return $resource("/notifications/:id", null, {
    get: { method: "GET", params: { id: "", index: "@index" }, isArray: true },
    getOne: { method: "GET", params: { id: "@id" }, isArray: true },
    voteUp: { method: "POST", params: { voteUp: "@userId" } },
    voteDown: { method: "POST", params: { voteDown: "@userId" } },
    post: { method: "POST" }
  });
}]);
