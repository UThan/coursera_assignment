(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for(name in names){
    var firstletter = names[name].charAt(0);
    firstletter = firstletter.toLowerCase();

    if(firstletter === 'j'){
      byeSpeaker.speak(names[name]);
    } else {
      helloSpeaker.speak(names[name]);
    }
  }
})();