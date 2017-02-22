angular.module('applicationCtrl', ['applicationService'])

.controller('ApplicationController', function(Application){

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

.controller('ApplicationTask', function(Application){
	
	var vm = this;

	vm.pageTitle = "Application page";

	vm.createApplication = function(){

		console.log(vm.appData);

		/*App.createApplication()
			.success(function(data){
				vm.
			})*/
	}
	
})
