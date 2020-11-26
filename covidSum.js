// 총 확진자
const totalCaseBox = document.querySelectorAll(".totalCaseBox");
const totalOutbreak = document.querySelectorAll(".totalOutbreak");
// 일별 총 확진자
const newCaseBox = document.querySelectorAll(".newCaseBox");

totalOutbreak[0].style.color = "#F82828";
totalOutbreak[0].style.border = "none";

fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "ea86afecfbmsh9a66bb64d745e64p1bc6d7jsnad6a7be28d7a"
    }
})
.then((response)=> {
    response.json().then((data) => {
        totalCaseBox[0].innerHTML = `${data.total_cases}`
        totalCaseBox[1].innerHTML = `${data.total_deaths}`
        totalCaseBox[2].innerHTML = `${data.total_recovered}`
        newCaseBox[0].innerHTML = `${data.active_cases}`
        newCaseBox[1].innerHTML = `${data.new_cases}`
        newCaseBox[2].innerHTML = `${data.new_deaths}`
    });
})
.catch((err)=> {
    console.log(err);
});