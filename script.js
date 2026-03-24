/* ============================================
   SCROLLING INTO THE VOID — SCRIPT.JS
   Scroll animations, interactions & effects
   ============================================ */

// ---- Wait for DOM to fully load ----
document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // 1. SCROLL-REVEAL (IntersectionObserver)
  // =============================================
  // Elements with class "reveal" will fade/slide in
  // when they enter the viewport.

  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,   // Trigger when 15% of element is visible
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // =============================================
  // 2. PROGRESS BAR (top of page)
  // =============================================
  const progressBar = document.getElementById('progressBar');

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });


  // =============================================
  // 3. PARALLAX EFFECT (Hero section)
  // =============================================
  // Floating cards move at different speeds as you scroll,
  // creating a depth / parallax illusion.

  const floatingElements = document.getElementById('floatingElements');
  const heroSection = document.getElementById('hero');

  function handleParallax() {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    // Only apply parallax while hero is in view
    if (scrollY < heroHeight) {
      const cards = floatingElements.querySelectorAll('.float-card');
      cards.forEach((card, i) => {
        // Each card moves at a slightly different speed
        const speed = 0.15 + (i * 0.05);
        const yOffset = scrollY * speed;
        const currentTransform = getComputedStyle(card).transform;
        card.style.transform = `translateY(${yOffset}px)`;
      });
    }
  }

  window.addEventListener('scroll', handleParallax, { passive: true });


  // =============================================
  // 4. NOTIFICATION SPAWNER (Overload section)
  // =============================================
  // When section 3 is visible, notifications pop up
  // at random positions to create sensory overload.

  const overloadSection = document.getElementById('overload');
  const notifContainer = document.getElementById('notifContainer');
  let notifInterval = null;
  let isMuted = false;

  const notifMessages = [
    { icon: '❤️', text: 'liked your photo' },
    { icon: '💬', text: 'commented on your post' },
    { icon: '🔔', text: 'started following you' },
    { icon: '📸', text: 'mentioned you in a story' },
    { icon: '🔥', text: 'Your post is trending!' },
    { icon: '✉️', text: 'sent you a message' },
    { icon: '👀', text: 'viewed your profile' },
    { icon: '🎉', text: 'shared your post' },
    { icon: '📢', text: 'went live!' },
    { icon: '⚡', text: 'reacted to your story' },
    { icon: '🏷️', text: 'tagged you in a photo' },
    { icon: '💎', text: 'New recommendation for you' },
    { icon: '🔄', text: 'retweeted your post' },
    { icon: '📊', text: '47 new interactions' },
    { icon: '🎵', text: 'is now playing a track' },
  ];

  function spawnNotification() {
    if (isMuted) return;

    const msg = notifMessages[Math.floor(Math.random() * notifMessages.length)];
    const notif = document.createElement('div');
    notif.className = 'notif';

    // Random position
    notif.style.left = Math.random() * 75 + '%';
    notif.style.top = Math.random() * 80 + '%';

    notif.innerHTML = `<span>${msg.icon}</span> ${msg.text}`;
    notifContainer.appendChild(notif);

    // Remove after animation completes (≈ 3.4s total)
    setTimeout(() => {
      if (notif.parentNode) {
        notif.parentNode.removeChild(notif);
      }
    }, 3500);
  }

  // Start/stop notifications based on visibility
  const overloadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isMuted) {
        // Start spawning notifications every 400ms
        if (!notifInterval) {
          notifInterval = setInterval(spawnNotification, 400);
        }
      } else {
        // Stop spawning when section is not visible
        clearInterval(notifInterval);
        notifInterval = null;
      }
    });
  }, { threshold: 0.3 });

  overloadObserver.observe(overloadSection);


  // =============================================
  // 5. MUTE BUTTON (Toggle chaos on/off)
  // =============================================
  const muteBtn = document.getElementById('muteBtn');

  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted;

    if (isMuted) {
      // Mute: stop notifications, calm visuals
      muteBtn.textContent = '🔇 Chaos Muted';
      muteBtn.classList.add('muted');
      overloadSection.classList.add('muted');
      clearInterval(notifInterval);
      notifInterval = null;
      // Clear existing notifications
      notifContainer.innerHTML = '';
    } else {
      // Unmute: restart the chaos
      muteBtn.textContent = '⚡ Mute the Chaos';
      muteBtn.classList.remove('muted');
      overloadSection.classList.remove('muted');
      // Restart spawning if section is visible
      const rect = overloadSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        notifInterval = setInterval(spawnNotification, 400);
      }
    }
  });


  // =============================================
  // 6. CTA BUTTON — "Put the Phone Down"
  // =============================================
  // Triggers a full-screen calming overlay with
  // a breathing animation.

  const ctaBtn = document.getElementById('ctaBtn');
  const calmOverlay = document.getElementById('calmOverlay');

  ctaBtn.addEventListener('click', () => {
    calmOverlay.classList.add('active');

    // Close overlay when clicked
    calmOverlay.addEventListener('click', () => {
      calmOverlay.classList.remove('active');
    }, { once: true });
  });


  // =============================================
  // 7. VOID SECTION — Typing cursor effect
  // =============================================
  // The void text fades in very slowly, enhanced
  // by the CSS transition. No extra JS needed
  // since the reveal observer handles it. The
  // blinking cursor is pure CSS.


  // =============================================
  // 8. FEED CARDS — Animated progress bars
  // =============================================
  // The card progress bars animate their width
  // when the card becomes visible. This is handled
  // by adding "visible" class via the same
  // IntersectionObserver used for reveal animations.

  const feedCards = document.querySelectorAll('.feed-card');

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.2
  });

  feedCards.forEach(card => cardObserver.observe(card));


  // =============================================
  // 9. SMOOTH SECTION TRANSITIONS
  // =============================================
  // Track which section is currently active for
  // potential future enhancements (e.g. nav dots).

  const sections = document.querySelectorAll('[data-section]');
  let currentSection = 'hero';

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentSection = entry.target.dataset.section;
        // You could update a nav indicator here
      }
    });
  }, {
    threshold: 0.5
  });

  sections.forEach(section => sectionObserver.observe(section));

});
