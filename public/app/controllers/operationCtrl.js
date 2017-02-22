angular.module('operationCtrl', ['operationService'])

.controller('OperationController', function(Story){

	var vm = this;

	vm.pageTitle = "Operation page";

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

.controller('OperationTask', function(Operation){
	
	var vm = this;


	vm.createOperation = function(){

		console.log(vm.optData);

		/*App.createApplication()
			.success(function(data){
				vm.
			})*/
	}
	
})