angular.module('templateCtrl', ['templateService'])

.controller('TemplateController', function(Story){

	var vm = this;

	vm.pageTitle = "Template page";

	Story.allMyStory()
		.success(function(data){

			vm.stories = data;

		});

	vm.createStory = function(){

		vm.message = '';
		Story.create(vm.storyData)
			.success(function(data){

				vm.storyData = ''; /// clear up the form

				vm.message = data.message;

				vm.stories.push(data);
			});

	};

	
})

.controller('TemplateTask', function(Template, $scope){
	
	var vm = this;
	

	vm.createTemplate = function(){
		
		$scope.pairData = [];

		console.log(vm.tmpltData);
		console.log($scope.choices);

		angular.forEach($scope.choices, function(value, key) {
		  	console.log(value.key);

		  	var obj = {};
			obj[value.key] = value.name;
		  	$scope.pairData.push(obj);

		  	
		  	/*$scope.pairData.push({value.key+':'+value.name});*/
		});

		console.log($scope.pairData);
		/*App.createApplication()
			.success(function(data){
				vm.
			})*/
	}

	$scope.choices = [{id: 'choice1'}, {id: 'choice2'}];

	$scope.addNewChoice = function() {
	    var newItemNo = $scope.choices.length+1;
	    $scope.choices.push({'id':'choice'+newItemNo});
	};

	$scope.removeChoice = function() {
	    var lastItem = $scope.choices.length-1;
	    $scope.choices.splice(lastItem);
	};
	
})
