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
		/*----------------------------------------------*/
		.when('/applications', {

			templateUrl: 'app/views/pages/app/application.html',
			controller: 'ApplicationController',
			controllerAs: 'application'
		})
		.when('/application/create', {

			templateUrl: 'app/views/pages/app/create.html',
			controller: 'ApplicationController',
			controllerAs: 'application'
		})
		.when('/application/edit/:id', {

			templateUrl: 'app/views/pages/app/edit.html',
			controller: 'ApplicationController',
			controllerAs: 'application'
		})
		/*-----------------------------------------------*/
		.when('/operations', {

			templateUrl: 'app/views/pages/opt/operation.html',
			controller: 'OperationController',
			controllerAs: 'operation'
		})
		.when('/operation/create', {

			templateUrl: 'app/views/pages/opt/create.html',
			controller: 'OperationController',
			controllerAs: 'operation'
		})
		.when('/operation/edit/:id', {

			templateUrl: 'app/views/pages/opt/edit.html',
			controller: 'OperationController',
			controllerAs: 'operation'
		})
		/*------------------------------------------------*/
		.when('/templates', {

			templateUrl: 'app/views/pages/tmplt/template.html',
			controller: 'TemplateController',
			controllerAs: 'template'
		})
		.when('/template/create', {

			templateUrl: 'app/views/pages/tmplt/create.html',
			controller: 'TemplateController',
			controllerAs: 'template'
		})
		.when('/template/edit/:id', {

			templateUrl: 'app/views/pages/tmplt/edit.html',
			controller: 'TemplateController',
			controllerAs: 'template'
		})
		/*----------------------------------------------------*/

	$locationProvider.html5Mode(true);
})