var Messages = function() {
  //htlm
  var newMessage = {};
  newMessage.text = document.getElementById("message").value;
  console.log(newMessage.text)
  newMessage.username = this.window.location.search.substr(10);
  console.log(newMessage.username);
  // newMessage.roomName = document.getElementById("roomname").value;
  //{username: username,
      //taxt: newmessage}
  return newMessage;
};