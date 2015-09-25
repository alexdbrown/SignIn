SignIn.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CourseFactory){
  $scope.students = CourseFactory.students;
  $scope.CourseFactory = CourseFactory;
});
