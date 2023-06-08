// Get all DOM elements
const player1Input = document.getElementById("player1Name");
const player2Input = document.getElementById("player2Name");
const startBtn = document.getElementById("startGameBtn");

// Create HeroTracker object
const heroTracker = HeroTracker();

// Function to start the game
function startGame() {
    // Get the values entered for player names
    const player1Name = player1Input.value;
    const player2Name = player2Input.value;

    // Check if both player names are entered
    if (player1Name && player2Name) {
        // Set player names
        heroTracker.setPlayer1Name(player1Name);
        heroTracker.setPlayer2Name(player2Name);

        // Start the game
        heroTracker.startGame();

        // Pause the scanner after starting the game
       // html5QrcodeScanner.pause();
    } else {
        // Display an error message or perform any other action
        alert("Please enter both player names!");
    }
}

// Event listener for start button
startBtn.addEventListener("click", startGame);

// Perform action for the scanner
function onScanSuccess(decodedText, decodedResult) {
    // Handle on success condition with the decoded text or result.
    // console.log(`Scan result: ${decodedText}`, decodedResult);
    console.log(decodedText);
    // console.log(decodedResult);

    // Set player QR code based on the decoded text
    if (decodedText == "https://github.com/PeterManda19/bestCoders/tree/gh-pages/images") {
        heroTracker.setPlayer1QRCode(decodedText);
    } else {
        heroTracker.setPlayer2QRCode(decodedText);
    }

    setTimeout(function() {
        html5QrcodeScanner.resume();
    }, 1000);
    // Pause the scanner again after resume
    // html5QrcodeScanner.pause();
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

html5QrcodeScanner.render(onScanSuccess);
