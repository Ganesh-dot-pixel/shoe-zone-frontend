document.addEventListener('DOMContentLoaded', () => {
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  document.querySelector('#home .signin').addEventListener('click', function() {
    const emailInput = document.querySelector('#home input[type="text"]');
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
    } else {
      alert('Thanks for signing up, ' + email + '!');
      emailInput.value = '';
    }
  });

  // Handle Contact form submission
  document.querySelector('#contact form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent actual submission

    const name = this.querySelector('input[type="text"]').value.trim();
    const mail = this.querySelector('input[type="email"]').value.trim();
    const queries = this.querySelector('textarea').value.trim();

    if (name === '') {
      alert('Please enter your name.');
      return;
    }
    if (!validateEmail(mail)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (queries === '') {
      alert('Please enter your queries.');
      return;
    }

    alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
    this.reset();  // clear the form
  });

  // Add to Cart button handler (show alert on click)
  const cartButtons = document.querySelectorAll('.card .signin');
  cartButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault(); // prevent navigation

      const productTitle = this.closest('.card-body').querySelector('.card-title').textContent;
      alert(productTitle + ' has been added to your cart!');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // SIGN IN BUTTON
  const signInButton = document.getElementById('sign-in-btn');
  if (signInButton) {
    signInButton.addEventListener('click', () => {
      alert('Sign In feature is under development!');
    });
  }

  // CONTACT FORM SUBMIT BUTTON
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // prevent actual form submission

      const name = contactForm.querySelector('input[type="text"]').value.trim();
      const email = contactForm.querySelector('input[type="email"]').value.trim();
      const message = contactForm.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        return;
      }

      // Optional email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert(`Thanks for contacting us, ${name}! We’ll respond to ${email} soon.`);
      contactForm.reset(); // clear the form
    });
  }
});
