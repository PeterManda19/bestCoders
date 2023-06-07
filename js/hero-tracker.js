// Define factory function
function HeroTracker(){
    // Create player objects
    let player1 = {
        name:'', // Player 1 name
        qrCode: null, // Player 1 QR code image
        superhero: null // Player 1 assigned superhero
    };

    let player2 = {
        name:'', // Player 2 name
        qrCode: null, // Player 2 QR code image
        superhero: null // Player 2 assigned superhero
    };

    // Method to set Player1's name
    function setPlayer1Name (name){
        player1.name = name;
    }
    
    // Method to set Player2's name
    function setPlayer2Name (name){
        player2.name = name;
    }

    // Method to set Player1's QR code image
    function setPlayer1QRCode (qrCodeImage){
        player1.qrCode = qrCodeImage;
    }

    // Method to set Player2's QR code image
    function setPlayer2QRCode (qrCodeImage){
        player2.qrCode = qrCodeImage;
    }

    function getPlayer1Name (){
        return player1.name;
    }

    function getPlayer2Name (){
        return player2.name;
    }

    function getPlayer1QRCode (){
        return player1.qrCode;
    }

    function getPlayer2QRCode (){
        return player2.qrCode;
    }

    // Method to start game
    function startGame(){
        // Call function to Scan QR codes and assign superheroes to players
        scanQRCode(player1, player1.qrCode);
        scanQRCode(player2, player2.qrCode);

        // Check mission success
        if (checkMissionSuccess) {
            alert('Mission Successful! The mission was a success because...');
        } else {
            alert('Mission Failed! The mission failed because...');
        }

    }


    function scanQRCode(player, qrCodeImage){
        // Scan the QR code image and extract the superhero data
        // Assign the extracted data to the respective player's superhero
        // Implement the QR code scanning logic

        const superheroData = {
            name: "Superhero name",
            location: 'Superhero Location'
        };

        player.superhero =superheroData;
    }

    function checkMissionSuccess(){
        // Check if player2's superhero has the ability to rescue player1's superhero
        // Implement the logic using conditional statements
        if (
            (player1.superhero.location === 'Earth' && player2.superhero.location === 'Mars') ||

            ((player1.superhero.location === 'Venus' && player2.superhero.location === 'Mercury') ||
            (player1.superhero.location === 'Mercury' && player2.superhero.location === 'Venus')) ||

            ((player1.superhero.location === 'Jupiter' && player2.superhero.location === 'Saturn') ||
            (player1.superhero.location === 'Saturn' && player2.superhero.location === 'Jupiter')) ||

            ((player1.superhero.location === 'Neptune' && player2.superhero.location === 'Uranus') ||
            (player1.superhero.location === 'Uranus' && player2.superhero.location === 'Neptune'))  
        ){
            // return true if mission is success
            return true;
        }
        // return false if mission is unsuccessful
        return false;   
    }

    return {
        setPlayer1Name,
        setPlayer2Name,
        setPlayer1QRCode,
        setPlayer2QRCode,
        getPlayer1Name,
        getPlayer2Name,
        getPlayer1QRCode,
        getPlayer2QRCode,
        startGame
    }
}