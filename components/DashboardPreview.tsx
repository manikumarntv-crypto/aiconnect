import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { MessageSquare, ThumbsUp, AlertCircle, CheckCircle } from 'lucide-react';

const sentimentData = [
  { name: 'Mon', positive: 4000, negative: 2400, neutral: 2400 },
  { name: 'Tue', positive: 3000, negative: 1398, neutral: 2210 },
  { name: 'Wed', positive: 2000, negative: 9800, neutral: 2290 },
  { name: 'Thu', positive: 2780, negative: 3908, neutral: 2000 },
  { name: 'Fri', positive: 1890, negative: 4800, neutral: 2181 },
  { name: 'Sat', positive: 2390, negative: 3800, neutral: 2500 },
  { name: 'Sun', positive: 3490, negative: 4300, neutral: 2100 },
];

const volumeData = [
  { name: 'Week 1', ideas: 120 },
  { name: 'Week 2', ideas: 230 },
  { name: 'Week 3', ideas: 450 },
  { name: 'Week 4', ideas: 890 },
];

const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xl">
      {/* Fake Window Header */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <div className="ml-4 flex-1 bg-slate-100 rounded-md h-6 w-1/3"></div>
      </div>

      {/* Dashboard Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Stats Row */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase">Total Inputs</p>
                <h3 className="text-2xl font-bold text-slate-800">124,592</h3>
              </div>
              <MessageSquare className="text-primary-500 h-5 w-5" />
            </div>
            <span className="text-green-500 text-xs font-medium">+12% this week</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
             <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase">High Value</p>
                <h3 className="text-2xl font-bold text-slate-800">843</h3>
              </div>
              <ThumbsUp className="text-green-500 h-5 w-5" />
            </div>
             <span className="text-slate-400 text-xs">AI Filtered</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
             <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase">Toxic Removed</p>
                <h3 className="text-2xl font-bold text-slate-800">45.2k</h3>
              </div>
              <AlertCircle className="text-red-500 h-5 w-5" />
            </div>
             <span className="text-red-500 text-xs">-5% from avg</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
             <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase">Responses Sent</p>
                <h3 className="text-2xl font-bold text-slate-800">1,205</h3>
              </div>
              <CheckCircle className="text-blue-500 h-5 w-5" />
            </div>
             <span className="text-green-500 text-xs">Verified</span>
          </div>
        </div>

        {/* Main Chart */}
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h4 className="text-slate-700 font-semibold mb-4">Idea Sentiment Trends</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sentimentData}>
                <defs>
                  <linearGradient id="colorPos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                <Tooltip />
                <Area type="monotone" dataKey="positive" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorPos)" />
                <Area type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={2} fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary Chart */}
        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h4 className="text-slate-700 font-semibold mb-4">Pilot Growth</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" hide />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="ideas" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action List */}
        <div className="md:col-span-3 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
          <h4 className="text-slate-700 font-semibold mb-4">High-Value Ideas (Requires Action)</h4>
          <div className="space-y-3">
             {[1, 2, 3].map((i) => (
               <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-md hover:bg-slate-100 transition-colors cursor-pointer">
                 <div className="flex items-center space-x-3">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                     JD
                   </div>
                   <div>
                     <p className="text-sm font-medium text-slate-800">Proposal for Green Park Renewal</p>
                     <p className="text-xs text-slate-500">Novelty Score: 98/100 • Impact: High</p>
                   </div>
                 </div>
                 <button className="px-3 py-1 text-xs font-medium text-white bg-slate-900 rounded hover:bg-slate-800">Review</button>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;