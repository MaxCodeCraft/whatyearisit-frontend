function getYear() {
  fetch("http://localhost:3000/year/")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#year").textContent = data.year;
    });
}

getYear();
