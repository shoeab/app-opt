angular.module('applicationCtrl', ['applicationService'])

.controller('ApplicationController', function(Story){

	var vm = this;

	vm.pageTitle = "Application page";
	
	/*Story.allMyStory()
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

	};*/

	

		


})

.controller('ApplicationTask', function(Story){
	
	var vm = this;

	vm.pageTitle = "Application page";
	
})
