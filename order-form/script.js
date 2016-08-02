function OrderFormController($scope){



	$scope.services = [
		{
			name: 'Frontend',
			price: 400,
			active:true
		},{
			name: 'Design',
			price: 400,
			active:false
		},{
			name: 'Integration',
			price: 250,
			active:false
		},{
			name: 'Backend',
			price: 420,
			active:false
		},{
			name: 'Manager',
			price: 359,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	

	$scope.total = function(){

		var total = 0;

		

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}
