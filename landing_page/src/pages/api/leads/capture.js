// API route for lead capture
// Integrates with Python lead manager system

import axios from 'axios';

export default async function handler(req, res) {
  // Only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, name, source = 'landing_page', utm_source = 'organic' } = req.body;

  // Validation
  if (!email || !name) {
    return res.status(400).json({ message: 'Email and name are required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Call Python lead manager API
    // In production, this would call the actual lead manager endpoint
    // For now, we'll simulate success
    
    const leadData = {
      email,
      name,
      source,
      utm_source,
      timestamp: new Date().toISOString()
    };

    // TODO: Replace with actual lead manager endpoint
    // const response = await axios.post(
    //   `${process.env.LEAD_MANAGER_API}/leads/capture`,
    //   leadData
    // );

    // Simulate storing the lead (in production, this calls Python backend)
    console.log('Lead captured:', leadData);

    return res.status(200).json({
      success: true,
      message: 'Lead captured successfully',
      lead_id: `lead_${Date.now()}`
    });
  } catch (error) {
    console.error('Lead capture error:', error);
    
    return res.status(500).json({
      message: 'Failed to capture lead. Please try again.',
      error: error.message
    });
  }
}
