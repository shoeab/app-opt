angular.module('appRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider){

	$routeProvider
/*
		
		.when('/login', {

			templateUrl: 'app/views/pages/login.html'
		})

		.when('/signup', {

			templateUrl: 'app/views/pages/signup.html'
		})*/

		.when('/', {

			templateUrl: 'app/views/pages/project.html',
			controller: 'StoryController',
			controllerAs: 'main'
		})
		.when('/applications', {

			templateUrl: 'app/views/pages/app/application.html',
			controller: 'ApplicationController',
			controllerAs: 'application'
		})
		.when('/operations', {

			templateUrl: 'app/views/pages/opt/project.html',
			controller: 'OperationController',
			controllerAs: 'operation'
		})
		.when('/templates', {

			templateUrl: 'app/views/pages/tmplt/template.html',
			controller: 'TemplateController',
			controllerAs: 'template'
		})

	$locationProvider.html5Mode(true);
})