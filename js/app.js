var app = angular.module('movieApp',[]);

app.controller("MainController", function($scope, $http){
	$scope.searchQuery = '';
	$scope.toggle = true;
	$scope.displayVisible = false;

	$scope.startSearch = function(searchQuery){
		$scope.toggle = false;
		$scope.displayVisible = true;
		var searchUrl = "http://www.omdbapi.com/?s=" + searchQuery;
		
		movieQueryRequest = $http({
			method: 'GET',
			url: searchUrl
		})
		.then(function(searchResponse){
			var movies = searchResponse.data.Search;
			$scope.movies = movies;
		});
	};

	$scope.showMovie = function(movie){
		$scope.movieTitle = movie.Tille;
		$scope.toggle = false;
		$scope.displayVisible = false;

		var searchTitleUrl = "http://www.omdbapi.com/?i=" + movie.imdbID;

		movieQueryRequest = $http({
			method: 'GET',
			url: searchTitleUrl
		})
		.then(function(searchResponse){
			var showMovieDetail = searchResponse.data;
			$scope.movieDetails = showMovieDetail;
			$scope.searchQuery = '';
		});
	};

	$scope.toggleVisibility = function() {
    	$scope.toggle = !$scope.toggle;
  	};

});