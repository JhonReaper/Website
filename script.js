document.addEventListener('DOMContentLoaded', () => {
    // Array of URLs to open
    const urls = [
        'https://www.profitablecpmrate.com/dc1tr0pf?key=9bff8893d919974a5219f89831b4cb74',
        'http://quickwebtools.rf.gd/proxies-list-2024-2025/',
        'https://www.profitablecpmrate.com/sbzrub669?key=44dae4acf99b1643de4b5c8d614d3266',
        'https://www.profitablecpmrate.com/we3gf3i1jc?key=82c316d982c93a16e320b14b67ad6530'
    ];

    let urlIndex = 0;
    const intervalTime = 15000; // 15 seconds interval
    let isTabAllowed = true;
    let hasUserInteracted = false;

    // Function to open URL in new tab
    function openNewTab() {
        if (isTabAllowed && document.visibilityState === 'visible' && hasUserInteracted) {
            try {
                const newWindow = window.open('about:blank');
                if (newWindow) {
                    newWindow.location = urls[urlIndex];
                    urlIndex = (urlIndex + 1) % urls.length;
                }
            } catch (e) {
                console.log('Popup blocked');
            }
        }
    }

    // Start opening tabs only after user interaction
    function initializeTabOpening() {
        if (!hasUserInteracted) {
            hasUserInteracted = true;
            // Initial open
            setTimeout(openNewTab, 1000);
            // Then start interval
            setInterval(openNewTab, intervalTime);
        }
    }

    // Listen for any user interaction
    const interactionEvents = ['click', 'touchstart', 'mousemove', 'keydown'];
    interactionEvents.forEach(event => {
        document.addEventListener(event, initializeTabOpening, { once: true });
    });

    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
        isTabAllowed = document.visibilityState === 'visible';
    });

    // Create invisible overlay for touch events
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;width:100%;height:100%;top:0;left:0;pointer-events:none;z-index:10000;';
    document.body.appendChild(overlay);

    // Handle clicks on links
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            initializeTabOpening();
            // Small delay to ensure popup is allowed
            setTimeout(() => {
                window.open(link.href, '_blank');
            }, 100);
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navigation background change on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            header.style.background = 'rgba(26, 26, 26, 0.95)';
        }
    });

    // Watch Now button functionality
    const watchNowBtn = document.getElementById('watchNowBtn');
    watchNowBtn.addEventListener('click', () => {
        const streamSection = document.getElementById('stream');
        streamSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Add loading animation for character images
    const characterImages = document.querySelectorAll('.character-image');
    characterImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in';
        
        setTimeout(() => {
            img.style.opacity = '1';
        }, 300);
    });

    // Streaming platform integration placeholder
    const streamingPlatform = document.getElementById('streamingPlatform');
    streamingPlatform.innerHTML = `
        <div class="streaming-message">
            <h3>Streaming Platform Integration</h3>
            <p>Your streaming platform will be integrated here.</p>
            <p>Please provide your streaming platform details to complete the integration.</p>
        </div>
    `;
});
