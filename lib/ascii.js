var ascii = require('glush-util').ascii;

function hence(placeholder, log) {
  /*
   '  _   _ _____ _   _  ____ _____   _              \n' +
   ' | | | | ____| \ | |/ ___| ____| (_) ___        \n' +
   ' | |_| |  _| |  \| | |   |  _|   | |/ _ \      \n' +
   ' |  _  | |___| |\  | |___| |___ _| | (_) |      \n' +
   ' |_| |_|_____|_| \_|\____|_____(_)_|\___/     \n',
   */

  return ascii.renderAsciiArt(
    '  _   _ _____ _   _  ____ _____   _              \n' +
    ' | | | | ____| \\ | |/ ___| ____| (_) ___        \n' +
    ' | |_| |  _| |  \\| | |   |  _|   | |/ _ \\      \n' +
    ' |  _  | |___| |\\  | |___| |___ _| | (_) |      \n' +
    ' |_| |_|_____|_| \\_|\\____|_____(_)_|\\___/     \n',
    placeholder, log);
}

function logo() {
  ascii.spacer(true);
  hence('', true);
  ascii.spacer(true);
}

function smallLogo(placeholder) {
  placeholder = placeholder || '';
  ascii.spacer(true);
  console.log([ascii.rawCodes.bold.start, ' HENCE.io', ascii.rawCodes.bold.end, (' ' + placeholder)].join(''));
  ascii.spacer(true);
}

module.exports = {
  hence: hence,
  logo: logo,
  smallLogo: smallLogo
};
