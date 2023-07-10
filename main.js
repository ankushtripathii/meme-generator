const generatememeBtn = document.querySelector(".meme_gen_btn");
const memeImg = document.querySelector(".memeimg");
const memeTitl = document.querySelector(".meme_title");


//Generate meme function
const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((resp) => resp.json())
    .then((data) => {
      memeImg.setAttribute("src", data.url);
      memeTitl.innerHTML = data.title;
    });
};

generatememeBtn.addEventListener("click", generateMeme);
