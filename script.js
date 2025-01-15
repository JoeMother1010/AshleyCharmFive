
  function copyWallet() {
    const walletAddress = "0x1234567890abcdef"; // Replace with actual wallet address
    navigator.clipboard.writeText(walletAddress).then(() => {
      alert("Wallet address copied to clipboard!");
    });
  }
  
