function randomRange(min, max) {
  const rand = Math.random();
  const randomRange = Math.floor(rand * ((max - min) + 1)) + min;
  return randomRange;
}

const total = 200;
for (let i = 1; i <= total; i++) {
  const randomX = Math.random() * 0.0001 * window.innerWidth;
  const randomOffset = randomRange(-100000, 100000) * 0.0001 * window.innerWidth;
  const randomXEnd = randomX + randomOffset;
  const randomXEndYoyo = randomX + (randomOffset / 2);
  const randomYoyoTime = randomRange(30000, 80000) / 100000;
  const randomYoyoY = randomYoyoTime * window.innerHeight;
  const randomScale = Math.random() * 0.0001;
  const fallDuration = randomRange(10, 30) * 1000 + 'ms';
  const fallDelay = Math.random() * -3000 + 'ms';

  const element = document.createElement('div');
  element.classList.add('snow');
  element.style.opacity = Math.random();
  element.style.transform = `translate(${randomX}px, -10px) scale(${randomScale})`;
  element.style.animation = `fall-${i} ${fallDuration} ${fallDelay} linear infinite`;
  document.body.appendChild(element);

  const animationName = `fall-${i}`;
  const keyframes = `
    ${randomYoyoTime * 100}% {
      transform: translate(${randomXEnd}px, ${randomYoyoY}px) scale(${randomScale});
    }
    to {
      transform: translate(${randomXEndYoyo}px, ${window.innerHeight}px) scale(${randomScale});
    }
  `;
  const rule = `@keyframes ${animationName} { ${keyframes} }`;
  document.styleSheets[0].insertRule(rule, 0);
}