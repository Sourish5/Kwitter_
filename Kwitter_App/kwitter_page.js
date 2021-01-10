var image = "tick.png";
function image()
{
var number = Math.floor(Math.random*2);
if(number == 1)
{
image = "tick.png";
}
if(number == 2)
{
      image = "Purple_TIck.png";
}
}
//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function main() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message: msg,
            like: 0,
            name: userName
      });
      document.getElementById("msg").value = " ";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;

                        message = message_data['message'];
                        like = message_data['like'];
                        name = message_data['name'];
                        function image();

                        line_1 = "<h4>" + name + "<img src='" + image + "'class='user_tick'>" + "</h4>";

                        line_2 = "<h4 class='message_h4'>" + message + "</h4>";

                        line_3_1 = "<button class='btn btn-warning' id='" + firebase_message_id + "'value='" + like + "'onclick ='updateLike(this.id)'>";
                        line_3_2 = "<span class='glyphicon glyphicon-thumbs-up'>Like : " + like + "</span>";

                        row_page = line_1 + line_2 + line_3_1 + line_3_2;
                        document.getElementById("output").innerHTML += row_page;

                  }
            });
      });
}
getData();
function updateLike(message_id) {
      console.log("hii");
      console.log("clicked on like button - " + message_id); button_id = message_id;
      likes = document.getElementById(button_id).value; updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({ like: updated_likes });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
} 