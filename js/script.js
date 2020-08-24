{

  const bigCityImg = document.querySelector('.beginning__img');
  const smallCityImg = document.querySelector('.society__city');
  const littleCityImg = document.querySelector('.power__city');

  const navListImg = document.querySelector('.nav__list--link--img')

  const btnHelmet = document.querySelector('.btn-helmet')
  let helmetStatus = false;

  const btnVest = document.querySelector('.btn-vest')
  let vestStatus = false;

  const btnPants = document.querySelector('.btn-pants')
  let pantsStatus = false;

  const btnBoots = document.querySelector('.btn-boots')
  let bootsStatus = false;

  let audio = document.getElementById("audio");
  let soundStatus = true;

  const init = () => {


    swal({
      title: "Mag er achtergrond muziek afgespeeld worden?",
      icon: "info",
      buttons: ["Liever niet", "Tuurlijk!"],
    })
    .then((willDelete) => {
      if (willDelete) {
        audio.play()
        soundStatus === true;
      } else {
        audio.pause();
        soundStatus === false;
        handleSoundToggle();
      }
    });


   
    bigCityImg.addEventListener('click', handleClickBigCityImg);
    smallCityImg.addEventListener('click', handleClickSmallCityImg);
    littleCityImg.addEventListener('click', handleClickLittleCityImg);
    document.querySelector('.intro__scroller').addEventListener('click', handleScrollClick)
    btnHelmet.addEventListener('click', handleClickHelmet)
    btnVest.addEventListener('click', handleClickVest)
    btnPants.addEventListener('click', handleClickPants)
    btnBoots.addEventListener('click', handleClickBoots)
    document.querySelector('.footernav__list--link-scroll').addEventListener('click', handleScrollToTop)
    navListImg.addEventListener('click', handleSoundToggle)
  }

  const handleSoundToggle = () => {
    soundStatus = !soundStatus;
    
    
    if(soundStatus === false){
      audio.pause()
      navListImg.src = "assets/svg/soundOff.svg";
    }else if(soundStatus === true){
      audio.play()
      navListImg.src = "assets/svg/soundOn.svg";
    }

  }

  const handleClickLittleCityImg = () => {
    if(littleCityImg.id === "noFire"){
      littleCityImg.src = "assets/png/littleCity.png";
      littleCityImg.id = "Fire"
    }else if(littleCityImg.id === "Fire"){
      littleCityImg.src = "assets/gif/cityFire.gif";
      littleCityImg.id = "noFire"
    }
  }



  const handleClickPants = () => {
    
    pantsStatus = !pantsStatus;
    if(pantsStatus === true){
      document.querySelector('.firemen__pants').style.display = "block";
      btnPants.style.backgroundColor = "white";
      btnPants.style.color = "black";
    }else if(pantsStatus === false){
      document.querySelector('.firemen__pants').style.display = "none";
      btnPants.style.backgroundColor = "black";
      btnPants.style.color = "white";
    }
  }

  const handleClickBoots = () => {
    bootsStatus = !bootsStatus;
    if(bootsStatus === true){
      document.querySelector('.firemen__boots').style.display = "block";
      btnBoots.style.backgroundColor = "white";
      btnBoots.style.color = "black";
    }else if(bootsStatus === false){
      document.querySelector('.firemen__boots').style.display = "none";
      btnBoots.style.backgroundColor = "black";
      btnBoots.style.color = "white";
    }
  }

  const handleClickHelmet = () => {
    helmetStatus = !helmetStatus;
    if(helmetStatus === true){
      document.querySelector('.firemen__helmet').style.display = "block";
      btnHelmet.style.backgroundColor = "white";
      btnHelmet.style.color = "black";
    }else if(helmetStatus === false){
      document.querySelector('.firemen__helmet').style.display = "none";
      btnHelmet.style.backgroundColor = "black";
      btnHelmet.style.color = "white";
    }
  }

  const handleClickVest = () => {
    vestStatus = !vestStatus;
    if(vestStatus === true){
      document.querySelector('.firemen__vest').style.display = "block";
      btnVest.style.backgroundColor = "white";
      btnVest.style.color = "black";
    }else if(vestStatus === false){
      document.querySelector('.firemen__vest').style.display = "none";
      btnVest.style.backgroundColor = "black";
      btnVest.style.color = "white";
    }
  }

  const handleScrollClick = () => {
    window.scrollTo({
      top: 200,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleClickBigCityImg = () => {
    if(bigCityImg.id === "noFire"){
      bigCityImg.src = "assets/gif/cityFire2.gif";
      bigCityImg.id = "Fire"
    }else if(bigCityImg.id === "Fire"){
      bigCityImg.src = "assets/png/city.png";
      bigCityImg.id = "noFire"
    }
  }

  const handleClickSmallCityImg = () => {
    if(smallCityImg.id === "noFire"){
      smallCityImg.src = "assets/gif/cityFire3.gif";
      smallCityImg.id = "Fire"
    }else if(smallCityImg.id === "Fire"){
      smallCityImg.src = "assets/png/city2.png";
      smallCityImg.id = "noFire"
    }
  }

  init();
}


