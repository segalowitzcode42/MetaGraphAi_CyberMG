// MetaGraphAI Website Interactive JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Navbar background on scroll
  const navbar = document.querySelector(".navbar")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }

    // Hide navbar on scroll down, show on scroll up
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      navbar.style.transform = "translateY(-100%)"
    } else {
      navbar.style.transform = "translateY(0)"
    }
    lastScrollTop = scrollTop
  })

  // Animated counters for statistics
  const animateCounter = (element, target, duration = 2000) => {
    let start = 0
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        element.textContent = formatNumber(target)
        clearInterval(timer)
      } else {
        element.textContent = formatNumber(Math.floor(start))
      }
    }, 16)
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M+"
    if (num >= 1000) return (num / 1000).toFixed(0) + "K+"
    if (num >= 100) return num.toFixed(1) + "%"
    return num + "+"
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")

        // Animate counters when they come into view
        const statNumbers = entry.target.querySelectorAll(".stat-number, .metric-number, .metric-value")
        statNumbers.forEach((stat) => {
          const target = Number.parseFloat(stat.textContent.replace(/[^\d.]/g, ""))
          if (!isNaN(target) && !stat.dataset.animated) {
            stat.dataset.animated = "true"
            animateCounter(stat, target)
          }
        })
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".tech-card, .solution-card, .highlight, .value-prop, .metric-card")
  animateElements.forEach((el) => observer.observe(el))

  // Hero stats animation on load
  setTimeout(() => {
    document.querySelectorAll(".hero .stat-number").forEach((stat) => {
      const target = Number.parseFloat(stat.textContent.replace(/[^\d.]/g, ""))
      if (!isNaN(target)) {
        animateCounter(stat, target)
      }
    })
  }, 1000)

  // Professional Neural Graph Interactive Enhancement
  const neuralGraph = document.querySelector(".neural-graph")
  const inputNodes = document.querySelectorAll(".input-node")
  const outputNodes = document.querySelectorAll(".output-node")
  const centralHub = document.querySelector(".central-hub")
  const dataFlows = document.querySelectorAll(".data-flow")
  const networkLinks = document.querySelectorAll(".network-link")
  const dataParticles = document.querySelectorAll(".data-particles circle")

  if (neuralGraph) {
    // Enhanced node interactions
    ;[...inputNodes, ...outputNodes].forEach((node) => {
      node.addEventListener("mouseenter", (e) => {
        const nodeType = node.classList.contains("cyber")
          ? "cyber"
          : node.classList.contains("finance")
            ? "finance"
            : node.classList.contains("research")
              ? "research"
              : node.classList.contains("intelligence")
                ? "intelligence"
                : node.classList.contains("analytics")
                  ? "analytics"
                  : "insights"

        // Highlight relevant connections
        highlightNodeConnections(nodeType)

        // Add pulsing effect to central hub
        centralHub.style.filter = "drop-shadow(0 0 30px rgba(0, 102, 255, 0.8))"

        // Speed up data particles
        dataParticles.forEach((particle) => {
          particle.style.animationDuration = "1s"
        })
      })

      node.addEventListener("mouseleave", () => {
        // Reset all effects
        resetGraphHighlights()
        centralHub.style.filter = "drop-shadow(0 0 20px rgba(0, 102, 255, 0.4))"

        // Reset particle speed
        dataParticles.forEach((particle, index) => {
          const speeds = ["4s", "3s", "5s"]
          particle.style.animationDuration = speeds[index] || "3s"
        })
      })
    })

    // Central hub interactions
    centralHub.addEventListener("mouseenter", () => {
      // Highlight all connections
      dataFlows.forEach((flow) => {
        flow.style.strokeWidth = "4"
        flow.style.filter = "drop-shadow(0 0 8px rgba(0, 102, 255, 0.8))"
      })

      networkLinks.forEach((link) => {
        link.style.stroke = "rgba(99, 102, 241, 0.9)"
        link.style.strokeWidth = "2.5"
      })

      // Accelerate all animations
      dataParticles.forEach((particle) => {
        particle.style.animationDuration = "0.5s"
      })
    })

    centralHub.addEventListener("mouseleave", () => {
      resetGraphHighlights()
    })
  }

  function highlightNodeConnections(nodeType) {
    // Reset all first
    resetGraphHighlights()

    // Define connection mappings
    const connections = {
      cyber: [0], // First data flow
      finance: [1], // Second data flow
      research: [2], // Third data flow
      intelligence: [0, 1], // First two flows
      analytics: [1, 2], // Second and third flows
      insights: [0, 2], // First and third flows
    }

    // Highlight relevant data flows
    const relevantFlows = connections[nodeType] || []
    relevantFlows.forEach((flowIndex) => {
      if (dataFlows[flowIndex]) {
        dataFlows[flowIndex].style.strokeWidth = "4"
        dataFlows[flowIndex].style.filter = "drop-shadow(0 0 8px rgba(0, 102, 255, 0.8))"
        dataFlows[flowIndex].style.strokeOpacity = "1"
      }
    })

    // Dim non-relevant connections
    dataFlows.forEach((flow, index) => {
      if (!relevantFlows.includes(index)) {
        flow.style.strokeOpacity = "0.3"
      }
    })
  }

  function resetGraphHighlights() {
    // Reset data flows
    dataFlows.forEach((flow) => {
      flow.style.strokeWidth = ""
      flow.style.filter = "drop-shadow(0 0 3px rgba(0, 102, 255, 0.3))"
      flow.style.strokeOpacity = ""
    })

    // Reset network links
    networkLinks.forEach((link) => {
      link.style.stroke = ""
      link.style.strokeWidth = ""
    })
  }

  // Add performance metrics animation
  const metricsDisplay = document.querySelector(".metrics-display")
  if (metricsDisplay) {
    let eventCount = 45000
    const targetCount = 50000
    const increment = (targetCount - eventCount) / 100

    const updateMetrics = () => {
      eventCount += increment + Math.random() * 500
      if (eventCount > targetCount) eventCount = 45000

      const metricsText = metricsDisplay.querySelector("text:last-child")
      if (metricsText) {
        metricsText.textContent = `${Math.floor(eventCount / 1000)}K+ events/min`
      }
    }

    setInterval(updateMetrics, 100)
  }

  // Solution card interactions
  document.querySelectorAll(".solution-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Tech card interactions
  document.querySelectorAll(".tech-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const icon = this.querySelector(".tech-icon")
      if (icon) {
        icon.style.transform = "rotate(5deg) scale(1.1)"
      }
    })

    card.addEventListener("mouseleave", function () {
      const icon = this.querySelector(".tech-icon")
      if (icon) {
        icon.style.transform = "rotate(0deg) scale(1)"
      }
    })
  })

  // Contact form interactions (if needed in future)
  const contactButtons = document.querySelectorAll(".btn-primary")
  contactButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      // Add click animation
      this.style.transform = "scale(0.95)"
      setTimeout(() => {
        this.style.transform = "scale(1)"
      }, 150)
    })
  })

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector(".hero")
    const rate = scrolled * -0.5

    if (hero && scrolled < hero.offsetHeight) {
      hero.style.transform = `translateY(${rate}px)`
    }
  })

  // Add loading animation for the entire page
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")

    // Trigger hero animations
    setTimeout(() => {
      const heroElements = document.querySelectorAll(".hero-title, .hero-description, .hero-stats, .hero-buttons")
      heroElements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
        }, index * 200)
      })
    }, 500)
  })

  // Mobile menu toggle (for future mobile optimization)
  const createMobileMenu = () => {
    const navbar = document.querySelector(".navbar")
    const navMenu = document.querySelector(".nav-menu")

    // Create mobile menu button
    const mobileButton = document.createElement("button")
    mobileButton.classList.add("mobile-menu-toggle")
    mobileButton.innerHTML = '<i class="fas fa-bars"></i>'
    mobileButton.style.display = "none" // Hidden by default, shown in CSS media query

    navbar.querySelector(".nav-container").appendChild(mobileButton)

    mobileButton.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-active")
      const icon = mobileButton.querySelector("i")
      icon.classList.toggle("fa-bars")
      icon.classList.toggle("fa-times")
    })
  }

  createMobileMenu()

  // Performance optimization: Lazy load animations
  const lazyAnimations = document.querySelectorAll("[data-animate]")
  if ("IntersectionObserver" in window) {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
            animationObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    lazyAnimations.forEach((el) => animationObserver.observe(el))
  }
})

// Add custom CSS for JavaScript-enhanced animations
const style = document.createElement("style")
style.textContent = `
    /* JavaScript-enhanced animations */
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        backdrop-filter: blur(20px);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .navbar {
        transition: all 0.3s ease;
    }
    
    body:not(.loaded) .hero-title,
    body:not(.loaded) .hero-description,
    body:not(.loaded) .hero-stats,
    body:not(.loaded) .hero-buttons {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .tech-icon,
    .value-icon,
    .method-icon,
    .metric-icon {
        transition: all 0.3s ease;
    }
    
    .solution-card,
    .tech-card {
        transition: all 0.3s ease;
    }
    
    .btn-primary,
    .btn-secondary {
        transition: all 0.2s ease;
    }
    
    /* Mobile menu styles */
    @media (max-width: 768px) {
        .mobile-menu-toggle {
            display: block !important;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--gray-700);
            cursor: pointer;
            padding: 0.5rem;
        }
        
        .nav-menu {
            display: none;
        }
        
        .nav-menu.mobile-active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: white;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            gap: 1rem;
        }
    }
`
document.head.appendChild(style)
