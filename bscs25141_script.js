function mypage()
{

    alert("Wecome to Wear aandd Carry")
}
document.addEventListener("DOMContentLoaded",function(){
    const yearSpan= document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    if(yearSpan){
        yearSpan.tectContent = currentYear;
    }
});
function mypage()
{
    var t;
    if(confirm("Press the button")){
        t="You pressed ok";
}else {
    t="You pressed cancel";
}

document.getElementById("page");
};

function mypage(){
let check=document.getElementById('pro1').textContent;

 if (text.toLowerCase().includes("in stock")) {
    alert("Item is stoke in");
}else{
    alert("Item is not stoke in");
}
document.getElementById("pro1")
}
function checkAvailability(id) {
       let ST = document.getElementById('pro1').textContent;
       if (ST.includes("In Stock")) {
             alert("Item is in stoke"); 
        } else {
           alert("Item is not in stoke");
            }
}
function validateEmail(Email){
let name=document.getElementById('name').value.trim(); 
let Email=document.getElementById('Email').value.trim();
if(name==""||Email==""){  
    alert("All fields are mandatory to be filled");
    return false;
}
     if(!Email.includes("@")){
        alert("Email must include '@'");
        return false;
     }
     alert("Email is valid ");
    return true;
}

    
    function sendMessage() {
      let input = document.getElementById("user-input").value.trim().toLowerCase();
      let chatbox = document.getElementById("chat-box");

      if (input === "") return; // do nothing on empty

      // Show user message
      let userMsg = document.createElement("p");
      userMsg.textContent = "You: " + input;
      userMsg.classList.add("user");
      chatbox.appendChild(userMsg);

      let botResponse = getBotResponse(input);
      let botMsg = document.createElement("p");
      botMsg.textContent = "Bot: " + botResponse;
      botMsg.classList.add("bot");
      chatbox.appendChild(botMsg);

      chatbox.scrollTop = chatbox.scrollHeight;

      document.getElementById("user-input").value = "";
    
    }
    function getBotResponse(input) {
      if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you today?";
      } else if (input.includes("how are you")) {
        return "Im just a bot, but Im doing great!";
      } else if (input.includes("bye")) {
        return "Goodbye! Have a great day!";
      } else if (input.includes("your name")) {
        return "Im your friendly chatbot .";
      } else {
        return "Sorry, I didnt understand that. Try saying hello!";
      }
    }
