const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const YAML = require('yaml');

const [,, user, command] = process.argv;

const autoAssign = fs.readFileSync('../.github/auto_assign.yml');
const authorizedUsers = YAML.parse(autoAssign).reviewers;

if (user && command) {
  const commandFormat = command.split(' ').join('').trim().toLocaleLowerCase();
  if (commandFormat === 'bottestthis') {
    const isAuthorized = authorizedUsers.findIndex(
      assignedUser => assignedUser === authorizedUsers,
    );
    if (isAuthorized === -1) process.exit(1);
  } else process.exit(1);
} else {
  process.exit(1);
}
