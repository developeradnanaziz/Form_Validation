import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const countryCodes = [
  { code: '+91', name: 'India' },
  { code: '+1', name: 'USA' },
  { code: '+44', name: 'UK' },
  { code: '+61', name: 'Australia' },
];

const cities = [
  'Delhi',
  'Mumbai',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Ahmedabad',
];

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneCode, setPhoneCode] = useState(countryCodes[0].code);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [pan, setPan] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [error, setError] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    if (password !== confirmPassword) {
      setError('Password and confirm password do not match');
      return;
    }
    if (!/[!@#$%^&*()<>,.""]/.test(password)) {
      setError('Password must contain at least one special character');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter');
      return;
    }
    console.log({
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
      phoneCode,
      phoneNumber,
      city,
      pan,
      aadhar
    });


    setError('');
    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhoneCode(countryCodes[0].code);
    setPhoneNumber('');
    setCity('');
    setPan('');
    setAadhar('');

    toast.success('Registration Successful ✅!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='bg-white rounded-lg p-6 w-96 shadow-lg'>
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Create an Account</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          
          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            type="text"
            required
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            type="text"
            required
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            type="text"
            required
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <div className="relative">
            <input
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none pr-10"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onFocus={() => setShowPassword(false)}
            />
            <span
              className="absolute right-3 top-2 cursor-pointer text-gray-500"
              onMouseEnter={() => setShowPassword(true)}
              onMouseLeave={() => setShowPassword(false)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <div className="relative">
            <input
              className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none pr-10"
              type={showConfirmPassword ? "text" : "password"}
              required
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              onFocus={() => setShowConfirmPassword(false)}
            />
            <span
              className="absolute right-3 top-2 cursor-pointer text-gray-500"
              onMouseEnter={() => setShowConfirmPassword(true)}
              onMouseLeave={() => setShowConfirmPassword(false)}
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <div className="flex gap-2">
            <select
              className="border border-gray-300 px-2 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={phoneCode}
              onChange={e => setPhoneCode(e.target.value)}
              required
            >
              {countryCodes.map((country, idx) => (
                <option key={idx} value={country.code}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>
            <input
              className="flex-1 border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              type="tel"
              required
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </div>

          <select
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
            value={city}
            onChange={e => setCity(e.target.value)}
          >
            <option value="">Select City</option>
            {cities.map((cityName, idx) => (
              <option key={idx} value={cityName}>{cityName}</option>
            ))}
          </select>

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            type="text"
            required
            placeholder="PAN Number"
            value={pan}
            onChange={e => setPan(e.target.value)}
            maxLength={10}
          />

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            type="text"
            required
            placeholder="Aadhar Number"
            value={aadhar}
            onChange={e => setAadhar(e.target.value)}
            maxLength={12}
          />

          {error && (
            <p className='text-sm text-center font-medium text-red-600'>{error}</p>
          )}

          <button
            className="text-sm px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mt-3"
          >
            Submit
          </button>
        </form>

        <p className="text-xs text-gray-600 mt-4 text-center">
          By registering, you agree to our <span className="text-indigo-600">Terms & Conditions</span> and <span className="text-indigo-600">Privacy Policy</span>.
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
