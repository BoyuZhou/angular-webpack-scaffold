function router($stateProvider) {
    $stateProvider.state(
        '/', {
           url: '/home',
            controller: 'homeController as vm',
            template: require('./home.html')
        }
    )
};

router.$inject = ['$stateProvider'];

module.exports = router;
