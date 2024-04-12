const year = document.querySelector("#year");

fetch("https://whatyearisit-backend-lilac-eta.vercel.app/year")
  .then((r) => r.json())
  .then((data) => {
    year.textContent = data.year;
  });
