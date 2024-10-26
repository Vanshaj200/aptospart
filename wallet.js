document.getElementById('connectWallet').addEventListener('click', async function () {
    if (window.aptos) {
        try {
            const response = await window.aptos.connect();
            const walletAddress = response.address;
            alert(`Connected! Wallet Address: ${walletAddress}`);
        } catch (error) {
            console.error('Connection failed', error);
            alert('Failed to connect wallet. Please try again.');
        }
    } else {
        alert('Martian Wallet not found. Please install it to get started.');
    }
});
