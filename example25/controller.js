var app = angular.module('staffCtrl',[]);

//define myController 
app.controller('staffController', function ($scope, $http, $timeout) {
    
    var base_url = 'http://localhost/staffs/api/';
    $scope.data = [];
    $scope.staffs = [];
    $scope.sortField = 'fname';
    $scope.reverse = true;

    $timeout(function () {
        $http.get(base_url + 'api_index.php').then(function (results) {
            //console.log(results);
            $scope.staffs = results.data.data;
        });
    }, 100);

    //Save Data
    $scope.submitForm = function (isValid) {

        if (isValid) {
            var config = {
                dataType: 'json',
                cache: false,
                timeout: 10000,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };
            var data = {
                'fname': $scope.data.fName,
                'lname': $scope.data.lName,
                'email': $scope.data.email,
                'phone': $scope.data.phone,
                'address': $scope.data.address,
                'gender': $scope.data.gender,
            };
            //$http.post(url,data,config)
            $http.post(base_url + 'api_add.php', data, config).then(function (res) {
                console.log(res.data);
                if (res.data.status == 'berjaya') {
                    //push data       
                    var staff = res.data;
                    $scope.staffs.push(
                        {
                            'id':staff.data.id,
                            'fname': staff.data.fname,
                            'lname': staff.data.lname,
                            'email': staff.data.email,
                            'phone': staff.data.phone,
                            'address': staff.data.address,
                            'gender': staff.data.gender
                        }
                    );

                }
            });

        } else {
            alert('Check error message.')
        }
    };



});