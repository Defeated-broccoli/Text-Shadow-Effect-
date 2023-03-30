const hero = document.querySelector('.hero');
    const text = hero.querySelector('h1');

    const textY = text.offsetTop + text.offsetHeight / 2;
    const textX = text.offsetLeft + text.offsetWidth / 2;

    function shadow(e) {

      const mouseY = e.clientY;
      const mouseX = e.clientX;

      const lengthY = textY - mouseY;
      const lengthX = textX - mouseX;

      const distance = Math.sqrt(Math.pow(lengthY, 2) + Math.pow(lengthX, 2));
      console.log(distance);

      text.style.textShadow = `${lengthX / 10}px ${lengthY / 10}px 0 rgba(0, 0, 0, ${1 / distance * 100})`;
    }

    hero.addEventListener('mousemove', shadow);

