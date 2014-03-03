"use strict";
var App = require("../App")["default"];
var Foo = require("./Foo")["default"];

App.Foo = Foo;

// We don't export anything here, this file simply binds the all the models to our Ember Application instance