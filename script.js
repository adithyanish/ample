function startProgress() {
    const progressBar = document.getElementById("progressBar");
    const toast = document.getElementById("toast");
    const startButton = document.getElementById("startButton");
    const closeButton = document.getElementById("closeButton");
    const offcanvasButton = document.getElementById("offcanvasButton");
    const progressValue = document.getElementById("progressValue");
    const offcanvasBottom = document.getElementById("offcanvasBottom");
    let width = 0;
    const duration = 20000; // Duration in milliseconds (2 minutes)
    const intervalTime = duration / 100; // Interval time for each percent

    closeButton.style.display = "block";
    startButton.style.display = "none";
    offcanvasButton.style.display = "block";
    progressBarContainer.style.display = "block";
    performClick();
    const interval = setInterval(frame, intervalTime);
    function frame() {
       if (width >= 100) {
          clearInterval(interval);
          showToast();
          if (offcanvasBottom.classList.contains('show')) {
             offcanvasButton.click();
          }
          progressBarContainer.style.display = "none";
          startButton.style.display = "block";
          closeButton.style.display = "none";
          offcanvasButton.style.display = "none";
       } else {
          width++;
          progressBar.style.width = width + "%";
          progressValue.textContent = width + "%";
       }
    }
    function performClick() {
    offcanvasButton.click();
    }
    function showToast() {
       toastr.success('Migrated Successfully', 'Success', {
       timeOut: 2000, 
       progressBar: true, 
       positionClass: 'toast-bottom-right', 
       closeButton: true,
       });

    }
 }