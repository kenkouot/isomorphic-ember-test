"use strict";
var Foo = Ember.Object.extend({
  next: function() {
    return 'bar!';
  }
});

exports["default"] = Foo;