define("models/index", 
  ["../App","./Foo"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var App = __dependency1__["default"];
    var Foo = __dependency2__["default"];

    App.Foo = Foo;

    // We don't export anything here, this file simply binds the all the models to our Ember Application instance
  });