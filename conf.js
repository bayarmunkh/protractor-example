// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: null,

  sauceUser: 'chiigle',
  sauceKey: '1d77ae15-4c11-4c13-a0a3-cdeabf420942',

  // Capabilities to be passed to the webdriver instance.
  capabilities:
  [
    {
      'browserName': 'firefox',
      'maxInstances' : 2,
      'version': '25',
      'seleniumProtocal': 'WebDriver'
    },
    {
      'browserName': 'chrome',
      'maxInstances' : 2,
      'version': '31',
      'seleniumProtocal': 'WebDriver'
    }
  ],

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['example_spec.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
