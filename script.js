fetch("https://whatyearisit-backend-lilac-eta.vercel.app/year/")
  .then((r) => r.json())
  .then((data) => {
    document.querySelector("#year").textContent = data.year;
  });
