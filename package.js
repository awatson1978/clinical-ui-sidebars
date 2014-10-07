Package.describe({
  summary: "Sidebar elements for the ClinicalFramework.",
  version: "1.0.0",
  git: "http://github.com/awatson1978/clinical-ui-sidebars.git",
  name: "clinical:sidebars"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');

  api.use('templating');
  api.use('ui');
  api.use('less');

  api.add_files('semantic.ui.extended.less', 'client');
  api.add_files('semantic.ui.sidebar.js', 'client');
  api.add_files('semantic.ui.sidebar.less', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sidebars');
  api.addFiles('sidebars-tests.js');
});
