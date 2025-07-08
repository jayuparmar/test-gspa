"use client"
import React, {useEffect, useRef, useState} from 'react';
import { ChevronLeft, ChevronRight, Play, Star, ArrowRight, Menu, X, Gem, Award, Shield, Heart, ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollToPlugin,ScrollTrigger);

const features =[
    {
        title: "Certified Quality",
        description: "Every piece comes with authenticity certificates and quality guarantees",
        icon: <Award size={32} className="text-white" />,
        gradient: "from-amber-400 to-yellow-400"
    },
    {
        title: "Lifetime Warranty",
        description: "Comprehensive coverage and free maintenance for all our jewelry",
        icon: <Shield size={32} className="text-white" />,
        gradient: "from-emerald-400 to-green-400"
    },
    {
        title: "Custom Design",
        description: "Work with our master jewelers to create your unique piece",
        icon: <Heart size={32} className="text-white" />,
        gradient: "from-rose-400 to-pink-400"
    }
]

const testimonials=[
    {
        name: "Sarah Johnson",
        text: "The engagement ring exceeded all my expectations. The craftsmanship is absolutely stunning!",
        rating: 5
    },
    {
        name: "Michael Chen",
        text: "Custom design service was amazing. They brought my vision to life perfectly.",
        rating: 5
    },
    {
        name: "Emma Williams",
        text: "Beautiful jewelry and exceptional customer service. I'm a customer for life!",
        rating: 5
    }
]

const services = [
    {
        title: "Custom Design",
        description: "Bring your vision to life with our bespoke jewelry design service",
        icon: "✨"
    },
    {
        title: "Repairs & Restoration",
        description: "Expert restoration services to bring your treasured pieces back to life",
        icon: "🔧"
    },
    {
        title: "Appraisal Services",
        description: "Professional jewelry appraisal for insurance and resale purposes",
        icon: "📋"
    },
    {
        title: "Jewelry Cleaning",
        description: "Keep your jewelry sparkling with our professional cleaning service",
        icon: "✨"
    }
]

const slides = [
    {
        title: "Diamond Elegance",
        subtitle: "Timeless Luxury",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop",
        description: "Handcrafted diamond pieces that capture eternal beauty and sophistication"
    },
    {
        title: "Golden Artistry",
        subtitle: "Masterful Craftsmanship",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&h=600&fit=crop",
        description: "Exquisite gold jewelry designed by master artisans with decades of experience"
    },
    {
        title: "Precious Gemstones",
        subtitle: "Nature's Finest",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop",
        description: "Rare gemstones sourced from around the world, each telling its own story"
    }
];

const jewelryCollections = [
    {
        name: "Engagement Rings",
        image: "https://i.etsystatic.com/25066512/r/il/e9f407/6082176438/il_570xN.6082176438_5863.jpg",
        price: "From $2,500",
        description: "Symbol of eternal love"
    },
    {
        name: "Diamond Necklaces",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
        price: "From $1,800",
        description: "Elegant statement pieces"
    },
    {
        name: "Gold Bracelets",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
        price: "From $800",
        description: "Luxury for everyday"
    },
    {
        name: "Pearl Earrings",
        image: "https://assets.ajio.com/medias/sys_master/root/20230516/MTWm/646388bf42f9e729d78c8fc8/-473Wx593H-466160475-gold-MODEL.jpg",
        price: "From $450",
        description: "Classic sophistication"
    },
    {
        name: "Ruby Collection",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
        price: "From $3,200",
        description: "Passionate elegance"
    },
    {
        name: "Custom Designs",
        image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop",
        price: "Quote on Request",
        description: "Your vision, our craft"
    }
];

const jewelryScrollableImages = [
    {
        id: 1,
        alt: 'Gold bead bracelet on model',
        src: 'https://cleopatrajewelers.com/cdn/shop/products/21k-bracelet-gold-413105_600x600.jpg?v=1697647280'
    },
    {
        id: 2,
        alt: '21k gold bracelet on wrist',
        src: 'https://cleopatrajewelers.com/cdn/shop/products/21k-gold-ring-833635_600x600.jpg?v=1694577433'
    },
    {
        id: 3,
        alt: 'Diamond-cut gold Franco bracelet',
        src: 'https://cleopatrajewelers.com/cdn/shop/products/21k-gold-ring-477890_600x600.jpg?v=1694577430'
    },
    {
        id: 4,
        alt: '18K gold oval bangle with diamonds',
        src: 'https://cleopatrajewelers.com/cdn/shop/products/21k-gold-ring-398590_600x600.jpg?v=1694577462'
    },
    {
        id: 5,
        alt: 'Traditional Indian gold jewelry',
        src: 'https://cleopatrajewelers.com/cdn/shop/products/21k-bracelets-371582_600x600.jpg?v=1695244458'
    },
    {
        id: 6,
        alt: 'Minimalist silver ring on marble',
        src: 'https://cleopatrajewelers.com/cdn/shop/products/21k-gold-earrings-911625_600x600.jpg?v=1694577371'
    }
];

const Luxora = () => {
    const heroRef = useRef(null);
    const featuresRef = useRef(null);
    const sliderRef = useRef(null);
    const container = useRef();
    const cursorRef = useRef(null);
    const cursorDotRef = useRef(null);
    const collectionsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    const craftedRef = useRef(null);
    const servicesRef = useRef(null);
    const newsletterRef = useRef(null);
    const [sparkles, setSparkles] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cursorVariant, setCursorVariant] = useState('default');
    const [activeSection, setActiveSection] = useState('hero');

    const navigationItems = [
        { name: 'Custom Design', ref: sliderRef, id: 'featured' },
        { name: 'Collections', ref: collectionsRef, id: 'collections' },
        { name: 'Crafted', ref: craftedRef, id: 'crafted' },
        { name: 'Services', ref: servicesRef, id: 'services' },
        { name: 'News Letter', ref: newsletterRef, id: 'news' },
        { name: 'About', ref: aboutRef, id: 'about' },
        { name: 'Contact', ref: contactRef, id: 'contact' },
    ];

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            const element = ref.current;
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            if (typeof window.gsap !== 'undefined') {
                window.gsap.to(window, {
                    scrollTo: offsetPosition,
                    duration: 1.2,
                    ease: "power3.out"
                });
            } else {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            setIsMenuOpen(false);
        }
    };

    useGSAP(() => {
        // Hero animations
        gsap.set(".hero-title", {y: 100, opacity: 0});
        gsap.set(".hero-subtitle", {y: 50, opacity: 0});
        gsap.set(".hero-cta", {y: 30, opacity: 0});
        gsap.set(".hero-image", {scale: 0.8, opacity: 0});

        const tl = gsap.timeline();
        tl.to(".hero-title", {y: 0, opacity: 1, duration: 1, ease: "power3.out"})
            .to(".hero-subtitle", {y: 0, opacity: 1, duration: 0.8, ease: "power3.out"}, "-=0.5")
            .to(".hero-cta", {y: 0, opacity: 1, duration: 0.6, ease: "power3.out"}, "-=0.3")
            .to(".hero-image", {scale: 1, opacity: 1, duration: 1, ease: "power3.out"}, "-=0.8");

        // Floating animations
        gsap.to(".floating-1", {
            y: -20,
            rotation: 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
        });

        gsap.to(".floating-2", {
            y: -15,
            rotation: -3,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: 0.5
        });

        // Background gradient animation
        // gsap.to(".gradient-bg", {
        //     backgroundPosition: "200% 200%",
        //     duration: 100,
        //     repeat: -1,
        //     yoyo: true,
        //     ease: "none"
        // });

        // Sparkle animation for jewelry theme
        gsap.to(".sparkle", {
            scale: 1.5,
            opacity: 0.3,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            stagger: 0.3
        });

    }, );

    // Cursor animations
    useGSAP(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;

        if (!cursor || !cursorDot) return;

        // Mouse move handler
        const handleMouseMove = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.6,
                ease: "power2.out"
            });

            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
        };

        // Add mouse move listener
        document.addEventListener('mousemove', handleMouseMove);

        // Hover effects for interactive elements
        const addHoverEffect = (selector, variant) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    setCursorVariant(variant);
                    gsap.to(cursor, {
                        scale: variant === 'button' ? 3 : variant === 'slider' ? 2.5 : 2,
                        opacity: 0.7,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });

                el.addEventListener('mouseleave', () => {
                    setCursorVariant('default');
                    gsap.to(cursor, {
                        scale: 1,
                        opacity: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
            });
        };

        // Add hover effects to different elements
        const timeoutId = setTimeout(() => {
            addHoverEffect('button', 'button');
            addHoverEffect('a', 'link');
            addHoverEffect('p', 'text');
            addHoverEffect('h2', 'text');
            addHoverEffect('span', 'text');
            addHoverEffect('h3', 'text');
            addHoverEffect('h1', 'text');
            addHoverEffect('h4', 'text');
            addHoverEffect('h2', 'span');
            addHoverEffect('.slide-content img', 'slider');
            addHoverEffect('.header_logo', 'text');
            addHoverEffect('.feature-card', 'card');
            addHoverEffect('.collection-card', 'card');
            addHoverEffect('.slider-control', 'slider');
        }, 100);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timeoutId);
        };
    }, { scope: container });

    // Slide transition animations
    useGSAP(() => {
        gsap.fromTo(".slide-content",
            {x: 50, opacity: 0},
            {x: 0, opacity: 1, duration: 0.6, ease: "power1.inOut"}
        );
    }, {
        dependencies: [currentSlide],
        scope: container
    });

    // Intersection Observer for scroll-triggered animations
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('data-section');
                    if (sectionId) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        const sections = [
            { ref: heroRef, id: 'hero' },
            { ref: sliderRef, id: 'featured' },
            { ref: collectionsRef, id: 'collections' },
            { ref: aboutRef, id: 'about' },
            { ref: contactRef, id: 'contact' },
            { ref: craftedRef, id: 'crafted' },
            { ref: servicesRef, id: 'services' },
            { ref: newsletterRef, id: 'news' },
        ];

        sections.forEach(({ ref, id }) => {
            if (ref.current) {
                ref.current.setAttribute('data-section', id);
                observer.observe(ref.current);
            }
        });

        return () => {
            sections.forEach(({ ref }) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    // Scroll-triggered animations for features and collections
    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('collections-section')) {
                        gsap.to(entry.target.querySelectorAll(".collection-card"), {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "power3.out"
                        });
                    } else {
                        gsap.to(entry.target.querySelectorAll(".feature-card"), {
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.2,
                            ease: "power3.out"
                        });
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.3
        });

        if (featuresRef.current) {
            observer.observe(featuresRef.current);
        }

        const collectionsSection = document.querySelector('.collections-section');
        if (collectionsSection) {
            observer.observe(collectionsSection);
        }

        return () => {
            if (featuresRef.current) {
                observer.unobserve(featuresRef.current);
            }
            if (collectionsSection) {
                observer.unobserve(collectionsSection);
            }
        };
    }, []);

    // Sparkle initialization
    useEffect(() => {
        const sparkleData = [...Array(12)].map(() => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
        }));
        setSparkles(sparkleData);
    }, []);

    const setRefs = (el) => {
        aboutRef.current = el;
        contactRef.current = el;
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const sliderTl = useRef(null);
    const collectionsTl = useRef(null);
    const featuresTl = useRef(null);
    const aboutTl = useRef(null);
    const craftedTl = useRef(null);
    const servicesTl = useRef(null);
    const newsletterTl = useRef(null);

    useEffect(() => {
        // Slider Section Animation
        sliderTl.current = gsap.timeline({
            scrollTrigger: {
                trigger: sliderRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        sliderTl.current
            .from(sliderRef.current.querySelector("h2"), {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out"
            })
            .from(sliderRef.current.querySelector("p"), {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4")
            .from(".slide-content", {
                opacity: 0,
                scale: 0.9,
                duration: 1,
                ease: "power3.out"
            }, "-=0.2")
            .from(".slider-control", {
                scale: 0.8,
                duration: 0.5,
                ease: "back.out(1.7)",
                stagger: 0.1
            }, "-=0.5");

        // Collections Section Animation
        collectionsTl.current = gsap.timeline({
            scrollTrigger: {
                trigger: collectionsRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        collectionsTl.current
            .from(collectionsRef.current.querySelector("h2"), {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out"
            })
            .from(collectionsRef.current.querySelector("p"), {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4")
            .from(".collection-card", {
                opacity: 0,
                y: 60,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.15
            }, "-=0.2");

        // Features Section Animation
        featuresTl.current = gsap.timeline({
            scrollTrigger: {
                trigger: featuresRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        featuresTl.current
            .from(featuresRef.current.querySelector("h2"), {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out"
            })
            .from(".feature-card", {
                opacity: 0,
                y: 60,
                scale: 0.9,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.2
            }, "-=0.4");

        // About Section Animation
        aboutTl.current = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        aboutTl.current
            .from(aboutRef.current.querySelectorAll(".footer-heading"), {
                opacity: 0,
                y: 30,
                duration: 0.6,
                stagger: 0.2,
                ease: "power3.out"
            })
            .from(aboutRef.current.querySelectorAll(".footer-text"), {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.4")
            .from(aboutRef.current.querySelectorAll(".footer-links li"), {
                opacity: 0,
                y: 10,
                duration: 0.4,
                stagger: 0.05,
                ease: "power3.out"
            }, "-=0.4")
            .from(aboutRef.current.querySelectorAll(".lucide"), {
                opacity: 0,
                scale: 0.8,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.3")

        craftedTl.current = gsap.timeline({
            scrollTrigger: {
                trigger: craftedRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        craftedTl.current
            .from(craftedRef.current.querySelectorAll(".about-title"), {
                opacity: 0,
                x: -100,
                duration: 0.8,
                ease: "power3.out"
            })
            .from(craftedRef.current.querySelectorAll(".about-subtitle"), {
                opacity: 0,
                x: -80,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4")
            .from(craftedRef.current.querySelectorAll(".about-description"), {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.3")
            .from(craftedRef.current.querySelectorAll(".about-stat"), {
                opacity: 0,
                x: -50,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.4")
            .from(craftedRef.current.querySelectorAll(".about-image"), {
                opacity: 0,
                x: 100,
                scale: 0.8,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.6");

        // Services Section Timeline
        servicesTl.current = gsap.timeline({
            scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        servicesTl.current
            .from(servicesRef.current.querySelectorAll(".services-title"), {
                opacity: 0,
                y: -50,
                duration: 0.8,
                ease: "power3.out"
            })
            .from(servicesRef.current.querySelectorAll(".services-description"), {
                opacity: 0,
                y: -30,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4")
            .from(servicesRef.current.querySelectorAll(".service-card"), {
                // opacity: 0,
                // y: 100,
                rotateY: 15,
                duration: 0.6,
                stagger: 0.15,
                ease: "power3.out"
            }, "-=0.3")
            .from(servicesRef.current.querySelectorAll(".service-icon"), {
                opacity: 0,
                scale: 0.5,
                duration: 0.4,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.4");

        // Newsletter Section Timeline
        newsletterTl.current = gsap.timeline({
            scrollTrigger: {
                trigger: newsletterRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        newsletterTl.current
            .from(newsletterRef.current.querySelectorAll(".newsletter-container"), {
                opacity: 0,
                scale: 0.8,
                duration: 0.8,
                ease: "power3.out"
            })
            .from(newsletterRef.current.querySelectorAll(".newsletter-title"), {
                opacity: 0,
                x: -50,
                duration: 0.6,
                ease: "power3.out"
            }, "-=0.4")
            .from(newsletterRef.current.querySelectorAll(".newsletter-description"), {
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: "power3.out"
            }, "-=0.3")
            .from(newsletterRef.current.querySelectorAll(".newsletter-form > *"), {
                // opacity: 0,
                // y: 30,
                duration: 0.4,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.3");

        // Continuous floating animation for service cards
        gsap.to(".service-card", {
            y: -10,
            duration: 2,
            ease: "power1.inOut",
            stagger: 0.1,
            yoyo: true,
            repeat: -1
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const scrollImageRef = useRef(null);
    useGSAP(() => {
        const images = gsap.utils.toArray('.image-box');

        // Show first image by default
        gsap.set(images[0], { opacity: 1, scale: 1 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: scrollImageRef.current,
                start: 'top top',
                end: `+=${(images.length - 1) * 100}%`,
                scrub: true,
                pin: true,
            }
        });

        images.forEach((img, i) => {
            if (i === 0) {
                // First image: only fade out
                tl.to(
                    img,
                    { opacity: 0, scale: 1.05, duration: 1 },
                    i + 0.8
                );
            } else {
                // All others: fade in
                tl.fromTo(
                    img,
                    { opacity: 0, scale: 0.9 },
                    { opacity: 1, scale: 1, duration: 1 },
                    i
                );

                // ...and fade out (except last)
                if (i < images.length - 1) {
                    tl.to(
                        img,
                        { opacity: 0, scale: 1.05, duration: 1 },
                        i + 0.8
                    );
                }
            }
        });
    }, { scope: scrollImageRef });

    useEffect(() => {
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 overflow-hidden cursor-none">
            {/* Custom Cursor */}
            <div
                ref={cursorRef}
                className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference ${
                    cursorVariant === 'button' ? 'bg-amber-300' :
                        cursorVariant === 'p' ? 'bg-white' :
                            cursorVariant === 'link' ? 'bg-pink-400' :
                                cursorVariant === 'slider' ? 'bg-purple-400' :
                                    cursorVariant === 'card' ? 'bg-amber-400' :
                                        'bg-white'
                } rounded-full transition-colors duration-300`}
                style={{transform: 'translate(-50%, -50%)'}}
            >
            </div>

            {/* Cursor Dot */}
            <div
                ref={cursorDotRef}
                className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999]"
                style={{transform: 'translate(-50%, -50%)'}}
            ></div>

            {/* Sparkles for jewelry theme */}
            <div className="fixed inset-0 pointer-events-none z-5">
                {sparkles.map((style, i) => (
                    <svg
                        key={i}
                        className="sparkle absolute"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#facc15"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            ...style,
                            width: '12px',
                            height: '12px',
                            opacity: 0.2,
                        }}
                    >
                        <path
                            d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12 M4.22 4.22 L6.34 6.34 M17.66 17.66 L19.78 19.78 M4.22 19.78 L6.34 17.66 M17.66 6.34 L19.78 4.22"/>
                    </svg>
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/30 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold text-white">
                        <button
                            onClick={() => scrollToSection(heroRef)}
                            className="header_logo bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                        >
                            <Gem size={28} className="text-amber-400"/>
                            LUXORA
                        </button>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {navigationItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.ref)}
                                className={`relative text-white hover:text-amber-300 transition-all duration-300 py-2 px-1 ${
                                    activeSection === item.id ? 'text-amber-300' : ''
                                }`}
                            >
                                {item.name}
                                {/*{activeSection === item.id && (*/}
                                {/*    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full"></div>*/}
                                {/*)}*/}
                            </button>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {isMenuOpen && (
                    <div
                        className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-lg border-b border-white/10">
                        <div className="px-6 py-4 space-y-4">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.ref)}
                                    className={`block w-full text-left text-white hover:text-amber-300 transition-colors py-2 ${
                                        activeSection === item.id ? 'text-amber-300' : ''
                                    }`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section ref={heroRef} className="relative z-10 min-h-screen flex items-center justify-center px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="hero-title text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Timeless
                            <span
                                className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                                Elegance
                            </span>
                        </h1>
                        <p className="hero-subtitle text-xl text-gray-300 mb-8 max-w-lg">
                            Discover our exquisite collection of handcrafted jewelry, where each piece tells a story of
                            luxury, craftsmanship, and eternal beauty.
                        </p>
                        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button
                                onClick={() => scrollToSection(collectionsRef)}
                                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
                                <span className="flex items-center justify-center gap-2">
                                    Shop Collection
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                                </span>
                            </button>
                            <button
                                className="group px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                                <span className="flex items-center justify-center gap-2">
                                    <Play size={20}/>
                                    Watch Craftsmanship
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="relative hero-image">
                        <div className="relative z-10">
                            <div
                                className="floating-1 w-80 h-80 mx-auto bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-3xl backdrop-blur-xl border border-white/10 p-8">
                                <div
                                    className="h-full bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <div
                                            className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center">
                                            <Gem size={32} className="text-white"/>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Premium Quality</h3>
                                        <p className="text-gray-300">Certified Diamonds</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div
                            className="floating-2 absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-rose-400/30 to-pink-400/30 rounded-full backdrop-blur-xl border border-white/10"></div>
                        <div
                            className="floating-1 absolute -bottom-10 -left-0 w-24 h-24 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-full backdrop-blur-xl border border-white/10"></div>
                    </div>
                </div>
            </section>

            {/* Interactive Slider Section */}
            <section ref={sliderRef} className="relative z-10 py-20 px-6 img">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Featured
                            <span
                                className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent"> Collections</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Explore our signature pieces crafted with the finest materials and exceptional artistry
                        </p>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                            <div className="slide-content flex transition-transform duration-500 ease-in-out"
                                 style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                                {slides.map((slide, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
                                            <div>
                                                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                                    {slide.title}
                                                </h3>
                                                <p className="text-xl text-amber-300 mb-6">{slide.subtitle}</p>
                                                <p className="text-gray-300 text-lg mb-8">{slide.description}</p>
                                                <button
                                                    onClick={() => scrollToSection(collectionsRef)}
                                                    className="px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
                                                    View Collection
                                                </button>
                                            </div>
                                            <div className="relative">
                                                <img
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                                                />
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slider Controls */}
                        <button
                            onClick={prevSlide}
                            className="slider-control absolute -left-6 top-[40%] w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                        >
                            <ChevronLeft size={24}/>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="slider-control absolute -right-6 top-[40%]  w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
                        >
                            <ChevronRight size={24}/>
                        </button>

                        {/* Slide Indicators */}
                        <div className="flex justify-center mt-8 space-x-3">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`slider-control w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentSlide
                                            ? 'bg-gradient-to-r from-amber-400 to-yellow-400 w-8'
                                            : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Jewelry Collections Grid */}
            <section ref={collectionsRef} className="collections-section relative z-10 py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Our
                            <span
                                className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent"> Collections</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            From engagement rings to statement necklaces, find the perfect piece for every occasion
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jewelryCollections.map((item, index) => (
                            <div key={index} className="collection-card group">
                                <div
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="text-amber-300 font-bold text-lg mb-1">{item.price}</div>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                                        <p className="text-gray-300 mb-4">{item.description}</p>
                                        <button
                                            className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section ref={featuresRef} className="relative z-10 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Why Choose
                            <span
                                className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Luxora</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features?.map((feature, index) => (
                            <div key={index} className="feature-card group">
                                <div
                                    className="h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="relative z-10 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            What Our
                            <span
                                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Clients Say</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials?.map((testimonial, index) => (
                            <div key={index}
                                 className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="text-yellow-400 fill-current"/>
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                                <p className="text-white font-semibold">- {testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ImageScroll Section*/}
            <section ref={scrollImageRef} className="w-full py-24 px-6">
                <div className="relative w-full h-[600px]">
                    {jewelryScrollableImages.map((n) => (
                        <div
                            key={n.id}
                            className="image-box absolute top-4 left-0 container w-full h-full flex justify-center items-center"
                        >
                            <Image
                                height={500}
                                width={500}
                                src={n.src}
                                alt={n.alt}
                                objectFit="cover"
                                className="rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section ref={craftedRef} className="about-section relative z-10 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="about-title text-4xl lg:text-5xl font-bold text-white mb-6">
                                Crafted with
                                <span
                                    className="about-subtitle bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent block">
                                    Passion & Precision
                                </span>
                            </h2>
                            <p className="about-description text-xl text-gray-300 mb-6">
                                For over three decades, Luxora has been at the forefront of fine jewelry craftsmanship.
                                Our master artisans combine traditional techniques with modern innovation to create
                                pieces
                                that are not just beautiful, but timeless.
                            </p>
                            <div className="space-y-4">
                                <div className="about-stat flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">30+</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Years of Excellence</h4>
                                        <p className="text-gray-400">Trusted by generations</p>
                                    </div>
                                </div>
                                <div className="about-stat flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">50K+</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Happy Customers</h4>
                                        <p className="text-gray-400">Worldwide satisfaction</p>
                                    </div>
                                </div>
                                <div className="about-stat flex items-center gap-4">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold">100%</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Ethical Sourcing</h4>
                                        <p className="text-gray-400">Responsibly sourced materials</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&h=600&fit=crop"
                                alt="Master Craftsman"
                                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section ref={servicesRef} className="services-section relative z-10 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="services-title text-4xl lg:text-5xl font-bold text-white mb-6">
                            Our
                            <span
                                className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Services</span>
                        </h2>
                        <p className="services-description text-xl text-gray-300 max-w-2xl mx-auto">
                            Beyond creating beautiful jewelry, we offer comprehensive services to ensure your pieces
                            remain perfect
                        </p>
                    </div>

                    <div className="services-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services?.map((service, index) => (
                            <div key={index}
                                 className="service-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                                <div className="service-icon text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section ref={newsletterRef} className="newsletter-section relative z-10 py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div
                        className="newsletter-container bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
                        <h2 className="newsletter-title text-4xl lg:text-5xl font-bold text-white mb-6">
                            Stay
                            <span
                                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Updated</span>
                        </h2>
                        <p className="newsletter-description text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Be the first to know about new collections, exclusive offers, and jewelry care tips
                        </p>
                        <div className="newsletter-form flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
                            />
                            <button
                                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer ref={setRefs} className="relative z-10 py-16 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-bold text-white mb-4">
                                <span
                                    className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent flex items-center gap-2">
                                    <Gem size={28} className="text-amber-400"/>
                                    LUXORA
                                </span>
                            </div>
                            <p className="footer-text text-gray-300 mb-4">
                                Crafting timeless elegance since 1990. Where luxury meets artistry.
                            </p>
                            <div className="flex space-x-4">
                                <div
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="lucide lucide-facebook-icon lucide-facebook">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                                    </svg>
                                </div>
                                <div
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter">
                                        <path
                                            d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                                    </svg>
                                </div>
                                <div
                                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round"
                                         className="lucide lucide-instagram-icon lucide-instagram">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="footer-heading text-white font-semibold mb-4">Collections</h4>
                            <ul className="footer-links space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-amber-300 transition-colors">Engagement Rings</a>
                                </li>
                                <li><a href="#" className="hover:text-amber-300 transition-colors">Wedding Bands</a>
                                </li>
                                <li><a href="#" className="hover:text-amber-300 transition-colors">Necklaces</a></li>
                                <li><a href="#" className="hover:text-amber-300 transition-colors">Earrings</a></li>
                                <li><a href="#" className="hover:text-amber-300 transition-colors">Bracelets</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="footer-heading text-white font-semibold mb-4">Services</h4>
                            <ul className="footer-links space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-amber-300 transition-colors">Custom Design</a>
                                </li>
                                <li><a href="#" className="hover:text-amber-300 transition-colors">Repairs</a></li>
                                <li><a href="#" className="hover:text-amber-300 transition-colors">Appraisals</a></li>
                                <li><a href="#" className="hover:text-amber-300 transition-colors">Cleaning</a></li>
                                <li><a href="#" className="hover:text-amber-300 transition-colors">Consultation</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="footer-heading text-white font-semibold mb-4">Contact</h4>
                            <div className=" space-y-2 text-gray-300">
                                <p className="footer-text">123 Luxury Avenue</p>
                                <p className="footer-text">Beverly Hills, CA 90210</p>
                                <p className="footer-text">Phone: (555) 123-4567</p>
                                <p className="footer-text">Email: info@luxora.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Luxora Jewelry. All rights reserved. | Privacy Policy | Terms of Service</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Luxora;
