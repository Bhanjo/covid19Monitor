function loadCovid() {
    return fetch(
      "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
          "x-rapidapi-key": "53009286a0mshdc8ec356f7aa205p1e0e80jsn5858f548ed53",
        },
      }
    )
      .then((response) => response.json())
      .then((stat) => {
        coronaStat(stat);
      })
  
      .catch((err) => {
        console.log(err);
      });
  }
  
  let countriesStat;
  
  function coronaStat(stat) {
    countriesStat = stat.countries_stat;

    // countriesStat에 차례대로 id 부여
    for (i = 0; i < countriesStat.length; i++) {
      countriesStat[i].id = [i + 1];
    }
    const coronaStat = document.querySelector(".countryCovid");
    let coronaStatHTML = countriesStat
      .map((item) => {
        //   <span> ${item.id} : </span> 순위
        return `<div class="covidCountries"> ${item.country_name} </div>
      <div class="covidCase"> <a>${item.cases}<a> </div>`;
      })
      .join("");
    nowTime();
    coronaStat.innerHTML = coronaStatHTML;
  }
  
  loadCovid();