
var app = angular.module("instantSearch", []);



app.filter('searchFor', function(){

	

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		
		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});



function InstantSearchController($scope){



	$scope.items = [
		{
			url: 'https://hacks.mozilla.org/2014/08/building-interactive-html5-videos/',
			title: 'Building Interactive HTML5 Videos',
      image: ''
		},
		{
			url: 'https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4#.urlq0rhly',
			title: 'The Two Pillars of JavaScript — Pt 2: Functional Programming',
			image: ''
		},
		{
			url: 'https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3#.h969e9ccn',
			title: 'The Two Pillars of JavaScript Part 1: How to Escape the 7th Circle of Hell',
			image: ''
		},
		{
			url: 'https://css-tricks.com/sketchy-avatars-css-clip-path/',
			title: 'Sketchy Avatars with CSS clip-path',
			image: ''
		},
		{
			url: 'https://hacks.mozilla.org/2014/02/localforage-offline-storage-improved/',
			title: 'localForage: Offline Storage, Improved',
			image: ''
		},
		{
			url: 'http://alistapart.com/article/git-the-safety-net-for-your-projects',
			title: 'Git: The Safety Net for Your Projects',
			image: ''
		},
		{
			url: 'http://csswizardry.com/2015/06/subtleties-with-self-chained-classes/',
			title: 'Subtleties with Self-Chained Classes',
			image: ''
		}
	];


}
