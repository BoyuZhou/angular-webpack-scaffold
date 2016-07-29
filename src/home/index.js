var angular = require('angular');
var uiRouter = require('angular-ui-router');
var homeController = require('./home.controller');
var router = require('./router');


module.exports = angular
    .module('app.home',[uiRouter])
    .config(router)
    .controller('homeController', homeController).name;
