module.exports = {
  srcDir: __dirname,
  name: "notifications",
  port: 3114,
  scope: "notifications",
  exposes: {
    "./routes": "./src/routes.tsx",
    "./settings": "./src/containers/Widget.tsx",
    "./automation": "./src/automations/index.tsx",
  },
  routes: {
    url: "http://localhost:3114/remoteEntry.js",
    scope: "notifications",
    module: "./routes",
  },
  automation: "./automation",
  menus: [
    {
      text: "notifications",
      url: "/notifications",
      icon: "icon-book-open",
      location: "topNavigation",
      scope: "notifications",
      component: "./settings",
    },
    {
      text: "Notification Config",
      to: "/settings/notifications",
      image: "/images/icons/erxes-11.svg",
      location: "settings",
      scope: "notifications",
    },
  ],
};
