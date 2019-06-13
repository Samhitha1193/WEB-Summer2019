angular.module('angularTodo', [])
        .controller('angularTodoC', function($scope) {
    $scope.items = [{todoText:'Complete Web ICP-4', done:false,remove:false }];
	$scope.completed = [];

    $scope.submitNewItem = function() {
        $scope.items.push({todoText:$scope.todoInput, done:false,remove:false});
        $scope.todoInput = "";
    };
	$scope.completeItem = function(index, from, to) {
            to.push(from[index]);
            from.splice(index, 1);
          };
    $scope.deleteItem = function() {
        var oldList = $scope.items;
        $scope.items = [];
        angular.forEach(oldList, function(x) {
            if(!x.remove)
			$scope.items.push(x);
        });
    };
	

});