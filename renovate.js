module.exports = {
  globalExtends: ['github>urcomputeringpal/.github'],
  hostRules: [
    {
      hostType: 'github',
      matchHost: 'github.com',
      username: process.env.RENOVATE_USERNAME,
      token: process.env.RENOVATE_GITHUB_COM_TOKEN,
    },
  ],
  printConfig: true,
  repositories: [],
  allowedPostUpgradeCommands: ['./script/sync-components', 'make'],
};
