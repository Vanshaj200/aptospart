async function connectMartianWallet() {
    if (window.martian) {
        try {
            const account = await window.martian.connect();
            console.log('Wallet Address:', account.address);
            alert('Connected: ' + account.address);
            // Save the wallet address in your backend database
        } catch (error) {
            console.error('Failed to connect:', error);
        }
    } else {
        alert('Please install Martian Wallet extension');
    }
}

//It’s an async function to connect to the Martian Wallet, handling the user's wallet authentication.