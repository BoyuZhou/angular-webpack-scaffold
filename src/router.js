function router ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}
router.$inject = ['$stateProvider', '$urlRouterProvider'];

module.exports = router;