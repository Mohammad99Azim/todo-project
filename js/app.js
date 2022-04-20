function myFunction() {
  let  username = prompt("Please enter your username: " );
  let gender = prompt("Please enter your gender ?" , "male / female" );
  let age = prompt("Please enter your age");
  if (age <=0){
      alert("the age must be 1 or more we will do it again")
      myFunction();
      exit;
  }
  let skip = "do you want to skip the welcoming message";
  if (confirm(skip) == false) {
    if (gender == "male"){
        alert("hello Mr."+username);
    } else if (gender == "female"){
        alert("hello Ms."+username);
    }else{
        alert("hello");
    }
  } 
  
}


