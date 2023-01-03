module.exports = {
  globalExtends: ['github>jnewland/.github'],
  onboarding: false,
  requireConfig: false,
  printConfig: true,
  repositories: [],
  allowedPostUpgradeCommands: ['./script/sync-components', 'make'],
};
