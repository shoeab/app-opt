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
