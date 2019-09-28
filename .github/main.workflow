workflow "Build and deploy" {
  on = "push"
  resolves = ["Deploy"]
}

action "Fetch Develop" {
  uses = "actions/bin/filter@master"
  args = "branch develop"
}

action "Npm install" {
  uses = "actions/npm@master"
  args = "install"
  needs = ["Fetch Develop"]
}

action "Npm build" {
  uses = "actions/npm@emaster"
  args = "run build"
  needs = ["Npm install"]
}

action "Deploy" {
  uses = "dgr8akki/github-action-gh-pages@master"
  secrets = [
    "GITHUB_TOKEN",
    "PUBLIC_PATH",
    "PUSH_BRANCH",
  ]
  needs = ["Npm build"]
}
