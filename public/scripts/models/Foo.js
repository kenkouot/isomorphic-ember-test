define("models/Foo",
  ["exports"],
  function(__exports__) {
    "use strict";
    var Foo = Ember.Object.extend({
      next: function() {
        return 'bar!';
      }
    });

    __exports__["default"] = Foo;
  });
