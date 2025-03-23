function sayHello() {
    let input = document.getElementById("userInput").value;

    let p = document.createElement("p"); 

    p.innerHTML = `Hello, ${input}!`;
    document.body.appendChild(p); 

    let tipBox = document.getElementById("securityTip"); 
    if (input.toLowerCase().includes("<script>") || input.includes("<\script>")) {
        tipBox.style.display = "block"; 
    } else { 
        tipBox.style.display = "none";    }
    
    //Allows for a web browser to send a post request behind the scenes and why bad input can travel with it if not cleaned up
    let httpBox = document.getElementById("httpRequestBox"); 

    let fakeRequest = `POST /submit-name HTTP/1.1
Host: demo.cybersec.local
Content-Type: application/x-www-form-urlencoded

name=${encodeURIComponent(input)}`;

httpBox.textContent = fakeRequest;

//<script>alert("XSS!")</script> - malicious cross site script
}
