document.addEventListener('DOMContentLoaded', function() {

    // ==================== MOBILE NAVBAR TOGGLE ====================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));


    // ==================== PORTFOLIO FILTER ====================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and add to clicked one
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    // Optional: Add a fade-in animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); // Match this with transition duration in CSS
                }
            });
        });
    });
    
    // Set initial state for portfolio items
    portfolioItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });


    // ==================== CONTACT FORM (Simple Alert) ====================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form reload halaman
            
            // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
            // Untuk sekarang, kita hanya tampilkan alert
            alert('Terima kasih! Pesan Anda telah kami terima. Kami akan segera menghubungi Anda.');
            
            // Reset form setelah submit
            contactForm.reset();
        });
    }

});