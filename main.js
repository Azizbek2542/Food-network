document.querySelector('.svg2').onclick = function() {
    document.querySelector('.sidebar-cont').style.display = 'flex';
    document.body.style.overflow = 'hidden';
};

document.querySelectorAll('.sidebar-cont a').forEach(function(link) {
    link.onclick = function(e) {

        if (link.querySelector('.svg1')) {
            e.preventDefault();
        }

        document.querySelector('.sidebar-cont').style.display = 'none';
        document.body.style.overflow = '';
    };
});



document.querySelectorAll('.rate-prnt').forEach(rateCard => {
  const stars = rateCard.querySelectorAll('.star');

  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      stars.forEach((s, i) => {
        s.classList.toggle('active', i <= index);
      });
    });
  });
});


document.querySelector('.img18').onclick = function() {
  document.querySelector('.img18').style.animation = 'unset';
};



const modal = document.getElementById("modal-overlay");
const input = document.getElementById("order-input");
const cancelBtn = document.getElementById("order-cancel");
const submitBtn = document.getElementById("order-submit");

const confirmModal = document.getElementById("confirmation-overlay");
const confirmText = document.getElementById("confirm-text");
const FirstConfirmText = document.getElementById("first-confirm-text");
const confirmYes = document.getElementById("confirm-yes");
const confirmNo = document.getElementById("confirm-no");

const resultModal = document.getElementById("result-overlay");
const resultText = document.getElementById("result-text");
const resultOk = document.getElementById("result-ok");

const form2 = document.querySelector('.menu-form');
const msg2 = document.getElementById("menu-count-msg");


const allOrderBtns = document.querySelectorAll("#prise-btn1, #prise-btn2, #prise-btn3, #prise-btn4, #prise-btn5, #prise-btn6");
let currentDishName = '';
let currentPrice = 0;

allOrderBtns.forEach(button => {
  button.onclick = () => {
    currentDishName = button.dataset.name;
    currentPrice = parseFloat(button.dataset.price);

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    input.style.borderRadius = '10px';
    input.value = "";
    input.focus();

    FirstConfirmText.innerHTML = `How many <span style=" color:orange; text-decoration: underline; font-style: italic;">${currentDishName}s</span> would you like to order?`;
  };
});



cancelBtn.onclick = () => {
  event.preventDefault();
  document.getElementById("modal-overlay").style.display = 'none';
  document.body.style.overflow = '';


   input.value = "";
  input.style.border = "";
};


submitBtn.onclick = (event) => {
  event.preventDefault();
  const value = parseInt(input.value.trim(), 10);

  if (!value || value < 1 || value > 99) {
    input.style.border = "2px solid red";
    input.focus();

    if (value > 99) {
      msg2.classList.add("active");
      setTimeout(() => {
        msg2.classList.remove("active");
        form2.reset();
        input.style.border = "";
      }, 2200);
    }

    return;
  }

  
  if (value > 1) {
    currentDishName +='s';
  }

  const currentCount = value;
  modal.style.display = 'none';
  document.body.style.overflow = '';

  confirmText.innerHTML = `<span style="font-weight: 700;">${currentCount}</span> <span style="color:orange; font-style: italic; font-weight:700; text-decoration: underline;">${currentDishName}</span> for a total of <span style="color:#2ecc71; font-weight:900;">${currentPrice * currentCount}$</span>. Would you like to order?`;
  confirmText.style.fontSize = '24px';
  confirmModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};


confirmYes.onclick = () => {
  confirmModal.style.display = 'none';
  resultText.innerText = "Your order has been received! ✅";
  resultText.style.fontSize = '24px';
  resultModal.style.display = 'flex';
};

confirmNo.onclick = () => {
  confirmModal.style.display = 'none';
  resultText.innerText = "Order has been cancelled!";
  resultText.style.fontSize = '24px';
  resultModal.style.display = 'flex';
};

resultOk.onclick = () => {
  resultModal.style.display = 'none';
  document.body.style.overflow = '';


  input.value = "";
  input.style.border = "";
};



document.addEventListener("DOMContentLoaded", () => {
  const errorButtons = document.querySelectorAll(".error-title");
  const footerMsg = document.getElementById("Footer-msg");

  errorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      footerMsg.classList.add("active");
      setTimeout(() => {
        footerMsg.classList.remove("active");
      }, 2200);
    });
  });
});
