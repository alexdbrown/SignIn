DoOrDont.factory('AdviceFactory', function AdviceFactory(){
  var factory = {};
  factory.questions = [];
  factory.addQuestion = function () {
    factory.questions.push({ text: factory.question,
                             id: factory.questions.length + 1,
                             answers: [],
                             answered: false});
    factory.question = null;
  };


  return factory;
});
