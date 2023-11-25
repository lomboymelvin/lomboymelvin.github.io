function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
  }

  function handleScroll() {
    var textElements = document.querySelectorAll('.text');
    textElements.forEach(function(textElement) {
      if (isElementInViewport(textElement)) {
        textElement.classList.add('visible');
      } else {
        textElement.classList.remove('visible');
      }
    });
  }
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
  handleScroll();