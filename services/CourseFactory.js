SignIn.factory('CourseFactory', function CourseFactory(){
  var factory = {};
  factory.students = [{ name: 'Jerry Seinfeld', signedIn: false },
                      { name: 'Elaine Benes', signedIn: false },
                      { name: 'Kramer', signedIn: false },
                      { name: 'George Costanza', signedIn: false },
                      { name: 'Newman', signedIn: false },
                      { name: 'Uncle Leo', signedIn: false },
                      { name: 'Larry David', signedIn: false }
                      ];

  factory.signIn = function(student) {
    if (student.signedIn == false) {
      student.signedIn = true;
    } else {
      student.signedIn = false;
    }
  }

  return factory;
});
