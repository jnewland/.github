# .github

This repository contains customizations to my GitHub experience, ala:

    /rem checkboxes

![image](https://user-images.githubusercontent.com/47/83219169-40c1c200-a135-11ea-9cf2-4a1c5f9bd49b.png)

## Reusable Actions

### Auto merge

Enables auto-merge on a PR. Usage:

```yaml
name: auto merge
on:
  pull_request:
    types:
      - labeled
      - synchronize
jobs:
  enable:
    if: |
      ( github.event.action == 'labeled' && github.event.label.name == 'deploy:auto-merge' ) ||
      ( github.event.action != 'labeled' && contains(github.event.pull_request.labels.*.name, 'deploy:auto-merge') )
    uses: jnewland/.github/.github/workflows/auto-merge.yaml@main
    with:
      pullRequestId: ${{ github.event.pull_request.node_id }}
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```

### Manually Deployed

Attest that a PR has been manually deployed by adding a label. Behind the scenes, a `deploy` commit status is created.

```yaml
name: manually deployed
on:
  pull_request:
    types:
      - labeled
      - synchronize
jobs:
  attest:
    if: |
      ( github.event.action == 'labeled' && github.event.label.name == 'deploy:manually-deployed' ) ||
      ( github.event.action != 'labeled' && contains(github.event.pull_request.labels.*.name, 'deploy:manually-deployed') )
    uses: jnewland/.github/.github/workflows/manually-deployed.yaml@main
    with:
      sha: ${{ github.event.pull_request.head.sha }}
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```

### Update Branch

It clicks the button for you, basically. Useful to run right before an action that does a diff or a deploy on a PR.

```yaml
jobs:
  update-branch:
    uses: jnewland/.github/.github/workflows/update-branch.yaml@main
    with:
      pull_number: ${{ github.event.pull_request.number }}
    secrets:
      # Using GITHUB_TOKEN here directly is discourged as GitHub Actions
      # will not be triggered on any created commits.
      token: ${{ secrets.PAT }}
```

## See other

* Configuration from https://github.com/jnewland/dotfiles is injected into each Codespace.
* Profile includes README.md from https://github.com/jnewland/jnewland.