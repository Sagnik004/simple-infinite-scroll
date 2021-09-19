const container = document.querySelector('.container');

function loadImages(count = 20) {
  let i = 0;

  while (i < count) {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        const img = document.createElement('img');
        img.src = `${data.message}`;
        container.appendChild(img);
      })
      .catch(e => console.log(e));
    
    i++;
  }
}

window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadImages();
  }
});

loadImages();
