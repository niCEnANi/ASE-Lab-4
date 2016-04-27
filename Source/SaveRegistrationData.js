var registrationapp = angular.module("ServicesApp",[]);

registrationapp.controller("RegistrationController", function($scope,$window){
    $scope.logins = [];
    $scope.saveRegistrationData = function (first,last,email,user,pass,phone) {
		
        
        var Registration_details = localStorage.Registration_details?JSON.parse(localStorage.Registration_details):[];
            var Registration = JSON.stringify
            ({
                FirstName : first,
                LastName : last,
                EmailId : email,
                Password:pass,
                UserName: user,
                PhoneNumber: phone,

            });
            Registration_details.push(Registration);
            localStorage.setItem("Registration_details", JSON.stringify(Registration_details));
        
		//$scope.logins.push( localStorage.getItem("username") + " was logged in.");
		$window.location.href='Login.html';
    };
});