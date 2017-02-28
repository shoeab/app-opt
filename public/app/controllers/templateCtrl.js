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
	$scope.choices = Array;
	$scope.counter = Array;
	$scope.formCount = 1;

	$scope.increaseFormCount = function(op, index){
		if(op=='plus'){
			$scope.formCount += 1;
			$scope.choices[index] = [{id: 'choice1'}];
		}
		else if(op=='minus')
			$scope.formCount -= 1;
	}
	vm.createTemplate = function(){
		
		$scope.pairData = [];

		console.log(vm.tmpltData);
		console.log($scope.choices);

		angular.forEach(vm.tmpltData, function(value, key) {
			console.log(value);

			console.log($scope.choices[key]);
		});

		angular.forEach($scope.choices, function(value, key) {
		  	console.log(value.key);

		  	var obj = {};
			obj[value.key] = value.name;
		  	$scope.pairData.push(obj);

		  	
		  	// $scope.pairData.push({value.key+':'+value.name});
		});

		console.log($scope.pairData);
		/*App.createApplication()
			.success(function(data){
				vm.
			})*/
	}

	$scope.choices[0] = [{id: 'choice1'}, {id: 'choice2'}];

	$scope.addNewChoice = function(index) {
	    var newItemNo = $scope.choices[index].length+1;
	    $scope.choices[index].push({'id':'choice'+newItemNo});
	};

	$scope.removeChoice = function() {
	    var lastItem = $scope.choices.length-1;
	    $scope.choices.splice(lastItem);
	};
	
})
