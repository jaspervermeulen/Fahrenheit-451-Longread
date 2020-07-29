{

  const bigCityImg = document.querySelector('.beginning__img');
  const smallCityImg = document.querySelector('.society__city');

  const navListImg = document.querySelector('.nav__list--link--img')

  const btnHelmet = document.querySelector('.btn-helmet')
  let helmetStatus = false;

  const btnVest = document.querySelector('.btn-vest')
  let vestStatus = false;

  const btnPants = document.querySelector('.btn-pants')
  let pantsStatus = false;

  const btnBoots = document.querySelector('.btn-boots')
  let bootsStatus = false;


  let soundStatus = true;

  const init = () => {
    bigCityImg.addEventListener('click', handleClickBigCityImg);
    smallCityImg.addEventListener('click', handleClickSmallCityImg);
    navListImg.addEventListener('click', handleSoundToggle)
    document.querySelector('.intro__scroller').addEventListener('click', handleScrollClick)


    btnHelmet.addEventListener('click', handleClickHelmet)
    btnVest.addEventListener('click', handleClickVest)
    btnPants.addEventListener('click', handleClickPants)
    btnBoots.addEventListener('click', handleClickBoots)
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
      top: 850,
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

  const handleSoundToggle = () => {
    soundStatus = !soundStatus;
    console.log(soundStatus);

    if(soundStatus === false){
      navListImg.src = "assets/svg/soundOff.svg";
    }else if(soundStatus === true){
      navListImg.src = "assets/svg/soundOn.svg";
    }

  }

  init();
}