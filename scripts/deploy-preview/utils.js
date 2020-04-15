// eslint-disable-next-line import/no-unresolved
const github = require('@actions/github');

const botComment = (token, issueNumber, body, cb = () => { }) => {
  const octokit = new github.GitHub(token);
  octokit.issues.createComment({
    ...github.context.repo,
    issue_number: issueNumber,
    body,
  }).then(cb);
};

module.exports = botComment;
