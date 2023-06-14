const generatememeBtn = document.querySelector(".meme_gen_btn");
const memeImg = document.querySelector(".memeimg");
const memeTitl = document.querySelector(".meme_title");

//generate meme
const updateDetail = (url, title) => {
  memeImg.setAttribute("src", url);
  memeTitl.innerHTML = title;
};
const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((resp) => resp.json())
    .then((data) => {
      updateDetail(data.url, data.title);
    });
};

generatememeBtn.addEventListener("click", generateMeme);
