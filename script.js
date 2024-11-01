var daysEl = document.getElementById('days')
var hoursEl = document.getElementById('hours')
var minutesEl = document.getElementById('minutes')
var secondsEl = document.getElementById('seconds')
var countdownDateEl = document.getElementById('countDownDate')

function countdownTimer() {
    const countDownDate = new Date('2024-11-15T19:50').getTime()

    const formattedDate = new Date(countDownDate).toLocaleString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
    })
    countdownDateEl.innerText = `Counting down to: ${formattedDate}`


    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const interval = setInterval(() => {

    const now = new Date().getTime()
    const distance = countDownDate - now

    daysEl.innerText = formatNumber(Math.floor(distance / day))
    hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour))
    minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute))
    secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second))
    }, 500)
}

function formatNumber(number) {
    if(number < 10) {
        return '0' + number
    }
    return number
}

//Run Function
countdownTimer()