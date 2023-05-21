'use-strict';

module.exports = {
  options: {
  // Redact Authorization headers, see https://getpino.io/#/docs/redaction
    redact: ['req.headers.authorization'],
  },
};
