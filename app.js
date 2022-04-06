// const btns = document.querySelectorAll('.btn');
// const value = document.getElementById('value');
// let count = 0;

// btns.forEach((btn) => {
//     btn.addEventListener('click', (event) => {
//         if (event.target.classList.contains('decrease')) {
//             count -= 1;
//         } else if (event.target.classList.contains('increase')) {
//             count += 1;
//         } else {
//             count = 0;
//         }
       
//         if (count < 0) {
//             value.style.color = 'red';
//         } else if (count > 0) {
//             value.style.color = 'green';
//         } else {
//             value.style.color = 'black'; 
//     }
//         value.textContent = count;
//     })
// });

$(document).ready(function () {
    const btns = $(':button');
    const value = $('#value');
    let count = 0;

    btns.each(function(){
        $(this).on('click', function(event){
            const btn = $(this);
            
            if (btn.hasClass('decrease')) {
                count -= 1;
            } else if (btn.hasClass('increase')) {
                count += 1;
            } else {
                count = 0;
            }

            if (count > 0) {
                value.css('color', 'green');
            } else if (count < 0) {
                value.css('color', 'red');
            } else {
                value.css('color', 'black');
            }
            value.text(count)
        });
    });
});