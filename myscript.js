const countdown = document.querySelector(".countdown");

const interval= setInterval(() => {
    const deadline = new Date(2025,12,15,10,12,38);

    const current = new Date();
    
    const diff = deadline-current;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
     
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    
    const second = Math.floor((diff / (1000)) % 60)
    
    
    countdown.innerHTML = `
    <div data-content = "Days ">${days}</div>
    <div data-content = "Hours ">${hours}</div>
    <div data-content = "Minutes ">${minutes}</div>
    <div data-content = "Second ">${second}</div>
    
    `; 
}, 1000)


var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 500) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});







