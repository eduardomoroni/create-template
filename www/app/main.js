define(function (require) {
  // Load any app-specific modules
  // with a relative require call,
  // like:
  var messages = require("./messages");

  var snapengage = require("./snapengage");

  // Load library/vendor modules using
  // full IDs, like:
  var print = require("print");

  print(messages.getHello());
  snapengage.loadSnapEngage("fa38df51-e81c-4bda-9284-831331f6352b.js");
});
