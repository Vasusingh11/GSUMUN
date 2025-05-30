import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Info, AlertCircle } from 'lucide-react';

const RegistrationPage = () => {
  // State for multi-step form
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
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
    delegationsRequested: '',
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
    promoCode: '',
    promoCodeValid: false,
    
    // Additional information
    specialAccommodations: '',
    
    // Terms and conditions
    termsAgreed: false
  });
  
  // State for form errors
  const [errors, setErrors] = useState({});
  
  // Available countries for Model UN with flags
  const availableCountries = [
    { name: 'Afghanistan', flag: '🇦🇫' },
    { name: 'Albania', flag: '🇦🇱' },
    { name: 'Algeria', flag: '🇩🇿' },
    { name: 'Andorra', flag: '🇦🇩' },
    { name: 'Angola', flag: '🇦🇴' },
    { name: 'Antigua and Barbuda', flag: '🇦🇬' },
    { name: 'Argentina', flag: '🇦🇷' },
    { name: 'Armenia', flag: '🇦🇲' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Austria', flag: '🇦🇹' },
    { name: 'Azerbaijan', flag: '🇦🇿' },
    { name: 'Bahamas', flag: '🇧🇸' },
    { name: 'Bahrain', flag: '🇧🇭' },
    { name: 'Bangladesh', flag: '🇧🇩' },
    { name: 'Barbados', flag: '🇧🇧' },
    { name: 'Belarus', flag: '🇧🇾' },
    { name: 'Belgium', flag: '🇧🇪' },
    { name: 'Belize', flag: '🇧🇿' },
    { name: 'Benin', flag: '🇧🇯' },
    { name: 'Bhutan', flag: '🇧🇹' },
    { name: 'Bolivia', flag: '🇧🇴' },
    { name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { name: 'Botswana', flag: '🇧🇼' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'Brunei', flag: '🇧🇳' },
    { name: 'Bulgaria', flag: '🇧🇬' },
    { name: 'Burkina Faso', flag: '🇧🇫' },
    { name: 'Burundi', flag: '🇧🇮' },
    { name: 'Cabo Verde', flag: '🇨🇻' },
    { name: 'Cambodia', flag: '🇰🇭' },
    { name: 'Cameroon', flag: '🇨🇲' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Central African Republic', flag: '🇨🇫' },
    { name: 'Chad', flag: '🇹🇩' },
    { name: 'Chile', flag: '🇨🇱' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Colombia', flag: '🇨🇴' },
    { name: 'Comoros', flag: '🇰🇲' },
    { name: 'Congo', flag: '🇨🇬' },
    { name: 'Costa Rica', flag: '🇨🇷' },
    { name: 'Croatia', flag: '🇭🇷' },
    { name: 'Cuba', flag: '🇨🇺' },
    { name: 'Cyprus', flag: '🇨🇾' },
    { name: 'Czech Republic', flag: '🇨🇿' },
    { name: 'Côte d\'Ivoire', flag: '🇨🇮' },
    { name: 'Democratic Republic of the Congo', flag: '🇨🇩' },
    { name: 'Denmark', flag: '🇩🇰' },
    { name: 'Djibouti', flag: '🇩🇯' },
    { name: 'Dominica', flag: '🇩🇲' },
    { name: 'Dominican Republic', flag: '🇩🇴' },
    { name: 'Ecuador', flag: '🇪🇨' },
    { name: 'Egypt', flag: '🇪🇬' },
    { name: 'El Salvador', flag: '🇸🇻' },
    { name: 'Equatorial Guinea', flag: '🇬🇶' },
    { name: 'Eritrea', flag: '🇪🇷' },
    { name: 'Estonia', flag: '🇪🇪' },
    { name: 'Eswatini', flag: '🇸🇿' },
    { name: 'Ethiopia', flag: '🇪🇹' },
    { name: 'Fiji', flag: '🇫🇯' },
    { name: 'Finland', flag: '🇫🇮' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Gabon', flag: '🇬🇦' },
    { name: 'Gambia', flag: '🇬🇲' },
    { name: 'Georgia', flag: '🇬🇪' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Ghana', flag: '🇬🇭' },
    { name: 'Greece', flag: '🇬🇷' },
    { name: 'Grenada', flag: '🇬🇩' },
    { name: 'Guatemala', flag: '🇬🇹' },
    { name: 'Guinea', flag: '🇬🇳' },
    { name: 'Guinea-Bissau', flag: '🇬🇼' },
    { name: 'Guyana', flag: '🇬🇾' },
    { name: 'Haiti', flag: '🇭🇹' },
    { name: 'Honduras', flag: '🇭🇳' },
    { name: 'Hungary', flag: '🇭🇺' },
    { name: 'Iceland', flag: '🇮🇸' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Indonesia', flag: '🇮🇩' },
    { name: 'Iran', flag: '🇮🇷' },
    { name: 'Iraq', flag: '🇮🇶' },
    { name: 'Ireland', flag: '🇮🇪' },
    { name: 'Israel', flag: '🇮🇱' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Jamaica', flag: '🇯🇲' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Jordan', flag: '🇯🇴' },
    { name: 'Kazakhstan', flag: '🇰🇿' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'Kiribati', flag: '🇰🇮' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Kyrgyzstan', flag: '🇰🇬' },
    { name: 'Laos', flag: '🇱🇦' },
    { name: 'Latvia', flag: '🇱🇻' },
    { name: 'Lebanon', flag: '🇱🇧' },
    { name: 'Lesotho', flag: '🇱🇸' },
    { name: 'Liberia', flag: '🇱🇷' },
    { name: 'Libya', flag: '🇱🇾' },
    { name: 'Liechtenstein', flag: '🇱🇮' },
    { name: 'Lithuania', flag: '🇱🇹' },
    { name: 'Luxembourg', flag: '🇱🇺' },
    { name: 'Madagascar', flag: '🇲🇬' },
    { name: 'Malawi', flag: '🇲🇼' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Maldives', flag: '🇲🇻' },
    { name: 'Mali', flag: '🇲🇱' },
    { name: 'Malta', flag: '🇲🇹' },
    { name: 'Marshall Islands', flag: '🇲🇭' },
    { name: 'Mauritania', flag: '🇲🇷' },
    { name: 'Mauritius', flag: '🇲🇺' },
    { name: 'Mexico', flag: '🇲🇽' },
    { name: 'Micronesia', flag: '🇫🇲' },
    { name: 'Moldova', flag: '🇲🇩' },
    { name: 'Monaco', flag: '🇲🇨' },
    { name: 'Mongolia', flag: '🇲🇳' },
    { name: 'Montenegro', flag: '🇲🇪' },
    { name: 'Morocco', flag: '🇲🇦' },
    { name: 'Mozambique', flag: '🇲🇿' },
    { name: 'Myanmar', flag: '🇲🇲' },
    { name: 'Namibia', flag: '🇳🇦' },
    { name: 'Nauru', flag: '🇳🇷' },
    { name: 'Nepal', flag: '🇳🇵' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'New Zealand', flag: '🇳🇿' },
    { name: 'Nicaragua', flag: '🇳🇮' },
    { name: 'Niger', flag: '🇳🇪' },
    { name: 'Nigeria', flag: '🇳🇬' },
    { name: 'North Korea', flag: '🇰🇵' },
    { name: 'North Macedonia', flag: '🇲🇰' },
    { name: 'Norway', flag: '🇳🇴' },
    { name: 'Oman', flag: '🇴🇲' },
    { name: 'Pakistan', flag: '🇵🇰' },
    { name: 'Palau', flag: '🇵🇼' },
    { name: 'Panama', flag: '🇵🇦' },
    { name: 'Papua New Guinea', flag: '🇵🇬' },
    { name: 'Paraguay', flag: '🇵🇾' },
    { name: 'Peru', flag: '🇵🇪' },
    { name: 'Philippines', flag: '🇵🇭' },
    { name: 'Poland', flag: '🇵🇱' },
    { name: 'Portugal', flag: '🇵🇹' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'Romania', flag: '🇷🇴' },
    { name: 'Russia', flag: '🇷🇺' },
    { name: 'Rwanda', flag: '🇷🇼' },
    { name: 'Saint Kitts and Nevis', flag: '🇰🇳' },
    { name: 'Saint Lucia', flag: '🇱🇨' },
    { name: 'Saint Vincent and the Grenadines', flag: '🇻🇨' },
    { name: 'Samoa', flag: '🇼🇸' },
    { name: 'San Marino', flag: '🇸🇲' },
    { name: 'Sao Tome and Principe', flag: '🇸🇹' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Senegal', flag: '🇸🇳' },
    { name: 'Serbia', flag: '🇷🇸' },
    { name: 'Seychelles', flag: '🇸🇨' },
    { name: 'Sierra Leone', flag: '🇸🇱' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'Slovakia', flag: '🇸🇰' },
    { name: 'Slovenia', flag: '🇸🇮' },
    { name: 'Solomon Islands', flag: '🇸🇧' },
    { name: 'Somalia', flag: '🇸🇴' },
    { name: 'South Africa', flag: '🇿🇦' },
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'South Sudan', flag: '🇸🇸' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Sri Lanka', flag: '🇱🇰' },
    { name: 'Sudan', flag: '🇸🇩' },
    { name: 'Suriname', flag: '🇸🇷' },
    { name: 'Sweden', flag: '🇸🇪' },
    { name: 'Switzerland', flag: '🇨🇭' },
    { name: 'Syria', flag: '🇸🇾' },
    { name: 'Tajikistan', flag: '🇹🇯' },
    { name: 'Tanzania', flag: '🇹🇿' },
    { name: 'Thailand', flag: '🇹🇭' },
    { name: 'Timor-Leste', flag: '🇹🇱' },
    { name: 'Togo', flag: '🇹🇬' },
    { name: 'Tonga', flag: '🇹🇴' },
    { name: 'Trinidad and Tobago', flag: '🇹🇹' },
    { name: 'Tunisia', flag: '🇹🇳' },
    { name: 'Turkey', flag: '🇹🇷' },
    { name: 'Turkmenistan', flag: '🇹🇲' },
    { name: 'Tuvalu', flag: '🇹🇻' },
    { name: 'Uganda', flag: '🇺🇬' },
    { name: 'Ukraine', flag: '🇺🇦' },
    { name: 'United Arab Emirates', flag: '🇦🇪' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Uruguay', flag: '🇺🇾' },
    { name: 'Uzbekistan', flag: '🇺🇿' },
    { name: 'Vanuatu', flag: '🇻🇺' },
    { name: 'Venezuela', flag: '🇻🇪' },
    { name: 'Vietnam', flag: '🇻🇳' },
    { name: 'Yemen', flag: '🇾🇪' },
    { name: 'Zambia', flag: '🇿🇲' },
    { name: 'Zimbabwe', flag: '🇿🇼' }
  ];
  
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

  // Handle promo code validation
  const handlePromoCodeChange = (e) => {
    const code = e.target.value;
    setFormData({
      ...formData,
      promoCode: code,
      promoCodeValid: code.toLowerCase() === 'new10'
    });
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
      if (!formData.delegationsRequested) newErrors.delegationsRequested = 'Number of delegations requested is required';
      else if (isNaN(formData.delegationsRequested) || parseInt(formData.delegationsRequested) <= 0) {
        newErrors.delegationsRequested = 'Please enter a valid number of delegations requested';
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
    const baseTotal = 50 * delegateCount;
    const discount = formData.promoCodeValid ? baseTotal * 0.1 : 0;
    const finalTotal = baseTotal - discount;
    
    return {
      delegateFee: baseTotal,
      discount: discount,
      total: finalTotal,
      hasDiscount: formData.promoCodeValid
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
            
            <div className="mt-8 p-4 rounded-lg" style={{ backgroundColor: '#F8F9FB' }}>
              <h3 className="font-semibold mb-2" style={{ color: '#29487D', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Registration Summary</h3>
              <div className="space-y-1 text-sm" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                <div className="flex justify-between">
                  <span>School:</span>
                  <span>{formData.schoolName}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delegates:</span>
                  <span>{formData.delegationSize}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delegations Requested:</span>
                  <span>{formData.delegationsRequested}</span>
                </div>
                <div className="flex justify-between">
                  <span>Payment Method:</span>
                  <span>{formData.paymentMethod === 'cash' ? 'Cash' : 'Check'}</span>
                </div>
                {formData.promoCode && (
                  <div className="flex justify-between">
                    <span>Promo Code:</span>
                    <span style={{ color: formData.promoCodeValid ? '#10B981' : '#EF4444' }}>
                      {formData.promoCode} {formData.promoCodeValid ? '(10% off)' : '(Invalid)'}
                    </span>
                  </div>
                )}
                {calculateFees().hasDiscount && (
                  <>
                    <div className="flex justify-between text-gray-500">
                      <span>Original Amount:</span>
                      <span className="line-through">${calculateFees().delegateFee}</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount Applied:</span>
                      <span>-${calculateFees().discount}</span>
                    </div>
                  </>
                )}
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
  
  // Terms and Conditions Modal Component
  const TermsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b" style={{ borderColor: '#D4D8E8' }}>
          <h2 className="text-2xl font-bold" style={{ color: '#29487D', fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>
            Terms and Conditions for GSUMUN
          </h2>
          <button
            onClick={() => setShowTerms(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[70vh]" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Thank you for your interest in attending the GSU Model United Nations (GSUMUN) Conference. Before proceeding with your registration, please carefully review the following terms and conditions. By registering for the conference, you (the "Participant") agree to comply with and be bound by these terms.
            </p>
            
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#29487D' }}>1. Registration and Participation</h3>
              <div className="space-y-2">
                <p><strong>1.1 Eligibility:</strong> The GSU Model UN Conference is open to high school students only. By registering, you confirm that you are a high school student at the time of the conference.</p>
                <p><strong>1.2 Registration Process:</strong> All participants must complete the online registration process and submit the required information. Registration is confirmed upon receiving an official email from the GSU Model UN team.</p>
                <p><strong>1.3 Fees:</strong> The registration fee, if applicable, must be paid in full at the time of registration. Fees are non-refundable except in the case of event cancellation by GSU.</p>
                <p><strong>1.4 Deadline:</strong> Registration must be completed by the specified deadline. Late registrations may be subject to additional fees and availability.</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#29487D' }}>2. Code of Conduct</h3>
              <div className="space-y-2">
                <p><strong>2.1 Behavioral Expectations:</strong> All participants are expected to behave in a respectful and professional manner at all times during the conference. Any disruptive behavior, including but not limited to, harassment, bullying, or violation of the GSU Code of Conduct, will not be tolerated.</p>
                <p><strong>2.2 Consequences for Misconduct:</strong> Participants who fail to comply with the expected code of conduct may be removed from the conference without refund or reimbursement.</p>
                <p><strong>2.3 Delegation of Responsibility:</strong> Each school or organization must designate a teacher or advisor to supervise students attending the conference. This individual is responsible for ensuring that participants follow all conference rules.</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#29487D' }}>3. Conference Materials and Preparation</h3>
              <div className="space-y-2">
                <p><strong>3.1 Position Papers:</strong> All participants must submit their position papers in accordance with the deadlines provided by the GSU Model UN team. Failure to do so may result in forfeiture of any Position Paper awards.</p>
                <p><strong>3.2 Research and Preparation:</strong> Participants are expected to thoroughly research the topics assigned to them and come prepared for the conference.</p>
                <p><strong>3.3 Conference Materials:</strong> Participants will receive conference materials including but not limited to, country assignments, rules of procedure, and topics. It is the responsibility of the participant to review and understand these materials prior to the event.</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#29487D' }}>4. Event Logistics</h3>
              <div className="space-y-2">
                <p><strong>4.1 Location and Dates:</strong> The GSU Model UN Conference will be held on November 5-6, 2025 at Georgia State University Student Center. Any changes to the event location or dates will be communicated in advance.</p>
                <p><strong>4.2 Arrival and Departure:</strong> Participants are expected to arrive at the conference venue on time for all scheduled sessions. Late arrivals may affect participation.</p>
                <p><strong>4.3 Meals and Accommodations:</strong> Participants are responsible for their own meals and accommodations unless otherwise specified in the conference details. GSU does not provide lodging or transportation unless otherwise stated.</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#29487D' }}>5. Liability and Insurance</h3>
              <div className="space-y-2">
                <p><strong>5.1 Health and Safety:</strong> By registering for the conference, you agree that GSU or GSUMUN will not be held liable for any accidents, injuries, or illnesses incurred during the event.</p>
                <p><strong>5.2 Travel Insurance:</strong> GSU recommends that participants obtain travel insurance for the duration of their trip to and from the conference.</p>
                <p><strong>5.3 Liability Waiver:</strong> By registering for the conference, the participant agrees to release GSU and its representatives from any liability for damages, injuries, or losses that may occur during the event.</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#29487D' }}>6. Media and Photography</h3>
              <div className="space-y-2">
                <p><strong>6.1 Photographs and Recordings:</strong> By attending the GSU Model UN Conference, participants consent to being photographed and/or recorded during the event. These images and recordings may be used for promotional purposes, including but not limited to, social media, websites, and brochures.</p>
                <p><strong>6.2 Opting Out:</strong> Participants who do not wish to be photographed or recorded should inform event staff in advance.</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#29487D' }}>7. Cancellation and Refund Policy</h3>
              <div className="space-y-2">
                <p><strong>7.1 Conference Cancellation:</strong> In the unlikely event that the GSU Model UN Conference is canceled, participants will be notified promptly, and any registration fees will be refunded in full.</p>
                <p><strong>7.2 Participant Cancellation:</strong> If a participant cancels their registration, the registration fee is non-refundable. Exceptions may be made in cases of illness or emergency, at the discretion of the GSU Model UN team.</p>
                <p><strong>7.3 No-Show Policy:</strong> Participants who do not show up for the event without prior notice may not be eligible for future conference participation or refunds.</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#29487D' }}>8. Amendments and Updates</h3>
              <p><strong>8.1 Right to Modify:</strong> GSU reserves the right to modify or amend these Terms and Conditions at any time. Participants will be notified of any significant changes, and such changes will be effective immediately upon posting on the GSUMUN website.</p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#29487D' }}>9. Contact Information</h3>
              <p>For any questions regarding the conference, registration, or these Terms and Conditions, please contact the GSU Model UN team at:</p>
              <p>Email: sg@gsumun.org</p>
              <p>Website: www.gsumun.org</p>
            </div>
          </div>
        </div>
        <div className="p-6 border-t bg-gray-50" style={{ borderColor: '#D4D8E8' }}>
          <button
            onClick={() => setShowTerms(false)}
            className="px-4 py-2 rounded-md text-white transition hover:opacity-90"
            style={{ 
              backgroundColor: '#3C5898',
              fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
  
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="delegationSize" className="block text-sm font-medium mb-1" style={{ color: '#374151', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                  Number of Delegates <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="delegationSize"
                  name="delegationSize"
                  min="1"
                  value={formData.delegationSize}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.delegationSize ? 'border-red-500' : ''}`}
                  style={{ 
                    borderColor: errors.delegationSize ? '#EF4444' : '#D4D8E8',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3C5898'}
                  onBlur={(e) => e.target.style.borderColor = errors.delegationSize ? '#EF4444' : '#D4D8E8'}
                />
                {errors.delegationSize && (
                  <p className="mt-1 text-sm text-red-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>{errors.delegationSize}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="delegationsRequested" className="block text-sm font-medium mb-1" style={{ color: '#374151', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                  No. of Delegations Requested <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="delegationsRequested"
                  name="delegationsRequested"
                  min="1"
                  value={formData.delegationsRequested}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.delegationsRequested ? 'border-red-500' : ''}`}
                  style={{ 
                    borderColor: errors.delegationsRequested ? '#EF4444' : '#D4D8E8',
                    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3C5898'}
                  onBlur={(e) => e.target.style.borderColor = errors.delegationsRequested ? '#EF4444' : '#D4D8E8'}
                />
                {errors.delegationsRequested && (
                  <p className="mt-1 text-sm text-red-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>{errors.delegationsRequested}</p>
                )}
              </div>
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-gray-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                Registration fee: $50 per delegate
              </p>
              {formData.delegationSize && !isNaN(formData.delegationSize) && parseInt(formData.delegationSize) > 0 && (
                <div className="mt-2">
                  <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                    {calculateFees().hasDiscount ? (
                      <span>
                        <span className="line-through text-gray-500">${calculateFees().delegateFee}</span>
                        <span className="ml-2 text-green-600">${calculateFees().total}</span>
                        <span className="ml-2 text-sm text-green-600">(10% off applied!)</span>
                      </span>
                    ) : (
                      <span>Total: ${calculateFees().total}</span>
                    )}
                  </p>
                  <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                    ({parseInt(formData.delegationSize)} delegates × $50{calculateFees().hasDiscount ? ' - 10% discount' : ''})
                  </p>
                </div>
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
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                    Country Preference {num} {num === 1 && <span className="text-red-500">*</span>}
                  </label>
                  <select
                    value={formData.countryPreferences[`preference${num}`]}
                    onChange={(e) => handleCountryPreferenceChange(`preference${num}`, e.target.value)}
                    className="w-full px-3 py-2 border rounded-md bg-white"
                    style={{ 
                      borderColor: '#D4D8E8',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3C5898'}
                    onBlur={(e) => e.target.style.borderColor = '#D4D8E8'}
                  >
                    <option value="">Please select</option>
                    {availableCountries.map((country) => (
                      <option key={country.name} value={country.name}>
                        {country.flag} {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium mb-1" style={{ color: '#374151', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                Additional Information
              </label>
              <p className="text-sm text-gray-500 mb-2" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                Indicate whether you require additional delegations with preferences.
              </p>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows="4"
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                style={{ 
                  borderColor: '#D4D8E8',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3C5898'}
                onBlur={(e) => e.target.style.borderColor = '#D4D8E8'}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-3" style={{ color: '#374151', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
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
                      className="h-4 w-4"
                      style={{ color: '#3C5898' }}
                    />
                    <span className="ml-2 text-sm text-gray-700" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Cash</span>
                  </label>
                  
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="check"
                      checked={formData.paymentMethod === 'check'}
                      onChange={handleChange}
                      className="h-4 w-4"
                      style={{ color: '#3C5898' }}
                    />
                    <span className="ml-2 text-sm text-gray-700" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Check</span>
                  </label>
                </div>
                
                {errors.paymentMethod && (
                  <p className="mt-1 text-sm text-red-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>{errors.paymentMethod}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="promoCode" className="block text-sm font-medium mb-1" style={{ color: '#374151', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                  Promo Code (Optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="promoCode"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handlePromoCodeChange}
                    className="w-full px-3 py-2 border rounded-md pr-10"
                    style={{ 
                      borderColor: formData.promoCode ? (formData.promoCodeValid ? '#10B981' : '#EF4444') : '#D4D8E8',
                      fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = formData.promoCode ? (formData.promoCodeValid ? '#10B981' : '#EF4444') : '#3C5898'}
                    onBlur={(e) => e.target.style.borderColor = formData.promoCode ? (formData.promoCodeValid ? '#10B981' : '#EF4444') : '#D4D8E8'}
                    placeholder="Enter promo code"
                  />
                  {formData.promoCode && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {formData.promoCodeValid ? (
                        <span className="text-green-500 text-sm">✓</span>
                      ) : (
                        <span className="text-red-500 text-sm">✗</span>
                      )}
                    </div>
                  )}
                </div>
                {formData.promoCode && !formData.promoCodeValid && (
                  <p className="mt-1 text-sm text-red-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Invalid promo code</p>
                )}
                {formData.promoCodeValid && (
                  <p className="mt-1 text-sm text-green-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>10% discount applied!</p>
                )}
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-md p-4">
              <h4 className="font-medium mb-3" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Registration Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Delegate Fees ({formData.delegationSize} × $50):</span>
                  <span className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>${calculateFees().delegateFee}</span>
                </div>
                {calculateFees().hasDiscount && (
                  <div className="flex justify-between text-green-600">
                    <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Promo Code Discount (10%):</span>
                    <span className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>-${calculateFees().discount}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold pt-2 border-t">
                  <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Total:</span>
                  <span style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>${calculateFees().total}</span>
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="specialAccommodations" className="block text-sm font-medium mb-1" style={{ color: '#374151', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                Special Accommodations (Optional)
              </label>
              <textarea
                id="specialAccommodations"
                name="specialAccommodations"
                rows="3"
                value={formData.specialAccommodations}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                style={{ 
                  borderColor: '#D4D8E8',
                  fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3C5898'}
                onBlur={(e) => e.target.style.borderColor = '#D4D8E8'}
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
                <h4 className="font-medium text-lg mb-3" style={{ color: '#29487D', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Delegation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Number of Delegates</p>
                    <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>{formData.delegationSize} delegates</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Delegations Requested</p>
                    <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>{formData.delegationsRequested}</p>
                  </div>
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
                <h4 className="font-medium text-lg mb-3" style={{ color: '#29487D', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Payment</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Payment Method</p>
                    <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                      {formData.paymentMethod === 'cash' ? 'Cash' : 
                       formData.paymentMethod === 'check' ? 'Check' : ''}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Total Amount</p>
                    <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>${calculateFees().total}</p>
                  </div>
                  {formData.promoCode && (
                    <div>
                      <p className="text-sm text-gray-500" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Promo Code</p>
                      <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif", color: formData.promoCodeValid ? '#10B981' : '#EF4444' }}>
                        {formData.promoCode} {formData.promoCodeValid ? '(Valid - 10% off)' : '(Invalid)'}
                      </p>
                    </div>
                  )}
                </div>
                {calculateFees().hasDiscount && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-700" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Original Amount:</span>
                      <span className="text-sm text-green-700 line-through" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>${calculateFees().delegateFee}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-700" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Discount (10%):</span>
                      <span className="text-sm text-green-700" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>-${calculateFees().discount}</span>
                    </div>
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-green-700" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Final Amount:</span>
                      <span className="text-green-700" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>${calculateFees().total}</span>
                    </div>
                  </div>
                )}
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
                <span className="ml-2 text-sm text-gray-700" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
                  I confirm that all information provided is accurate. I understand and agree to the 
                  <button 
                    type="button"
                    onClick={() => setShowTerms(true)}
                    className="ml-1 transition hover:opacity-80 underline"
                    style={{ color: '#3C5898', fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}
                  >
                    terms and conditions
                  </button>
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

  // If form is submitted, show thank you page
  if (isSubmitted) {
    return <ThankYouPage />;
  }
  
  return (
    <div className="min-h-screen pt-16" style={{ backgroundColor: '#F8F9FB' }}>
      {/* Terms Modal */}
      {showTerms && <TermsModal />}
      {/* Header Section */}
      <section className="text-white py-16 px-4" style={{ backgroundColor: '#29487D' }}>
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: "'SF Pro Display Bold', 'Myriad Pro Bold', 'Gill Sans Bold', Arial, sans-serif" }}>Registration</h1>
          <p className="text-xl max-w-3xl mb-8" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>
            Register your school delegation for GSUMUN 2025. Complete the form below to secure your spot at our conference.
          </p>
          
          {/* Registration Deadline Notice */}
          <div className="rounded-lg p-4 inline-block" style={{ backgroundColor: 'rgba(212, 216, 232, 0.2)' }}>
            <p className="font-medium" style={{ fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif" }}>Registration Deadline: October 25, 2025</p>
          </div>
        </div>
      </section>
      
      {/* Multi-step Form */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center relative">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center" style={{ flex: index === steps.length - 1 ? 'none' : '1' }}>
                  {/* Step bubble */}
                  <div className="relative flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium relative z-20`}
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
                      className={`text-xs mt-2 text-center font-medium whitespace-nowrap`}
                      style={{ 
                        color: currentStep >= step.number ? '#3C5898' : '#6B7280',
                        fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif"
                      }}
                    >
                      {step.title}
                    </span>
                  </div>
                  
                  {/* Line between steps */}
                  
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