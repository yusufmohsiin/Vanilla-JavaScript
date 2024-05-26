document.getElementById("submit-btn").addEventListener("click", function () {
    sendToChatGPT();
  });
  

  function sendToChatGPT() {
    let value = document.getElementById("word-input").value;
  
    let body = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: value }],
      tempreture: "1",
    };