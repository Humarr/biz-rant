// page.tsx
'use client'
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiClock, FiCheck, FiZap } from 'react-icons/fi';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(72 * 60 * 60); // 72 hours in seconds
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'problem', label: 'The Problem' },
    { id: 'solution', label: 'The Solution' },
    { id: 'bonuses', label: 'Bonuses' },
    { id: 'faq', label: 'FAQ' },
    { id: 'cta', label: 'Get It Now' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans">
      <Head>
        <title>DON&apos;T START A BUSINESS... Until You Read This Rant</title>
        <meta name="description" content="37-Page Reality-Slapping Guide for Broke Geniuses" />
      </Head>

      {/* Navigation */}
      <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500"
            >
              BusinessRant
            </motion.div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    setActiveSection(section.id);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-amber-500/10 text-amber-400 border-b-2 border-amber-400'
                      : 'text-gray-300 hover:text-amber-300'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      const element = document.getElementById(section.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      setActiveSection(section.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                      activeSection === section.id
                        ? 'bg-amber-500/10 text-amber-400'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-600/5"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
          
          <div className="container mx-auto max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-sm font-medium mb-6">
                <FiClock className="mr-2" /> Limited Time Offer
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                  DON&apos;T START A BUSINESS...
                </span>
                <br />
                Until You Read This Rant
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                A 37-Page Reality-Slapping Guide for Broke Geniuses, Skeptical Hustlers, and Anyone One More Motivational Quote Away From Snapping
              </p>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <a
                  href="#cta"
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 font-bold text-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all"
                >
                  <FiDownload className="mr-3" /> Get Instant Access
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Author Note */}
        <section className="py-16 px-6 bg-gray-800/50 border-y border-gray-700">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
              >
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 p-1">
                    <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                      <Image 
                        src="/images/author.jpg" 
                        alt="Author" 
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gray-900 border-2 border-gray-800 rounded-full px-4 py-1 text-sm font-bold text-amber-400">
                    👣 Barefoot Founder
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-2/3 md:pl-12"
              >
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                  I Wrote This While Pacing Barefoot Around My Compound Screaming
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  (Seriously. Ask my neighbors.)
                </p>
                <p className="text-gray-300 mb-4">
                  Because I&apos;d had <span className="font-bold text-amber-300">enough</span>.
                </p>
                <p className="text-gray-300 mb-4">
                  Enough of fake business gurus. Enough of ₦0 earnings after weeks of &quot;hustling.&quot; Enough of recycled YouTube advice that works for everyone... <span className="italic">except you</span>.
                </p>
                <div className="bg-gray-800/50 border-l-4 border-amber-400 pl-4 py-2 my-6">
                  <p className="text-amber-300 font-medium">
                    If you&apos;re smart, hungry, and tired of nothing working — this might be the only business book you ever need.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                  😤 Sound Familiar?
                </span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {[
                  "You built a logo. A website. Picked a color scheme… still no sales.",
                  "You launched a YouTube channel… and got 0 views in 2 weeks.",
                  "You tried affiliate marketing… made ₦273.12.",
                  "You bought a ₦50k course… it told you to 'just provide value.'",
                  "You started a Shopify store… but forgot customers don't fall from the sky.",
                  "You've done everything 'right.' And yet… nothing's working."
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-amber-400/30 transition-all"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-4 text-amber-400">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center">
                <div className="inline-block bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-4 mb-8">
                  <p className="text-xl font-bold text-amber-400 mb-2">But here&apos;s what nobody tells you:</p>
                  <div className="space-y-2">
                    <p className="text-gray-300 flex items-center justify-center">
                      <FiZap className="text-red-400 mr-2" /> It&apos;s not your fault.
                    </p>
                    <p className="text-gray-300 flex items-center justify-center">
                      <FiZap className="text-red-400 mr-2" /> You&apos;re not lazy.
                    </p>
                    <p className="text-gray-300 flex items-center justify-center">
                      <FiZap className="text-red-400 mr-2" /> You&apos;re not broken.
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-300">
                  You&apos;re just being fed garbage advice that only works for trust fund babies and crypto kids.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                    Introducing...
                  </span>
                </h2>
                <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                &quot;DON&apos;T START A BUSINESS... UNTIL YOU READ THIS 37-PAGE RANT&quot;
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The Brutally Honest Guide to Making Money Online (Without Losing Your Sanity)
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center"
                >
                  <div className="text-5xl mb-4 text-amber-400">⚠️</div>
                  <h4 className="text-xl font-bold mb-3">No Fluff</h4>
                  <p className="text-gray-300">Just raw, actionable insights without the filler content</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center"
                >
                  <div className="text-5xl mb-4 text-amber-400">⚠️</div>
                  <h4 className="text-xl font-bold mb-3">No Funnels</h4>
                  <p className="text-gray-300">No upsells, no endless email sequences, just the truth</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 text-center"
                >
                  <div className="text-5xl mb-4 text-amber-400">⚠️</div>
                  <h4 className="text-xl font-bold mb-3">No False Promises</h4>
                  <p className="text-gray-300">Real strategies for real people starting from ₦0</p>
                </motion.div>
              </div>
              
              <div className="text-center mb-16">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8">
                  <span className="border-b-2 border-amber-400 pb-2">
                    What You&apos;ll Learn (25 Chapters That Will Offend You Into Progress)
                  </span>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                  {[
                    "Stop Starting Businesses You Secretly Hate",
                    "No One Cares About Your Dream",
                    "Motivation Is A Scam. Here's What Works",
                    "The Real Reason You Haven't Made Money Yet",
                    "How To Sell Without Feeling Like A Street Hawker",
                    "Your Audience Doesn't Want Content. They Want This",
                    "You Don't Need A Niche. You Need This Instead",
                    "Forget Branding. Solve THIS First",
                    "How To Make People Pay You... Without Being Famous",
                    "Followers ≠ Customers. Never Confuse Them Again",
                    "You've Been Lied To About Funnels",
                    "Money Doesn't Come From Skills. It Comes From THIS",
                    "Make An Offer So Good They Feel Dumb Saying No",
                    "Why Copywriting Is The One Skill You Can't Ignore",
                    "The Trap Of Building A Personal Brand Too Early",
                    "No, You Don't Need LLC, Website, Logo, or Staff",
                    "Focus On This Instead (It's Boring But It Works)",
                    "The Death Spiral Of Building The Wrong Product",
                    "If It Doesn't Sell Ugly, It Won't Sell Polished",
                    "The Lie Of 'Multiple Streams' When You're Broke",
                    "Why Going Viral Too Soon Can RUIN You",
                    "Forget Systems. Build Tiny Machines Instead",
                    "The 2 Things I Did Every Week That Changed Everything",
                    "How To Make Your First ₦10k Without Selling Your Soul",
                    "The Only 3 Questions That Matter Before You Launch"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-amber-400/50 transition-all"
                    >
                      <p className="text-gray-300 flex items-center">
                        <FiCheck className="text-amber-400 mr-2 flex-shrink-0" /> {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-gray-800/50 border border-amber-400/30 rounded-lg p-6 max-w-2xl mx-auto">
                  <p className="text-amber-400 font-bold text-lg">
                    ⚡ If this list doesn&apos;t light a fire in your chest, this isn&apos;t for you.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bonuses Section */}
        <section id="bonuses" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                    🎁 Buy Now & Get These 4 Free Bonuses
                  </span>
                </h2>
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-lg font-bold mb-6">
                  <FiClock className="mr-2" /> For 72 Hours Only
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {[
                  {
                    title: "Bonus 1: Impulse Offer Alchemy",
                    description: "How to build offers so tasty, people chase you with their wallet."
                  },
                  {
                    title: "Bonus 2: Landing Pages That Sell (Not Sedate)",
                    description: "Build landing pages that move people — even if you suck at design."
                  },
                  {
                    title: "Bonus 3: The Broke, Hungry, Angry Blueprint",
                    description: "For the nights when your balance says ₦113 and nothing is working. This is your sanity manual."
                  },
                  {
                    title: "Bonus 4: The Guarantee",
                    description: "Didn't love it? Email me and say: 'Yo, this rant sucked. I want my ₦4500 back.' No guilt. No quiz. No forms. Just a fast refund and mutual respect."
                  }
                ].map((bonus, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-amber-400/50 transition-all"
                  >
                    <div className="text-3xl mb-4 text-amber-400">🎁</div>
                    <h4 className="text-xl font-bold mb-3">{bonus.title}</h4>
                    <p className="text-gray-300">{bonus.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial/Real Talk Section */}
        <section className="py-20 px-6 bg-gray-800/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">
                <span className="border-b-2 border-amber-400 pb-2">
                  ✅ Real Talk: No Screenshots. Just Results That Matter.
                </span>
              </h2>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 mb-10">
                <p className="text-gray-300 text-lg mb-6">
                  I&apos;m not here to fake flex.
                </p>
                <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">I don&apos;t have a Lambo.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">I don&apos;t sell ₦99k masterminds.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-400 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-300">I don&apos;t promise riches by Tuesday.</span>
                  </li>
                </ul>
                
                <p className="text-gray-300 text-lg mb-6">
                  But I <span className="font-bold text-amber-300">do</span> make money online. On my terms. From a business I actually enjoy. Without selling nonsense.
                </p>
                
                <p className="text-gray-300 text-lg">
                  And this rant? It&apos;s the brain-clarifier you&apos;ve been missing.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-6 bg-gray-900 border-y border-gray-800">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                  Here&apos;s Everything You Get
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-10">
                For Less Than Transport & Shawarma
              </p>
              
              <div className="bg-gray-800/50 border border-amber-400/30 rounded-xl p-8 max-w-2xl mx-auto mb-10">
                <ul className="space-y-4 text-left mb-8">
                  {[
                    "The 37-Page Rant",
                    "4 Power Bonuses",
                    "A Weirdly Honest Guarantee",
                    "Instant Download",
                    "Lifetime Access"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="flex-shrink-0 mr-3 text-amber-400">
                        <FiCheck className="h-5 w-5" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-1">All for just:</p>
                  <p className="text-4xl font-bold text-amber-400">₦4500</p>
                </div>
                
                <p className="text-gray-300 italic">
                  That&apos;s less than what you&apos;ll spend on two shawarma + Uber + Fanta.
                </p>
                <p className="text-gray-300 font-bold mt-2">
                  But this might change your life.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <FiClock className="text-red-400 mr-2" />
                  <span className="font-bold text-red-400">Bonuses Expire In: {formatTime(timeLeft)}</span>
                </div>
                <p className="text-gray-300">
                  Why the urgency? Because indecision is killing your progress.
                </p>
                <p className="text-gray-300 font-medium mt-2">
                  If you can&apos;t make one bold move in 3 days... How do you plan to run a business?
                </p>
                <p className="text-amber-400 font-bold mt-4">
                  Clock&apos;s ticking.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
                <span className="border-b-2 border-amber-400 pb-2">
                  ❓ Unapologetically Real FAQs
                </span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: "What if I'm too lazy to finish it?",
                    answer: "You'll be entertained, offended, and inspired — all in one sitting."
                  },
                  {
                    question: "Will this help if I live in Nigeria and can't use PayPal or Stripe?",
                    answer: "Absolutely. It's designed for Nigerians. No foreign fluff."
                  },
                  {
                    question: "Will this make me rich instantly?",
                    answer: "No. But it'll finally get you out of your own way."
                  },
                  {
                    question: "I suck at marketing. Can I still win?",
                    answer: "Yes. Especially you."
                  },
                  {
                    question: "I already started a business. It's not working. Help?",
                    answer: "This will expose what's broken — and how to fix it."
                  },
                  {
                    question: "Do I need a laptop to apply this?",
                    answer: "Nope. I built my first wins from my phone."
                  },
                  {
                    question: "What if my cousin who sells Herbalife told me not to buy it?",
                    answer: "Then it's probably exactly what you need."
                  },
                  {
                    question: "I have ADHD. Is this readable?",
                    answer: "Chapters are short, punchy, and addictive. You'll devour it."
                  },
                  {
                    question: "I've wasted money before. Why trust this?",
                    answer: "Because this one comes with a money-back guarantee."
                  },
                  {
                    question: "Will this offend me?",
                    answer: "Probably. But it'll also unlock something real."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left focus:outline-none"
                      onClick={() => {
                        const answer = document.getElementById(`answer-${index}`);
                        if (answer) {
                          answer.classList.toggle('hidden');
                        }
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-100">{faq.question}</h3>
                        <svg className="h-5 w-5 text-gray-400 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div id={`answer-${index}`} className="hidden px-6 pb-4 text-gray-300">
                      {faq.answer}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="cta" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
                  What Happens When You Download It?
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {[
                  "You'll finally understand what makes money online.",
                  "You'll stop wasting time, energy, and hope on BS.",
                  "You'll know exactly what to do next."
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"
                  >
                    <div className="text-3xl mb-4 text-amber-400">⚡</div>
                    <p className="text-gray-300">{item}</p>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-xl text-gray-300 mb-10">
                This rant doesn&apos;t motivate. It activates.
              </p>
              
              <div className="bg-gray-800/50 border border-amber-400/30 rounded-xl p-8 max-w-2xl mx-auto mb-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                  👇 Ready To Start For Real?
                </h3>
                <p className="text-gray-300 mb-6">
                  Get the 37-Page Rant + All 4 Bonuses — For Just ₦4500
                </p>
                <div className="space-y-3 mb-8">
                  <p className="text-gray-300 flex items-center justify-center">
                    <FiDownload className="text-amber-400 mr-2" /> Instant Access
                  </p>
                  <p className="text-gray-300 flex items-center justify-center">
                    <FiCheck className="text-amber-400 mr-2" /> Refund Guarantee
                  </p>
                  <p className="text-gray-300 flex items-center justify-center">
                    <FiClock className="text-red-400 mr-2" /> Bonuses Disappear in {formatTime(timeLeft)}
                  </p>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block"
                >
                  <a
                    href="#"
                    className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 font-bold text-lg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all"
                  >
                    <FiDownload className="mr-3" /> Download The Rant Now
                  </a>
                </motion.div>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-serif font-bold mb-4">📝 P.S.</h4>
                <p className="text-gray-300 mb-4">
                  This isn&apos;t a course. It&apos;s not a webinar. It&apos;s not fluff.
                </p>
                <p className="text-gray-300 mb-4">
                  It&apos;s 37 pages of brutal honesty, clarity, and direction.
                </p>
                <p className="text-gray-300 mb-4">
                  If you&apos;re tired of guessing... Tired of watching others win... Tired of &quot;trying everything&quot; and still being broke...
                </p>
                <p className="text-amber-400 font-bold">
                  This is your reset button.
                </p>
                <p className="text-gray-300 mt-4">
                  ₦4500. 72 hours. All upside.
                </p>
                <p className="text-xl font-bold text-amber-400 mt-4">
                  Your move.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} BusinessRant. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            This is not a get-rich-quick scheme. Real work required. Results not typical.
          </p>
        </div>
      </footer>
    </div>
  );
}