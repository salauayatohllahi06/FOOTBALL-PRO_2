/**
 * era_logic.js - The Timeline Engine
 */

const EraEngine = {
    // 1. Initialize the system
    init() {
        const savedEra = localStorage.getItem('selectedEra') || 'modern';
        this.applyTheme(savedEra);
        console.log(`System initialized in ${savedEra.toUpperCase()} mode.`);
        return savedEra;
    },

    // 2. Change the Era and refresh the site
    switchEra(newEra) {
        localStorage.setItem('selectedEra', newEra);
        
        // Brief delay to allow for a "loading" feel or animations
        document.body.style.opacity = '0.5';
        setTimeout(() => {
            window.location.reload();
        }, 300);
    },

    // 3. Apply visual changes based on the era
    applyTheme(era) {
        const root = document.documentElement;
        
        if (era === 'vintage') {
            document.body.classList.add('vintage-sepia');
            // You can add more CSS class logic here
        } else if (era === 'classic') {
            document.body.classList.remove('vintage-sepia');
        } else {
            document.body.classList.remove('vintage-sepia');
        }
    },

    // 4. The helper function for your Leaderboard and Selection pages
    getActivePlayers(category = 'all') {
        const era = localStorage.getItem('selectedEra') || 'modern';
        const eraData = GlobalDatabase[era];

        if (category === 'all') {
            return [
                ...(eraData.forwards || []),
                ...(eraData.midfielders || []),
                ...(eraData.defenders || []),
                ...(eraData.keepers || [])
            ];
        }
        return eraData[category] || [];
    }
};

// Run the engine as soon as the file loads
EraEngine.init();