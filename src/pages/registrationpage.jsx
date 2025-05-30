import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Info, AlertCircle } from 'lucide-react';

const RegistrationPage = () => {
  // State for multi-step form
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // School information
    schoolName: '',
    schoolPhone: '',
    
    // Faculty advisor information
    advisorName: '',
    advisorEmail: '',
    advisorPhone: '',
    advisorEmergencyContact: '',
    
    // Delegation information
    delegationSize: '',
    countryPreferences: {
      preference1: '',
      preference2: '',
      preference3: '',
      preference4: '',
      preference5: ''
    },
    additionalInfo: '',
    
    // Payment information
    paymentMethod: '',
    
    // Additional information
    specialAccommodations: '',
    
    // Terms and conditions
    termsAgreed: false
  });
  
  // State for form errors
  const [errors, setErrors] = useState({});
  
  // Available countries for Model UN
  const availableCountries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bahrain', 'Bangladesh', 'Belarus', 'Belgium', 'Bolivia', 'Bosnia and Herzegovina', 'Brazil', 'Bulgaria',
    'Cambodia', 'Canada', 'Chile', 'China', 'Colombia', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic',
    'Denmark', 'Dominican Republic', 'Ecuador', 'Egypt', 'Estonia', 'Ethiopia', 'Finland', 'France',
    'Georgia', 'Germany', 'Ghana', 'Greece', 'Guatemala', 'Hungary', 'Iceland', 'India', 'Indonesia',
    'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya',
    'Kuwait', 'Latvia', 'Lebanon', 'Libya', 'Lithuania', 'Luxembourg', 'Malaysia', 'Mexico', 'Morocco',
    'Netherlands', 'New Zealand', 'Nigeria', 'North Korea', 'Norway', 'Pakistan', 'Panama', 'Peru',
    'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Saudi Arabia', 'Senegal',
    'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka',
    'Sweden', 'Switzerland', 'Syria', 'Thailand', 'Tunisia', 'Turkey', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'Uruguay', 'Venezuela', 'Vietnam', 'Yemen', 'Zimbabwe'
  ].sort();
  
  // Steps configuration
  const steps = [
    { number: 1, title: 'School Information' },
    { number: 2, title: 'Advisor Information' },
    { number: 3, title: 'Delegation Size' },
    { number: 4, title: 'Country Preferences' },
    { number: 5, title: 'Payment Information' },
    { number: 6, title: 'Review & Submit' }
  ];
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for the field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  // Handle country preference selection
  const handleCountryPreferenceChange = (preferenceKey, value) => {
    setFormData({
      ...formData,
      countryPreferences: {
        ...formData.countryPreferences,
        [preferenceKey]: value
      }
    });
    
    // Clear errors for country preferences
    if (errors.countryPreferences) {
      setErrors({
        ...errors,
        countryPreferences: ''
      });
    }
  };
  
  // Validate current step
  const validateStep = () => {
    const newErrors = {};
    
    // Validate based on current step
    if (currentStep === 1) {
      if (!formData.schoolName) newErrors.schoolName = 'School name is required';
      if (!formData.schoolPhone) newErrors.schoolPhone = 'School phone number is required';
    } 
    else if (currentStep === 2) {
      if (!formData.advisorName) newErrors.advisorName = 'Advisor name is required';
      if (!formData.advisorEmail) newErrors.advisorEmail = 'Advisor email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.advisorEmail)) newErrors.advisorEmail = 'Email is invalid';
      if (!formData.advisorPhone) newErrors.advisorPhone = 'Advisor phone number is required';
    }
    else if (currentStep === 3) {
      if (!formData.delegationSize) newErrors.delegationSize = 'Delegation size is required';
      else if (isNaN(formData.delegationSize) || parseInt(formData.delegationSize) <= 0) {
        newErrors.delegationSize = 'Please enter a valid number of delegates';
      }
    }
    else if (currentStep === 4) {
      // Check if at least the first preference is selected
      if (!formData.countryPreferences.preference1) {
        newErrors.countryPreferences = 'Please select at least your first country preference';
      }
      
      // Check for duplicates
      const selectedCountries = Object.values(formData.countryPreferences).filter(country => country !== '');
      const uniqueCountries = [...new Set(selectedCountries)];
      if (selectedCountries.length !== uniqueCountries.length) {
        newErrors.countryPreferences = 'Please select different countries for each preference';
      }
    }
    else if (currentStep === 5) {
      if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
    }
    else if (currentStep === 6) {
      if (!formData.termsAgreed) newErrors.termsAgreed = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Navigate to next step
  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Navigate to previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };
  
  // Submit the form
  const handleSubmit = () => {
    if (validateStep()) {
      // In a real app, this would submit the data to a server
      console.log('Submitting form data:', formData);
      
      // Show thank you page
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    }
  };
  
  // Calculate total fees
  const calculateFees = () => {
    const delegateCount = parseInt(formData.delegationSize || 0);
    
    return {
      delegateFee: 50 * delegateCount,
      total: 50 * delegateCount
    };
  };
  
  // Thank You Page Component
  const ThankYouPage = () => (
    <div className="min-h-screen pt-16" style={{ backgroundColor: '#F8F9FB' }}>
      <section className="text-white py-16 px-4" style={{ backgroundColor: '#29487D' }}>
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>Thank You for Registering!</h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
            Your registration for GSUMUN 2025 has been successfully submitted.
          </p>
        </div>
      </section>
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ 
              color: '#29487D',
              fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif"
            }}>
              What's Next?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#D4D8E8' }}>
                  <span className="font-bold" style={{ color: '#3C5898', fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#29487D', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Confirmation Email</h3>
                  <p className="text-gray-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>You will receive a confirmation email within 24 hours at {formData.advisorEmail}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#D4D8E8' }}>
                  <span className="font-bold" style={{ color: '#3C5898', fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#29487D', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Country Assignments</h3>
                  <p className="text-gray-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Country assignments will be sent 4-6 weeks before the conference</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#D4D8E8' }}>
                  <span className="font-bold" style={{ color: '#3C5898', fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#29487D', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Payment Instructions</h3>
                  <p className="text-gray-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Payment instructions will be included in your confirmation email</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#D4D8E8' }}>
                  <span className="font-bold" style={{ color: '#3C5898', fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: '#29487D', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Position Papers</h3>
                  <p className="text-gray-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Position papers will be due 2 weeks before the conference</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Registration Summary</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>School:</span>
                  <span>{formData.schoolName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delegates:</span>
                  <span>{formData.delegationSize}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Method:</span>
                  <span>{formData.paymentMethod === 'cash' ? 'Cash' : 'Check'}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total Amount:</span>
                  <span>${calculateFees().total}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Questions about your registration?</p>
              <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                Contact us at <a href="mailto:registration@gsumun.org" className="transition hover:opacity-80" style={{ color: '#3C5898' }}>registration@gsumun.org</a>
              </p>
              <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>or call (404) 555-1234</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
  // If form is submitted, show thank you page
  if (isSubmitted) {
    return <ThankYouPage />;
  }
  
  // Render form step content based on current step
  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold" style={{ color: '#29487D' }}>School Information</h3>
            
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium mb-1" style={{ color: '#374151', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                  School Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.schoolName ? 'border-red-500' : ''}`}
                  style={{ 
                    borderColor: errors.schoolName ? '#EF4444' : '#D4D8E8',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3C5898'}
                  onBlur={(e) => e.target.style.borderColor = errors.schoolName ? '#EF4444' : '#D4D8E8'}
                />
                {errors.schoolName && (
                  <p className="mt-1 text-sm text-red-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>{errors.schoolName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="schoolPhone" className="block text-sm font-medium mb-1" style={{ color: '#374151', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                  School Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="schoolPhone"
                  name="schoolPhone"
                  value={formData.schoolPhone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.schoolPhone ? 'border-red-500' : ''}`}
                  style={{ 
                    borderColor: errors.schoolPhone ? '#EF4444' : '#D4D8E8',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3C5898'}
                  onBlur={(e) => e.target.style.borderColor = errors.schoolPhone ? '#EF4444' : '#D4D8E8'}
                />
                {errors.schoolPhone && (
                  <p className="mt-1 text-sm text-red-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>{errors.schoolPhone}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold" style={{ color: '#29487D' }}>Faculty Advisor Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="advisorName" className="block text-sm font-medium text-gray-700 mb-1">
                  Advisor Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="advisorName"
                  name="advisorName"
                  value={formData.advisorName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.advisorName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.advisorName && (
                  <p className="mt-1 text-sm text-red-500">{errors.advisorName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="advisorEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Advisor Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="advisorEmail"
                  name="advisorEmail"
                  value={formData.advisorEmail}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.advisorEmail ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.advisorEmail && (
                  <p className="mt-1 text-sm text-red-500">{errors.advisorEmail}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="advisorPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  Advisor Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="advisorPhone"
                  name="advisorPhone"
                  value={formData.advisorPhone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.advisorPhone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.advisorPhone && (
                  <p className="mt-1 text-sm text-red-500">{errors.advisorPhone}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="advisorEmergencyContact" className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact
                </label>
                <input
                  type="text"
                  id="advisorEmergencyContact"
                  name="advisorEmergencyContact"
                  value={formData.advisorEmergencyContact}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.advisorEmergencyContact ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                />
                {errors.advisorEmergencyContact && (
                  <p className="mt-1 text-sm text-red-500">{errors.advisorEmergencyContact}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold" style={{ color: '#29487D' }}>Delegation Size</h3>
            
            <div className="border rounded-md p-4 mb-6" style={{ backgroundColor: '#F8F9FB', borderColor: '#D4D8E8' }}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5" style={{ color: '#3C5898' }} />
                </div>
                <div className="ml-3">
                  <p className="text-sm" style={{ color: '#29487D', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                    Please enter the total number of delegates from your school that will be participating in GSUMUN 2025.
                    In the next step, you'll be able to select your country preferences.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="delegationSize" className="block text-sm font-medium text-gray-700 mb-1">
                Number of Delegates <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="delegationSize"
                name="delegationSize"
                min="1"
                value={formData.delegationSize}
                onChange={handleChange}
                className={`w-full sm:w-1/3 px-3 py-2 border rounded-md ${errors.delegationSize ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.delegationSize && (
                <p className="mt-1 text-sm text-red-500">{errors.delegationSize}</p>
              )}
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Registration fee: $50 per delegate
              </p>
              {formData.delegationSize && !isNaN(formData.delegationSize) && parseInt(formData.delegationSize) > 0 && (
                <p className="mt-2 font-medium">
                  Total: ${calculateFees().total} 
                  ({parseInt(formData.delegationSize)} delegates × $50)
                </p>
              )}
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold" style={{ color: '#29487D' }}>Country Preferences</h3>
            
            <div className="border rounded-md p-4 mb-6" style={{ backgroundColor: '#F8F9FB', borderColor: '#D4D8E8' }}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5" style={{ color: '#3C5898' }} />
                </div>
                <div className="ml-3">
                  <p className="text-sm" style={{ color: '#29487D', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                    Please select your top 5 country preferences in order of priority. 
                    We will do our best to assign one of your preferred countries based on availability.
                  </p>
                </div>
              </div>
            </div>
            
            {errors.countryPreferences && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                      {errors.countryPreferences}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country Preference {num} {num === 1 && <span className="text-red-500">*</span>}
                  </label>
                  <select
                    value={formData.countryPreferences[`preference${num}`]}
                    onChange={(e) => handleCountryPreferenceChange(`preference${num}`, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Please select</option>
                    {availableCountries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Information
              </label>
              <p className="text-sm text-gray-500 mb-2">
                Indicate whether you require additional delegations with preferences.
              </p>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows="4"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please provide any additional information about your delegation preferences..."
              ></textarea>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold" style={{ color: '#29487D' }}>Payment Information</h3>
            
            <div className="border rounded-md p-4 mb-6" style={{ backgroundColor: '#F8F9FB', borderColor: '#D4D8E8' }}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5" style={{ color: '#3C5898' }} />
                </div>
                <div className="ml-3">
                  <p className="text-sm" style={{ color: '#29487D', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                    Please select your preferred payment method. Payment will be due within 14 days of registration.
                    You will receive payment instructions by email.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Payment Method <span className="text-red-500">*</span>
              </label>
              
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Cash</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="check"
                    checked={formData.paymentMethod === 'check'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Check</span>
                </label>
              </div>
              
              {errors.paymentMethod && (
                <p className="mt-1 text-sm text-red-500">{errors.paymentMethod}</p>
              )}
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-md p-4">
              <h4 className="font-medium mb-3">Registration Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Delegate Fees ({formData.delegationSize} × $50):</span>
                  <span className="font-medium">${calculateFees().delegateFee}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span>Total:</span>
                  <span>${calculateFees().total}</span>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="specialAccommodations" className="block text-sm font-medium text-gray-700 mb-1">
                Special Accommodations (Optional)
              </label>
              <textarea
                id="specialAccommodations"
                name="specialAccommodations"
                rows="3"
                value={formData.specialAccommodations}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please list any special accommodations, dietary restrictions, or accessibility needs."
              ></textarea>
            </div>
          </div>
        );
        
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold" style={{ color: '#29487D' }}>Review & Submit</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-6">
              <div>
                <h4 className="font-medium text-lg mb-3">School Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">School Name</p>
                    <p className="font-medium">{formData.schoolName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">School Phone</p>
                    <p className="font-medium">{formData.schoolPhone}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-lg mb-3">Faculty Advisor</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{formData.advisorName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{formData.advisorEmail}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{formData.advisorPhone}</p>
                  </div>
                  {formData.advisorEmergencyContact && (
                    <div>
                      <p className="text-sm text-gray-500">Emergency Contact</p>
                      <p className="font-medium">{formData.advisorEmergencyContact}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-lg mb-3">Delegation</h4>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Delegation Size</p>
                  <p className="font-medium">{formData.delegationSize} delegates</p>
                </div>
                
                <h5 className="font-medium mb-2">Country Preferences</h5>
                <ol className="space-y-1">
                  {Object.entries(formData.countryPreferences)
                    .filter(([_, country]) => country !== '')
                    .map(([key, country], index) => (
                      <li key={key} className="flex justify-between">
                        <span>{index + 1}. {country}</span>
                      </li>
                    ))
                  }
                </ol>
                
                {formData.additionalInfo && (
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Additional Information</h5>
                    <p className="text-gray-600">{formData.additionalInfo}</p>
                  </div>
                )}
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-lg mb-3">Payment</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p className="font-medium">
                      {formData.paymentMethod === 'cash' ? 'Cash' : 
                       formData.paymentMethod === 'check' ? 'Check' : ''}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Amount</p>
                    <p className="font-medium">${calculateFees().total}</p>
                  </div>
                </div>
              </div>
              
              {formData.specialAccommodations && (
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-lg mb-3">Special Accommodations</h4>
                  <p>{formData.specialAccommodations}</p>
                </div>
              )}
            </div>
            
            <div className="mt-6">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  className="h-4 w-4 mt-1 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I confirm that all information provided is accurate. I understand and agree to the 
                  <a href="/terms" className="text-blue-600 hover:text-blue-800 ml-1">terms and conditions</a>
                  , including the cancellation policy and code of conduct for GSUMUN 2025.
                </span>
              </label>
              {errors.termsAgreed && (
                <p className="mt-1 text-sm text-red-500">{errors.termsAgreed}</p>
              )}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: '#F8F9FB' }}>
      {/* Header Section */}
      <section className="text-white py-16 px-4" style={{ backgroundColor: '#29487D' }}>
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>Registration</h1>
          <p className="text-xl max-w-3xl mb-8" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
            Register your school delegation for GSUMUN 2025. Complete the form below to secure your spot at our conference.
          </p>
          
          {/* Registration Deadline Notice */}
          <div className="rounded-lg p-4 inline-block" style={{ backgroundColor: 'rgba(212, 216, 232, 0.2)' }}>
            <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Registration Deadline: October 24, 2025 11:59 PM</p>
          </div>
        </div>
      </section>
      
      {/* Multi-step Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step) => (
                <div 
                  key={step.number} 
                  className="relative flex-1"
                >
                  {/* Line between steps */}
                  {step.number < steps.length && (
                    <div 
                      className={`absolute top-1/2 right-0 w-full h-0.5 -translate-y-1/2`}
                      style={{ backgroundColor: currentStep > step.number ? '#3C5898' : '#D4D8E8' }}
                    ></div>
                  )}
                  
                  {/* Step bubble */}
                  <div className="relative flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center z-10 text-white font-medium`}
                      style={{ 
                        backgroundColor: currentStep >= step.number ? '#3C5898' : '#D4D8E8',
                        color: currentStep >= step.number ? 'white' : '#6B7280',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      {currentStep > step.number ? (
                        <Check size={16} />
                      ) : (
                        <span>{step.number}</span>
                      )}
                    </div>
                    <span 
                      className={`text-xs mt-2 text-center font-medium`}
                      style={{ 
                        color: currentStep >= step.number ? '#3C5898' : '#6B7280',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      {step.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div>
              {/* Step Content */}
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              <div className="mt-10 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-1 px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50 transition"
                    style={{ 
                      borderColor: '#D4D8E8',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>
                )}
                
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto flex items-center gap-1 px-4 py-2 rounded-md text-white transition hover:opacity-90"
                    style={{ 
                      backgroundColor: '#3C5898',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="ml-auto px-6 py-2 rounded-md text-white transition hover:opacity-90"
                    style={{ 
                      backgroundColor: '#3C5898',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                    }}
                  >
                    Submit Registration
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Need help with registration?</p>
            <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Contact us at <a href="mailto:registration@gsumun.org" className="transition hover:opacity-80" style={{ color: '#3C5898' }}>registration@gsumun.org</a> or call (404) 555-1234</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 px-4" style={{ backgroundColor: '#F0F2F5' }}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#29487D', fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6" style={{ borderTop: '3px solid #3C5898' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#29487D', fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>What is the registration fee?</h3>
              <p className="text-gray-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                Registration costs $50 per delegate. There are no additional school fees or early bird discounts.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6" style={{ borderTop: '3px solid #3C5898' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#29487D', fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>What is the cancellation policy?</h3>
              <p className="text-gray-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                Cancellations made 30+ days before the conference receive a full refund minus a $50 processing fee.
                Cancellations within 30 days receive a 50% refund. No refunds are given for cancellations within 14 days of the conference.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6" style={{ borderTop: '3px solid #3C5898' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#29487D', fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>How do country assignments work?</h3>
              <p className="text-gray-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                Schools select their country preferences during registration. Assignments are confirmed based on preferences and availability
                once payment is received. Country assignments are distributed approximately 6 weeks before the conference.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6" style={{ borderTop: '3px solid #3C5898' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#29487D', fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>When are position papers due?</h3>
              <p className="text-gray-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                Position papers must be submitted by October 15, 2025. Late submissions will be accepted until October 25, 
                but will not be considered for position paper awards.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/faqs" className="font-medium transition hover:opacity-80" style={{ color: '#3C5898', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
              View all FAQs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;