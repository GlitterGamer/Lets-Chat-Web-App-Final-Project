const firebaseConfig = {
      apiKey: "AIzaSyCAG_nreydR_0kXt8yJYdMoqnenusdLW98",
  authDomain: "letschat-webapp-83fe9.firebaseapp.com",
  databaseURL: "https://letschat-webapp-83fe9-default-rtdb.firebaseio.com",
  projectId: "letschat-webapp-83fe9",
  storageBucket: "letschat-webapp-83fe9.appspot.com",
  messagingSenderId: "1014616392962",
  appId: "1:1014616392962:web:fef5c58685109a1090ae1b",
  measurementId: "G-FNFYRXLE1V"
    };
    firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE
username= localStorage.getItem("user_name")
document.getElementById("username").innerHTML= "Welcome "+ username+ "!"
function addRoom(){
      room_name= document.getElementById("roomName").value
      firebase.database().ref("/").child(room_name).update({
            purpose: "addingRoomName"
      })
      localStorage.setItem("room_name", room_name)
      window.location= "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      window.location= "index.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names) 
row= "<div class= 'room_name' id= "+Room_names+" onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
document.getElementById("output").innerHTML+= row
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name", name)
      window.location= "kwitter_page.html"
}
