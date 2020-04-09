// eslint-disable-next-line import/no-unresolved
const randomstring = require('randomstring');
const childProcess = require('child_process');
const botComment = require('./utils');

const [, , issuNumber, SURGE_TOKEN, GITHUB_TOKEN, USER] = process.argv;

const gen = randomstring.generate({
  length: 6,
  charset: 'alphabetic',
  capitalization: 'lowercase',
});

const domain = `http://ignitus-preview-${gen}.surge.sh`;

childProcess.exec(`./node_modules/.bin/surge ./build ${domain} --token ${SURGE_TOKEN}`, (err) => {
  if (err) {
    botComment(GITHUB_TOKEN, issuNumber, `Sorry @${USER}, Deploy Error 😶.`, () => {
      process.exit(1);
    });
  } else {
    botComment(GITHUB_TOKEN, issuNumber, `Yey @${USER}\n\n Live Preview is ready: ${domain}\n 🚀`);
  }
});
