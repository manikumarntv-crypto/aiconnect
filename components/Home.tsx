import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Filter, MessageSquare, Send } from 'lucide-react';
import DashboardPreview from './DashboardPreview';
import { UseCasesSection } from './InfoPages';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              AI CONNECT <br />
              <span className="gradient-text">Give Citizens a Real Voice</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              AI-powered two-way social media that filters millions of public suggestions and delivers the highest-value ideas to leaders and creators.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/pilot"
                className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-bold rounded-full text-lg hover:bg-primary-700 transition-transform hover:-translate-y-1 shadow-lg shadow-primary-500/30 flex items-center justify-center"
              >
                Join the Pilot <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-full text-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center">
                <Play className="mr-2 h-5 w-5 fill-slate-700" /> Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Amplify public voice
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Reduce noise, increase impact
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Secure IP & attribution
              </span>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary-100 rounded-full opacity-30 blur-3xl -z-0"></div>
      </section>

      {/* Social Proof */}
      <div className="bg-slate-50 py-10 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">Partnering with forward-thinking organizations</p>
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder Logos */}
             <div className="h-8 font-bold text-xl text-slate-400">GOVT OF TELANGANA</div>
             <div className="h-8 font-bold text-xl text-slate-400">T-HUB</div>
             <div className="h-8 font-bold text-xl text-slate-400">CITIZEN.ORG</div>
             <div className="h-8 font-bold text-xl text-slate-400">FUTURE INDIA</div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How AI CONNECT Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">From raw noise to actionable intelligence in three simple steps.</p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shadow-lg mb-6">
                <MessageSquare className="h-10 w-10 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Collect</h3>
              <p className="text-slate-600">
                We ingest posts and submissions from social media, web forms, and our app, aggregating millions of diverse voices.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shadow-lg mb-6">
                <Filter className="h-10 w-10 text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Analyze & Filter</h3>
              <p className="text-slate-600">
                Our AI engine scores content for novelty, sentiment, and constructive value, filtering out 99% of noise and toxicity.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center shadow-lg mb-6">
                <Send className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Deliver</h3>
              <p className="text-slate-600">
                Leaders receive verified, high-impact ideas on their dashboard and can respond directly with one click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 text-white">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Command Center for Leaders</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">See what your community really wants, without scrolling through thousands of comments.</p>
          </div>
          <DashboardPreview />
          <div className="mt-12 text-center">
            <Link to="/features" className="text-white border-b border-primary-500 hover:text-primary-400 pb-1 transition-colors">
              Explore all features
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <UseCasesSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform how you listen?</h2>
           <p className="text-xl text-primary-100 mb-10">
             Join our Hyderabad pilot today. Limited spots available for early partners.
           </p>
           <Link
              to="/pilot"
              className="inline-block px-10 py-4 bg-white text-primary-700 font-bold rounded-full text-lg shadow-xl hover:bg-slate-50 transition-colors"
            >
              Request Access
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;