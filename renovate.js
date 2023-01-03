module.exports = {
  "logLevel": "debug",
  "onboarding": true,
  "requireConfig": false,
  "platform": "github",
  "printConfig": true,
  "username": "jnewland-renovate[bot]",
  "gitAuthor": "jnewland-bot <195354+jnewland-renovate[bot]@users.noreply.github.com>",
  "repositories": [],
  "allowedPostUpgradeCommands": [
    "./script/sync-components",
    "make"
  ],
  "hostRules": [{
    "matchHost": "api.github.com",
    "token": process.env.GITHUB_COM_TOKEN
  }]
}
