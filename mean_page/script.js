let question_1 = ['Ping pong player', 'Football player', 'Buisnessman', 'Volleyball Player']
const btns = document.querySelectorAll('.answer')

let count = 0

btns.forEach(btn => {
    btn.innerHTML = arr[count]
    count++
});