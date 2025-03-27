const heading = document.getElementById("textjalan");

setInterval(() => {
    const textColors = ["#ff5733", "#33ff57", "#3357ff", "#f39c12", "#8e44ad"];
    const randomColor = textColors[Math.floor(Math.random() * textColors.length)];
    heading.style.color = randomColor;
}, 1000);
