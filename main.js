javascript:(function(){
  // Remove existing if already present
  if (document.getElementById('dark-overlay')) {
    document.getElementById('dark-overlay').remove();
    document.getElementById('marquee-box').remove();
    return;
  }

  // Create dark overlay
  let overlay = document.createElement('div');
  overlay.id = 'dark-overlay';
  Object.assign(overlay.style, {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    zIndex: 9998
  });
  document.body.appendChild(overlay);

  // Create marquee box
  let box = document.createElement('div');
  box.id = 'marquee-box';
  Object.assign(box.style, {
    position: 'fixed',
    top: '100px',
    left: '100px',
    width: '300px',
    height: '200px',
    background: 'transparent',
    border: '2px solid black',
    boxSizing: 'border-box',
    zIndex: 9999,
    resize: 'both',
    overflow: 'auto',
    cursor: 'move'
  });
  document.body.appendChild(box);

  // Cut hole in overlay (so box is not dark)
  overlay.style.pointerEvents = 'none';
  overlay.style.backdropFilter = 'none';
  overlay.style.maskImage = `radial-gradient(circle at 150px 150px, transparent 0 150px, black 160px)`;
  overlay.style.webkitMaskImage = overlay.style.maskImage;

  // Dragging logic
  let offsetX, offsetY, dragging = false;
  box.addEventListener('mousedown', e => {
    if (e.target === box) {
      dragging = true;
      offsetX = e.clientX - box.offsetLeft;
      offsetY = e.clientY - box.offsetTop;
      e.preventDefault();
    }
  });
  document.addEventListener('mousemove', e => {
    if (dragging) {
      box.style.left = (e.clientX - offsetX) + 'px';
      box.style.top = (e.clientY - offsetY) + 'px';
    }
  });
  document.addEventListener('mouseup', () => dragging = false);

})();
