let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function updateTime() {
    let newDate = new Date();
    $('.time').html(`${newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()}<span id='dottes'>:</span>${newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes()}`);
    $('.date').text(`${days[newDate.getDay()]} | ${month[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`);
}

// let dot = 0;
// function dotEffect() {
//     $('#dottes').text() == ':' ? $('#dottes').html('') : $('#dottes').text(':');
// }
$(document).ready(function () {
    updateTime();

    setInterval(updateTime, 1000);

    // let dotEffect = setInterval(function() {$('#dottes').fadeToggle();}, 900)
    // let dotEffect = setInterval(function() {$('#dottes').text() == ';' ? $('#dottes').html('&nbsp') : $('#dottes').text(':');}, 900)
    // setInterval(dotEffect(), 900);
})