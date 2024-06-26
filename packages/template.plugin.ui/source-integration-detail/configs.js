module.exports = {
  srcDir: __dirname,
  name: "{name}",
  scope: "{name}",
  port: 3324,
  exposes: {
    "./routes": "./src/routes.tsx",
    "./inboxIntegrationSettings": "./src/components/IntegrationSettings.tsx",
    "./inboxConversationDetail": "./src/components/ConversationDetail.tsx",
  },
  routes: {
    url: "http://localhost:3324/remoteEntry.js",
    scope: "{name}",
    module: "./routes",
  },
  inboxIntegrationSettings: "./inboxIntegrationSettings",
  inboxConversationDetail: "./inboxConversationDetail",
  inboxIntegration: {
    name: "{Name}",
    description: "Please write integration description on plugin config file",
    isAvailable: true,
    kind: "{name}",
    logo: "/images/integrations/{name}.png",
    createUrl: "/settings/integrations/create{Name}",
  },
};
