
    const sendGiftCardBtn = document.getElementById("sendGiftCardBtn");
    const checkBalanceBtn = document.getElementById("checkBalanceBtn");
    const sendGiftCardForm = document.getElementById("sendGiftCardForm");
    const checkBalanceForm = document.getElementById("checkBalanceForm");

    sendGiftCardBtn.addEventListener("click", () => {
      sendGiftCardForm.style.display = "block";
      checkBalanceForm.style.display = "none";
    });

    checkBalanceBtn.addEventListener("click", () => {
      sendGiftCardForm.style.display = "none";
      checkBalanceForm.style.display = "block";
    });
  