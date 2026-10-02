/**
 * SmileCare Dental Clinic - Interactive Script
 * Pure Vanilla JavaScript (No Frameworks/Libraries Needed)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===================================================
  // 1. MOBILE HAMBURGER MENU
  // ===================================================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }

  // ===================================================
  // 2. NAVBAR SCROLL EFFECT & ACTIVE SECTION TRACKING
  // ===================================================
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Add shadow styling to navbar on scroll
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Dynamic active class updates on scroll
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const activeAnchor = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (activeAnchor) activeAnchor.classList.add('active');
      } else {
        if (activeAnchor) activeAnchor.classList.remove('active');
      }
    });
  });

  // ===================================================
  // 3. FRONT-END APPOINTMENT FORM SUBMISSION
  // ===================================================
  const appointmentForm = document.getElementById('appointmentForm');
  const formFeedback = document.getElementById('formFeedback');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (appointmentForm && formFeedback) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop standard HTTP reload

      // Form validation check
      const fullName = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phoneNumber').value.trim();
      const email = document.getElementById('emailAddress').value.trim();
      const date = document.getElementById('preferredDate').value;
      const treatment = document.getElementById('treatmentSelect').value;

      if (!fullName || !phone || !email || !date || !treatment) {
        alert('Please complete all required fields marked with an asterisk (*).');
        return;
      }

      // Hide the form, reveal the friendly confirmation message
      appointmentForm.style.display = 'none';
      formFeedback.classList.remove('hidden');
    });

    // Reset button to book another visit
    if (resetFormBtn) {
      resetFormBtn.addEventListener('click', () => {
        appointmentForm.reset();
        formFeedback.classList.add('hidden');
        appointmentForm.style.display = 'flex';
      });
    }
  }

  // ===================================================
  // 4. BACK TO TOP BUTTON
  // ===================================================
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===================================================
  // 5. DYNAMIC COPYRIGHT YEAR
  // ===================================================
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ===================================================
  // 6. DEFAULT APPOINTMENT DATE (Set min date to today)
  // ===================================================
  const dateInput = document.getElementById('preferredDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
  }
});