const dropdownContent = document.getElementById("dropdown-content");
const dropdownContainer = document.querySelector(".dropdown-container");

const dropdownData = {
    store: `
    <div>
        <p class="dropdown-heading">Shop</p>
        <p><a href="#">Shop the Latest</a></p>
        <p><a href="#">Mac</a></p>
        <p><a href="#">iPad</a></p>
        <p><a href="#">iPhone</a></p>
        <p><a href="#">Apple Watch</a></p>
        <p><a href="#">Accessories</a></p>
    </div>
    <div>
        <p>Quick Links</p>
        <p><a href="#">Find a Store</a></p>
        <p><a href="#">Order Status</a></p>
        <p><a href="#">Ways to Buy</a></p>
        <p><a href="#">Personal Setup</a></p>
    </div>
    <div>
        <p>Shop Special Stores</p>
        <p><a href="#">Education</a></p>
        <p><a href="#">Business</a></p>
    </div>
`,
mac: `
    <div>
        <p>Explore Mac</p>
        <p><a href="#">Explore All Mac</a></p>
        <p><a href="#">MacBook Air</a></p>
        <p><a href="#">MacBook Pro</a></p>
        <p><a href="#">iMac</a></p>
        <p><a href="#">Mac mini</a></p>
        <p><a href="#">Mac Studio</a></p>
        <p><a href="#">Mac Pro</a></p>
        <p><a href="#">Displays</a></p>
    </div>
    <div>
        <p>Shop Mac</p>
        <p><a href="#">Shop Mac</a></p>
        <p><a href="#">Mac Accessories</a></p>
        <p><a href="#">Ways to Buy</a></p>
    </div>
    <div>
        <p>More from Mac</p>
        <p><a href="#">Mac Support</a></p>
        <p><a href="#">AppleCare+ for Mac</a></p>
        <p><a href="#">macOS Sequoia</a></p>
        <p><a href="#">Apple Intelligence</a></p>
        <p><a href="#">Apps by Apple</a></p>
        <p><a href="#">Continuity</a></p>
        <p><a href="#">iCloud+</a></p>
        <p><a href="#">Mac for Business</a></p>
        <p><a href="#">Education</a></p>
    </div>
`,
ipad: `
    <div>
        <p>Explore iPad</p>
        <p><a href="#">Explore All iPad</a></p>
        <p><a href="#">iPad Pro</a></p>
        <p><a href="#">iPad Air</a></p>
        <p><a href="#">iPad</a></p>
        <p><a href="#">iPad mini</a></p>
        <p><a href="#">Apple Pencil</a></p>
        <p><a href="#">Keyboards</a></p>
    </div>
    <div>
        <p>Shop iPad</p>
        <p><a href="#">Shop iPad</a></p>
        <p><a href="#">iPad Accessories</a></p>
        <p><a href="#">Ways to Buy</a></p>
    </div>
    <div>
        <p>More from iPad</p>
        <p><a href="#">iPad Support</a></p>
        <p><a href="#">AppleCare+ for iPad</a></p>
        <p><a href="#">iPadOS 18</a></p>
        <p><a href="#">Apple Intelligence</a></p>
        <p><a href="#">Apps by Apple</a></p>
        <p><a href="#">iCloud+</a></p>
        <p><a href="#">Education</a></p>
    </div>
`,
iphone: `
    <div>
        <p>Explore iPhone</p>
        <p><a href="#">Explore All iPhone</a></p>
        <p><a href="#">iPhone 16 Pro</a></p>
        <p><a href="#">iPhone 16</a></p>
        <p><a href="#">iPhone 15</a></p>
        <p><a href="#">iPhone 14</a></p>
        <p><a href="#">iPhone SE</a></p>
    </div>
    <div>
        <p>Shop iPhone</p>
        <p><a href="#">Shop iPhone</a></p>
        <p><a href="#">iPhone Accessories</a></p>
        <p><a href="#">Apple Trade In</a></p>
        <p><a href="#">Ways to Buy</a></p>
    </div>
    <div>
        <p>More from iPhone</p>
        <p><a href="#">iPhone Support</a></p>
        <p><a href="#">AppleCare+ for iPhone</a></p>
        <p><a href="#">iOS 18</a></p>
        <p><a href="#">Apple Intelligence</a></p>
        <p><a href="#">Apps by Apple</a></p>
        <p><a href="#">iPhone Privacy</a></p>
        <p><a href="#">iCloud+</a></p>
        <p><a href="#">Wallet</a></p>
        <p><a href="#">Siri</a></p>
    </div>
`,
watch: `
    <div>
        <p>Explore Watch</p>
        <p><a href="#">Explore All Apple Watch</a></p>
        <p><a href="#">Apple Watch Series 10</a></p>
        <p><a href="#">Apple Watch Ultra 2</a></p>
        <p><a href="#">Apple Watch SE</a></p>
        <p><a href="#">Apple Watch Nike</a></p>
    </div>
    <div>
        <p>Shop Watch</p>
        <p><a href="#">Shop Apple Watch</a></p>
        <p><a href="#">Apple Watch Straps</a></p>
        <p><a href="#">Apple Watch Accessories</a></p>
        <p><a href="#">Ways to Buy</a></p>
    </div>
    <div>
        <p>More from Watch</p>
        <p><a href="#">Apple Watch Support</a></p>
        <p><a href="#">AppleCare+</a></p>
        <p><a href="#">watchOS 11</a></p>
        <p><a href="#">Apple Watch For Your Kids</a></p>
        <p><a href="#">Apps by Apple</a></p>
    </div>
`,
accessories: `
    <div>
        <p>Explore Accessories</p>
        <p><a href="#">Shop All Accessories</a></p>
        <p><a href="#">Mac</a></p>
        <p><a href="#">iPad</a></p>
        <p><a href="#">iPhone</a></p>
        <p><a href="#">Apple Watch</a></p>
        <p><a href="#">AirPods</a></p>
        <p><a href="#">TV & Home</a></p>
    </div>
    <div>
        <p>Made by Apple</p>
        <p><a href="#">Beats by Dr. Dre</a></p>
        <p><a href="#">AirTag</a></p>
    </div>
`,
support: `
    <div>
        <p>Explore Support</p>
        <p><a href="#">Explore Support</a></p>
        <p><a href="#">Get Help</a></p>
        <p><a href="#">iPhone Community</a></p>
        <p><a href="#">Check Coverage</a></p>
        <p><a href="#">Mac Repair</a></p>
        <p><a href="#">iPad</a></p>
        <p><a href="#">Watch</a></p>
        <p><a href="#">AirPods</a></p>
        <p><a href="#">Music</a></p>
        <p><a href="#">TV</a></p>
    </div>
    <div>
        <p>Helpful Topics</p>
        <p><a href="#">Get AppleCare+</a></p>
        <p><a href="#">Apple Account and Password</a></p>
        <p><a href="#">Billing & Subscriptions</a></p>
        <p><a href="#">Accessibility</a></p>
    </div>
`,
tv: `
    <div>
        <p>Explore TV & Home</p>
        <p><a href="#">Apple TV 4K</a></p>
        <p><a href="#">HomePod</a></p>
        <p><a href="#">HomePod mini</a></p>
    </div>
    <div>
        <p>Shop TV & Home</p>
        <p><a href="#">Shop Apple TV</a></p>
        <p><a href="#">Shop HomePod</a></p>
        <p><a href="#">TV & Home Accessories</a></p>
    </div>
`,
entertainment: `
    <div>
        <p>Explore Entertainment</p>
        <p><a href="#">Apple Music</a></p>
        <p><a href="#">Apple TV+</a></p>
        <p><a href="#">Apple Arcade</a></p>
        <p><a href="#">Apple Fitness+</a></p>
    </div>
    <div>
        <p>More from Entertainment</p>
        <p><a href="#">Apple One</a></p>
        <p><a href="#">Apple Podcasts</a></p>
        <p><a href="#">Apple Books</a></p>
    </div>
`,
search: `
    <div class="search-container">
        <input type="text" placeholder="Search apple.com" class="search-input">
        <div class="search-links">
            <p>Quick Links</p>
            <p><a href="#">Find a Store</a></p>
            <p><a href="#">Accessories</a></p>
            <p><a href="#">AirPods</a></p>
            <p><a href="#">Apple Intelligence</a></p>
            <p><a href="#">Apple Trade In</a></p>
        </div>
    </div>
`
};

// Keep track if the dropdown should stay open
let dropdownOpen = false;

// Show dropdown when hovering over navbar items
document.querySelectorAll(".menu").forEach(menuItem => {
    menuItem.addEventListener("mouseover", () => {
        const category = menuItem.getAttribute("data-dropdown");
        if (dropdownData[category]) {
            dropdownContent.innerHTML = dropdownData[category];
            dropdownContainer.classList.add("active");
            dropdownOpen = true; // Keep it open
        }
    });
});

// Keep dropdown open when hovering over it
dropdownContainer.addEventListener("mouseover", () => {
    dropdownOpen = true;
});

// Close dropdown only when leaving both navbar and dropdown
document.addEventListener("mouseover", (event) => {
    if (!event.target.closest(".navbar") && !event.target.closest(".dropdown-container")) {
        dropdownContainer.classList.remove("active");
        dropdownOpen = false;
    }
});
const video = document.getElementById("hoverVideo");

if (video) {
    video.addEventListener("mouseenter", () => {
        console.log("Hover detected, playing video...");
        video.currentTime = 0;
        video.muted = true; 
        video.play().catch(err => console.error("Error playing video:", err));
    });

    video.addEventListener("ended", () => {
        console.log("Video ended, pausing...");
        video.pause();
    });
} else {
    console.error("Video element not found!");
}
