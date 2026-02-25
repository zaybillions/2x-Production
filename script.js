======= ==========================================
// CORE WINDOW MANAGEMENT SYSTEM
// ==========================================

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons safely
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        console.log('Lucide not loaded yet, retrying...');
        setTimeout(function() {
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 1000);
    }
    
    // Start clock
    setInterval(updateClock, 1000);
    updateClock();
    
    // Open booking window by default
    setTimeout(function() {
        openWindow('booking');
    }, 500);
    
    console.log('Windows 96 System Loaded Successfully!');
});

// Window management variables
let zIndex = 100;
let activeWindows = {};
let isDragging = false;
let currentWindow = null;
let dragOffset = { x: 0, y: 0 };

const win = document.getElementById(id);
    if (win) {
        win.classList.remove('hidden');
        win.style.zIndex = ++zIndex;
        activeWindows[id] = true;
        updateTaskbar();
        
        // Center on mobile
        if (window.innerWidth <= 768) {
            win.style.top = '10px';
            win.style.left = '10px';
            win.style.right = '10px';
            win.style.bottom = '50px';
            win.style.width = 'auto';
            win.style.height = 'auto';
        }
    }
};

window.closeWindow = function(id) {
    const win = document.getElementById(id);
    if (win) {
        win.classList.add('hidden');
        delete activeWindows[id];
        updateTaskbar();
    }
};

window.bringToFront = function(id) {
    const win = document.getElementById(id);
    if (win) {
        win.style.zIndex = ++zIndex;
    }
};

window.updateTaskbar = function() {
    const container = document.getElementById('taskbarItems');
    container.innerHTML = '';
    
    Object.keys(activeWindows).forEach(id => {
        const win = document.getElementById(id);
        if (!win.classList.contains('hidden')) {
            const item = document.createElement('div');
            item.className = 'win95-button taskbar-item active cursor-pointer';
            item.innerHTML = `<i data-lucide="${getIconForWindow(id)}" class="w-4 h-4"></i> ${getTitleForWindow(id)}`;
            item.onclick = () => {
                if (win.style.zIndex == zIndex) {
                    win.classList.add('hidden');
                    item.classList.remove('active');
                } else {
                    bringToFront(id);
                    win.classList.remove('hidden');
                }
            };
            container.appendChild(item);
        }
    });
    
    lucide.createIcons();
}

function getIconForWindow(id) {
    const icons = {
        portfolio: 'folder',
        booking: 'calendar',
        about: 'user',
        contact: 'mail',
        rates: 'file-text'
    };
    return icons[id] || 'window';
}

function getTitleForWindow(id) {
    const titles = {
        portfolio: 'Portfolio',
        booking: 'Book Me',
        about: 'About',
        contact: 'Contact',
        rates: 'Rates'
    };
    return titles[id] || id;
}

// ==========================================
// DRAGGING FUNCTIONALITY
// ==========================================

window.startDrag = function(e, id) {
    if (window.innerWidth <= 768) return; // Disable drag on mobile
    
    isDragging = true;
    currentWindow = document.getElementById(id);
    bringToFront(id);
    
    const rect = currentWindow.getBoundingClientRect();
    dragOffset.x = e.clientX - rect.left;
    dragOffset.y = e.clientY - rect.top;
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);
}

window.drag = function(e) {
    if (!isDragging || !currentWindow) return;
    
    let x = e.clientX - dragOffset.x;
    let y = e.clientY - dragOffset.y;
    
    // Keep in viewport
    const maxX = window.innerWidth - currentWindow.offsetWidth;
    const maxY = window.innerHeight - currentWindow.offsetHeight - 40; // Minus taskbar
    
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));
    
    currentWindow.style.left = x + 'px';
    currentWindow.style.top = y + 'px';
}

window.stopDrag = function() {
    isDragging = false;
    currentWindow = null;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
}

// ==========================================
// UI CONTROLS
// ==========================================

window.toggleStartMenu = function() {
    const menu = document.getElementById('startMenu');
    menu.classList.toggle('show');
}

// Clock functionality
window.updateClock = function() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
    const clockElement = document.getElementById('clockTime');
    if (clockElement) {
        clockElement.textContent = time;
    }
}

======= ==========================================
// FORM HANDLING
// ==========================================

window.handleBooking = function(e) {
    e.preventDefault();
    
    // Show success modal
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.style.zIndex = ++zIndex;
    }
    
    // Reset form
    const form = document.getElementById('bookingForm');
    if (form) {
        form.reset();
    }
    
    // Close booking window after delay
    setTimeout(() => {
        closeWindow('booking');
    }, 500);
}

window.closeSuccess = function() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================

// Close start menu when clicking elsewhere
document.addEventListener('click', (e) => {
    const startMenu = document.getElementById('startMenu');
    const startButton = document.querySelector('.start-button');
    if (startMenu && startButton) {
        if (!startMenu.contains(e.target) && !startButton.contains(e.target)) {
            startMenu.classList.remove('show');
        }
    }
});

// Bring window to front when clicking content
document.querySelectorAll('.window').forEach(win => {
    win.addEventListener('mousedown', () => {
        bringToFront(win.id);
    });
});

// (Moved to DOMContentLoaded above)

// ==========================================
// ADDITIONAL UTILITY FUNCTIONS (From your original file)
// ==========================================

// Sound effects (optional - add if you want retro sounds)
function playClickSound() {
    // const audio = new Audio('click.mp3');
    // audio.play().catch(e => console.log('Audio play failed'));
}

// Window shake animation for error effect
function shakeWindow(windowId) {
    const win = document.getElementById(windowId);
    if (win) {
        win.style.animation = 'shake 0.5s';
        setTimeout(() => {
            win.style.animation = '';
        }, 500);
    }
}

// Add shake animation to styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .loading-cursor {
        cursor: wait !important;
    }
    
    .hourglass {
        display: inline-block;
        animation: flip 1s infinite;
    }
    
    @keyframes flip {
        0%, 100% { transform: rotate(0deg); }
        50% { transform: rotate(180deg); }
    }
`;
document.head.appendChild(style);

// Simulate "loading" for retro effect
function showLoading(windowId) {
    const win = document.getElementById(windowId);
    if (!win) return;
    
    const originalContent = win.innerHTML;
    
    win.innerHTML = `
        <div class="title-bar">
            <span>Loading...</span>
        </div>
        <div class="p-8 text-center">
            <div class="hourglass text-4xl mb-4">⏳</div>
            <p>Please wait while system processes...</p>
            <div class="progress-bar mt-4 w-3/4 mx-auto">
                <div class="progress-fill" style="width: 0%" id="loadBar"></div>
            </div>
        </div>
    `;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        const loadBar = document.getElementById('loadBar');
        if (loadBar) {
            loadBar.style.width = progress + '%';
        }
        if (progress >= 100) {
            clearInterval(interval);
            win.innerHTML = originalContent;
            attachWindowEvents();
        }
    }, 100);
}

// Re-attach events after loading (helper function)
function attachWindowEvents() {
    lucide.createIcons();
}

// Desktop icon selection effect
document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        // Remove selected from all
        document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
        // Add to clicked
        this.classList.add('selected');
    });
});

// Double click to open (retro style)
let clickTimer = null;
document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', function(e) {
        if (clickTimer) {
            clearTimeout(clickTimer);
            clickTimer = null;
            // Double click action
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const match = onclickAttr.match(/'([^']+)'/);
                if (match) {
                    const windowId = match[1];
                    openWindow(windowId);
                }
            }
        } else {
            clickTimer = setTimeout(() => {
                clickTimer = null;
                // Single click action (selection only, already handled above)
            }, 250);
        }
    });
});

// Keyboard shortcuts (Alt + F4 to close active window)
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'F4') {
        e.preventDefault();
        // Close topmost window
        const windows = document.querySelectorAll('.window:not(.hidden)');
        let topWindow = null;
        let maxZ = 0;
        
        windows.forEach(win => {
            const z = parseInt(win.style.zIndex || 0);
            if (z > maxZ) {
                maxZ = z;
                topWindow = win;
            }
        });
        
        if (topWindow) {
            closeWindow(topWindow.id);
        }
    }
});

// Retro tooltip system
function showTooltip(element, text) {
    // Remove existing tooltip if any
    hideTooltip();
    
    const tooltip = document.createElement('div');
    tooltip.className = 'win95-border bg-yellow-100 p-1 text-sm absolute z-[99999]';
    tooltip.style.top = (element.getBoundingClientRect().bottom + 5) + 'px';
    tooltip.style.left = element.getBoundingClientRect().left + 'px';
    tooltip.textContent = text;
    tooltip.id = 'active-tooltip';
    document.body.appendChild(tooltip);
}

function hideTooltip() {
    const tooltip = document.getElementById('active-tooltip');
    if (tooltip) tooltip.remove();
}

// Add tooltips to desktop icons
document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        const span = this.querySelector('span');
        if (span) {
            const text = span.textContent;
            showTooltip(this, 'Open ' + text);
        }
    });
    icon.addEventListener('mouseleave', hideTooltip);
});

// Prevent accidental form close with unsaved changes
let formDirty = false;
document.querySelectorAll('#bookingForm input, #bookingForm textarea, #bookingForm select').forEach(input => {
    input.addEventListener('change', () => formDirty = true);
    input.addEventListener('input', () => formDirty = true);
});

const bookingCloseBtn = document.querySelector('#booking button[onclick*="closeWindow"]');
if (bookingCloseBtn) {
    bookingCloseBtn.addEventListener('click', (e) => {
        if (formDirty) {
            if (!confirm('You have unsaved changes. Discard them?')) {
                e.stopPropagation();
                return false;
            }
            formDirty = false;
        }
    });
}

// Export functions for global access
window.shakeWindow = shakeWindow;
window.showLoading = showLoading;