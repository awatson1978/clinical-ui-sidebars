Package.describe({
  summary: "Sidebar elements for the ClinicalFramework.",
  version: "0.1.1",
  git: "http://github.com/awatson1978/clinical-ui-sidebars.git",
  name: "clinical:sidebars"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');

  api.use('templating@1.0.7');
  api.use('ui@1.0.3');
  api.use('less@1.0.9');

  api.addFiles('semantic.ui.extended.less', 'client');
  api.addFiles('semantic.ui.sidebar.js', 'client');
  api.addFiles('semantic.ui.sidebar.less', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
