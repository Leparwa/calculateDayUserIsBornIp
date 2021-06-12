// var cc= parseInt(prompt("enter the century") )
// var yy = parseInt(prompt("enter the year"))
// var mm = parseInt(prompt("enter the month"))
// var dd = parseInt(prompt("enter the day"))
// var cc = document.getElementById('century')

var maleAkanaNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", " Yaw", "kofi", "Kwame"]
var femaleAkanaNames=["akosua", "Adwoa", "Abenaa", "akua", "yaa", "afua", "ama"]

var form = document.getElementById('myForm')

form.addEventListener('submit', function calculate(event){
  event.preventDefault()
  let yy = document.getElementById('year').value
  let mm = document.getElementById('month').value
  let dd = document.getElementById('dateOfTheMonth').value
  let cc = document.getElementById('century').value
  let gender = document.getElementById('gender').value

  console.log("we are calculating" + dd)
 
  if(cc  >=  19 && cc <= 20)
  {
  let yourDayOfWeek = Math.round(
    (((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7
  )
  console.log(typeof(yourDayOfWeek))
  console.log(yourDayOfWeek)
  form.reset()
  // return Math.round(yourDayOfWeek)
  if(yourDayOfWeek === 1){
    console.log("value is 1")
    if (gender === 'male'){
      alert("your akana name is" + " " +maleAkanaNames[0])
    }
    else if(gender === "female"){
      prompt("your akana name is" + " "+ femaleAkanaNames[1])
    }
    else{
      alert("No Kwasi Name for you")
    }
  }
  else if(yourDayOfWeek === 2){
    if( gender ==="male"){
      alert("your akana name is" + " " +maleAkanaNames[1])
    }
     else if( gender == "female"){
    cprompt("your akana name is" + " " +femaleAkanaNames[1])
    }
    else{
      alert("No Kwasi Name for you")
    }
   
  }
 else if(yourDayOfWeek === 3){
    console.log("value is 3")
    if(gender =="male"){
      alert("your akana name is" + " "+maleAkanaNames[2])
    }
    else if( gender == "female"){
    console.log("your akana name is " + " "+femaleAkanaNames[2])
    }
    else{
      alert("No Kwasi Name for you")
    }
  }
  else if(yourDayOfWeek === 4){
     console.log("value is 4")
    if(gender =="male"){
      alert("your akana name is" + " "+maleAkanaNames[3])
    }
    else if( gender == "female"){
      alert("your akana name is " + " "+femaleAkanaNames[3])
    }
    else{
      alert("No Kwasi Name for you")
    }
  }
  else if(yourDayOfWeek === 5){
     console.log("value is 5")
    if(gender == "male"){
      alert("your akana name is" + " "+maleAkanaNames[4])
    }
    else if( gender == "female"){
      alert("your akana name is" + " "+ femaleAkanaNames[4])
    }
    else{
      alert("No Kwasi Name for you")
    }
  }
  else if(yourDayOfWeek === 6){
    if(gender == "male"){
      alert("your akana name is" + " "+ maleAkanaNames[5])
    }
   else if( gender == "female"){
    alert("your akana name is" + " "+femaleAkanaNames[5])
    }
    else{
      alert("No Kwasi Name for you")
    }
  }
 else if(yourDayOfWeek === 7){
    console.log("value is 7")
    if(gender == "male"){
      alert("your akana name is"  + ""+ maleAkanaNames[6])
    }
    else if( gender == "female"){
     
      alert("your akana name is " + ""+ femaleAkanaNames[6])
    }
    else{
      alert("No Kwasi Name for you")
    }
  }
else{
  alert("wrong calculation")
}
    // console.log("you proceed")
  }
 
  else{
    alert("input a valid century")
  }


}
)
