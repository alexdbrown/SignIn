SignIn.factory('CourseFactory', function CourseFactory(){
  var factory = {};
  factory.students = [{ name: 'Jerry Seinfeld', signedIn: False },
                      { name: 'Elaine Benes', signedIn: False },
                      { name: 'Kramer', signedIn: False },
                      { name: 'George Costanza', signedIn: False },
                      { name: 'Newman', signedIn: False },
                      { name: 'Uncle Leo', signedIn: False },
                      { name: 'Larry David', signedIn: False }];

  $scope.signIn = function(student {
    if (student.signedIn == false) {
      student.signedIn = true;
    } else {
      student.signedIn = false;
    }
  });

  return factory;
});
