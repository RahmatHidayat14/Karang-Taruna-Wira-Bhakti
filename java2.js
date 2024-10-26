// Smooth scrolling untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi navbar saat scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#fff';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.background = '#fff';
        header.style.boxShadow = 'none';
    }
});

// Fungsi untuk memuat lebih banyak berita (contoh)
function loadMoreNews() {
    // Implementasi load more berita
    console.log('Loading more news...');
}

// Fungsi untuk memuat lebih banyak artikel (contoh)
function loadMoreArticles() {
    // Implementasi load more artikel
    console.log('Loading more articles...');
}
// Contoh fungsi untuk filter agenda
function filterAgenda(category) {
    const agendaItems = document.querySelectorAll('.agenda-list li');
    agendaItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Contoh fungsi untuk pencarian agenda
function searchAgenda(keyword) {
    const agendaItems = document.querySelectorAll('.agenda-list li');
    agendaItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(keyword.toLowerCase())) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}# Optional JavaScript for interactive features
js_struktur = '''
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to org boxes to show more details
    const orgBoxes = document.querySelectorAll('.org-box');
    
    orgBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // You can add popup or modal with more details here
            console.log('Clicked:', this.querySelector('h3').textContent);
        });
    });
});
'''

print("HTML, CSS, and JavaScript for Struktur Organisasi section created.")
# JavaScript for Galeri with Lightbox functionality
js_galeri = '''
// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);
    
    const lightboxImage = document.createElement('img');
    lightbox.appendChild(lightboxImage);
    
    // Add click events to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', e => {
            lightbox.classList.add('active');
            lightboxImage.src = e.target.src;
        });
    });
    
    // Close lightbox when clicking outside
    lightbox.addEventListener('click', e => {
        if (e.target !== lightboxImage) {
            lightbox.classList.remove('active');
        }
    });
});
'''
# JavaScript for Donasi section with form handling and payment integration
js_donasi = '''
document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donation-form');
    
    donationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const amount = document.getElementById('amount').value;
        
        // Validate form
        if (!name || !email || !amount) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show loading state
        const submitButton = donationForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Processing...';
        submitButton.disabled = true;
        
        // Simulate payment processing (replace with actual payment gateway integration)
        setTimeout(() => {
            alert(`Thank you for your donation of $${amount}!`);
            donationForm.reset();
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }, 2000);
    });
    
    // Add real-time validation
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function() {
        const isValid = emailInput.checkValidity();
        emailInput.style.borderColor = isValid ? '#ccc' : 'red';
    });
    
    const amountInput = document.getElementById('amount');
    amountInput.addEventListener('input', function() {
        const value = parseFloat(amountInput.value);
        if (value < 1) {
            amountInput.setCustomValidity('Minimum donation amount is 1');
        } else {
            amountInput.setCustomValidity('');
        }
    });
});

// Add payment methods display
const paymentMethods = `
    <div class="payment-methods">
        <h3>Payment Methods</h3>
        <div class="payment-icons">
            <img src="images/visa.png" alt="Visa">
            <img src="images/mastercard.png" alt="Mastercard">
            <img src="images/paypal.png" alt="PayPal">
        </div>
    </div>
`;
# JavaScript for Kontak section with form handling
js_kontak = '''
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;
        
        // Validate form
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Simulate form submission (replace with actual backend integration)
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }, 2000);
    });
    
    // Add real-time validation
    const emailInput = document.getElementById('contact-email');
    emailInput.addEventListener('input', function() {
        const isValid = emailInput.checkValidity();
        emailInput.style.borderColor = isValid ? '#ccc' : 'red';
    });
});

// Additional CSS for form feedback
const additionalCSS = `
    /* Animation for form submission */
    @keyframes submitPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    button[type="submit"]:active {
        animation: submitPulse 0.3s ease;
    }
`;
'''

print("JavaScript for Kontak section created, including form handling and validation.")