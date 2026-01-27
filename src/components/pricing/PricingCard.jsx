import React from 'react';
import { Check, ChevronDown } from 'lucide-react';
 
export default function PricingCard({
  plan,
  isHovered,
  onHover,
  onLeave,
  expandedDetails,
  setExpandedDetails
}) {
  const isPro = plan.id === 'pro';
 
  return (
    <div
      className="relative group perspective"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Animated gradient border */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r ${
          isPro
            ? 'from-orange-600 via-yellow-600 to-orange-600'
            : 'from-purple-600 via-pink-600 to-purple-600'
        } rounded-3xl opacity-0 blur transition-opacity duration-500 ${
          isHovered ? 'opacity-30 animate-pulse' : ''
        }`}
      />
 
      {/* Shimmer */}
      <div
        className={`absolute inset-0 rounded-3xl overflow-hidden ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}
      >
        <div
          className={`absolute inset-0 ${
            isPro
              ? 'bg-gradient-to-r from-transparent via-orange-500/10 to-transparent'
              : 'bg-gradient-to-r from-transparent via-purple-500/10 to-transparent'
          } translate-x-[-100%] ${
            isHovered ? 'animate-shimmer' : ''
          }`}
        />
      </div>
 
      {/* Card */}
      <div
        className={`relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border transition-all duration-500 h-full flex flex-col ${
          isHovered ? 'border-gray-600 shadow-2xl' : 'border-gray-800'
        }`}
        style={{
          transform: isHovered
            ? isPro
              ? 'rotateY(2deg) rotateX(-2deg)'
              : 'rotateY(-2deg) rotateX(-2deg)'
            : 'rotateY(0deg) rotateX(0deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Popular Badge */}
        {isPro && (
          <div className="absolute -top-2 right-6 bg-orange-500 text-white text-xs font-bold px-5 py-1 rounded-full shadow-lg">
            POPULAR
          </div>
        )}
 
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2">
            <span className="bg-amber-900/60 text-amber-200 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
              {plan.name}
            </span>
            {!isPro && (
              <div
                className={`${plan.badgeColor} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg`}
              >
                {plan.badge}
              </div>
            )}
          </div>
        </div>
 
        {/* Price */}
        <div className="mb-4">
          <span className="text-5xl font-bold text-white tracking-tight">
            ${plan.price}
          </span>
          <p className="text-gray-400 text-sm mt-2">
            {plan.description}{' '}
            <span className="text-white font-medium">
              ${plan.monthly}
            </span>{' '}
            monthly hosting
          </p>
        </div>
 
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4" />
 
        {/* Features */}
        <div className="mb-4 flex-grow">
          <h3 className="text-white font-semibold mb-3 text-sm">
            Features:
          </h3>
          <ul className="space-y-2.5">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 group">
                <div className="mt-0.5 bg-gray-800 rounded-full p-0.5 group-hover:bg-gray-700 transition-all group-hover:scale-110">
                  <Check className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
 
          {/* Details Toggle */}
          {/* {plan.hasDetails && (
            <button
              onClick={() => setExpandedDetails(!expandedDetails)}
              className="flex items-center justify-between w-full mt-3 p-3 bg-gray-800/40 rounded-lg text-gray-300 hover:bg-gray-800/60 transition-all border border-gray-800 hover:border-gray-700 group"
            >
              <span className="flex items-center gap-2">
                <div className="bg-gray-700 rounded-full p-0.5">
                  <Check className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <span className="text-sm">
                  Technical & Hosting Details
                </span>
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expandedDetails ? 'rotate-180' : ''
                }`}
              />
            </button>
          )} */}
        </div>
 
        {/* CTA */}
        <button
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
            isHovered
              ? 'bg-white text-black border-white shadow-xl shadow-white/20'
              : 'bg-transparent text-white border-gray-700 hover:border-gray-600'
          }`}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}