document.addEventListener('DOMContentLoaded', function () {
  const zoomableContainer = document.querySelector('.zoomable-container');
  const zoomableImage = document.querySelector('.zoomable-image');

  zoomableContainer.addEventListener('mousemove', handleMouseMove);
  zoomableContainer.addEventListener('mouseleave', resetZoom);

  function handleMouseMove(event) {
    const containerRect = zoomableContainer.getBoundingClientRect();
    const x = (event.clientX - containerRect.left) / containerRect.width;
    const y = (event.clientY - containerRect.top) / containerRect.height;

    const transformValue = `scale(2) translate(${x * 50 - 25}%, ${y * 50 - 25}%)`;
    zoomableImage.style.transform = transformValue;
  }

  function resetZoom() {
    zoomableImage.style.transform = 'scale(1)';
  }
});