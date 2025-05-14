require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet()); // Set security headers
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://angahub.com', 'https://www.angahub.com'] 
    : 'http://localhost:8080',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

// Apply rate limiting to contact form endpoint
app.use('/api/contact', limiter);

// Parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
}

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Basic validation
    const { fname, lname, email, phone, subject, message, 'g-recaptcha-response': recaptchaResponse } = req.body;
    
    // Verify reCAPTCHA
    if (!recaptchaResponse) {
      return res.status(400).json({
        success: false,
        message: 'reCAPTCHA verification failed. Please try again.'
      });
    }
    
    // Verify with Google reCAPTCHA API
    try {
      const recaptchaVerification = await axios.post(
        'https://www.google.com/recaptcha/api/siteverify',
        null,
        {
          params: {
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: recaptchaResponse
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      
      if (!recaptchaVerification.data.success) {
        return res.status(400).json({
          success: false,
          message: 'reCAPTCHA verification failed. Please try again.'
        });
      }
    } catch (error) {
      console.error('reCAPTCHA verification error:', error);
      return res.status(500).json({
        success: false,
        message: 'Error verifying reCAPTCHA. Please try again.'
      });
    }
    
    if (!fname || !lname || !email || !phone || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }
    
    // Create a beautiful ANGA Hub-themed HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>ANGA Hub - Contact Form Submission</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Montserrat', Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
          }
          
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
          
          .email-header {
            background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
            padding: 30px 20px;
            text-align: center;
          }
          
          .email-header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          
          .email-content {
            padding: 30px;
          }
          
          .intro-text {
            margin-bottom: 25px;
            font-size: 16px;
          }
          
          .contact-details {
            background-color: #f5f5f5;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 25px;
          }
          
          .contact-row {
            margin-bottom: 15px;
          }
          
          .contact-row:last-child {
            margin-bottom: 0;
          }
          
          .contact-label {
            font-weight: 600;
            color: #8A2BE2;
            margin-bottom: 5px;
          }
          
          .contact-value {
            background-color: #ffffff;
            padding: 10px;
            border-radius: 4px;
            border-left: 3px solid #8A2BE2;
          }
          
          .message-box {
            background-color: #ffffff;
            padding: 15px;
            border-radius: 4px;
            border-left: 3px solid #D32F2F;
            white-space: pre-wrap;
          }
          
          .email-footer {
            background-color: #f5f5f5;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #666666;
          }
          
          .divider {
            height: 5px;
            background: linear-gradient(103.88deg, #8A2BE2 0%, #D32F2F 100%);
            margin: 0;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h1>ANGA Hub - New Contact Form Submission</h1>
          </div>
          
          <div class="email-content">
            <p class="intro-text">You have received a new message from the ANGA Hub website contact form:</p>
            
            <div class="contact-details">
              <div class="contact-row">
                <div class="contact-label">Name:</div>
                <div class="contact-value">${fname} ${lname}</div>
              </div>
              
              <div class="contact-row">
                <div class="contact-label">Email:</div>
                <div class="contact-value">${email}</div>
              </div>
              
              <div class="contact-row">
                <div class="contact-label">Phone:</div>
                <div class="contact-value">${phone}</div>
              </div>
              
              <div class="contact-row">
                <div class="contact-label">Subject:</div>
                <div class="contact-value">${subject}</div>
              </div>
            </div>
            
            <div class="contact-row">
              <div class="contact-label">Message:</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          
          <div class="divider"></div>
          
          <div class="email-footer">
            <p>This email was sent from the ANGA Hub website contact form.</p>
            <p>&copy; ${new Date().getFullYear()} ANGA Hub LTD. All Rights Reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Forward to Formspree with the HTML template
    const formspreeResponse = await axios.post(
      process.env.FORMSPREE_ENDPOINT || 'https://formspree.io/f/mgvvnbgl',
      {
        name: `${fname} ${lname}`,
        email,
        phone,
        subject,
        message,
        _subject: `ANGA Hub Contact: ${subject}`,
        _replyto: email,
        _html: htmlTemplate
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );
    
    if (formspreeResponse.status === 200 || formspreeResponse.status === 201) {
      return res.status(200).json({ 
        success: true, 
        message: 'Message sent successfully!' 
      });
    } else {
      throw new Error('Failed to send message');
    }
    
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error, please try again later' 
    });
  }
});

// Catch-all route for SPA in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
