



function askingQuestions() {
  let answersArr = [];

  function asking(){ // this from task 05
    answersArr[0] = prompt("Please enter your username: " );
    answersArr[1] = prompt("Please enter your gender ?" , "male / female" );
    answersArr[2] = prompt("Please enter your age");
    answersArr[3] = prompt("How was your day?");
    answersArr[4] = prompt("did you finish you task ?");
    answersArr[5] = prompt("what was you name again ?");

    if (answersArr[2] <=0){
      alert("the age must be 1 or more")
  }
  let skip = "do you want to skip the welcoming message";
  if (confirm(skip) == false) {
    if (answersArr[1] == "male"){
        alert("hello Mr."+answersArr[0]);
    } else if (answersArr[1] == "female"){
        alert("hello Ms."+answersArr[0]);
    }else{
        alert("hello");
    }
  } 
  }

////////////////////////////////////////
  function invalde(answersArr){
  for (let i = 0 ; i < answersArr.length ; i++){
    if( answersArr[i] == ""){
      answersArr[i] ="invalid";
    }
  }
}
////////////////////////////////////////


////////////////////////////////////////
function printTheArray(answersArr){
  for (let i = 0 ; i < answersArr.length ; i++){
    console.log(answersArr[i]);
  }
}
////////////////////////////////////////

  asking()
  invalde(answersArr);
  printTheArray(answersArr);
}


