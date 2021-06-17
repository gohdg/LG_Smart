function runApp(appId) {
  console.log("appID: ", appId);
  hcap.preloadedApplication.launchPreloadedApplication({
    id: appId,
    onSuccess: function () {
      console.log("onSuccess");
    },
    onFailure: function (f) {
      console.log("onFailure : errorMessage = " + f.errorMessage);
    },
  });
}
