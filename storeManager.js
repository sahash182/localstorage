
$(function() {

var storeManager = function () { //global scope
  
var setItem = function () {
  //get data from the form and saving it to the localStorage
  $("#submit-person").on("click", function() {

        // data from the form
        var personObject = {
          FirstName : $("#FirstName").val(),
          LastName : $("#LastName").val(),
          timestamp : new Date().getTime().toString()
        };
        var setTime = new Date().getTime().toString();// setiing time for setting into localstorge
        // Put the object into storage
        localStorage.setItem('FirstName', FirstName.value);
        localStorage.setItem('LastName', LastName.value);
        console.log(personObject);



//////////////save it for differernt instances///////////////////////

        //data created from the constructor
        // function Person (FirstName, LastName) {
        //   this.FirstName = FirstName,
        //   this.LastName = LastName
        // };

        // //creating instances of the person Object
        // var p1 = new Person ("James", "Bond");
        // var p2 = new Person ("Albert", "Eiestien");

        // // Put the object into storage
        // localStorage.setItem('p1', JSON.stringify(p1));
        // console.log(p1);
        // // Put the object into storage
        // localStorage.setItem('p2', JSON.stringify(p2));
        // console.log(p2);

    });
};

setItem();

// logic to store with time
//setting the new time and check the time from before and remove if the time is out 
// var deleteTime = new Date().getTime().toString()
// if (setTime - deleteTime !<= 60){
//   localStorage.clear();
// };

//getting item from localstorage

var getItem = function () {
  $("#get-person").on("click", function() {
        //saving it from the form 
        var getPersonFirst = localStorage.getItem('FirstName');
        var getPersonLast = localStorage.getItem('LastName');
        document.write("<h2>" + getPersonFirst + " " + getPersonLast + "</h2>");

    //////////getting the above commented instances////////////////////
        // var getPerson = localStorage.getItem('p1');
        // console.log(getPerson);
        // document.write("<h2>" + getPerson + "</h2>");
        // var getPerson2 = localStorage.getItem('p2');
        // console.log(getPerson2);
        // document.write("<h2>" + getPerson2 + "</h2>");
    });
};

getItem();

//clearing the local Storage
var removeItem = function () {
  $("#clear-storage").on("click", function() {
      localStorage.clear();
      alert("local Storage is now empty");
  });
};

removeItem();

};
// $("#clear-storage").on("click", function () {
//   localStorage.clickcount = 0;
//   localStorage.clickcount = Number (localStorage.clickcount) +1; 
//   console.log(localStorage.clickcount);

// })
// localStorage.clickcount + "time(s)."; 
storeManager();
    
});


  