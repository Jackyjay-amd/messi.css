function changeImage(imageNumber) {
  const image = document.getElementById("image");
  const description = document.getElementById("description");

  switch (imageNumber) {
    case 1:
      image.src = "messi1.jpg";
      description.textContent = "Lionel Messi scoring a stunning free kick.";
      break;
    case 2:
      image.src = "messi2.jpg";
      description.textContent = "Messi celebrating a goal with Barcelona.";
      break;
    case 3:
      image.src = "messi3.jpg";
      description.textContent = "Messi lifting the World Cup trophy.";
      break;
    default:
      break;
  }
}
