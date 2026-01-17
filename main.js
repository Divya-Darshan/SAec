  
        let id_year = document.getElementById('year');
        let current_year = new Date().getFullYear();

        id_year.innerHTML = current_year;

          const homeSection = document.getElementById("home");

  const bgImages = [
    "./image/saec.jpg",
    "https://www.saec.ac.in/wp-content/uploads/2021/12/about-us-slider-3.jpg",
    "https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.30808-6/300185839_196729902699753_1734219907666249734_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SGAxYy6LFQoQ7kNvwH88WrP&_nc_oc=AdkhTrvnHEfbE2ChstA7yYNHKNTx0gv_3l40VnaHzQ1FiV87XUX5bUHhgz3utFGk6mxHVNZw7dz-mymRmPyqf_AB&_nc_zt=23&_nc_ht=scontent.fmaa2-3.fna&_nc_gid=Ziwjvd0Gh-iEDhfZgT9odw&oh=00_AfqQE5HM8kUCd2YrYj-IwimgJaq8c-U4iStM64RSW3xTpg&oe=6970ED6E"
  ];

  let currentIndex = 0;

  function changeBackground() {
    homeSection.style.backgroundImage = `url('${bgImages[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % bgImages.length;
  }

  // Initial load
  changeBackground();

  // Change every 6 seconds
  setInterval(changeBackground, 6000);

        // Loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loading-screen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loading-screen').style.display = 'none';
                }, 500);
            }, 1500);
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobile-overlay');
        
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            mobileOverlay.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        mobileOverlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            mobileOverlay.classList.add('hidden');
        });

        // Close mobile menu when clicking on navigation links
        document.querySelectorAll('.nav-item').forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('active');
                mobileOverlay.classList.add('hidden');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active navigation highlighting
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-item');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Countdown timer
        function updateCountdown() {
            const targetDate = new Date('September 10, 2026 09:00:00').getTime();
            const now = new Date().getTime();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Main countdown
            document.getElementById('days').textContent = days.toString().padStart(3, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

            // Footer countdown
            document.getElementById('footer-days').textContent = days.toString().padStart(3, '0');
            document.getElementById('footer-hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('footer-minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('footer-seconds').textContent = seconds.toString().padStart(2, '0');

            if (difference < 0) {
                document.getElementById('countdown').innerHTML = '<div class="text-xl md:text-2xl font-bold text-blue-600">Conference is Live!</div>';
                document.getElementById('footer-countdown').innerHTML = '<div class="text-lg md:text-xl font-bold text-blue-600">Conference is Live!</div>';
            }
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(section => {
            observer.observe(section);
        });

        // Accordion functionality
        function toggleAccordion(contentId) {
            const content = document.getElementById(contentId);
            const icon = document.getElementById(contentId.replace('-content', '-icon'));
            
            content.classList.toggle('active');
            icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
  