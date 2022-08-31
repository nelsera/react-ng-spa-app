import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org1/react-18-app-1",
  app: () => System.import("@org1/react-18-app-1"),
  activeWhen: ["/react-18-app-1"],
});

registerApplication({
  name: "@org1/react-18-app-2",
  app: () => System.import("@org1/react-18-app-2"),
  activeWhen: ["/react-18-app-2"],
});

registerApplication({
  name: "angular-14-app-1",
  app: () => System.import("angular-14-app-1"),
  activeWhen: ["/angular-14-app-1"],
});

registerApplication({
  name: "angular-14-app-2",
  app: () => System.import("angular-14-app-2"),
  activeWhen: ["/angular-14-app-2"],
});

start({
  urlRerouteOnly: true,
});
