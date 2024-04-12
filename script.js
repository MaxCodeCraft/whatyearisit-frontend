function getYear() {
  fetch("https://whatyearisit-backend-lilac-eta.vercel.app/year/")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#year").textContent = data.year;
    });
}

getYear();
