document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("currentYear").textContent = new Date().getFullYear()
  
    // Header scroll effect
    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Mobile navigation toggle
    const navToggle = document.getElementById("navToggle")
    const navLinks = document.querySelector(".nav-links")
  
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active")
  
        // Toggle hamburger animation
        const spans = navToggle.querySelectorAll("span")
        if (navLinks.classList.contains("active")) {
          spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
          spans[1].style.opacity = "0"
          spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
        } else {
          spans[0].style.transform = "none"
          spans[1].style.opacity = "1"
          spans[2].style.transform = "none"
        }
      })
    }
  
    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll(".nav-links a")
    navLinkItems.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active")
  
        // Reset hamburger icon
        const spans = navToggle.querySelectorAll("span")
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      })
    })
  
    // Screenshot slider functionality
    const screenshotSlider = document.getElementById("screenshotSlider")
    const sliderDots = document.getElementById("sliderDots")
    const prevBtn = document.getElementById("prevBtn")
    const nextBtn = document.getElementById("nextBtn")
  
    if (screenshotSlider && sliderDots && prevBtn && nextBtn) {
      const slides = screenshotSlider.querySelectorAll(".screenshot-slide")
      let currentSlide = 0
  
      // Create dots
      slides.forEach((_, index) => {
        const dot = document.createElement("div")
        dot.classList.add("slider-dot")
        if (index === 0) dot.classList.add("active")
        dot.addEventListener("click", () => goToSlide(index))
        sliderDots.appendChild(dot)
      })
  
      // Initialize slider
      updateSlider()
  
      // Previous button
      prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length
        updateSlider()
      })
  
      // Next button
      nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % slides.length
        updateSlider()
      })
  
      // Go to specific slide
      function goToSlide(index) {
        currentSlide = index
        updateSlider()
      }
  
      // Update slider position and active dot
      function updateSlider() {
        const slideWidth = slides[0].offsetWidth + 24 // Width + gap
        screenshotSlider.style.transform = `translateX(${-currentSlide * slideWidth}px)`
  
        // Update dots
        const dots = sliderDots.querySelectorAll(".slider-dot")
        dots.forEach((dot, index) => {
          if (index === currentSlide) {
            dot.classList.add("active")
          } else {
            dot.classList.remove("active")
          }
        })
      }
  
      // Auto slide
      let slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length
        updateSlider()
      }, 5000)
  
      // Pause auto slide on hover
      screenshotSlider.addEventListener("mouseenter", () => {
        clearInterval(slideInterval)
      })
  
      screenshotSlider.addEventListener("mouseleave", () => {
        slideInterval = setInterval(() => {
          currentSlide = (currentSlide + 1) % slides.length
          updateSlider()
        }, 5000)
      })
    }
  
    // Testimonial slider functionality
    const testimonialSlider = document.getElementById("testimonialSlider")
    const testimonialDots = document.getElementById("testimonialDots")
    const prevTestimonialBtn = document.getElementById("prevTestimonialBtn")
    const nextTestimonialBtn = document.getElementById("nextTestimonialBtn")
  
    if (testimonialSlider && testimonialDots && prevTestimonialBtn && nextTestimonialBtn) {
      const testimonials = testimonialSlider.querySelectorAll(".testimonial-slide")
      let currentTestimonial = 0
  
      // Create dots
      testimonials.forEach((_, index) => {
        const dot = document.createElement("div")
        dot.classList.add("testimonial-dot")
        if (index === 0) dot.classList.add("active")
        dot.addEventListener("click", () => goToTestimonial(index))
        testimonialDots.appendChild(dot)
      })
  
      // Initialize slider
      updateTestimonialSlider()
  
      // Previous button
      prevTestimonialBtn.addEventListener("click", () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
        updateTestimonialSlider()
      })
  
      // Next button
      nextTestimonialBtn.addEventListener("click", () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length
        updateTestimonialSlider()
      })
  
      // Go to specific testimonial
      function goToTestimonial(index) {
        currentTestimonial = index
        updateTestimonialSlider()
      }
  
      // Update testimonial slider position and active dot
      function updateTestimonialSlider() {
        testimonialSlider.style.transform = `translateX(${-currentTestimonial * 100}%)`
  
        // Update dots
        const dots = testimonialDots.querySelectorAll(".testimonial-dot")
        dots.forEach((dot, index) => {
          if (index === currentTestimonial) {
            dot.classList.add("active")
          } else {
            dot.classList.remove("active")
          }
        })
      }
  
      // Auto slide
      let testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length
        updateTestimonialSlider()
      }, 6000)
  
      // Pause auto slide on hover
      testimonialSlider.addEventListener("mouseenter", () => {
        clearInterval(testimonialInterval)
      })
  
      testimonialSlider.addEventListener("mouseleave", () => {
        testimonialInterval = setInterval(() => {
          currentTestimonial = (currentTestimonial + 1) % testimonials.length
          updateTestimonialSlider()
        }, 6000)
      })
    }
  
    // Pricing toggle
    const pricingToggle = document.getElementById("pricingToggle")
    if (pricingToggle) {
      pricingToggle.addEventListener("change", function () {
        const monthlyPrices = document.querySelectorAll(".monthly-price")
        const yearlyPrices = document.querySelectorAll(".yearly-price")
        const periods = document.querySelectorAll(".period")
  
        if (this.checked) {
          // Yearly
          monthlyPrices.forEach((price) => (price.style.display = "none"))
          yearlyPrices.forEach((price) => (price.style.display = "inline"))
          periods.forEach((period) => (period.textContent = "/year"))
        } else {
          // Monthly
          monthlyPrices.forEach((price) => (price.style.display = "inline"))
          yearlyPrices.forEach((price) => (price.style.display = "none"))
          periods.forEach((period) => (period.textContent = "/month"))
        }
      })
    }
  
    // FAQ accordion
    const faqQuestions = document.querySelectorAll(".faq-question")
    faqQuestions.forEach((question) => {
      question.addEventListener("click", () => {
        const faqItem = question.parentElement
        const isActive = faqItem.classList.contains("active")
  
        // Close all FAQ items
        document.querySelectorAll(".faq-item").forEach((item) => {
          item.classList.remove("active")
        })
  
        // Open clicked FAQ item if it wasn't already open
        if (!isActive) {
          faqItem.classList.add("active")
        }
      })
    })
  
    // Contact form submission
    const contactForm = document.getElementById("contactForm")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form data
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Here you would typically send the data to your server
        // For demo purposes, we'll just log it and show a success message
        console.log("Form submitted:", { name, email, subject, message })
  
        // Show success message
        contactForm.innerHTML = `
                  <div class="success-message">
                      <h3>Thank you for your message!</h3>
                      <p>We'll get back to you as soon as possible.</p>
                  </div>
              `
      })
    }
  
    // Newsletter form submission
    const newsletterForm = document.querySelector(".newsletter-form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get email
        const email = newsletterForm.querySelector("input").value
  
        // Here you would typically send the data to your server
        console.log("Newsletter subscription:", email)
  
        // Show success message
        newsletterForm.innerHTML = `
                  <div class="success-message">
                      <p>Thanks for subscribing!</p>
                  </div>
              `
      })
    }
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerHeight = document.querySelector("header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
  
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  })
  
  
