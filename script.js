window.onload = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Adjust delay time if needed (in milliseconds)
  };
  
  function copyWallet() {
    const walletAddress = "0x1234567890abcdef"; // Replace with actual wallet address
    navigator.clipboard.writeText(walletAddress).then(() => {
      alert("Wallet address copied to clipboard!");
    });
  }
  
  const endDiv = document.querySelector('.end');
  const lastImageDiv = document.querySelector('.lastImage');
  
  // Function to lock body scrolling
  function lockBodyScrolling() {
    document.body.style.overflow = 'hidden';
  }
  
  function expandLastImage() {
    // Get the initial bounding rectangle of the .lastImage div
    const rect = lastImageDiv.getBoundingClientRect();
  
    // Calculate the exact initial top and left positions relative to the viewport
    const initialTop = rect.top + window.scrollY;
    const initialLeft = rect.left + window.scrollX; // Shift 40px to the left
  
    // Preserve its current position before animation
    lastImageDiv.style.position = 'fixed';
    lastImageDiv.style.top = `${initialTop}px`;
    lastImageDiv.style.left = `${initialLeft}px`; // Adjusted left position
    lastImageDiv.style.width = `${rect.width}px`;
    lastImageDiv.style.height = `${rect.height}px`;
    lastImageDiv.style.transform = 'translate(0, 0) scale(1)'; // Ensure no transform offset
    lastImageDiv.style.transformOrigin = 'center center'; // Make sure it expands from its center
  
    // Allow layout stabilization before triggering animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // Lock body scrolling
        lockBodyScrolling();  
        // Start expand animation
        lastImageDiv.classList.add('expand');
        lastImageDiv.style.top = '60%';
        lastImageDiv.style.left = '50%';
        lastImageDiv.style.transform = 'translate(-50%, -75%) scale(3)'; // Adjusted to center at 75% of the height
      });
    });
  }
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        const endDivRect = entry.target.getBoundingClientRect();
        // Trigger the animation only when the **bottom** of the `.end` div is visible
        if (endDivRect.bottom <= window.innerHeight) {
          expandLastImage();
        }
      }
    },
    { threshold: 1.0 } // This ensures that 100% of the `.end` div is in view (i.e., its bottom is visible)
  );
  
  observer.observe(endDiv);
  