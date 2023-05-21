module.options = {
  // Redact Authorization headers, see https://getpino.io/#/docs/redaction
  redact: ['req.headers.authorization'],
};
