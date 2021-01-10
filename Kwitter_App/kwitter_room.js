
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDsP7fAmnprkJZcTNTzU1QRemeNQCDy3n4",
      authDomain: "kwitter-26eae.firebaseapp.com",
      databaseURL: "https://kwitter-26eae.firebaseio.com",
      projectId: "kwitter-26eae",
      storageBucket: "kwitter-26eae.appspot.com",
      messagingSenderId: "317406857882",
      appId: "1:317406857882:web:7095283d8f37d79311ad23",
      measurementId: "G-ERW5JWDT8L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
userName = localStorage.getItem("username");
document.getElementById("display_name").innerHTML = "Welcome " + userName + "!";
function a() {
      var rn = document.getElementById("room_no").value;
      firebase.database().ref("/").child(rn).update({ placeholder: ":^)" });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });

}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}



function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}