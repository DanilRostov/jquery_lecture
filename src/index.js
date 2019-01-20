$(document).ready(() => {
  toggleDropDown();
  smoothScroll();
  registerSlider();
  openModal();
  validateForm();
});

function toggleDropDown() {
  $('.drop-down').on('click', function () {
    $('.drop-down-list').toggle();
  });
}

function smoothScroll() {
  $('a').on('click', function () {
    const element = $(this).attr('href');
    const destination = $(element).offset().top;
    $('html').animate({ scrollTop: destination }, 600);
  });
}

function registerSlider() {
  new Swiper('.slider', {
    effect: 'cube',
    speed: 400,
    loop: true,
    spaceBetween: 100,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    }
  });
}

function openModal() {
  let destination;
  $('.modal-open').on('click', function() {
    destination = $(window).scrollTop();
    $('.card-modal').fadeIn();
    $('body').addClass('position-fixed');
  });
  $('.modal-close').on('click', function () {
    $('.card-modal').fadeOut();
    $('body').removeClass('position-fixed');
    $('html, body').animate({ scrollTop: destination }, 100);
  });
}

function validateForm() {
  $('.form-item').on('change', function() {
    const name = $('#name');
    const phone = $('#phone');
    const privacy = $('#privacy');
    if (name.val().length > 3 && phone.val().length > 5 && privacy.prop('checked')) {
      $('.send-btn').prop("disabled", false);
    } else {
      $('.send-btn').prop("disabled", true);
    }
  })
}