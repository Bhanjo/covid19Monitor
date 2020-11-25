function nowTime() {
    const nowTime = document.querySelector(".setTime");
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();

    const date = `${year}년 ${month < 10 ? `0${month}` : `${month}`}월 ${ day < 10 ? `0${day}` : `${day}`}일 ${hour < 10? `0${hour}` : `${hour}`}:${minute < 10? `0${minute}` : `${minute}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
    return (nowTime.innerText = date);
}
setInterval(nowTime, 1000);