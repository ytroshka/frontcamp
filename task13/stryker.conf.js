module.exports = function (config) {
  config.set({
    files: ['test/test.spec.js',
      {
        pattern: 'controllers/*.js',
        included: false,
        mutated: true
      },
      {
        pattern: 'models/*.js',
        included: false,
        mutated: true
      },
      {
        pattern: '*.js',
        included: false,
        mutated: true
      },
      {
        pattern: 'config/*.js',
        included: false,
        mutated: true
      },
      {
        pattern: 'routes/*.js',
        included: false,
        mutated: true
      },
      '!stryker.conf.js'
    ],
    testFramework: '',
    testRunner: 'mocha',
    coverageAnalysis: 'off',
    plugins: ['stryker-mocha-runner']
  });
};