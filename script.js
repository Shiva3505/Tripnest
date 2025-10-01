/** @format */

// Navigation functionality
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.querySelector(".navbar");

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
});
// Search data
const searchData = {
  destinations: [
    {
      name: "Paris, France",
      description: "Romance and culture in the City of Light",
      price: 1200,
      image: "https://images.unsplash.com/photo-1499678329028-101435549a4e",
      category: "city",
      keywords: ["paris", "france", "romantic", "culture", "eiffel tower"],
      link: "https://www.pariscitytours.fr/"
    },
    {
      name: "Bali, Indonesia",
      description: "Stunning beaches and lush jungles",
      price: 800,
      image: "https://tse4.mm.bing.net/th/id/OIP.eX8QMRR4iZtzA31WPXa39AHaE7",
      category: "beach",
      keywords: ["bali", "indonesia", "beach", "tropical", "jungle"],
      link: "https://www.thebalipackage.com/"
    },
    {
      name: "New York, USA",
      description: "The city that never sleeps",
      price: 1000,
      image: "https://static01.nyt.com/images/2012/05/06/nyregion/06BIG_SPAN/BIG-superJumbo.jpg",
      category: "city",
      keywords: ["new york", "usa", "urban", "culture", "broadway"],
      link: "https://blueorangetravel.com/"
    },
    {
      name: "Tokyo, Japan",
      description: "Vibrant culture and modern wonders",
      price: 1100,
      image: "https://s.yimg.com/ny/api/res/1.2/OSfOf0_b1btOoJBAhnPLPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-07/59a4bc60-f23c-11eb-bf75-c38993010fb7",
      category: "city",
      keywords: ["tokyo", "japan", "culture", "modern", "city"],
      link: "https://www.getyourguide.com/tokyo-l193/"
    },
    {
      name: "Santorini, Greece",
      description: "Iconic whitewashed buildings and sunsets",
      price: 900,
      image: "https://tse1.mm.bing.net/th/id/OIP.CamCUcbsCGSHw1t3D3y6KgHaE7",
      category: "beach",
      keywords: ["santorini", "greece", "sunsets", "whitewashed", "island"],
      link: "https://www.santorini-view.com/"
    },
    {
      name: "Maldives",
      description: "Crystal-clear waters, overwater villas, and vibrant marine life",
      price: 2000,
      image: "https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif",
      category: "beach",
      keywords: ["maldives", "luxury", "beach", "overwater", "tropical"],
      link: "https://www.thomascook.in/holidays/international-tour-packages/maldives-tour-packages"
    },
    {
      name: "Dubai, UAE",
      description: "Luxury shopping, ultramodern architecture, and desert adventures",
      price: 1300,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      category: "city",
      keywords: ["dubai", "uae", "luxury", "architecture", "desert"],
      link: "https://booking.visitdubai.com/en"
    },
    {
      name: "Phuket, Thailand",
      description: "Tropical paradise with stunning beaches and vibrant nightlife",
      price: 850,
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5",
      category: "beach",
      keywords: ["phuket", "thailand", "beach", "tropical", "nightlife"],
      link: "https://booking.visitdubai.com/en"
    },
    {
      name: "Swiss Alps, Switzerland",
      description: "Majestic mountains, pristine lakes, and charming Alpine villages",
      price: 1500,
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7",
      category: "mountain",
      keywords: ["swiss", "alps", "mountains", "skiing", "alpine"],
      link: "https://www.myswitzerland.com/en-in/experiences/experience-tour/highlights-by-train-bus-and-boat/grand-train-tour-of-switzerland/tickets-reservations-timetables/"
    },
    {
      name: "Reykjavik, Iceland",
      description: "Northern lights, geysers, and dramatic volcanic landscapes",
      price: 1400,
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3",
      category: "nature",
      keywords: ["reykjavik", "iceland", "northern lights", "geysers", "volcanic"],
      link: "https://guidetoiceland.is/"
    },
    {
      name: "Marrakech, Morocco",
      description: "Exotic souks, stunning palaces, and Sahara desert gateway",
      price: 950,
      image: "https://i0.wp.com/www.hachettebookgroup.com/wp-content/uploads/2019/01/Morocco_ChefchouenAerial_Zzvet-iStock-473937070.jpg?resize=1080,1080&ssl=1",
      category: "culture",
      keywords: ["marrakech", "morocco", "souks", "palaces", "desert"],
      link: "https://www.visitmarrakech.com/"
    },
    {
      name: "Rio de Janeiro, Brazil",
      description: "Carnival spirit, Christ the Redeemer, and Copacabana Beach",
      price: 1100,
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325",
      category: "city",
      keywords: ["rio", "brazil", "carnival", "beach", "culture"],
      link: "https://www.riodejaneiro.com/"
    },
    {
      name: "Cairo, Egypt",
      description: "Ancient pyramids, Sphinx, and treasures of the pharaohs",
      price: 1000,
      image: "https://www.telegraph.co.uk/content/dam/eip/audley/egypt/audley-egypt-header-pyramids-giza-credit-getty.jpg?imwidth=1200",
      category: "culture",
      keywords: ["cairo", "egypt", "pyramids", "sphinx", "history"],
      link: "https://www.viator.com/Cairo/d782-ttd"
    },
    {
      name: "Sydney, Australia",
      description: "Iconic Opera House, Harbor Bridge, and stunning beaches",
      price: 1200,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      category: "city",
      keywords: ["sydney", "australia", "opera house", "harbor", "beaches"],
      link: "https://www.sydney.com/"
    },
    {
      name: "Goa, India",
      description: "Golden beaches, Portuguese heritage, and vibrant beach culture",
      price: 700,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
      category: "beach",
      keywords: ["goa", "india", "beaches", "portuguese", "culture"],
      link: "https://www.makemytrip.com/holidays-india/goa-travel-packages.html"
    },
    {
      name: "Cappadocia, Turkey",
      description: "Hot air balloons, fairy chimneys, and underground cities",
      price: 900,
      image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2022/01/13/174612.jpg",
      category: "culture",
      keywords: ["cappadocia", "turkey", "balloons", "fairy chimneys", "underground"],
      link: "https://www.goturkey.com/cappadocia"
    },
    {
      name: "Machu Picchu, Peru",
      description: "Ancient Incan citadel high in the Andes Mountains",
      price: 1300,
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
      category: "culture",
      keywords: ["machu picchu", "peru", "incan", "andes", "history"],
      link: "https://www.peru.travel/en/attractions/machu-picchu"
    },
    {
      name: "Masai Mara, Kenya",
      description: "Great Migration, Big Five wildlife, and traditional Maasai culture",
      price: 1600,
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
      category: "nature",
      keywords: ["masai mara", "kenya", "wildlife", "safari", "migration"],
      link: "https://www.kenya.travel/destination/masai-mara/"
    },
    {
      name: "Norwegian Fjords, Norway",
      description: "Dramatic waterfalls, steep cliffs, and pristine Nordic wilderness",
      price: 1700,
      image: "https://wallpaperaccess.com/full/3904093.jpg",
      category: "nature",
      keywords: ["norwegian fjords", "norway", "waterfalls", "cliffs", "wilderness"],
      link: "https://www.fjordtours.com/en"
    },
    {
      name: "Ha Long Bay, Vietnam",
      description: "Emerald waters, limestone pillars, and floating fishing villages",
      price: 850,
      image: "https://images.unsplash.com/photo-1528127269322-539801943592",
      category: "nature",
      keywords: ["ha long bay", "vietnam", "waters", "limestone", "villages"],
      link: "https://www.halongbaycruises.com/"
    },
    {
      name: "Petra, Jordan",
      description: "Rose-red carved city, ancient Nabataean architecture, and desert wonders",
      price: 1000,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      category: "culture",
      keywords: ["petra", "jordan", "nabataean", "architecture", "desert"],
      link: "https://petrapass.pdtra.gov.jo/"
    },
    {
      name: "Palawan, Philippines",
      description: "Underground river, pristine lagoons, and world-class diving spots",
      price: 900,
      image: "https://th.bing.com/th/id/R.274e521cd6598c259226f4fb7532eb69?rik=ZDnYMZ3PD61WoA&riu=http%3a%2f%2finspirationseek.com%2fwp-content%2fuploads%2f2014%2f11%2fPalawan-Island-Philippines-Photography.jpg&ehk=n0k1ZIoMdot2hwMw1QSzRKPKjwm5dKXJ6JPp%2bC4ATeY%3d&risl=&pid=ImgRaw&r=0",
      category: "beach",
      keywords: ["palawan", "philippines", "lagoons", "diving", "river"],
      link: "https://www.booking.com/region/ph/palawan.html"
    },
    {
      name: "Dubrovnik, Croatia",
      description: "Medieval walls, Game of Thrones locations, and Adriatic coastline",
      price: 950,
      image: "https://tse2.mm.bing.net/th/id/OIP.HCabqYNobStvu6xl5xFGUQHaE8",
      category: "city",
      keywords: ["dubrovnik", "croatia", "medieval", "adriatic", "game of thrones"],
      link: "https://www.booking.com/city/hr/dubrovnik.html"
    },
    {
      name: "Kathmandu, Nepal",
      description: "Himalayan gateway, ancient temples, and trekking adventures",
      price: 700,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa",
      category: "culture",
      keywords: ["kathmandu", "nepal", "himalayas", "temples", "trekking"],
      link: "https://www.booking.com/city/np/kathmandu.html"
    },
    {
      name: "Patagonia, Chile",
      description: "Glaciers, granite peaks, and pristine wilderness at world's end",
      price: 1800,
      image: "https://wallpaperaccess.com/full/5730164.jpg",
      category: "nature",
      keywords: ["patagonia", "chile", "glaciers", "peaks", "wilderness"],
      link: "https://www.booking.com/region/cl/patagonia.html"
    }
  ],
    packages: [
        { 
            name: "Beach Getaway", 
            description: "Flight + Hotel + Activities", 
            price: 999, 
            image: "https://th.bing.com/th/id/R.2bd767af5fad8a1898550352b8b2facb", 
            category: "beach", 
            keywords: ["beach", "getaway", "relaxation", "sun","tropical", "vacation"],
            link: "https://www.getyourguide.com/s/?q=beach+getaways&searchSource=3" // ADD this line
        },
        { 
            name: "Mountain Adventure", 
            description: "Flight + Hotel + Guided Tours", 
            price: 1299, 
            image: "https://tse2.mm.bing.net/th/id/OIP.Lag3D7ef0p8Ieo_fQh6c2gHaEo", 
            category: "mountain", 
            keywords: ["mountain", "adventure", "hiking", "nature", "trekking"],
            link: "https://www.getyourguide.com/s/?q=mountain+adventures&searchSource=3" // ADD this line
        },
        { 
            name: "City Explorer", 
            description: "Flight + Hotel + City Tours", 
            price: 799, 
            image: "https://th.bing.com/th/id/OIP.VSAzLAkzRY_vY3cj_i3QEgHaFA", 
            category: "city", 
            keywords: ["city", "urban", "culture", "sightseeing", "break", "explorer",],
            link: "https://www.getyourguide.com/s/?q=beautiful+cities+in+world&searchSource=3" // ADD this line
        },
        { 
            name: "Spiritual Temples", 
            description: "Flight + Hotel + Temple Tours", 
            price: 799, 
            image: "https://images.nativeplanet.com/ph-big/2024/06/top-10-temples-for-an-unforgettable-spiritual-journey-in-karnataka_171939127140.jpg", 
            category: "spiritual", 
            keywords: ["spiritual", "temples", "culture", "heritage", "journey", "pilgrimage"],
            link: "https://www.easydarshan.com/" // ADD this line
        }
    ]
};


// Search modal functions
function toggleSearchModal() {
    const modal = document.getElementById('search-modal');
    modal.style.display = 'flex';
    document.getElementById('search-input').focus();
}

function closeSearchModal() {
    document.getElementById('search-modal').style.display = 'none';
    document.getElementById('search-input').value = '';
    showSuggestions();
}

function searchFor(query) {
    document.getElementById('search-input').value = query;
    performSearch();
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const category = document.getElementById('search-category').value;
    const priceRange = document.getElementById('price-range').value;
    
    if (!query) {
        showSuggestions();
        return;
    }
    
    let results = [];
    
    // Search destinations
    if (category === 'all' || category === 'destinations') {
        const destinationResults = searchData.destinations.filter(item => 
            matchesSearch(item, query) && matchesPriceRange(item.price, priceRange)
        ).map(item => ({...item, type: 'destination'}));
        results = results.concat(destinationResults);
    }
    
    // Search packages
    if (category === 'all' || category === 'packages') {
        const packageResults = searchData.packages.filter(item => 
            matchesSearch(item, query) && matchesPriceRange(item.price, priceRange)
        ).map(item => ({...item, type: 'package'}));
        results = results.concat(packageResults);
    }
    
    displayResults(results, query);
}

function matchesSearch(item, query) {
    const searchTerms = query.split(' ').filter(term => term.length > 0);
    return searchTerms.some(term => 
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.keywords.some(keyword => keyword.includes(term))
    );
}

function matchesPriceRange(price, range) {
    if (range === 'all') return true;
    
    switch(range) {
        case '0-500': return price <= 500;
        case '500-1000': return price > 500 && price <= 1000;
        case '1000-2000': return price > 1000 && price <= 2000;
        case '2000+': return price > 2000;
        default: return true;
    }
}

function displayResults(results, query) {
    const resultsContainer = document.getElementById('search-results');
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No results found for "${query}"</h3>
                <p>Try different keywords or browse our popular destinations</p>
            </div>
        `;
        return;
    }
    
    const resultsHTML = results.map(item => `
        <div class="result-item" onclick="openDestinationLink('${item.link}')">
            <img src="${item.image}" alt="${item.name}" class="result-image">
            <div class="result-content">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p><strong>Category:</strong> ${item.type === 'destination' ? 'Destination' : 'Package'}</p>
            </div>
            <div class="result-price">$${item.price}</div>
        </div>
    `).join('');
    
    resultsContainer.innerHTML = `
        <h3>Search Results (${results.length} found)</h3>
        ${resultsHTML}
    `;
}

function showSuggestions() {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = `
        <div class="search-suggestions">
            <h3>Popular Searches:</h3>
            <div class="suggestion-tags">
                <span class="tag" onclick="searchFor('Beach destinations')">Beach destinations</span>
                <span class="tag" onclick="searchFor('Mountain adventure')">Mountain adventure</span>
                <span class="tag" onclick="searchFor('City breaks')">City breaks</span>
                <span class="tag" onclick="searchFor('Luxury travel')">Luxury travel</span>
                <span class="tag" onclick="searchFor('Budget trips')">Budget trips</span>
                <span class="tag" onclick="searchFor('Spiritual journey')">Spiritual journey</span>
                <span class="tag" onclick="searchFor('Cultural tours')">Cultural tours</span>
                <span class="tag" onclick="searchFor('Adventure sports')">Adventure sports</span>
            </div>
        </div>
    `;
}

function openDestinationLink(link) {
    closeSearchModal();
    window.open(link, '_blank');
}


// Add search input event listeners
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchCategory = document.getElementById('search-category');
    const priceRange = document.getElementById('price-range');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            if (this.value.trim()) {
                performSearch();
            } else {
                showSuggestions();
            }
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    if (searchCategory) {
        searchCategory.addEventListener('change', performSearch);
    }
    
    if (priceRange) {
        priceRange.addEventListener('change', performSearch);
    }
});

// Close search modal when clicking outside
window.addEventListener('click', function(e) {
    const searchModal = document.getElementById('search-modal');
    if (e.target === searchModal) {
        closeSearchModal();
    }
});

// Close search modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeSearchModal();
    }
});

// Mobile hamburger menu
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    scrollToSection(targetId);
  });
});

function scrollToSection(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    // Update active nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.classList.remove("active");
    });
    document.querySelector(`a[href="${targetId}"]`).classList.add("active");
  }
}

// Carousel functionality for destinations
let destinationCurrentIndex = 0;
const destinationCards = document.querySelectorAll(".destination-card").length;
const cardsPerView = window.innerWidth <= 768 ? 1 : 3;
const maxDestinationIndex = Math.max(0, destinationCards - cardsPerView);

document
  .querySelector(".destinations .prev")
  .addEventListener("click", function () {
    destinationCurrentIndex = Math.max(0, destinationCurrentIndex - 1);
    updateDestinationCarousel();
  });

document
  .querySelector(".destinations .next")
  .addEventListener("click", function () {
    destinationCurrentIndex = Math.min(
      maxDestinationIndex,
      destinationCurrentIndex + 1
    );
    updateDestinationCarousel();
  });

function updateDestinationCarousel() {
  const grid = document.querySelector(".destination-grid");
  const translateX = -(destinationCurrentIndex * (100 / cardsPerView));
  grid.style.transform = `translateX(${translateX}%)`;
  // Re-apply animation to visible cards
  const visibleCards = document.querySelectorAll(".destination-card");
  visibleCards.forEach((card, index) => {
    if (
      index >= destinationCurrentIndex &&
      index < destinationCurrentIndex + cardsPerView
    ) {
      card.style.animation = "slideInFromLeft 0.8s ease-out";
    } else {
      card.style.animation = "";
    }
  });
}

// Carousel functionality for packages
let packageCurrentIndex = 0;
const packageCards = document.querySelectorAll(".package-card").length;
const maxPackageIndex = Math.max(0, packageCards - cardsPerView);

document
  .querySelector(".packages .prev")
  .addEventListener("click", function () {
    packageCurrentIndex = Math.max(0, packageCurrentIndex - 1);
    updatePackageCarousel();
  });

document
  .querySelector(".packages .next")
  .addEventListener("click", function () {
    packageCurrentIndex = Math.min(maxPackageIndex, packageCurrentIndex + 1);
    updatePackageCarousel();
  });

function updatePackageCarousel() {
  const grid = document.querySelector(".package-grid");
  const translateX = -(packageCurrentIndex * (100 / cardsPerView));
  grid.style.transform = `translateX(${translateX}%)`;
  // Re-apply animation to visible cards
  const visibleCards = document.querySelectorAll(".package-card");
  visibleCards.forEach((card, index) => {
    if (
      index >= packageCurrentIndex &&
      index < packageCurrentIndex + cardsPerView
    ) {
      card.style.animation = "flipIn 0.8s ease-out";
    } else {
      card.style.animation = "";
    }
  });
}

// Testimonial slider
let testimonialCurrentIndex = 0;
const testimonialCards = document.querySelectorAll(".testimonial-card").length;

setInterval(function () {
  testimonialCurrentIndex = (testimonialCurrentIndex + 1) % testimonialCards;
  updateTestimonialSlider();
}, 5000);

function updateTestimonialSlider() {
  const grid = document.querySelector(".testimonial-grid");
  const translateX = -(testimonialCurrentIndex * 100);
  grid.style.transform = `translateX(${translateX}%)`;
}

// Happy travelers counter animation
function animateCounter() {
  const counter = document.getElementById("happy-travelers");
  const target = 15420;
  let current = 0;
  const increment = target / 100;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    counter.textContent = Math.floor(current).toLocaleString();
  }, 20);
}

// Trigger counter animation when in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounter();
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(document.getElementById("happy-travelers"));

// Newsletter form
document
  .getElementById("newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
      alert(
        `Thank you, ${name}! Your free travel guide will be sent to ${email} within 24 hours.`
      );
      this.reset();
    }
  });

// Modal functionality
function openModal(destination) {
  const modal = document.getElementById("booking-modal");
  modal.style.display = "flex";

  if (destination) {
    document.getElementById("destination").value = destination;
    updatePackageOptions(destination);
  }

  // Set minimum date to today
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("start-date").min = today;
  document.getElementById("end-date").min = today;

  calculatePrice();
}

function closeModal() {
  document.getElementById("booking-modal").style.display = "none";
  resetModal();
}

function resetModal() {
  // Reset to step 1
  document.getElementById("step1").style.display = "block";
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "none";

  // Reset progress bar
  document.querySelectorAll(".step").forEach((step, index) => {
    if (index === 0) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });

  // Reset forms
  document.querySelectorAll("form").forEach((form) => form.reset());
}

function nextStep(currentStep) {
  // Validate current step
  const currentForm = document.getElementById(
    `booking-form-step${currentStep}`
  );
  if (!currentForm.checkValidity()) {
    currentForm.reportValidity();
    return;
  }

  // Hide current step and show next
  document.getElementById(`step${currentStep}`).style.display = "none";
  document.getElementById(`step${currentStep + 1}`).style.display = "block";

  // Update progress bar
  document.querySelectorAll(".step")[currentStep].classList.add("active");

  // Special handling for step transitions
  if (currentStep === 1) {
    // Copy email from step 1 to step 2 if available
    const newsletterEmail = document.getElementById("email").value;
    if (newsletterEmail) {
      document.getElementById("email").value = newsletterEmail;
    }
  }
}

function prevStep(currentStep) {
  // Hide current step and show previous
  document.getElementById(`step${currentStep}`).style.display = "none";
  document.getElementById(`step${currentStep - 1}`).style.display = "block";

  // Update progress bar
  document
    .querySelectorAll(".step")
    [currentStep - 1].classList.remove("active");
}

function updatePackageOptions(destination) {
  const packageSelect = document.getElementById("package");
  packageSelect.innerHTML = '<option value="">Select Package</option>';

  // Add destination-specific packages
  const packages = {
    Paris: ["City Explorer", "Cultural Heritage Tour", "Romantic Getaway"],
    Bali: ["Beach Getaway", "Adventure Package", "Wellness Retreat"],
    "New York": ["City Explorer", "Broadway Package", "Shopping Tour"],
    Tokyo: ["Cultural Experience", "Food Tour", "Modern City Package"],
    Santorini: ["Beach Getaway", "Island Hopping", "Sunset Tour"],
  };

  if (packages[destination]) {
    packages[destination].forEach((pkg) => {
      const option = document.createElement("option");
      option.value = pkg;
      option.textContent = pkg;
      packageSelect.appendChild(option);
    });
  }
}

// Price calculation
function calculatePrice() {
  const basePrice = 1000;
  let total = basePrice;

  // Add accommodation cost
  const accommodation = document.getElementById("accommodation").value;
  const accommodationPrices = {
    "3-Star Hotel": 200,
    "4-Star Hotel": 400,
    "5-Star Hotel": 800,
  };
  const hotelPrice = accommodationPrices[accommodation] || 0;
  total += hotelPrice;

  // Add transport cost
  const transport = document.getElementById("transport").value;
  const transportPrices = {
    Flight: 500,
    Train: 200,
    Car: 300,
  };
  const flightPrice = transportPrices[transport] || 0;
  total += flightPrice;

  // Add-ons
  let activitiesPrice = 0;
  document
    .querySelectorAll('.add-ons input[type="checkbox"]:checked')
    .forEach((addon) => {
      activitiesPrice += parseInt(addon.value);
    });
  total += activitiesPrice;

  // Number of travelers
  const adults = parseInt(document.getElementById("adults").value) || 1;
  const children = parseInt(document.getElementById("children").value) || 0;
  const infants = parseInt(document.getElementById("infants").value) || 0;

  const travelerMultiplier = adults + children * 0.7 + infants * 0.1;
  total *= travelerMultiplier;

  // Taxes
  const taxes = Math.round(total * 0.1);
  total += taxes;

  // Apply coupon
  const coupon = document.getElementById("coupon").value.toUpperCase();
  let discount = 0;
  if (coupon === "SAVE20") {
    discount = total * 0.2;
    total -= discount;
  } else if (coupon === "WELCOME10") {
    discount = total * 0.1;
    total -= discount;
  }

  // Update display
  document.getElementById("base-price").textContent = basePrice;
  document.getElementById("flight-price").textContent = flightPrice;
  document.getElementById("hotel-price").textContent = hotelPrice;
  document.getElementById("activities-price").textContent = activitiesPrice;
  document.getElementById("taxes").textContent = taxes;
  document.getElementById("total-price").textContent = Math.round(total);
}

// Add event listeners for price calculation
document.addEventListener("DOMContentLoaded", function () {
  const priceInputs = [
    "#accommodation",
    "#transport",
    "#adults",
    "#children",
    "#infants",
    "#coupon",
  ];
  priceInputs.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.addEventListener("change", calculatePrice);
      element.addEventListener("input", calculatePrice);
    }
  });

  document
    .querySelectorAll('.add-ons input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", calculatePrice);
    });

  // Date validation
  document.getElementById("start-date").addEventListener("change", function () {
    const startDate = new Date(this.value);
    const endDateInput = document.getElementById("end-date");

    // Set minimum end date to start date + 1 day
    const minEndDate = new Date(startDate);
    minEndDate.setDate(minEndDate.getDate() + 1);
    endDateInput.min = minEndDate.toISOString().split("T")[0];

    // Clear end date if it's before start date
    if (endDateInput.value && new Date(endDateInput.value) <= startDate) {
      endDateInput.value = "";
    }
  });
});
function submitBooking() {
  // Validate all forms
  const forms = [
    "booking-form-step1",
    "booking-form-step2",
    "booking-form-step3",
  ];
  let allValid = true;

  forms.forEach((formId) => {
    const form = document.getElementById(formId);
    if (!form.checkValidity()) {
      allValid = false;
    }
  });

  if (!allValid) {
    alert("Please fill in all required fields correctly.");
    return;
  }

  // Simulate booking process
  const bookingId =
    "TN" + Math.random().toString(36).substr(2, 9).toUpperCase();
  const totalPrice = document.getElementById("total-price").textContent;

  alert(`Booking Confirmed!
           Booking ID: ${bookingId}
           Total Amount: $${totalPrice}
          
           A confirmation email has been sent to your registered email address.
           Thank you for choosing TripNest!`);

  closeModal();
}
// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("booking-modal");
  if (e.target === modal) {
    closeModal();
  }
});
// Add some interactive effects
document.addEventListener("DOMContentLoaded", function () {
  // Add floating animation to CTA buttons
  const ctaButtons = document.querySelectorAll(".cta-button");
  ctaButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.animation = "float 0.5s ease-in-out infinite alternate";
    });

    button.addEventListener("mouseleave", function () {
      this.style.animation = "";
    });
  });

  // Add parallax effect to hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Initialize carousels
  updateDestinationCarousel();
  updatePackageCarousel();
});
// Add CSS for floating animation
const style = document.createElement("style");
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0px); }
        100% { transform: translateY(-5px); }
    }
   
    .modal {
        backdrop-filter: blur(5px);
    }
   
    .modal-content {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    }
   
    /* Additional mobile styles */
    @media (max-width: 480px) {
        .hero h1 {
            font-size: 2rem;
        }
       
        .hero p {
            font-size: 1rem;
        }
       
        .cta-button {
            padding: 0.6rem 1.5rem;
            font-size: 1rem;
            margin: 0.5rem;
        }
       
        .modal-content {
            padding: 1rem;
            margin: 0.5rem;
        }
       
        .destinations h2, .packages h2 {
            font-size: 2rem;
        }
       
        .features-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
    }
   
    /* Print styles */
    @media print {
        .navbar, .modal, .carousel-controls {
            display: none;
        }
       
        .hero {
            height: auto;
            padding: 2rem;
        }
       
        body {
            background: white;
            color: black;
        }
    }
`;
document.head.appendChild(style);

// Add accessibility features
document.addEventListener("keydown", function (e) {
  // Close modal with Escape key
  if (e.key === "Escape") {
    closeModal();
  }

  // Navigate carousel with arrow keys
  if (e.key === "ArrowLeft") {
    document.querySelector(".destinations .prev").click();
  }
  if (e.key === "ArrowRight") {
    document.querySelector(".destinations .next").click();
  }
});
