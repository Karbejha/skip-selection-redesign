import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, Clock, MapPin, Shield, Weight } from 'lucide-react';

const SkipSelectionPage = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(3); // Step 3: Select Skip

  // Mock data based on the API structure
  const mockSkips = [
    {
      id: 17933,
      size: 4,
      hire_period_days: 14,
      price_before_vat: 278,
      vat: 20,
      allowed_on_road: true,
      allows_heavy_waste: true
    },
    {
      id: 17934,
      size: 6,
      hire_period_days: 14,
      price_before_vat: 305,
      vat: 20,
      allowed_on_road: true,
      allows_heavy_waste: true
    },
    {
      id: 17935,
      size: 8,
      hire_period_days: 14,
      price_before_vat: 375,
      vat: 20,
      allowed_on_road: true,
      allows_heavy_waste: true
    },
    {
      id: 17936,
      size: 10,
      hire_period_days: 14,
      price_before_vat: 400,
      vat: 20,
      allowed_on_road: false,
      allows_heavy_waste: false
    },
    {
      id: 17937,
      size: 12,
      hire_period_days: 14,
      price_before_vat: 439,
      vat: 20,
      allowed_on_road: false,
      allows_heavy_waste: false
    },
    {
      id: 17938,
      size: 14,
      hire_period_days: 14,
      price_before_vat: 470,
      vat: 20,
      allowed_on_road: false,
      allows_heavy_waste: false
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSkips(mockSkips);
      setLoading(false);
    }, 1000);
  }, []);

  const calculateTotalPrice = (priceBeforeVat, vat) => {
    return Math.round(priceBeforeVat * (1 + vat / 100));
  };

  const steps = [
    { id: 1, name: 'Postcode', icon: MapPin },
    { id: 2, name: 'Waste Type', icon: Weight },
    { id: 3, name: 'Select Skip', icon: Truck },
    { id: 4, name: 'Permit Check', icon: Shield },
    { id: 5, name: 'Choose Date', icon: Clock },
    { id: 6, name: 'Payment', icon: ChevronRight }
  ];

  const SkipCard = ({ skip, isSelected, onSelect }) => {
    const totalPrice = calculateTotalPrice(skip.price_before_vat, skip.vat);
    
    return (
      <div 
        className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 ${
          isSelected 
            ? 'border-blue-500 bg-blue-50 shadow-lg' 
            : 'border-gray-200 bg-white hover:border-gray-300'
        }`}
        onClick={() => onSelect(skip)}
      >
        <div className="flex flex-col items-center space-y-4">
          {/* Skip Size Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
            isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
          }`}>
            {skip.size} Yard Skip
          </div>
          
          {/* Skip Visual */}
          <div className="relative">
            <div className={`w-24 h-16 rounded-lg ${
              isSelected ? 'bg-blue-400' : 'bg-yellow-400'
            } relative shadow-lg`}>
              <div className={`absolute inset-2 rounded ${
                isSelected ? 'bg-blue-500' : 'bg-yellow-500'
              }`}></div>
              <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded ${
                isSelected ? 'bg-blue-600' : 'bg-yellow-600'
              }`}></div>
            </div>
          </div>

          {/* Price */}
          <div className="text-center">
            <div className={`text-3xl font-bold ${isSelected ? 'text-blue-600' : 'text-gray-900'}`}>
              £{totalPrice}
            </div>
            <div className="text-sm text-gray-500">
              {skip.hire_period_days} day hire period
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-2 justify-center">
            {skip.allowed_on_road && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                Road Placement
              </span>
            )}
            {skip.allows_heavy_waste && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                Heavy Waste
              </span>
            )}
          </div>

          {/* Select Button */}
          <button
            className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${
              isSelected
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isSelected ? 'Selected' : 'Select This Skip'}
          </button>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading skip options...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">We Want Waste</h1>
                <p className="text-sm text-gray-500">NR32, Lowestoft</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center space-x-2 ${
                  step.id <= currentStep ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.id <= currentStep ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="hidden sm:block text-sm font-medium">{step.name}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-2 sm:mx-4 ${
                    step.id < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Skip
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the skip size that best fits your project needs. All prices include VAT and delivery.
          </p>
        </div>

        {/* Skip Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skips.map((skip) => (
            <SkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={setSelectedSkip}
            />
          ))}
        </div>

        {/* Selected Skip Summary */}
        {selectedSkip && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Selection Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">{selectedSkip.size} Yards</div>
                <div className="text-sm text-gray-600">Skip Size</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">{selectedSkip.hire_period_days} Days</div>
                <div className="text-sm text-gray-600">Hire Period</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">
                  £{calculateTotalPrice(selectedSkip.price_before_vat, selectedSkip.vat)}
                </div>
                <div className="text-sm text-gray-600">Total Price (inc. VAT)</div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2">
            <ChevronLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <button 
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
              selectedSkip
                ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!selectedSkip}
          >
            <span>Continue</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 We Want Waste. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default SkipSelectionPage;