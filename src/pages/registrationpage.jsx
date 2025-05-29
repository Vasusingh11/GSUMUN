import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Info, AlertCircle } from 'lucide-react';

const RegistrationPage = () => {
  // State for multi-step form
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // School information
    schoolName: '',
    schoolAddress: '',
    schoolPhone: '',
    
    // Faculty advisor information
    advisorName: '',
    advisorEmail: '',
    advisorPhone: '',
    advisorEmergencyContact: '',
    
    // Delegation information
    delegationSize: '',
    committeePreferences: {},
    
    // Payment information
    paymentMethod: '',
    earlyRegistration: false,
    
    // Additional information
    specialAccommodations: '',
    previousExperience: '',
    hearAbout: '',
    
    // Terms and conditions
    termsAgreed: false
  });
  
  // State for form errors
  const [errors, setErrors] = useState({});
  
  // Available committees data
  const availableCommittees = [
    { id: 'unsc', name: 'UN Security Council', seats: 15, available: 7, level: 'Advanced' },
    { id: 'sochum', name: 'Social, Cultural & Humanitarian Committee', seats: 30, available: 16, level: 'Beginner' },
    { id: 'ecosoc', name: 'Economic and Social Council', seats: 25, available: 12, level: 'Intermediate' },
    { id: 'unep', name: 'UN Environment Programme', seats: 30, available: 21, level: 'Beginner' },
    { id: 'hsc', name: 'Historical Security Council 1994', seats: 15, available: 9, level: 'Advanced' },
    { id: 'who', name: 'World Health Organization', seats: 25, available: 18, level: 'Intermediate' },
    { id: 'g20', name: 'G20 Finance Ministers', seats: 20, available: 14, level: 'Advanced' },
    { id: 'unhrc', name: 'UN Human Rights Council', seats: 30, available: 22, level: 'Intermediate' },
    { id: 'disec', name: 'Disarmament and International Security', seats: 30, available: 25, level: 'Beginner' },
    { id: 'iaea', name: 'International Atomic Energy Agency', seats: 20, available: 17, level: 'Intermediate' }
  ];
  
  // Steps configuration
  const steps = [
    { number: 1, title: 'School Information' },
    { number: 2, title: 'Advisor Information' },
    { number: 3, title: 'Delegation Size' },
    { number: 4, title: 'Committee Preferences' },
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
  
  // Handle committee preference selection
  const handleCommitteeChange = (committeeId, count) => {
    // Ensure count is a number and not less than 0
    const newCount = Math.max(0, parseInt(count) || 0);
    
    setFormData({
      ...formData,
      committeePreferences: {
        ...formData.committeePreferences,
        [committeeId]: newCount
      }
    });
  };
  
  // Validate current step
  const validateStep = () => {
    const newErrors = {};
    
    // Validate based on current step
    if (currentStep === 1) {
      if (!formData.schoolName) newErrors.schoolName = 'School name is required';
      if (!formData.schoolAddress) newErrors.schoolAddress = 'School address is required';
      if (!formData.schoolPhone) newErrors.schoolPhone = 'School phone number is required';
    } 
    else if (currentStep === 2) {
      if (!formData.advisorName) newErrors.advisorName = 'Advisor name is required';
      if (!formData.advisorEmail) newErrors.advisorEmail = 'Advisor email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.advisorEmail)) newErrors.advisorEmail = 'Email is invalid';
      if (!formData.advisorPhone) newErrors.advisorPhone = 'Advisor phone number is required';
      if (!formData.advisorEmergencyContact) newErrors.advisorEmergencyContact = 'Emergency contact is required';
    }
    else if (currentStep === 3) {
      if (!formData.delegationSize) newErrors.delegationSize = 'Delegation size is required';
      else if (isNaN(formData.delegationSize) || parseInt(formData.delegationSize) <= 0) {
        newErrors.delegationSize = 'Please enter a valid number of delegates';
      }
    }
    else if (currentStep === 4) {
      // Validate committee preferences
      const totalSelected = Object.values(formData.committeePreferences).reduce((sum, count) => sum + count, 0);
      if (totalSelected === 0) {
        newErrors.committeePreferences = 'Please select at least one committee preference';
      }
      else if (totalSelected !== parseInt(formData.delegationSize || 0)) {
        newErrors.committeePreferences = `You've selected ${totalSelected} slots, but your delegation size is ${formData.delegationSize}`;
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
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateStep()) {
      // In a real app, this would submit the data to a server
      console.log('Submitting form data:', formData);
      
      // Display success message or redirect to confirmation page
      alert('Registration submitted successfully! You will receive a confirmation email shortly.');
    }
  };
  
  // Calculate total fees
  const calculateFees = () => {
    const baseRate = formData.earlyRegistration ? 25 : 35; // per delegate
    const delegateCount = parseInt(formData.delegationSize || 0);
    
    return {
      delegateFee: baseRate * delegateCount,
      schoolFee: 50, // Fixed school registration fee
      total: (baseRate * delegateCount) + 50
    };
  };
  
  // Get total selected delegates across all committees
  const getTotalSelectedDelegates = () => {
    return Object.values(formData.committeePreferences).reduce((sum, count) => sum + parseInt(count || 0), 0);
  };
  
  // Render form step content based on current step
  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">School Information</h3>
            
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">
                  School Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="schoolName"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.schoolName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.schoolName && (
                  <p className="mt-1 text-sm text-red-500">{errors.schoolName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="schoolAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  School Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="schoolAddress"
                  name="schoolAddress"
                  rows="3"
                  value={formData.schoolAddress}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.schoolAddress ? 'border-red-500' : 'border-gray-300'}`}
                ></textarea>
                {errors.schoolAddress && (
                  <p className="mt-1 text-sm text-red-500">{errors.schoolAddress}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="schoolPhone" className="block text-sm font-medium text-gray-700 mb-1">
                  School Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="schoolPhone"
                  name="schoolPhone"
                  value={formData.schoolPhone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.schoolPhone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.schoolPhone && (
                  <p className="mt-1 text-sm text-red-500">{errors.schoolPhone}</p>
                )}
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Faculty Advisor Information</h3>
            
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
                  className={`w-full px-3 py-2 border rounded-md ${errors.advisorName ? 'border-red-500' : 'border-gray-300'}`}
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
                  className={`w-full px-3 py-2 border rounded-md ${errors.advisorEmail ? 'border-red-500' : 'border-gray-300'}`}
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
                  className={`w-full px-3 py-2 border rounded-md ${errors.advisorPhone ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.advisorPhone && (
                  <p className="mt-1 text-sm text-red-500">{errors.advisorPhone}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="advisorEmergencyContact" className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Contact <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="advisorEmergencyContact"
                  name="advisorEmergencyContact"
                  value={formData.advisorEmergencyContact}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${errors.advisorEmergencyContact ? 'border-red-500' : 'border-gray-300'}`}
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
            <h3 className="text-xl font-bold">Delegation Size</h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Please enter the total number of delegates from your school that will be participating in GSUMUN 2025.
                    In the next step, you'll be able to allocate your delegates to specific committees.
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
                className={`w-full sm:w-1/3 px-3 py-2 border rounded-md ${errors.delegationSize ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.delegationSize && (
                <p className="mt-1 text-sm text-red-500">{errors.delegationSize}</p>
              )}
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                Registration fee: ${formData.earlyRegistration ? '25' : '35'} per delegate + $50 school registration fee
              </p>
              {formData.delegationSize && !isNaN(formData.delegationSize) && parseInt(formData.delegationSize) > 0 && (
                <p className="mt-2 font-medium">
                  Estimated total: ${calculateFees().total} 
                  ({parseInt(formData.delegationSize)} delegates × ${formData.earlyRegistration ? '25' : '35'} + $50 school fee)
                </p>
              )}
            </div>
            
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="earlyRegistration"
                  checked={formData.earlyRegistration}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Apply for early registration discount ($25/delegate instead of $35/delegate)
                </span>
              </label>
              <p className="mt-1 text-sm text-gray-500 pl-6">
                Early registration deadline: September 30, 2025
              </p>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Committee Preferences</h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Please allocate your {formData.delegationSize} delegates among the committees below.
                    The total number of selected committee slots should match your delegation size.
                    Currently selected: <strong>{getTotalSelectedDelegates()}</strong> of {formData.delegationSize} delegates
                  </p>
                </div>
              </div>
            </div>
            
            {errors.committeePreferences && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      {errors.committeePreferences}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Committee
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Level
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Available
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Delegates
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {availableCommittees.map((committee) => (
                    <tr key={committee.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{committee.name}</div>
                        <div className="text-sm text-gray-500">{committee.id.toUpperCase()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${committee.level === 'Beginner' ? 'bg-green-100 text-green-800' : 
                            committee.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' : 
                            'bg-purple-100 text-purple-800'}`}
                        >
                          {committee.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {committee.available} of {committee.seats}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <input
                          type="number"
                          min="0"
                          max={committee.available}
                          value={formData.committeePreferences[committee.id] || ''}
                          onChange={(e) => handleCommitteeChange(committee.id, e.target.value)}
                          className="w-16 px-2 py-1 border border-gray-300 rounded-md"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Payment Information</h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Please select your preferred payment method. Payment will be due within 14 days of registration.
                    You will receive an invoice and payment instructions by email.
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
                    value="creditCard"
                    checked={formData.paymentMethod === 'creditCard'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Credit Card</span>
                </label>
                
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="schoolPurchaseOrder"
                    checked={formData.paymentMethod === 'schoolPurchaseOrder'}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">School Purchase Order</span>
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
                  <span className="text-gray-600">School Registration Fee:</span>
                  <span className="font-medium">${calculateFees().schoolFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delegate Fees ({formData.delegationSize} × ${formData.earlyRegistration ? '25' : '35'}):</span>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Please list any special accommodations, dietary restrictions, or accessibility needs."
              ></textarea>
            </div>
          </div>
        );
        
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Review & Submit</h3>
            
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
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">School Address</p>
                    <p className="font-medium">{formData.schoolAddress}</p>
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
                  <div>
                    <p className="text-sm text-gray-500">Emergency Contact</p>
                    <p className="font-medium">{formData.advisorEmergencyContact}</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-lg mb-3">Delegation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Delegation Size</p>
                    <p className="font-medium">{formData.delegationSize} delegates</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Registration Type</p>
                    <p className="font-medium">{formData.earlyRegistration ? 'Early Registration' : 'Regular Registration'}</p>
                  </div>
                </div>
                
                <h5 className="font-medium mb-2">Committee Allocations</h5>
                <ul className="space-y-1">
                  {Object.entries(formData.committeePreferences)
                    .filter(([_, count]) => parseInt(count) > 0)
                    .map(([committeeId, count]) => {
                      const committee = availableCommittees.find(c => c.id === committeeId);
                      return (
                        <li key={committeeId} className="flex justify-between">
                          <span>{committee.name}</span>
                          <span className="font-medium">{count} {parseInt(count) === 1 ? 'delegate' : 'delegates'}</span>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-lg mb-3">Payment</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p className="font-medium">
                      {formData.paymentMethod === 'creditCard' ? 'Credit Card' : 
                       formData.paymentMethod === 'schoolPurchaseOrder' ? 'School Purchase Order' : 
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
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold mb-4">Registration</h1>
          <p className="text-xl max-w-3xl mb-8">
            Register your school delegation for GSUMUN 2025. Complete the form below to secure your spot at our conference.
          </p>
          
          {/* Registration Deadline Notice */}
          <div className="bg-white/10 rounded-lg p-4 inline-block">
            <p className="font-medium">Early Registration Deadline: September 30, 2025</p>
            <p>Regular Registration Deadline: October 25, 2025</p>
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
                      className={`absolute top-1/2 right-0 w-full h-0.5 -translate-y-1/2 
                        ${currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'}`}
                    ></div>
                  )}
                  
                  {/* Step bubble */}
                  <div className="relative flex flex-col items-center">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center z-10
                        ${currentStep > step.number 
                          ? 'bg-blue-600 text-white' 
                          : currentStep === step.number 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-gray-200 text-gray-600'}`}
                    >
                      {currentStep > step.number ? (
                        <Check size={16} />
                      ) : (
                        <span>{step.number}</span>
                      )}
                    </div>
                    <span 
                      className={`text-xs mt-2 ${
                        currentStep >= step.number ? 'text-blue-600 font-medium' : 'text-gray-500'
                      }`}
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
            <form onSubmit={handleSubmit}>
              {/* Step Content */}
              {renderStepContent()}
              
              {/* Navigation Buttons */}
              <div className="mt-10 flex justify-between">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
                  >
                    <ChevronLeft size={16} />
                    <span>Previous</span>
                  </button>
                )}
                
                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto flex items-center gap-1 px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition"
                  >
                    <span>Next</span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition"
                  >
                    Submit Registration
                  </button>
                )}
              </div>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">Need help with registration?</p>
            <p className="font-medium">Contact us at <a href="mailto:registration@gsumun.org" className="text-blue-600 hover:text-blue-800">registration@gsumun.org</a> or call (404) 555-1234</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">What is the registration fee?</h3>
              <p className="text-gray-600">
                Registration costs $35 per delegate plus a $50 school registration fee. 
                Schools that register before September 30, 2025 qualify for the early registration rate of $25 per delegate.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">What is the cancellation policy?</h3>
              <p className="text-gray-600">
                Cancellations made 30+ days before the conference receive a full refund minus a $50 processing fee.
                Cancellations within 30 days receive a 50% refund. No refunds are given for cancellations within 14 days of the conference.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">How do committee assignments work?</h3>
              <p className="text-gray-600">
                Schools select their committee preferences during registration. Assignments are confirmed once payment is received.
                Country assignments are distributed approximately 8 weeks before the conference.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-bold text-lg mb-3">When are position papers due?</h3>
              <p className="text-gray-600">
                Position papers must be submitted by October 15, 2025. Late submissions will be accepted until October 25, 
                but will not be considered for position paper awards.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="/faqs" className="text-blue-600 hover:text-blue-800 font-medium">
              View all FAQs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;