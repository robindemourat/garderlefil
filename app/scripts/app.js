'use strict';

/**
 * @ngdoc overview
 * @name garderlefilApp
 * @description
 * # garderlefilApp
 *
 * Main module of the application.
 */
angular
  .module('garderlefilApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularytics'
  ])
  .config(function ($routeProvider, AngularyticsProvider) {
    AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        title:'Accueil'
      })
      .when('/projet/chapitre1', {
        templateUrl: 'views/chapitre1.html',
        controller: 'Chapitre1Ctrl',
        title:'Le projet : chapitre 1'
      })
      .when('/projet/chapitre2', {
        templateUrl: 'views/chapitre2.html',
        controller: 'Chapitre2Ctrl',
        title:'Le projet : chapitre 2'
      })
      .when('/projet/chapitre3', {
        templateUrl: 'views/chapitre3.html',
        controller: 'Chapitre3Ctrl',
        title:'Le projet : chapitre 3'
      })
      .when('/projet/chapitre4', {
        templateUrl: 'views/chapitre4.html',
        controller: 'Chapitre4Ctrl',
        title:'Le projet : chapitre 4'
      })
      .when('/projet/chapitre5', {
        templateUrl: 'views/chapitre5.html',
        controller: 'Chapitre5Ctrl',
        title:'Le projet : chapitre 5'
      })
      .when('/projet/chapitre6', {
        templateUrl: 'views/chapitre6.html',
        controller: 'Chapitre6Ctrl',
        title:'Le projet : chapitre 6'
      })
      .when('/projet', {
        redirectTo : '/projet/chapitre1'
      })
      .when('/developement', {
        templateUrl: 'views/developement.html',
        controller: 'DevelopementCtrl',
        title:'Développement'
      })
      .when('/recherche/genese', {
        templateUrl: 'views/genese.html',
        controller: 'GeneseCtrl',
        title:'La recherche : genèse'
      })
      .when('/recherche/positionnement', {
        templateUrl: 'views/positionnement.html',
        controller: 'PositionnementCtrl',
        title:'La recherche : positionnement'
      })
      .when('/recherche/lecture_d_etude', {
        templateUrl: 'views/lecture_d_etude.html',
        controller: 'LectureDEtudeCtrl',
        title:'La recherche : la lecture d\'étude'
      })
      .when('/recherche', {
        redirectTo : '/recherche/genese'
      })
      .when('/les_memoires', {
        templateUrl: 'views/memoires.html',
        controller: 'MemoiresCtrl',
        title:'Les mémoires'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl',
        title:'Résumé'
      })
      .when('/recherche/une_anthropologie_de_la_lecture', {
        templateUrl: 'views/une_anthropologie_de_la_lecture.html',
        controller: 'UneAnthropologieDeLaLectureCtrl',
        title:'La recherche : une anthropologie de la lecture'
      })
      .when('/projet/vue_d_ensemble', {
        templateUrl: 'views/vue_d_ensemble.html',
        controller: 'VueDEnsembleCtrl',
        title:'Le projet : vue d\'ensemble'
      })
      .when('/a_propos', {
        templateUrl: 'views/a_propos.html',
        controller: 'APrpsCtrl',
        title:'À propos'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function(Angularytics) {
    Angularytics.init();
  });;
