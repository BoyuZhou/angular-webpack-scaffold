var angular = require('angular');
var uiRouter = require('angular-ui-router');
var router = require('./router');
var home = require('./home');

angular.module('app', [uiRouter, home]);

angular.module('app').config(router);