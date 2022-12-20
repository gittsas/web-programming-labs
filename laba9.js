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

