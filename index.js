
const time = document.querySelector('#time')

const showRemainingTime = () => {
    setInterval(() => {
        const targetDate = new Date("March 17 2024")
        const now = Date.now()
        console.log(now, 'now')
        const timeToMy18thBirthday = new Date(targetDate.getTime() - now)
        
        const month = timeToMy18thBirthday.getMonth()
        const day = timeToMy18thBirthday.getDate()
        const hour = timeToMy18thBirthday.getHours()
        const minute = timeToMy18thBirthday.getMinutes()
        const second = timeToMy18thBirthday.getSeconds()

        const formatedMonth = month < 10 ? '0' + month : month
        const formatedDay = day < 10 ? '0' + day : day
        const formatedHour = hour < 10 ? '0' + hour : hour
        const formatedMinute = minute < 10 ? '0' + minute : minute
        const formatedSecond = second < 10 ? '0' + second : second
        
        const formatedTime = `
        ${formatedMonth}m
        ${formatedDay}d
        ${formatedHour}h
        ${formatedMinute}m
        ${formatedSecond}s`
        time.innerHTML = `
        <div>
            <h1>${formatedTime}</h1>
        </div>`
    }, 1000)
}