
  function copyWallet() {
    const walletAddress = "3oUV7hiSriNJ3UxmoBs11ZQRZYUor8fXefokXfu7pump"; // Replace with actual wallet address
    navigator.clipboard.writeText(walletAddress).then(() => {
      alert("Wallet address copied to clipboard!");
    });
  }
  
