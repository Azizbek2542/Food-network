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

