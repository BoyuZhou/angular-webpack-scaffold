homeController.$inject = ['$scope'];

function homeController ($scope) {
    var vm = this;
    vm.data = "我的梦想是世界和平！！！";
}
module.exports = homeController;