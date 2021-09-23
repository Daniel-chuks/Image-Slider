
(()=>{
  let image = [
      "pexels1",
      "pexels2",
      "pexels3"
    ]
  let img = document.querySelector('.imgSpace');
  const btn = document.querySelectorAll('.next, .prev');
  let counter = 0;
  
  btn.forEach(btns => {
    btns.onclick = () => {
      if (btns.classList.contains('prev')) {
        counter--;
        if (counter < 0) {
          counter = image.length - 1;
        }
        img.style.backgroundImage = 'url(src/' + image[counter] + '.jpeg)';
        console.log(img);
      }
      if (btns.classList.contains('next')) {
        counter++;
        if(counter > image.length - 1){
          counter = 0;
          console.log(counter);
        }
        img.style.backgroundImage = 'url(src/' + image[counter] + '.jpeg)';
        console.log(img);
      }
    }
  })
})()