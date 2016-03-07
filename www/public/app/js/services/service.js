angular.module('app')
	.factory('Auth',['$http','$localStorage',function($http,$localStorage){
		return {
			username: '', //当前登录的用户名
			userrole: '', //当前登录的角色名
			userid:0,//当前登录的用户id
			//roleid: $localStorage.user? $localStorage.user.role_id:0,//当前登录的角色id
			roleid:function(){
				return $localStorage.user.role_id;
			},//当前登录的角色id
			roles: function () {
				console.log("获取角色列表");
				//return $http.get('/rest/role')
			},
			user: function (id) {
				console.log("获取当前用户");
				//return $http.get('/rest/user/' + id);
			},
			userRole: function (id,rid) {
				console.log("获取当前用户橘色");
				//return $http.get('/rest/user/' + id  + '/' + rid);
			},
			role: function (id) {
				//return $http.get('/rest/role/' + id);
			},
			roleUsers: function (id) {
				//return $http.get('/rest/role/' + id + '/users');
			},
			changePassword: function (originPassword, newPassword){
				//return $http.post('/rest/password', {
				//	originPassword: originPassword,
				//	newPassword: newPassword
				//});
			}
		};
	}])
	.factory('User', function($http) {
		return {
			addUser:function(data) {
				return $http({
					method:"post",
					url:"/rest/adduser",
					params:data
				});
			},
			getUser:function(uid) {
				return $http({
					method:"get",
					url:"/rest/person",
					params:{uid:uid}
				});
			},
			deleteUser:function(uid) {
				return $http({
					method:"post",
					url:"/rest/deleteuser",
					params:{uid:uid}
				});
			},
			resetPassword:function(uid){
				return $http({
					method:"put",
					url:"/rest/resetpassword",
					params:{uid:uid}
				});
			}
		};
	})
	.factory('Reasons',['$http',function($http){
		return{
			queryReasonName:function(term) {
				return $http({
					method:"get",
					url:'/public/app/api/adjustreason',
					params:{
						search:term
					}
				});
			}
		}
	}])
	.service('quicksearch',['$q','$http',function($q,$http){
		var data={};
		return{
			getData:function(id){
				var deferred=$q.defer();
				var path='/public/app/api/search';
				if (id) {
					path+='';
				};
				var promise=$http.get(path).then(function(response){
					return response;
				},function(response){
					return response;
				});
				return promise;
			}
		}
	}] )
	.service('worktipservice', ['$q','$http', function($q,$http){
		var data={};
		return{
			getData:function(id){
				var deferred=$q.defer();
				var path='/public/app/api/worktip';
				if (id) {
					path+='';
				};
				var promise=$http.get(path).then(function(response){
					return response;
				},function(response){
					return response;
				});
				return promise;
			}
		}
	}] )
	.service('worktipservice2', ['$q','$http', function($q,$http){
		var data={};
		return{
			getData:function(id){
				var deferred=$q.defer();
				var path='/public/app/api/worktip2';
				if (id) {
					path+='';
				};
				var promise=$http.get(path).then(function(response){
					return response;
				},function(response){
					return response;
				});
				return promise;
			}
		}

	}])
	.service('worktiplistservice', ['$q','$http', function($q,$http){
		var data={};
		return{
			getData:function(id){
				var deferred=$q.defer();
				var path='/public/app/api/worktiplist';
				if (id) {
					path+='';
				};
				var promise=$http.get(path).then(function(response){
					return response;
				},function(response){
					return response;
				});
				return promise;
			}
		}
	}])
	.service('worktiplistservice2', ['$q','$http', function($q,$http){
		var data={};
		return{
			getData:function(id){
				var deferred=$q.defer();
				var path='/public/app/api/worktiplist2';
				if (id) {
					path+='';
				};
				var promise=$http.get(path).then(function(response){
					return response;
				},function(response){
					return response;
				});
				return promise;
			}
		}
	}])
	.service('messageservice', ['$q','$http', function($q,$http){
		var data={};
		return{
			getData:function(id){
				var deferred=$q.defer();
				var path='/public/app/api/message';
				if (id) {
					path+='';
				};
				var promise=$http.get(path).then(function(response){
					return response;
				},function(response){
					return response;
				});
				return promise;
			}
		}

	}]).service('peoplelistservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			var path='/public/app/api/peoplelist';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}

}]).service('searchservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			var path='/public/app/api/searchlist';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}

}]).service('planlistservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			var path='/public/app/api/planlist';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}

}]).service('plandetailservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			var path='/public/app/api/plandetail';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}

}]).service('adjustlistservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			var path='/public/app/api/adjustlist';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}

}]).service('adjustreason', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			//var path='/public/app/api/adjustdetail';
			var path='/public/app/api/adjustreason';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}
}]).service('adjustdetailservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			//var path='/public/app/api/adjustdetail';
			var path='/public/app/api/adjustd2';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}
}]).service('searchguservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			var path='/public/app/api/searchgu';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}
}]).service('deploydanweiservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			var path='/public/app/api/deploydanwei';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}
}]).service('treeservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			var path='/public/app/api/tree';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				console.log(response);
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}
}]).service('userservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			var path='/public/app/api/userlist';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				console.log(response);
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}
}]).service('daimaservice', ['$q','$http', function($q,$http){
	var data={};
	return{
		getData:function(id){
			var deferred=$q.defer();
			var path='/public/app/api/daimalist';
			if (id) {
				path+='';
			};
			var promise=$http.get(path).then(function(response){
				console.log(response);
				return response;
			},function(response){
				return response;
			});
			return promise;
		}
	}
}]).factory('TableDatePage',['$filter',function($filter){
	var AngularDataTable = function(data) {

		var adt = {
			data: data,
			filteredData: {},
			filter: '',
			currentPage: 0,
			pageSize: 10,
			sortColumn: '',
			sortDescending: true,

			numberOfPages: numberOfPages,
			currentPageStart: currentPageStart,
			currentPageEnd: currentPageEnd,
			pages: pages,
			goToPage: goToPage,
			next: next,
			previous: previous,
			onFirstPage: onFirstPage,
			onLastPage: onLastPage,
			sort: sort,
			resetPaging: resetPaging
		};

		return adt;

		function numberOfPages() {
			return Math.ceil(this.filteredData.length / this.pageSize);
		};

		function currentPageStart() {
			return (this.currentPage * this.pageSize) + 1;
		};

		function currentPageEnd() {
			return Math.min((this.currentPage + 1) * this.pageSize, this.filteredData.length);
		};

		function pages() {
			var p = [];
			for (var i = 1; i <= this.numberOfPages() ; i++) {
				p.push(i);
			}
			return p;
		};

		function goToPage(page) {
			this.currentPage = page - 1;
		};

		function next() {
			if (!this.onLastPage()) this.currentPage += 1;
		};

		function previous() {
			if (!this.onFirstPage()) this.currentPage -= 1;
		};

		function onFirstPage() {
			return (this.currentPage === 0);
		};

		function onLastPage() {
			return (this.currentPage === this.numberOfPages() - 1);
		};

		function sort(column) {
			this.resetPaging();
			if (this.sortColumn === column) {
				this.sortDescending = !this.sortDescending;
			} else {
				this.sortColumn = column;
				this.sortDescending = false;
			}
		};

		function resetPaging() {
			this.currentPage = 0;
		}

	};
	return AngularDataTable
}])	.factory('Resource', ['$q', '$filter', '$timeout', function ($q, $filter, $timeout) {
	//var data={};
	//var randomsItems = [];
	//return{
	//	getData:function(id){
	//		var deferred=$q.defer();
	//		var path='/public/app/api/message';
	//		if (id) {
	//			path+='';
	//		};
	//		var promise=$http.get(path).then(function(response){
	//			return response;
	//		},function(response){
	//			return response;
	//		});
	//		return promise;
	//	}
	//}
	//this would be the service to call your server, a standard bridge between your model an $http

	// the database (normally on your server)
	var randomsItems = [];

	function createRandomItem(id) {
		var heroes = ['Batman', 'Superman', 'Robin', 'Thor', 'Hulk', 'Niki Larson', 'Stark', 'Bob Leponge'];
		return {
			id: id,
			name: heroes[Math.floor(Math.random() * 7)],
			age: Math.floor(Math.random() * 1000),
			saved: Math.floor(Math.random() * 10000)
		};

	}

	for (var i = 0; i < 1000; i++) {
		randomsItems.push(createRandomItem(i));
	}


	//fake call to the server, normally this service would serialize table state to send it to the server (with query parameters for example) and parse the response
	//in our case, it actually performs the logic which would happened in the server
	function getPage(start, number, params) {

		var deferred = $q.defer();

		var filtered = params.search.predicateObject ? $filter('filter')(randomsItems, params.search.predicateObject) : randomsItems;

		if (params.sort.predicate) {
			filtered = $filter('orderBy')(filtered, params.sort.predicate, params.sort.reverse);
		}

		var result = filtered.slice(start, start + number);

		$timeout(function () {
			//note, the server passes the information about the data set size
			deferred.resolve({
				data: result,
				numberOfPages: Math.ceil(filtered.length / number)
			});
		}, 1500);


		return deferred.promise;
	}

	return {
		getPage: getPage
	};

}]);