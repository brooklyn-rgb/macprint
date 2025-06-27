'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Container,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel
} from '@mui/material';
import { ArrowDropDown, Send } from '@mui/icons-material';

export default function HeroSection() {
  const [showMore, setShowMore] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '+27',
    email: '',
    funding: '',
    learningMethod: '',
    location: '',
    qualification: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative flex flex-col md:flex-row gap-4 min-h-[600px] p-6">

      {/* ✅  Background */}
    <div className="absolute inset-0 w-full h-full z-[-10]">
  <Image
    src="/hero.jpg"
    alt="Hero background"
    fill
    priority
    className="object-cover object-center"
    sizes="100vw"
  />
</div>


      {/* ✅ Foreground Content */}
      <Container maxWidth="lg" className="relative z-10 py-20">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Text Content */}
          <div className="flex-1 text-white">
            <Typography variant="h2" component="h1" className="font-bold mb-4 p-12">
              School of Engineering & Science
            </Typography>
            <div className="mb-6">
              <Typography
                variant="body1"
                className={`mb-2 ${showMore ? '' : 'line-clamp-2'}`}
              >
                Our programmes support the most diverse engineering workforce and provide your technical teams and individuals with the highly specialised skills they need.
              </Typography>
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-white hover:text-gray-200 text-sm font-medium focus:outline-none"
              >
                {showMore ? 'Show Less' : 'Show More'}
              </button>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="bg-blue-600 hover:bg-blue-700 text-white uppercase tracking-wide text-4xl font-extrabold py-4 px-6 w-full sm:w-96 mb-24"
            >
              REGISTER NOW
            </Button>
          </div>

          {/* Right Form Card */}
          <div className="w-full md:w-[400px] bg-[rgba(30,58,95,0.6)] border-white bg-opacity-20 text-white backdrop-blur-sm rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={formData.firstName}
                  onChange={handleChange}
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={formData.lastName}
                  onChange={handleChange}
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <TextField
                  name="phone"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={formData.phone}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton edge="start" size="small">
                          <Image
                            src="/hero.jpg"
                            alt="Flag"
                            width={20}
                            height={15}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: { color: 'white' }
                  }}
                  InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                />
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  size="small"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{ style: { color: 'white' } }}
                  InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
                />
              </div>

              {[
                { name: 'funding', label: 'How will you fund your studies?', options: ['Self-funded', 'Employer-sponsored', 'Bursary', 'Student loan'] },
                { name: 'learningMethod', label: 'Select learning method', options: ['Online', 'On Campus', 'Hybrid'] },
                { name: 'location', label: 'Select Location', options: ['Johannesburg', 'Pretoria', 'Cape Town', 'Durban'] },
                { name: 'qualification', label: 'Select Qualification', options: ["Bachelor's Degree", 'Diploma', 'Certificate', 'Short Course'] }
              ].map((field) => (
                <FormControl key={field.name} fullWidth size="small">
                  <InputLabel style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {field.label}
                  </InputLabel>
                  <Select
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleSelectChange}
                    style={{ color: 'white' }}
                    IconComponent={ArrowDropDown}
                    label={field.label}
                  >
                    {field.options.map((opt) => (
                      <MenuItem key={opt} value={opt.toLowerCase().replace(/[^a-z]/g, '-')}>
                        {opt}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ))}

              <TextField
                name="message"
                label="Your Message"
                variant="outlined"
                fullWidth
                size="small"
                multiline
                rows={3}
                value={formData.message}
                onChange={handleChange}
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'rgba(255,255,255,0.7)' } }}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                endIcon={<Send />}
                className="bg-[#5192dc] hover:bg-[#e0e6ed]"
              >
                Submit
              </Button>

              <Typography variant="caption" className="text-white text-xs block mt-2">
                By filling in this form, you agree to receive newsletters and communication from us (POPI Act).{' '}
                <Link href="/" className="font-bold hover:underline">
                  View Our Policy
                </Link>
              </Typography>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

