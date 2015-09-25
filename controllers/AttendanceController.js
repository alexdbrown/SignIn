SignIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, CourseFactory){
  $scope.students = CourseFactory.students;
  $scope.CourseFactory = CourseFactory;
});
