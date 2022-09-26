window.addEventListener('DOMContentLoaded', setup)
function setup() {
    const options= {
        rootMargin: '0%'
    }

    const observer = new IntersectionObserver((entries,observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
                oberserver.unobserve(entry.target)
            } else {
                return;
            }
        })
    }, options);

    const h1 = document.querySelector('h1');
    observer.observe(h1);
}

// make it so that when h1 targets leaves observer sight, then the flexbox cards stagger and fade in



// const observer = new IntersectionObserver(function (entries) {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show')
//         }
//     });
// });


// const hiddenElements = document.querySelectorAll('hidden');
// observer.observe(document.querySelector(Element));