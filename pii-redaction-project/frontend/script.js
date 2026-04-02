async function sendMessage() {

    const input = document.getElementById("userInput").value;

    if (!input) {
        alert("Please enter a message");
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: input
            })
        });

        const data = await response.json();

        document.getElementById("safePrompt").innerText = data.safe_prompt;
        document.getElementById("response").innerText = data.response;

    } catch (error) {
        console.error("Error:", error);
        alert("Backend not running or connection error");
    }
}