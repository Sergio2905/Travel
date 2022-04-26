const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const sections = document.querySelectorAll("section");


if (burger) {
    burger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');

        if (sections.length > 0) {
            for (let index = 0; index < sections.length; index++) {
                const section = sections[index];
                section.classList.toggle('blur')
            }
        }

        e.preventDefault();
    });
}
const menuLinks = document.querySelectorAll('.menu__link[data-target], .footer__link[data-target]');

if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", goToTarget);
    });

    function goToTarget(e) {
        const menuLink = e.target;
        if (menuLink.dataset.target && document.querySelector(menuLink.dataset.target)) {
            const targetBlock = document.querySelector(menuLink.dataset.target);
            const targetBlockValue = targetBlock.getBoundingClientRect().top + scrollY - document.querySelector(".header").offsetHeight;

            if (burger.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                burger.classList.remove('_active');
                menu.classList.remove('_active');

                if (sections.length > 0) {
                    for (let index = 0; index < sections.length; index++) {
                        const section = sections[index];
                        section.classList.remove('blur')
                    }
                }
            }

            window.scrollTo({
                top: targetBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }
}
const header = document.querySelector('.header');

if (header) {
    window.addEventListener("scroll", changeHeaderBg);
    changeHeaderBg();
}

function changeHeaderBg() {
    if (scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}
const ratings = document.querySelectorAll('.rating');

if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let index = 0; index < ratings.length; index++) {
        const rating = ratings[index];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);
        setRatingActiveWidth();
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
    }
}
const searchBtn = document.querySelector('.search-btn');
const searchClose = document.querySelector('.search__close');
const searchForm = document.querySelector('.search');

if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        searchForm.classList.add('active');
        document.body.classList.add('_lock');
        menu.classList.remove('_active');
        burger.classList.remove('_active');
    })
}

if (searchClose) {
    searchClose.addEventListener("click", function () {
        searchForm.classList.remove('active');
        document.body.classList.remove('_lock');
    })
}


const swiper = new Swiper('.main__slider', {
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const products = new Swiper('.products__items', {
    loop: true,
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 22,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        993: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

const reviews = new Swiper('.reviews__block', {
    loop: true,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 25,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        650: {
            slidesPerView: 2
        },
        993: {
            slidesPerView: 3
        },
    }
});

const blog = new Swiper('.blog__slider', {
    loop: true,
    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 53,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        993: {
            slidesPerView: 3
        },
    }
});

const partners = new Swiper('.partners__slider', {
    loop: true,
    grabCursor: true,
    slidesPerView: 4,
    autoplay: {
        delay: 1000,
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        993: {
            slidesPerView: 4
        },
    }
});