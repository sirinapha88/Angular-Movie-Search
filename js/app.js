var app = angular.module('movieApp',[]);

app.controller("MainController", function($scope, $http){
	$scope.searchQuery = '';
	$scope.toggle1 = 'true';
	$scope.displayVisible = false;

	$scope.startSearch = function(searchQuery){
		var searchUrl = "http://www.omdbapi.com/?s=" + searchQuery;
		
		movieQueryRequest = $http({
			method: 'GET',
			url: searchUrl
		})
		.then(function(searchResponse){
			var movies = searchResponse.data.Search;
			// console.log(movies);
			$scope.movies = movies;
		});
	};

	$scope.showMovie = function(movie){
		$scope.movieTitle = movie.Tille;

		var searchTitleUrl = "http://www.omdbapi.com/?i=" + movie.imdbID;

		movieQueryRequest = $http({
			method: 'GET',
			url: searchTitleUrl
		})
		.then(function(searchResponse){
			var showMovieDetail = searchResponse.data;
			$scope.movieDetails = showMovieDetail;
		});
	};

	 $scope.toggleNewPostVisibility = function() {
    	$scope.visible = !$scope.displayVisible;
  	};


});