// Test cases

describe('Scan&Reveal Game', () =>{
   
    it('should scan QR code and increase the count', () => {
        // create instance of the factory function
        let game = RevealGame();

        //simulate scanning QR Code 1

        // Assert that scanning QR Code 1 once increases count
        assert.strictEqual(game.getScannedQRCodeCount, 1)

    });

    it('should not scan the same QR code twice', () => {
        // create instance of the factory function
        let game = RevealGame();

        //simulate scanning QR Code 1 twice, meaning we calling the fucntion that scans QR Code twice

        // Assert that scanning QR Code 1 twice does not increase count
        assert.strictEqual(game.getScannedQRCodeCount, 1)
    });
});