let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 
    'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg','img/15.jpg','img/16.jpg','img/17.jpg','img/18.jpg','img/19.jpg','img/20.jpg',
    'img/21.jpg','img/22.jpg','img/23.jpg','img/24.jpg','img/25.jpg'];
    

    function load() {
      for (let i=0; i<images.length; i++) {
        document.getElementById('allImages').innerHTML+= `
        <div onclick="openImage(${i})" id="singleImage" class="singleImage" style="background-image: url(${images[i]})"></div>
        `;
      }
    }


      function openImage(i) {
       document.getElementById('bigImagebody').classList.remove('d-none');
       document.getElementById('allImages').classList.add('d-none');
       document.getElementById('header').classList.add('d-none');
       document.getElementById('footer').classList.add('d-none');
       document.getElementById('hr').classList.add('d-none');
       document.getElementById('hr2').classList.add('d-none');
       document.getElementById('bigImagebody').innerHTML=addHTML(i);
      }

      
      function addHTML (i) {
         return `
        <div class="bigImageIconsContainer">
          <img class="arrows" src="img/arrowLeftEnd.svg" onclick="leftLastImage(${0})">
          <img class="arrows" src="img/arrowLeft.svg" onclick="leftImage(${i-1})">
          <div class="bigImageContainer"><img class="bigImage" id="bigImage" src=${images[i]}></div>
          <img class="arrows" src="img/arrowRight.svg" onclick="rightImage(${i+1})">
          <img class="arrows" src="img/arrowRightEnd.svg" onclick="rightLastImage(${images.length-1})"></img>
        </div>
        <div class="smallVersion">
        <img class="arrows2" src="img/arrowLeftEnd.svg" onclick="leftLastImage(${0})">
        <img class="arrows2" src="img/arrowLeft.svg" onclick="leftImage(${i-1})">
        <img class="exit" src="img/x.svg" onclick="closeImage(${i})">
        <img class="arrows2" src="img/arrowRight.svg" onclick="rightImage(${i+1})">
        <img class="arrows2" src="img/arrowRightEnd.svg" onclick="rightLastImage(${images.length-1})">
       </div>`;
      }


      function closeImage() {
        document.getElementById('bigImagebody').classList.add('d-none');
        document.getElementById('allImages').classList.remove('d-none');
        document.getElementById('header').classList.remove('d-none');
        document.getElementById('footer').classList.remove('d-none');
        document.getElementById('hr').classList.remove('d-none');
        document.getElementById('hr2').classList.remove('d-none');

      }


      function leftImage(i) {
        if (i>=0) {
        openImage(i);}
      }


      function rightImage(i) {
        if (i<images.length) {
        openImage(i);}
      }


      function leftLastImage(i) {
        openImage(i);
      }


      function rightLastImage(i) {
        openImage(i);
      }