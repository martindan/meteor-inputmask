Package.describe({
  "summary": "JQuery InputMask for Meteor",
  "version": "3.3.3",
  "git": "https://github.com/martindan/meteor-inputmask.git",
  "name": "martindan:inputmask"
});

Package.on_use(function(api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.add_files('jquery.inputmask/dist/jquery.inputmask.bundle.js', 'client');
});
