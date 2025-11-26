import React from 'react';
import { Feature, PricingTier, UseCase } from '../types';
import { 
  Shield, Zap, Globe, MessageCircle, BarChart3, Lock, 
  Building2, Mic2, HeartHandshake, School, 
  Check, Mail, MapPin, Phone 
} from 'lucide-react';
import PilotForm from './PilotForm';

/* ---------------- Features Page ---------------- */

const featureList: Feature[] = [
  {
    title: "Idea Ingestion Engine",
    description: "Omnichannel collection from browser extensions, direct forms, and social media APIs.",
    icon: <Globe className="h-6 w-6 text-primary-500" />,
    benefits: ["Unified inbox for all public feedback", "Spam & bot protection at entry"]
  },
  {
    title: "AI Filtering & Scoring",
    description: "Proprietary algorithms rank inputs by novelty, sentiment, and constructive impact.",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
    benefits: ["Auto-remove toxicity and hate speech", "Highlight 'Hidden Gems' instantly"]
  },
  {
    title: "Leader Dashboard",
    description: "A command center for decision makers to review verified high-value ideas.",
    icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
    benefits: ["One-click approval workflow", "Real-time impact analytics"]
  },
  {
    title: "IP Protection",
    description: "Blockchain-inspired timestamping to guarantee proof-of-origin for citizen ideas.",
    icon: <Shield className="h-6 w-6 text-green-500" />,
    benefits: ["Fair attribution for contributors", "Prevents idea theft"]
  },
  {
    title: "Multilingual Support",
    description: "Real-time translation breaking language barriers (English, Telugu, Hindi).",
    icon: <MessageCircle className="h-6 w-6 text-purple-500" />,
    benefits: ["Connect with rural & urban demographics", "Sentiment preserved across languages"]
  }
];

export const FeaturesPage: React.FC = () => (
  <div className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powerful Features for Modern Democracy</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Built to handle millions of voices while ensuring the single most important one is heard.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map((f, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm p-8 border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-slate-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
            <p className="text-slate-600 mb-4">{f.description}</p>
            <ul className="space-y-2">
              {f.benefits.map((b, j) => (
                <li key={j} className="flex items-start text-sm text-slate-500">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ---------------- Use Cases Section ---------------- */

const useCases: UseCase[] = [
  {
    title: "Government & Public Sector",
    description: "Streamline grievance redressal and crowdsource policy suggestions from citizens effectively.",
    icon: <Building2 className="h-8 w-8 text-primary-600" />,
    benefits: ["Reduce administrative backlog", "Data-driven policy making"]
  },
  {
    title: "Celebrities & Influencers",
    description: "Engage deeply with fans by finding and rewarding the best creative ideas from your community.",
    icon: <Mic2 className="h-8 w-8 text-pink-600" />,
    benefits: ["Boost fan loyalty", "Safe, filtered interactions"]
  },
  {
    title: "NGOs & Social Enterprises",
    description: "Coordinate volunteers and gather on-ground intelligence for rapid crisis response.",
    icon: <HeartHandshake className="h-8 w-8 text-red-600" />,
    benefits: ["Impact measurement", "Volunteer resource allocation"]
  },
  {
    title: "Academic Research",
    description: "Analyze societal trends and public sentiment with anonymized, high-volume datasets.",
    icon: <School className="h-8 w-8 text-indigo-600" />,
    benefits: ["Real-time social listening", "Unbiased data sourcing"]
  }
];

export const UseCasesSection: React.FC = () => (
  <section id="use-cases" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Who is AI CONNECT for?</h2>
        <p className="text-lg text-slate-600">Tailored solutions for every leader seeking authentic connection.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {useCases.map((u, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
            <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              {u.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{u.title}</h3>
              <p className="text-slate-600 mb-3">{u.description}</p>
              <div className="flex flex-wrap gap-2">
                {u.benefits.map((b, j) => (
                  <span key={j} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                    {b}
                  </span>
                ))}
              </div>
              <button className="mt-4 text-primary-600 font-medium text-sm hover:underline">Request Pilot →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ---------------- Pricing Page ---------------- */

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic Idea Ingestion", "Standard AI Filtering", "Community Support", "1 Admin Seat"],
    cta: "Get Started"
  },
  {
    name: "Priority Boost",
    price: "$49",
    features: ["Priority AI Processing", "Advanced Sentiment Analytics", "Export Data to CSV", "Email Support", "5 Admin Seats"],
    cta: "Start Trial",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Dedicated Server Options", "Custom AI Model Training", "SLA Guarantees", "24/7 Phone Support", "Unlimited Seats"],
    cta: "Contact Sales"
  }
];

export const PricingPage: React.FC = () => (
  <div className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-slate-600">Choose the plan that fits your organization's scale.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingTiers.map((tier, i) => (
          <div key={i} className={`relative flex flex-col p-8 bg-white rounded-2xl shadow-sm border ${tier.highlight ? 'border-primary-500 ring-2 ring-primary-500 ring-opacity-50' : 'border-slate-200'}`}>
            {tier.highlight && (
              <span className="absolute top-0 right-0 -mt-3 -mr-3 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </span>
            )}
            <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
              {tier.price !== "Custom" && <span className="text-slate-500">/mo</span>}
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((f, j) => (
                <li key={j} className="flex items-center text-sm text-slate-600">
                  <Check className="h-4 w-4 text-primary-500 mr-2" />
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 px-4 rounded-lg font-bold text-sm transition-colors ${tier.highlight ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
              {tier.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ---------------- Security Page ---------------- */

export const SecurityPage: React.FC = () => (
  <div className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Security & Compliance</h1>
      
      <div className="prose prose-slate max-w-none">
        <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-primary-500 mb-8">
          <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center">
            <Lock className="h-5 w-5 mr-2" />
            Our Commitment to Trust
          </h3>
          <p className="text-slate-600">
            At AI CONNECT, we treat citizen data as a public trust. We are fully compliant with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> and <strong>GDPR</strong>.
          </p>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Data Localization & Sovereignty</h3>
        <p className="text-slate-600 mb-4">
          All data generated within India is stored on servers physically located within the country, ensuring compliance with local regulations. We offer similar localization options for enterprise clients in the EU and US.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Moderation Policy</h3>
        <p className="text-slate-600 mb-4">
          Our AI pipeline employs a multi-tier toxicity filter. Content flagged as hate speech, harassment, or explicit is automatically quarantined. A human-in-the-loop review process is available for ambiguous cases, ensuring safe public discourse.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">IP Timestamping</h3>
        <p className="text-slate-600 mb-8">
          Every idea submitted is cryptographically hashed and timestamped. This provides users with a verifiable proof-of-origin, encouraging the sharing of high-quality, novel solutions without fear of uncredited appropriation.
        </p>

        <a href="#" className="inline-flex items-center text-primary-600 font-medium hover:underline">
          Download Compliance Whitepaper <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  </div>
);

/* ---------------- About Page ---------------- */

export const AboutPage: React.FC = () => (
  <div className="py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">About AI CONNECT</h1>
      <p className="text-xl text-slate-600 mb-12 leading-relaxed">
        Our mission is to bridge the gap between citizens and decision-makers. We believe that in a democracy, listening should be as scalable as speaking.
      </p>
      
      <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 p-8 rounded-2xl">
        <div className="w-32 h-32 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden">
          <img src="https://picsum.photos/300/300" alt="Manikumar Marepalli" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900">Manikumar Marepalli</h3>
          <p className="text-primary-600 font-medium mb-4">Founder & CEO</p>
          <p className="text-slate-600">
            A technologist with a passion for civic innovation, Manikumar founded AI CONNECT to solve the "noise problem" in public feedback. His vision is a world where every good idea finds the right leader, regardless of the sender's social standing.
          </p>
        </div>
      </div>
    </div>
  </div>
);

/* ---------------- Contact Page ---------------- */

export const ContactPage: React.FC = () => (
  <div className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-slate-600 mb-8">
            Have questions about the pilot, partnership opportunities, or just want to say hello? We'd love to hear from you.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-slate-900">Headquarters</h4>
                <p className="text-slate-600">T-Hub, Raidurgam,<br/>Hyderabad, Telangana 500081</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-primary-600 mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-slate-900">Email</h4>
                <p className="text-slate-600">hello@aiconnect.com</p>
              </div>
            </div>
             <div className="flex items-start">
              <Phone className="h-6 w-6 text-primary-600 mt-1 mr-4" />
              <div>
                <h4 className="font-semibold text-slate-900">Phone</h4>
                <p className="text-slate-600">+91 40 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary-600 text-white font-bold py-3 rounded-lg hover:bg-primary-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
