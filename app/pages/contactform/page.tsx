// components/ContactForm.tsx
"use client";

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    surname: '',
    number: '+27',
    email: '',
    custentity_funded_by: '',
    learning_method: '',
    campus: '',
    qualification: '',
    msg: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  return (
    <div className="max-w-8xl mx-auto px-0 py-0 text-white">
      <div className="bg-[#901a1a] text-white p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-lg flex items-center mb-1 text-white">
                <FaPhone className="mr-2" /> STORE NUMBER
              </h2>
              <div className="ml-8 text-white">
                <p>
                  <strong>JHB</strong>{' '}
                  <a href="tel:+27 (0)78 151 5716" className="hover:underline text-white">
                    +27 (0) 78 151 716
                  </a>
                  <br />
                  <strong>PHONE</strong>{' '}
                  <a href="tel:+27 78 151 5716" className="hover:underline text-white">
                    078 151 5716
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-lg flex items-center mb-1 text-white">
                <FaEnvelope className="mr-2" /> EMAIL
              </h2>
              <div className="ml-8 text-white justify-start">macprinters4@gmail.com</div>
            </div>

            <div>
              <h2 className="font-bold text-lg flex items-center mb-1 text-white">
                <FaMapMarkerAlt className="mr-2" /> ADDRESS
              </h2>
              <div className="ml-8 text-white">
                <p>62 Charl Cilliers St, Alberton, Johannseburg 1449</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row mt-4 gap-4 flex-wrap md:items-center">
              <h2 className="flex font-bold text-lg mr-0 mb-1 md:mb-0 text-white">
                <span>
                  <FaUser className="mr-2" />
                </span>
                <span>Do you have questions or need assistance?</span>
              </h2>
              <div>
                <button
                  type="button"
                  className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors"
                  title="Contact Us"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-white border-white">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="first_name"
                  placeholder="First Name"
                  className="w-full bg-transparent border text-sm rounded p-2 h-9"
                  value={formData.first_name}
                  onChange={handleChange}
                  name="first_name"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="surname"
                  placeholder="Last Name"
                  className="w-full bg-transparent border text-sm rounded p-2 h-9"
                  value={formData.surname}
                  onChange={handleChange}
                  name="surname"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="flex items-center bg-transparent border border-white text-white text-sm rounded p-2 h-9">
                <span className="mr-2">🇿🇦</span>
                <input
                  type="tel"
                  id="number"
                  placeholder="Enter phone number"
                  className="w-full bg-transparent outline-none"
                  value={formData.number}
                  onChange={handleChange}
                  name="number"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="email@example.com"
                  className="w-full bg-transparent border border-white text-white text-sm rounded p-2 h-9"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <select
                  id="custentity_funded_by"
                  className="w-full bg-transparent border border-gray-300 text-white text-sm rounded p-2 h-9"
                  value={formData.custentity_funded_by}
                  onChange={handleChange}
                  name="custentity_funded_by"
                  required
                >
                  <option value="">How to make order?</option>
                  <option value="Self-funded">Express Order</option>
                 
                </select>
              </div>
              <div>
                <select
                  id="learning_method"
                  className="w-full bg-transparent border border-gray-300 text-white text-sm rounded p-2 h-9"
                  value={formData.learning_method}
                  onChange={handleChange}
                  name="learning_method"
                  required
                >
                  <option value="">Graphics</option>
                  <option value="Online">Web Development</option>
                
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div>
                <select
                  id="campus"
                  className="w-full bg-transparent border border-gray-300 text-white text-sm rounded p-2 h-9"
                  value={formData.campus}
                  onChange={handleChange}
                  name="campus"
                  required
                >
                  <option value="">Select Location</option>
                  <option value="Johannesburg">Johannesburg</option>                 
                  <option value="Pretoria">Pretoria</option>
                </select>
              </div>
              <div>
                <select
                  id="qualification"
                  className="w-full bg-transparent border border-gray-300 text-white text-sm rounded p-2 h-9"
                  value={formData.qualification}
                  onChange={handleChange}
                  name="qualification"
                  required
                >
                  <option value="">Select Delivery</option>
                  <option value="Pickup">Pickup</option>
                  <option value="Drop Off">Drop Off</option>                  
                </select>
              </div>
            </div>

            <div>
              <textarea
                id="msg"
                placeholder="Your Message"
                className="w-full bg-transparent border border-gray-300 text-white text-sm rounded p-2 min-h-[100px]"
                value={formData.msg}
                onChange={handleChange}
                name="msg"
              />
            </div>

            {/* Hidden fields */}
            <input type="hidden" name="event_id" value="" />
            <input type="hidden" name="campaignevent" value="" />
            <input type="hidden" name="utm_source" value="" />
            <input type="hidden" name="utm_medium" value="" />
            <input type="hidden" name="utm_campaign" value="" />
            <input type="hidden" name="utm_content" value="" />
            <input type="hidden" name="utm_term" value="" />
            <input type="hidden" name="fc_campaign" value="General" />
            <input type="hidden" name="fc_channel" value="Paid Search" />
            <input type="hidden" name="fc_content" value="General Studies" />
            <input type="hidden" name="fc_medium" value="cpc" />
            <input type="hidden" name="fc_referrer" value="https://www.google.com/" />
            <input type="hidden" name="fc_source" value="google" />
            <input type="hidden" name="fc_term" value="educor" />
            <input
              type="hidden"
              name="fc_landing"
              value="https://aie.ac/?utm_campaign=General&amp;utm_source=google&amp;utm_medium=cpc&amp;utm_content=General Studies&amp;utm_term=educor&amp;gad_source=1&amp;gad_campaignid=17405251652&amp;gbraid=0AAAAADPz8YEo6aL0B24BTRdp09ot_bdKe&amp;gclid=CjwKCAjwx8nCBhAwEiwA_z__05AVOpF-_qxRD57nCWb31Y9dGCX"
            />
            <input type="hidden" name="lc_campaign" value="(not set)" />
            <input type="hidden" name="lc_channel" value="Organic Search" />
            <input type="hidden" name="lc_content" value="(not set)" />
            <input type="hidden" name="lc_medium" value="organic" />
            <input type="hidden" name="lc_referrer" value="https://www.google.com/" />
            <input type="hidden" name="lc_source" value="google" />
            <input type="hidden" name="lc_term" value="(not provided)" />
            <input type="hidden" name="lc_landing" value="https://aie.ac/" />
            <input type="hidden" name="OS" value="Windows 10" />
            <input type="hidden" name="GA_Client_ID" value="996351591.1750244267" />
            <input
              type="hidden"
              name="gclid"
              value="CjwKCAjwx8nCBhAwEiwA_z__05AVOpF-_qxRD57nCWb31Y9dGCX9OOryHKmR1Rl7Nz4eOtFo2UxH0BoCPbYQAvD_BwE"
            />
            <input
              type="hidden"
              name="all_traffic_sources"
              value="google/cpc, google/organic, google/organic, google/organic, (direct)/(none), (direct)/(none)"
            />
            <input type="hidden" name="browser" value="Chrome 137.0.0.0" />
            <input type="hidden" name="city" value="Pretoria" />
            <input type="hidden" name="country" value="South Africa" />
            <input type="hidden" name="GA_Session_ID" value="1750572325" />
            <input type="hidden" name="device" value="desktop" />
            <input type="hidden" name="page_visits" value="9" />
            <input
              type="hidden"
              name="pages_visited_list"
              value="/page/5_About Us/Home/schoolLanding/6_School of Engineering &amp; Science/Home"
            />
            <input type="hidden" name="region" value="Gauteng" />
            <input type="hidden" name="time_zone" value="Africa/Johannesburg" />
            <input type="hidden" name="time_passed" value="21571044" />
            <input type="hidden" name="latitude" value="-25.757" />
            <input type="hidden" name="longitude" value="28.1443" />

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center gap-2"
              title="Submit"
            >
              <span>Submit</span>
              <FaPaperPlane />
            </button>

            <p className="text-xs text-white font-sans">
              By filling in this form, you agree to receive newsletters and communication from us (POPI Act).{' '}
              <a href="/" className="font-bold">
                View Our Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
