/* main script: populates marquee images per category and handles button state + form validation (existing) */

/* ======= Category image lists ======= */
/* NOTE:
   - Pharma filenames taken from your screenshot (imgNN.jpg).
   - Other categories follow the naming pattern you specified; adjust arrays below if actual filenames differ.
*/
const categories = {
  Pharma: [
    "Pharma/img14.jpg","Pharma/img28.jpg","Pharma/img36.jpg","Pharma/img44.jpg","Pharma/img51.jpg","Pharma/img58.jpg","Pharma/img73.jpg","Pharma/img81.jpg","Pharma/img88.jpg","Pharma/img95.jpg","Pharma/img102.jpg",
    "Pharma/img110.jpg","Pharma/img118.jpg","Pharma/img131.jpg","Pharma/img138.jpg","Pharma/img144.jpg","Pharma/img151.jpg","Pharma/img157.jpg","Pharma/img165.jpg","Pharma/img173.jpg","Pharma/img181.jpg","Pharma/img187.jpg",
    "Pharma/img199.jpg","Pharma/img206.jpg","Pharma/img212.jpg","Pharma/img219.jpg","Pharma/img225.jpg","Pharma/img233.jpg","Pharma/img241.jpg","Pharma/img248.jpg","Pharma/img255.jpg","Pharma/img261.jpg","Pharma/img268.jpg"
  ],

  // Corporate: 8 logos named as you specified
  Corporate: [
    "Corporate/Corporate Sector-1.png",
    "Corporate/Corporate Sector-2.png",
    "Corporate/Corporate Sector-3.png",
    "Corporate/Corporate Sector-4.png",
    "Corporate/Corporate Sector-5.png",
    "Corporate/Corporate Sector-6.png",
    "Corporate/Corporate Sector-7.png",
    "Corporate/Corporate Sector-8.png"
  ],

  // Education: assumed Education-1..8.png
  Education: [
  "Education/Education Sector-1.png",
  "Education/Education Sector-2.png",
  "Education/Education Sector-3.png",
  "Education/Education Sector-4.png",
  "Education/Education Sector-5.png",
  "Education/Education Sector-6.png",
  "Education/Education Sector-7.png",
  "Education/Education Sector-8.png"
],

// Entertainment: 4 logos
Entertainment: [
  "Entertainment/Entertainment Sector-1.png",
  "Entertainment/Entertainment Sector-2.png",
  "Entertainment/Entertainment Sector-3.png",
  "Entertainment/Entertainment Sector-4.png"
],


  // Government: 15 logos
Government: Array.from({length: 15}, (_, i) => `Government/Government Sector-${i+1}.png`),

  // International: 4 logos
  International: [
    "International/International-1.png",
    "International/International-2.png",
    "International/International-3.png",
    "International/International-4.png"
  ],

  // Private Association: 9 logos
  "Private Association": Array.from({length:9}, (_, i) => `Private Association/Private Association-${i+1}.png`)
};


/* ======= DOM refs ======= */
const track = document.querySelector(".brand-track");
const catButtons = Array.from(document.querySelectorAll(".cat-btn"));

/* render logos for a given category */
/* render logos for a given category */
function renderLogos(catName) {
  const imgs = categories[catName] || [];
  // clear previous
  track.innerHTML = "";

  // remove any previous "static" classes / inline animation styles
  track.classList.remove("static");
  const marqueeEl = document.querySelector(".brand-marquee");
  if (marqueeEl) marqueeEl.classList.remove("static");
  track.style.animation = "";        // clear inline animation
  track.style.animationDuration = "";

  if (imgs.length === 0) return;

  // build one set of images
  const fragment = document.createDocumentFragment();
  imgs.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = catName + " brand";
    img.className = "brand-logo";
    fragment.appendChild(img);
  });

  // categories that should be STATIC (no marquee)
  const staticCats = ["Entertainment", "International"];

  if (staticCats.includes(catName)) {
    // append only one set (no duplication) and switch to static layout
    track.appendChild(fragment);
    track.classList.add("static");
    if (marqueeEl) marqueeEl.classList.add("static");
    // ensure no animation
    track.style.animation = "none";
  } else {
    // marquee behavior for other categories (keep smooth looping)
    track.appendChild(fragment.cloneNode(true));
    track.appendChild(fragment.cloneNode(true));

    // adjust animation speed based on number of unique images
    const base = 10; // seconds per ~6 images
    const duration = Math.max(8, Math.round((imgs.length / 6) * base));
    track.style.animationDuration = duration + "s";
    // ensure it's not accidentally flagged static
    track.classList.remove("static");
    if (marqueeEl) marqueeEl.classList.remove("static");
  }
}


/* set active button */
function setActiveButton(targetBtn) {
  catButtons.forEach(btn => {
    const is = btn === targetBtn;
    btn.classList.toggle("active", is);
    btn.setAttribute("aria-selected", is ? "true" : "false");
  });
}

/* attach click handlers */
catButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const cat = btn.getAttribute("data-cat");
    setActiveButton(btn);
    renderLogos(cat);
  });
});

/* initial render: Pharma active by default */
document.addEventListener("DOMContentLoaded", () => {
  const defaultBtn = document.querySelector('.cat-btn[data-cat="Pharma"]');
  if (defaultBtn) {
    setActiveButton(defaultBtn);
    renderLogos("Pharma");
  }
});


/* ======= Existing form validation logic (kept from your original script, slightly refactored) ======= */
(function () {
  const form = document.getElementById("doctor-form");

  function getLabelText(input) {
  // 1) prefer aria-label if present (good for accessibility)
  const aria = input.getAttribute('aria-label');
  if (aria) return aria;

  // 2) prefer placeholder (strip "Enter" if present)
  const ph = input.getAttribute('placeholder');
  if (ph) {
    // remove common prefixes like "Enter" or "Enter your" for cleaner messages
    return ph.replace(/^\s*Enter\s*(your\s*)?/i, '').trim();
  }

  // 3) fallback to label lookup (in case some inputs still have labels)
  const id = input.id;
  if (id) {
    const label = document.querySelector('label[for="' + id + '"]');
    if (label) return label.textContent.trim();
  }

  // 4) last resort use name or id
  return input.name || input.id || 'field';
}


  function showError(input, message) {
    const group = input.closest(".form-group");
    if (!group) return;
    let err = group.querySelector(".error-text");
    if (!err) {
      err = document.createElement("span");
      err.className = "error-text";
      group.appendChild(err);
    }
    err.textContent = message;
    input.classList.add("input-error");
    input.setAttribute("aria-invalid", "true");
  }

  function clearError(input) {
    const group = input.closest(".form-group");
    if (!group) return;
    const err = group.querySelector(".error-text");
    if (err) err.remove();
    input.classList.remove("input-error");
    input.removeAttribute("aria-invalid");
  }

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let firstError = null;
    const inputs = form.querySelectorAll(".form-group input");

    inputs.forEach((input) => {
      clearError(input);
      const val = (input.value || "").trim();
      const labelText = getLabelText(input);

      if (input.hasAttribute("required") && val === "") {
        showError(input, "Please enter your " + labelText.toLowerCase());
        if (!firstError) firstError = input;
        return;
      }

      if (input.type === "tel" || input.id === "doctor-mobile") {
        const digits = val.replace(/\D/g, "");
        if (digits.length !== 10) {
          showError(input, "Please enter a valid 10 digit mobile number");
          if (!firstError) firstError = input;
          return;
        }
      }

      const pattern = input.getAttribute("pattern");
      if (pattern && val !== "") {
        const re = new RegExp("^" + pattern + "$");
        if (!re.test(val)) {
          showError(input, "Please enter a valid " + labelText.toLowerCase());
          if (!firstError) firstError = input;
          return;
        }
      }
    });

    if (firstError) {
      firstError.focus();
      return;
    }

    // All good — redirect
    window.location.href = "quiz.html";
  });

  const allInputs = form.querySelectorAll(".form-group input");
  allInputs.forEach((input) => {
    input.addEventListener("input", function () {
      if ((this.value || "").trim() !== "") {
        clearError(this);
      } else {
        clearError(this);
      }
    });
  });
})();
