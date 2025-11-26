import React, { useState } from 'react';
import { UserInterest } from '../types';
import { Loader2, CheckCircle } from 'lucide-react';

const PilotForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    organization: '',
    interest: UserInterest.Government,
    message: '',
    consent: false
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center max-w-lg mx-auto">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Registration Received</h3>
        <p className="text-green-700">
          Thank you for joining the India Pilot waitlist. Our team will review your application and contact you within 5 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Join our India Pilot</h3>
      <p className="text-slate-500 mb-6">Limited spots available for Hyderabad launch. Early partners receive reduced fees and co-branding opportunities.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
            <input
              required
              type="email"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Job Role</label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
            <input
              required
              type="text"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={formData.organization}
              onChange={(e) => setFormData({...formData, organization: e.target.value})}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">I represent a...</label>
          <select
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            value={formData.interest}
            onChange={(e) => setFormData({...formData, interest: e.target.value as UserInterest})}
          >
            {Object.values(UserInterest).map((val) => (
              <option key={val} value={val}>{val}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">How can AI CONNECT help you?</label>
          <textarea
            rows={3}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Tell us about your current challenges with public feedback..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <div className="flex items-start">
          <input
            required
            type="checkbox"
            className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-slate-300 rounded"
            checked={formData.consent}
            onChange={(e) => setFormData({...formData, consent: e.target.checked})}
          />
          <label className="ml-2 text-sm text-slate-600">
            I agree to receive communications from AI CONNECT and understand that my data will be processed in accordance with the <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.
          </label>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-lg transition-colors flex justify-center items-center"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" /> Processing...
            </>
          ) : (
            'Request Early Access'
          )}
        </button>
      </form>
    </div>
  );
};

export default PilotForm;