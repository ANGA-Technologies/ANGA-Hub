# ANGA Hub Backend Server

This is the secure backend server for handling contact form submissions for the ANGA Hub website.

## Features

- Secure form submission handling
- Rate limiting to prevent abuse
- CORS protection
- Security headers with Helmet
- Input validation
- Error handling

## Setup Instructions

1. Install dependencies:
   ```
   cd server
   npm install
   ```

2. Configure environment variables:
   - The `.env` file contains configuration settings
   - In production, make sure to set `NODE_ENV=production`
   - Update the `FORMSPREE_ENDPOINT` if needed

3. Start the server:
   - Development mode: `npm run dev`
   - Production mode: `npm start`

## API Endpoints

### POST /api/contact
Handles contact form submissions securely.

**Required fields:**
- fname (First name)
- lname (Last name)
- email (Email address)
- phone (Phone number)
- subject (Inquiry subject)
- message (Message content)

## Security Features

1. **Rate Limiting**: Prevents abuse by limiting requests from the same IP
2. **CORS Protection**: Only allows requests from whitelisted domains
3. **Security Headers**: Implemented via Helmet
4. **Input Validation**: Validates all form inputs before processing
5. **Error Handling**: Proper error handling to prevent information leakage

## Integration with Frontend

The Vue.js frontend has been updated to send form submissions to this backend server instead of directly to third-party services, enhancing security and preventing potential penetration attempts.
