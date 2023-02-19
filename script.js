fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let icon = document.querySelectorAll("#icon");
    let category = document.querySelectorAll("#category");
    let score = document.querySelectorAll("#score");

    icon.forEach((element, index) => {
      element.src = data[index].icon;
    });

    category.forEach((element, index) => {
      element.innerHTML = data[index].category;
    });

    score.forEach((element, index) => {
      element.innerHTML = data[index].score;
    });
  })
  .catch((error) => console.log(error));
