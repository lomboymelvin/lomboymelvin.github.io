//circle






    //navbar background
    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
    
        
        if (window.scrollY > 50) {
            navbar.classList.add('scroll');
        } else {
            navbar.classList.remove('scroll');
        }
    });
    

    const textSpan = document.querySelector('.flip-text');
        const texts = ['Web Developer', 'UI Designer', 'UX Researcher', 'Q.A Specialist', 'Product Designer'];
        let index = 0;

        function changeText() {
            index = (index + 1) % texts.length;
            textSpan.classList.add('flip');
            setTimeout(() => {
                textSpan.textContent = texts[index];
                textSpan.classList.remove('flip');
            }, 300);
        }

        setInterval(changeText, 2500);



        

    

    

    document.addEventListener("DOMContentLoaded", function() {
        const boxes = document.querySelectorAll(".box");
        let delay = 0;

        boxes.forEach(box => {
            setTimeout(() => {
                box.classList.add("show");
            }, delay);
            delay += 500; 
        });
    });
    

    document.addEventListener("DOMContentLoaded", function() {
        const boxes = document.querySelectorAll(".box");
      
        boxes.forEach((box, index) => {
          setTimeout(() => {
            box.style.opacity = "1";
            box.style.transform = "translateY(0)";
          }, index * 150); 
        });
      });
      

      if (performance.navigation.type === 1) {
        // If the user refreshed the page (type 1), redirect to the desired page
        window.location.href = "index.html";
      }



//smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });




    // Check if backdrop-filter is supported
function backdropFilterSupported() {
    const el = document.createElement('div');
    el.style.backdropFilter = 'blur(10px)';
    return el.style.backdropFilter === 'blur(10px)';
  }
  
  // Apply solid black background if backdrop-filter is not supported
  if (!backdropFilterSupported()) {
    const navbar = document.getElementById('navbar');
    navbar.classList.add('no-backdrop');
  }
  

  




  const images = [
    'm1.png',
    'cp.png',
    'ap.png'
    
    
    // Add more image URLs as needed
  ];
  let currentIndex = 0;
  const backgroundDiv = document.getElementById('backgroundDiv');
  
  function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    const imageUrl = images[currentIndex];
    backgroundDiv.style.transform = 'scale(0.8)'; // Shrink
    setTimeout(() => {
      backgroundDiv.style.backgroundImage = `url('${imageUrl}')`;
      backgroundDiv.style.transform = 'scale(1.2)'; // Pop
      setTimeout(() => {
        backgroundDiv.style.transform = 'scale(1)'; // Restore size
      }, 250); // Wait for 0.25s after the pop
    }, 500); // Wait for 0.5s (matching the shrink transition duration)
  }
  
  // Initial call
  changeBackground();
  
  // Change background image every 7 seconds
  setInterval(changeBackground, 4000);

  window.addEventListener('scroll', function() {
    const icElements = document.querySelectorAll('.ic'); 
    const scrollPos = window.scrollY;
    const rotationValue = scrollPos / 5; 
  
    icElements.forEach(ic => {
      ic.style.transform = `rotate(${rotationValue}deg)`;
    });

    const icElements2 = document.querySelectorAll('.ic2'); 
    const scrollPos2 = window.scrollY;
    const rotationValue2 = scrollPos / 5; 
  
    icElements2.forEach(ic2 => {
      ic2.style.transform = `rotate(${rotationValue}deg)`;
    });

    const icElements3 = document.querySelectorAll('.ic3'); 
    const scrollPos3 = window.scrollY;
    const rotationValue3 = scrollPos / 5; 
  
    icElements3.forEach(ic3 => {
      ic3.style.transform = `rotate(${rotationValue}deg)`;
    });

    const icElements4 = document.querySelectorAll('.ic4'); 
    const scrollPos4 = window.scrollY;
    const rotationValue4 = scrollPos / 5; 
  
    icElements4.forEach(ic4 => {
      ic4.style.transform = `rotate(${rotationValue}deg)`;
    });
  });






// Get all button elements with class openModalBtn
var btns = document.querySelectorAll('.openModalBtn');

// Loop through each button and add click event listener
btns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.getAttribute('data-modal-target'); // Get the modal ID
        var modal = document.getElementById(modalId);

        // Function to open the modal and disable body scrolling
        function openModal() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling on the body
        }

        // Function to close the modal and enable body scrolling
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling on the body
        }

        // Open the modal when the button is clicked
        openModal();

        // Close the modal when the close button is clicked
        modal.querySelector('.close').onclick = closeModal;

        // Close the modal if the user clicks outside of it
        window.onclick = function(event) {
            if (event.target == modal) {
                closeModal();
            }
        };
    };
});







const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.querySelector('.slider-indicators');
    let currentSlide = 0;

    function slideLeft() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    }

    function slideRight() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }

    function updateSlider() {
      const offset = -currentSlide * 100;
      slider.style.transform = `translateX(${offset}%)`;
      updateIndicators();
    }

    function updateIndicators() {
      const indicators = document.querySelectorAll('.slider-indicator');
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
      });
    }

    // Create indicators based on the number of slides
    for (let i = 0; i < slides.length; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('slider-indicator');
      indicator.addEventListener('click', () => {
        currentSlide = i;
        updateSlider();
      });
      indicatorsContainer.appendChild(indicator);
    }

    function openModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Disable scrolling while modal is open
    }

    function closeModal(modalId) {
      const modal = document.getElementById(modalId);
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
    }

    document.querySelectorAll('.openModalBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal-target');
        openModal(modalId);
      });
    });

    document.querySelectorAll('.closeBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal-target');
        closeModal(modalId);
      });
    });

    updateIndicators(); // Update indicators initially
slideInterval = setInterval(slideRight, 30000);






document.addEventListener("DOMContentLoaded", function() {
  const card = document.querySelector('.card1');
  const centerX = card.clientWidth / 2;
  const centerY = card.clientHeight / 2;

  // Define the maximum distance the bubbles should move
  const maxMoveDistance = 10;

  // Example background images
  const images = [
    'url(vscode.png)', 'url(ps.png)', 'url(illustrator.png)', 'url(figma.png)',
    'url(github.png)', 'url(bootstrap.png)', 'url(js.png)', 'url(wordpress.png)',
    'url(html.png)', 'url(css.png)', 'url(invision.png)', 'url(jttr.png)',
    'url(lucid.png)', 'url(canva.png)', 'url(c++.png)', 'url(sql.png)',
    'url(php.png)', 'url(phpmyadmin.png)', 'url(id.png)', 'url(java.png)',
    'url(android.png)', 'url(vb.png)'
  ];

  // Define the bubbles' configuration
  const bubblesConfig = [
    { class: 'main', radius: 0, count: 1 },
    { class: 'large', radius: 0.35, count: 6 },
    { class: 'medium', radius: 0.6, count: 10 },
    { class: 'small', radius: 0.8, count: 12 }
  ];

  let imageIndex = 0;

  // Create and position the bubbles
  bubblesConfig.forEach(config => {
    const angleStep = (2 * Math.PI) / config.count;
    for (let i = 0; i < config.count; i++) {
      const angle = i * angleStep;
      const bubbleSize = config.class === 'main' ? 40 : (config.class === 'large' ? 30 : (config.class === 'medium' ? 25 : 20));
      const x = centerX + config.radius * Math.cos(angle) * centerX - bubbleSize / 2;
      const y = centerY + config.radius * Math.sin(angle) * centerY - bubbleSize / 2;
      const bubble = document.createElement('div');
      bubble.classList.add('bubble', config.class);
      bubble.dataset.originalX = x;
      bubble.dataset.originalY = y;
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.backgroundImage = images[imageIndex % images.length];
      imageIndex++;
      card.appendChild(bubble);
    }
  });

  card.addEventListener("mousemove", function(event) {
    // Calculate the distance between the cursor position and the center of the card
    const deltaX = event.clientX - card.getBoundingClientRect().left - centerX;
    const deltaY = event.clientY - card.getBoundingClientRect().top - centerY;

    // Move each bubble based on the distance
    const bubbles = card.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
      const currentX = parseFloat(bubble.dataset.originalX);
      const currentY = parseFloat(bubble.dataset.originalY);
      const newX = currentX + (deltaX / centerX) * maxMoveDistance;
      const newY = currentY + (deltaY / centerY) * maxMoveDistance;

      // Set the new position within the boundaries of the card
      bubble.style.left = `${Math.max(Math.min(newX, card.clientWidth - bubble.offsetWidth), 0)}px`;
      bubble.style.top = `${Math.max(Math.min(newY, card.clientHeight - bubble.offsetHeight), 0)}px`;
    });
  });

  // Prevent horizontal scrolling on smaller screens
  window.addEventListener("resize", function() {
    if (window.outerWidth <= 768) {
      card.style.overflowX = "hidden";
    } else {
      card.style.overflowX = "visible";
    }
  });

});


