document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE NAVBAR TOGGLE ---
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Optional: Toggle an 'X' icon if you have one
            const icon = menuBtn.querySelector('i');
            if(icon) icon.classList.toggle('fa-bars');
            if(icon) icon.classList.toggle('fa-xmark');
        });
    }

    // --- 2. SCROLL REVEAL ANIMATION ---
    const observerOptions = {
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Elements to animate: cards, timeline items, and section titles
    const itemsToReveal = document.querySelectorAll('.leader-card, .timeline-item, .card, .section-title');
    itemsToReveal.forEach(el => {
        el.classList.add('reveal-init'); // Set initial state
        observer.observe(el);
    });

    // --- 3. LEADERSHIP SEARCH (For leaders.html) ---
    const searchInput = document.querySelector('#leaderSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const leaderCards = document.querySelectorAll('.leader-card');

            leaderCards.forEach(card => {
                const text = card.innerText.toLowerCase();
                // Check if name or role matches the search
                if (text.includes(term)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});