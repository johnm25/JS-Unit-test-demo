// Require.js allows us to configure shortcut alias

require.config({
    urlArgs: "bust=" + new Date().getTime(),
    paths: {
        knockout: 'knockout',
        jsnlog: '../../../knockoutjs_require/scripts/jsnlog',
        'models/todo': '../../../knockoutjs_require/js/models/todo',
        'viewmodels/todo': '../../../knockoutjs_require/js/viewmodels/todo',
        'config/global': '../../../knockoutjs_require/js/config/global'
    }
});