angular.module('MyApp', ['appRoutes', 'storyService', 'storyCtrl', 'applicationService', 'applicationCtrl', 'operationService', 'operationCtrl', 'templateService', 'templateCtrl' ])

.config(function($httpProvider){

	//$httpProvider.interceptors.push('AuthInterceptor');

})