import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Layout, Server, LifeBuoy, Zap, Clock, CreditCard, Plus, Send, Mail, User, Building, MessageSquare, Cookie, X, ChevronDown } from 'lucide-react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// --- Components ---

const Button = ({ children, variant = 'primary', className = '', to, ...props }: any) => {
  const variants = {
    primary: 'bg-brand-orange text-black hover:bg-orange-600 shadow-lg shadow-brand-orange/20',
    secondary: 'bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-sm',
    outline: 'bg-transparent text-white border border-white/20 hover:border-brand-orange transition-colors',
    dark: 'bg-black text-white hover:bg-zinc-900 shadow-lg shadow-black/20',
  };

  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${variants[variant as keyof typeof variants]} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (to) {
    return (
      <Link to={to} {...props}>
        {content}
      </Link>
    );
  }

  return <button {...props}>{content}</button>;
};

const Logo = ({ className = 'h-10' }: { className?: string }) => {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center">
          <Check className="text-white w-5 h-5" strokeWidth={3} />
        </div>
        <span className="text-xl font-bold tracking-tight">One Big Tick</span>
      </div>
    );
  }

  return (
    <img
      src="/logo.png"
      alt="One Big Tick"
      className={`${className} w-auto brightness-0 invert`}
      onError={() => setError(true)}
      referrerPolicy="no-referrer"
    />
  );
};

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-4 md:px-8 py-2 md:py-3">
        <Link to="/">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href={isHome ? '#features' : '/#features'} className="hover:text-brand-orange transition-colors">
            Features
          </a>
          <a href={isHome ? '#how-it-works' : '/#how-it-works'} className="hover:text-brand-orange transition-colors">
            How it works
          </a>
          <a href={isHome ? '#pricing' : '/#pricing'} className="hover:text-brand-orange transition-colors">
            Pricing
          </a>
          <a href={isHome ? '#faq' : '/#faq'} className="hover:text-brand-orange transition-colors">
            FAQ
          </a>
        </div>

        <Button to="/contact" variant="secondary" className="px-6 py-2 text-sm">
          Start Now
        </Button>
      </div>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -10 }}
    className="glass p-8 rounded-3xl relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={120} />
    </div>
    <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 text-brand-orange">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-white/60 leading-relaxed">{description}</p>
  </motion.div>
);

const PricingCard = ({ title, price, features, popular = false, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`p-10 rounded-[2.5rem] flex flex-col ${popular ? 'bg-brand-orange text-white orange-glow' : 'glass'}`}
  >
    {popular && (
      <span className="bg-white/20 text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full self-start mb-6">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-5xl font-bold">£{price}</span>
      <span className={popular ? 'text-white/80' : 'text-white/50'}>/month</span>
    </div>
    <div className="space-y-4 mb-10 flex-grow">
      {features.map((f: string, i: number) => (
        <div key={i} className="flex items-center gap-3">
          <Check size={18} className={popular ? 'text-white' : 'text-brand-orange'} />
          <span className={popular ? 'text-white/90' : 'text-white/70'}>{f}</span>
        </div>
      ))}
    </div>
    <Button to="/contact" variant={popular ? 'dark' : 'primary'} className="w-full">
      Get Started
    </Button>
  </motion.div>
);

// --- Sections ---

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-40 pb-16 md:pt-44 md:pb-20 lg:pt-24 overflow-hidden">
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center w-full">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
          UK-Based Web Design Subscription
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.95] text-gradient">
          Websites that <br />
          <span className="text-brand-orange">evolve</span> with your business
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-lg leading-relaxed">
          Professional design. Flexible monthly plans. Effortless updates. The last web agency you'll ever need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button to="/contact">
            Start Now <ArrowRight size={20} />
          </Button>
          <Button
            variant="secondary"
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How It Works
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative flex items-center justify-center p-6 md:p-10 lg:p-12"
      >
        <div className="relative w-full max-w-lg aspect-square">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0 bg-brand-orange/20 blur-[100px] rounded-full"
          />

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-2/3 glass p-6 rounded-3xl shadow-2xl z-20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="space-y-3">
              <div className="h-4 w-3/4 bg-white/10 rounded-full" />
              <div className="h-4 w-1/2 bg-white/10 rounded-full" />
              <div className="h-32 w-full bg-brand-orange/5 rounded-xl border border-white/5 flex items-center justify-center">
                <Layout className="text-brand-orange/40" size={40} />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-0 right-0 w-2/3 glass p-6 rounded-3xl shadow-2xl z-10"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm font-bold text-white/50">Analytics</div>
              <Zap className="text-brand-orange" size={16} />
            </div>
            <div className="flex items-end gap-2 h-24">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="flex-1 bg-brand-orange/20 rounded-t-md"
                />
              ))}
            </div>
          </motion.div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20" viewBox="0 0 400 400">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1 }}
              d="M 50 350 Q 150 300 200 200 T 350 50"
              fill="none"
              stroke="#FF7A00"
              strokeWidth="2"
              strokeDasharray="10 10"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProblemSolution = () => (
  <section className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Traditional web design <br />
            <span className="text-white/40 italic">is broken.</span>
          </h2>
          <div className="space-y-8">
            {[
              { title: 'Expensive upfront costs', desc: 'Paying £5k+ before seeing a single visitor.' },
              { title: 'Slow updates', desc: 'Waiting weeks for a simple text change.' },
              { title: 'Hidden fees', desc: 'Hosting, maintenance, and small edits all add up.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white/20 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/50">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} className="glass p-12 rounded-[3rem] border-brand-orange/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-[80px] -mr-32 -mt-32" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            The <span className="text-brand-orange">One Big Tick</span> <br />
            way.
          </h2>
          <div className="space-y-8">
            {[
              { title: 'Predictable monthly pricing', desc: 'No big bills. Just one flat monthly fee.' },
              { title: 'Edits included', desc: "Need a change? Just ask. It's covered." },
              { title: 'Fast turnaround', desc: 'Updates live within 24 hours. No stress.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0 mt-1">
                  <Check className="text-brand-orange w-4 h-4" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-32 px-6 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Everything you need.</h2>
        <p className="text-xl text-white/50 max-w-2xl mx-auto">
          We handle the tech and design, so you can focus on running your business.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Layout}
          title="DESIGN"
          description="Custom websites aligned to your brand. Fully mobile responsive with logo support included."
          delay={0.1}
        />
        <FeatureCard
          icon={Server}
          title="HOSTING"
          description="Same-day publishing with 99.99% uptime. AWS-backed infrastructure and domain connection."
          delay={0.2}
        />
        <FeatureCard
          icon={LifeBuoy}
          title="SUPPORT"
          description="Edits within 24 hours. Monthly included updates and a personal support email."
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-12">How it works.</h2>
          <div className="space-y-12">
            {[
              { step: '01', title: 'Tell us what you need', desc: 'Share your vision, content, and brand goals with us.' },
              { step: '02', title: 'We design and build', desc: 'Our experts craft your custom site in record time.' },
              { step: '03', title: 'Request updates anytime', desc: 'Your business evolves, and your site does too. Just ping us.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-6"
              >
                <div className="text-5xl font-black text-white/10">{item.step}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square glass rounded-[4rem] flex items-center justify-center p-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-2 border-dashed border-white/10 rounded-[4rem]"
            />
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-orange rounded-3xl flex items-center justify-center mx-auto mb-6 orange-glow">
                <Zap size={48} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold">Effortless Growth</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-32 px-6 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Simple pricing.</h2>
        <p className="text-xl text-white/50 max-w-2xl mx-auto">No contracts. No hidden fees. Cancel anytime.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PricingCard
          title="Monthly"
          price="100"
          features={[
            '5-page website',
            '5 hours edits/month',
            'Analytics reports',
            'Hosting included',
            'SSL Certificate',
            'Email Support',
          ]}
          delay={0.1}
        />
        <PricingCard
          title="Annual"
          price="83"
          popular={true}
          features={[
            'Everything in Monthly',
            'Save £200 per year',
            'Priority Support',
            'Free Domain for 1yr',
            'Quarterly Strategy Call',
            'Advanced SEO Setup',
          ]}
          delay={0.2}
        />
      </div>
    </div>
  </section>
);

const AddOns = () => (
  <section className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Need something extra?</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: Plus, title: 'Extra pages', price: '£5/ea' },
          { icon: Zap, title: 'Rapid updates', price: 'from £50' },
          { icon: Layout, title: 'Logo design', price: '£150' },
          { icon: CreditCard, title: 'Online store', price: '£50/mo' },
        ].map((item, i) => (
          <div
            key={i}
            className="glass p-6 rounded-2xl flex flex-col items-center text-center hover:border-brand-orange/50 transition-colors cursor-default"
          >
            <item.icon className="text-brand-orange mb-4" size={24} />
            <div className="font-bold mb-1">{item.title}</div>
            <div className="text-xs text-white/40 uppercase tracking-widest">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: any }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-white/5 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-8 flex items-center justify-between text-left group">
        <span className="text-xl md:text-2xl font-bold group-hover:text-brand-orange transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/40 group-hover:text-brand-orange group-hover:bg-brand-orange/10 transition-all"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginBottom: isOpen ? 32 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="text-lg text-white/60 leading-relaxed max-w-3xl">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'Who is this service for?',
      answer:
        'Our web design, hosting, and update package is perfect for small businesses or freelance individuals who want a professional website without the heavy upfront and maintenance costs.',
    },
    {
      question: 'How long is the subscription?',
      answer:
        'We offer a minimum 12 month term, after which you are free to cancel anytime. We will fully transfer over to you the website and all assets used.',
    },
    {
      question: 'Are there any set up fees or hidden costs?',
      answer:
        "Absolutely not. We're passionate that our payment structure is clear and open. If you incur additional charges for extra services, these will be explained before work commences to ensure clear pricing structure.",
    },
    {
      question: 'How long does building a website take?',
      answer:
        'It depends on your design! For simple sites, we aim to be live and published within as little as 7 days. For more complicated needs, this time will increase.',
    },
    {
      question: 'Can I help design my site?',
      answer:
        'Yes absolutely! We would love your input. During the initial phase we will discuss your requirements, and any design choices you would like. You will have periodic updates of progress to share ideas and the site will be updated accordingly.',
    },
    {
      question: 'How quickly can updates go live?',
      answer:
        'As standard, all updates are completed within 7 days. We appreciate however that sometimes urgent updates are needed, we offer add on services for 72 and 24 hour updates to your site for an additional one off charge.',
    },
  ];

  return (
    <section id="faq" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">Common Questions</h2>
          <p className="text-xl text-white/40">Everything you need to know about One Big Tick.</p>
        </div>
        <div className="glass p-8 md:p-12 rounded-[3rem]">
          {faqData.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-32 px-6">
    <div className="max-w-5xl mx-auto glass p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-orange/5 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight">
          Your website should <br />
          <span className="text-brand-orange">grow</span> with your business.
        </h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Join dozens of UK businesses who have ditched traditional agencies for a better way to build.
        </p>
        <div className="flex justify-center">
          <Button to="/contact" className="text-lg px-12 py-6">
            Start Now
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <Logo className="h-8 opacity-60 hover:opacity-100 transition-opacity" />
      <div className="text-white/40 text-sm text-center md:text-left">
        © 2026 One Big Tick Ltd. Registered Office: 128 City Road, London, United Kingdom, EC1V 2NX
      </div>
      <div className="flex gap-6 text-sm text-white/60">
        <Link to="/privacy" className="hover:text-white">
          Privacy
        </Link>
        <Link to="/terms" className="hover:text-white">
          Terms
        </Link>
        <Link to="/contact" className="hover:text-white">
          Contact
        </Link>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ContactPage = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-12 rounded-[3rem] max-w-2xl w-full text-center"
        >
          <div className="w-20 h-20 bg-brand-orange/20 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-8">
            <Check size={40} strokeWidth={3} />
          </div>
          <h1 className="text-4xl font-bold mb-4">Message Received!</h1>
          <p className="text-white/60 text-lg mb-8">
            Thanks for reaching out. We'll review your info and get back to you within 24 hours.
          </p>
          <Button to="/" variant="secondary">
            Back to Home
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-tight">
            Let&apos;s build <br />
            <span className="text-brand-orange">something big.</span>
          </h1>
          <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed">
            Ready to evolve your digital presence? Fill out the form and we&apos;ll start the conversation.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-orange shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <div className="font-bold mb-1">Email us</div>
                <div className="text-white/40">contact@onebigtick.co.uk</div>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-orange shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <div className="font-bold mb-1">Response time</div>
                <div className="text-white/40">Under 24 hours, guaranteed.</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 md:p-12 rounded-[3rem] relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60 ml-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange/50 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-2">Company Name</label>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                <input
                  required
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange/50 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white/60 ml-2">Further Info</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-white/20" size={18} />
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-orange/50 transition-colors resize-none"
                />
              </div>
            </div>

            <Button type="submit" className="w-full py-5 text-lg">
              Send Message <Send size={20} />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const LandingPage = () => (
  <>
    <Hero />
    <ProblemSolution />
    <Features />
    <HowItWorks />
    <Pricing />
    <AddOns />
    <FAQ />
    <FinalCTA />
  </>
);

const CookieBanner = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:right-6 md:max-w-md"
    >
      <div className="glass p-6 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange" />
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center text-brand-orange shrink-0">
            <Cookie size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg mb-1">Cookie Policy</h3>
            <p className="text-sm text-white/60 leading-relaxed">
              We use cookies to enhance your experience, analyze site traffic, and serve personalized content. By clicking
              &quot;Accept&quot;, you consent to our use of cookies.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={acceptCookies}
            className="flex-1 bg-brand-orange text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-1 bg-white/5 text-white py-3 rounded-xl font-semibold hover:bg-white/10 border border-white/10 transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const LegalPage = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <div className="min-h-screen pt-32 pb-20 px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-12">{title}</h1>
      <div className="prose prose-invert prose-orange max-w-none text-white/60 space-y-8 leading-relaxed">{content}</div>
    </motion.div>
  </div>
);

const PrivacyContent = () => (
  <>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
      <p>
        At One Big Tick, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
        and safeguard your information when you visit our website or use our services.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
      <p>
        We may collect personal information that you voluntarily provide to us when you express an interest in obtaining
        information about us or our products and services. This may include:
      </p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>Name and contact data (such as email address and phone number)</li>
        <li>Company information</li>
        <li>Project details and requirements</li>
      </ul>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
      <p>We use personal information collected via our website for a variety of business purposes, including:</p>
      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>To provide and deliver the services you request</li>
        <li>To send administrative information to you</li>
        <li>To respond to user inquiries and offer support</li>
        <li>To improve our website and marketing efforts</li>
      </ul>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking Technologies</h2>
      <p>
        We use cookies and similar tracking technologies to access or store information. You can manage your cookie
        preferences through our cookie banner or your browser settings.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
      <p>
        We aim to protect your personal information through a system of organizational and technical security measures
        designed to protect the security of any personal information we process.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
      <p>If you have questions or comments about this policy, you may email us at contact@onebigtick.co.uk.</p>
    </section>
  </>
);

const TermsContent = () => (
  <>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
      <p>
        By accessing or using One Big Tick&apos;s services, you agree to be bound by these Terms of Service. If you do
        not agree to all the terms and conditions, then you may not access the website or use any services.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
      <p>
        One Big Tick provides a subscription-based design and development service. We offer various plans that allow
        clients to request digital assets and development work based on their subscription tier.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">3. Fees and Payment</h2>
      <p>
        Clients agree to pay all fees or charges to their account in accordance with the fees, charges, and billing terms
        in effect at the time a fee or charge is due and payable. Subscriptions are billed in advance on a monthly basis.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
      <p>
        Unless otherwise agreed upon, all work created by One Big Tick for a client shall be the sole property of the
        client upon full payment of all fees. One Big Tick retains the right to display the work in its portfolio and
        marketing materials.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h2>
      <p>
        In no event shall One Big Tick be liable for any indirect, incidental, special, consequential or punitive damages,
        including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
      </p>
    </section>
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">6. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to
        its conflict of law provisions.
      </p>
    </section>
  </>
);

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <CookieBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<LegalPage title="Privacy Policy" content={<PrivacyContent />} />} />
        <Route path="/terms" element={<LegalPage title="Terms of Service" content={<TermsContent />} />} />
      </Routes>
      <Footer />
    </div>
  );
}
