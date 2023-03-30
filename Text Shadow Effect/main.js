
    const hero = document.querySelector('.hero');
    const text = hero.querySelector('h1');
    const walk = 100; //100px;

    function shadow(e) {
      const { offsetWidth: width, offsetHeight: height } = hero;

      let { offsetX: x, offsetY: y } = e;

      if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }

      const xWalk = (x / width * walk) - (walk / 2);
      const yWalk = (y / height * walk) - (walk / 2);
      //x / width, makes it % of the total width of the page, times walk, so procentage is based on walk, then minus walk / 2 so it's from -50 to 50, not from 0 to 100;

      text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 red,
      ${xWalk * -1}px ${yWalk}px 0 blue,
      ${xWalk}px ${yWalk * -1}px 0 green,
      ${xWalk * -1}px ${yWalk * -1}px 0 yellow
       `;
    }



    hero.addEventListener('mousemove', shadow);

