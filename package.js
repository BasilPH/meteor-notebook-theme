Package.describe({
  summary: "Notebook admin template for bootstrap"
});

Package.on_use(function (api) {
  api.use([
      'less',
      'jquery'
  ]);

  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-notebook');

  // CSS
  api.add_files(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'animate.css'), 'client');
  api.add_files(path.join(asset_path, 'css', 'font.css'), 'client');
  api.add_files(path.join(asset_path, 'js', 'fuelux', 'fuelux.css'), 'client');
  api.add_files(path.join(asset_path, 'js', 'select2', 'select2.css'), 'client');
  api.add_files(path.join(asset_path, 'js', 'select2', 'theme.css'), 'client');
  api.add_files(path.join(asset_path, 'js', 'datepicker', 'datepicker.css'), 'client');
  api.add_files(path.join(asset_path, 'less', 'app.less'), 'client');
  api.add_files(path.join(asset_path, 'js', 'fullcalendar', 'fullcalendar.css'), 'client');
  api.add_files(path.join(asset_path, 'js', 'fullcalendar', 'theme.css'), 'client');


  // JS
  api.add_files(path.join(asset_path, 'js', 'app.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'bootstrap.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'app.plugin.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'slimscroll', 'jquery.slimscroll.min.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'fuelux', 'fuelux.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'parsley', 'parsley.min.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'file-input', 'bootstrap-filestyle.min.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'datepicker', 'bootstrap-datepicker.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'libs', 'moment.min.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'combodate', 'combodate.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'select2', 'select2.min.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'slider', 'bootstrap-slider.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery.ui.touch-punch.min.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'jquery-ui-1.10.3.custom.min.js'), 'client');
  api.add_files(path.join(asset_path, 'js', 'fullcalendar', 'fullcalendar.min.js'), 'client');


});