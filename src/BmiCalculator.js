import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      setError('Please enter both weight and height.');
      return;
    }

    const heightInMeters = height / 100; // Convert cm to meters
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    setBmiResult(bmi);
    setError('');

    // Determine BMI category
    if (bmi < 18.5) {
      setCategory('Underweight');
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setCategory('Normal weight');
    } else if (bmi >= 25 && bmi <= 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xs mx-auto">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">BMI Calculator</h2>
      <div className="mb-4">
        <label htmlFor="weight" className="block text-sm text-gray-700">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => handleInputChange(e, setWeight)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter weight in kg"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="height" className="block text-sm text-gray-700">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => handleInputChange(e, setHeight)}
          className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter height in cm"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 mb-4">{error}</p>
      )}

      <button
        onClick={calculateBMI}
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Calculate BMI
      </button>

      {bmiResult && (
        <div className="mt-6 text-center text-lg">
          <p className="font-semibold text-gray-700">Your BMI: {bmiResult}</p>
          <p className="text-sm text-gray-600">{category}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;