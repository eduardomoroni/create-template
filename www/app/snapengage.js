define(function () {
  return {
    loadSnapEngage: function (widgetId) {
      var se = document.createElement("script");
      se.type = "text/javascript";
      se.async = true;
      se.src =
        "https://storage.googleapis.com/snapabug-hr-staging/js/" + widgetId;
      var done = false;
      se.onload = se.onreadystatechange = function () {
        if (
          !done &&
          (!this.readyState ||
            this.readyState === "loaded" ||
            this.readyState === "complete")
        ) {
          done = true;
          /* Place your SnapEngage Staging JS API code below */
          /* SnapEngage.allowChatSound(true); Example JS API: Enable sounds for Visitors. */
        }
      };
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(se, s);
    },
  };
});
