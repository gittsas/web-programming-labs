function Click1(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок'
}

function Click2(button) {
    if(button.innerHTML == 'Имя Артур')
        button.innerHTML = 'Фамилия Вайц';
    else
        button.innerHTML = 'Имя Артур'
}

function Click3(button){
    if(button.innerHTML == 'Имя Александр')
        button.innerHTML = 'Фамилия Тимошенский';
    else
        button.innerHTML = 'Имя Александр'    
}

function Click4(button){
    if(button.innerHTML == 'Нажми меня')
        button.innerHTML = 'Ещё раз нажми';

    else if(button.innerHTML == 'Ещё раз нажми')
        button.innerHTML = 'Ещё';

    else if(button.innerHTML == 'Ещё')
        button.innerHTML = 'Начать сначала';
    else
        button.innerHTML = 'Нажми меня'
}

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY;
    if(event.ctrlKey) {
        alert('Нажат Ctrl');
    }

    if (event.altKey) {
		alert('Нажат Alt');
    }

	if (event.shiftKey) {
		alert('Нажат Shift');
    }
}

window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
});

function showOne(tag) {
    tag.style.color = "red"

    if(tag.style.color = "red")
        span.style.fontsize = "25px";
    else
        ag.style.color = "red"
}