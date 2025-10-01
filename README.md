````markdown
# ✈️ TripNest - The Ultimate Travel Booking Experience

**TripNest** is a modern, responsive, and interactive travel booking front-end website. It serves as a comprehensive platform for users to browse stunning global destinations, explore curated travel packages, and simulate a full, multi-step booking and dynamic pricing process.

This project is built purely with **HTML, CSS, and vanilla JavaScript**, showcasing advanced client-side interactivity and a clean, user-friendly interface.

---

## 🌟 Live Demo

The website is fully deployed and accessible via **GitHub Pages**.

🔗 **[View Live Demo Here](https://tripnest-gold.vercel.app/)**

---

## ✨ Features at a Glance

| Category | Feature | Description |
| :--- | :--- | :--- |
| **Design & UX** | **Fully Responsive** | Seamless layout adaptation for Desktop, Tablet, and Mobile devices. |
| **Browsing** | **Destination Carousel** | Interactive browsing across **25+ stunning global destinations**. |
| **Search** | **Advanced Search Modal** | Real-time client-side search with filtering by category, price range, and popular suggestions. |
| **Booking** | **Multi-Step Booking System** | A 3-step form (Trip Details, Traveler Info, Payment) simulating a real-world checkout flow. |
| **Pricing** | **Dynamic Price Calculator** | Real-time calculation of total cost based on package, accommodation, traveler count, add-ons, and discounts. |
| **Interactivity** | **Animations & Sliders** | Smooth CSS animations, transitions, and auto-rotating testimonials slider. |
| **Packages** | **Curated Themes** | Explore specialized packages: *Beach Getaway*, *Mountain Adventure*, *City Explorer*, and *Spiritual Temples*. |

---

## 🚀 Getting Started

To get a copy of the project up and running on your local machine for development and testing purposes, follow these simple steps.

### Prerequisites

* A modern web browser (Chrome, Firefox, Safari, Edge).
* **No server setup required**—the application runs entirely in the browser.

### Installation

1.  **Clone the repository** to your local machine:
    ```bash
    git clone [https://github.com/Shiva3505/tripnest.git](https://github.com/Shiva3505/tripnest.git)
    ```

2.  **Navigate** to the project directory:
    ```bash
    cd tripnest
    ```

3.  **Open the file:**
    Simply double-click the `index.html` file in your file explorer, or open it directly in your web browser.

---

## 🌐 Project Structure

````

TripNest/
├── index.html      \# Main structure, content, and modals
├── styles.css      \# Complete styling, animations, media queries, and print styles
├── script.js       \# All interactivity, search logic, price calculation, and form handling
└── README.md       \# Project documentation (this file)

```

### 📋 Key Functionality Details

| File | Section | Details |
| :--- | :--- | :--- |
| `script.js` | **Booking System** | Manages multi-step navigation, date validation, and final price calculation logic. |
| `script.js` | **Price Calculation** | Implements dynamic pricing based on: Base price, Accommodation ($\$200-\$800$), Transportation ($\$200-\$500$), Add-ons, Traveler multiplier (Children 70%, Infants 10%), and Discount code application (`SAVE20`, `WELCOME10`). |
| `script.js` | **Search Logic** | Client-side search across 25 destinations with filtering for category and price range. |
| `styles.css` | **Responsiveness** | Utilizes `@media queries` for optimal viewing on **Desktop** ($>768\text{px}$), **Tablet** ($481\text{px}-768\text{px}$), and **Mobile** ($\le 480\text{px}$). |

---

## 🗺️ Destinations Featured

A selection of the 25 global destinations available for browsing:

* **Europe:** Paris, France; Santorini, Greece; Swiss Alps, Switzerland; Norwegian Fjords, Norway; Dubrovnik, Croatia
* **Asia:** Bali, Indonesia; Tokyo, Japan; Maldives; Phuket, Thailand; Ha Long Bay, Vietnam; Kathmandu, Nepal
* **Americas:** New York, USA; Rio de Janeiro, Brazil; Patagonia, Chile
* **Middle East & Africa:** Dubai, UAE; Marrakech, Morocco; Cairo, Egypt; Masai Mara, Kenya

---

## 🎨 Customization and Extensibility

The codebase is structured for easy modification of key visual and functional components:

| Component | File to Edit | Instructions |
| :--- | :--- | :--- |
| **Color Scheme** | `styles.css` | Update the primary gradient: `background: linear-gradient(45deg, #ff6200, #ff8c00);` |
| **Base Prices** | `script.js` | Modify values within the `calculatePrice()` function. |
| **Destinations** | `script.js` & `index.html` | Add new objects to the `searchData.destinations` array and create the corresponding HTML card. |

---

## ⚠️ Important Notes

* **Client-Side Only:** This is a front-end demonstration project. The payment and form submissions are simulated and display alerts; **no actual data processing or server-side transactions occur.**
* **External Content:** Images are sourced externally (Unsplash, Bing, etc.) for demonstration purposes.
* **Dependencies:** Uses **Font Awesome 6.4.0** for icons.

---

## 🤝 Contribution

Contributions, issue reports, and feature suggestions are highly welcomed! If you have ideas to enhance the UI, refactor the JavaScript logic, or expand the destination list, please feel free to:

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 👨‍💻 Author

**G Shiva Ram Reddy**

* **GitHub:** [Shiva3505](https://github.com/Shiva3505)
* **LinkedIn:** [https://github.com/Shiva3505]
* **Email:** Shiva03505@gmail.com
* **Phone:** +917801043389

---


***
```
