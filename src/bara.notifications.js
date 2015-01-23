/**
* Copyright (c) 2015 Forfuture LLC <we@forfuture.co.ke>
*/


angular.module("Bara")


.factory("Notifications", ["$resource", "BASE_URL", function($resource, BASE_URL) {
  "use strict";
  return $resource(BASE_URL + "/notifications/:id", null, {
    //get: { method: "GET", params: { id: "", index: "@index" }, isArray: true },
    get: { method: "GET", params: { id: "", transport: "@transport" } },
    getOne: { method: "GET", params: { id: "@id" }, isArray: true },
    voteUp: { method: "POST", params: { voteUp: "@userId" } },
    voteDown: { method: "POST", params: { voteDown: "@userId" } },
    post: { method: "POST", params: { userId: "@userId", username: "@username", message: "@message" } }
  });
}]);
