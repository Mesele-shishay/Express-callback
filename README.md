# Express Chapa Application

A production-ready Express.js application with proper error handling, security headers, and health checks.

## Features

- ✅ Production-ready error handling
- ✅ Security headers with Helmet
- ✅ CORS configuration
- ✅ Health check endpoint
- ✅ Environment variable support
- ✅ Request size limits
- ✅ Proper HTTP status codes

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Environment
NODE_ENV=production

# Server Configuration
PORT=3000

# CORS Configuration
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

## API Endpoints

### Health Check

- **GET** `/health` - Returns server status and uptime

### Callback

- **GET** `/callback` - Handles callback requests with query parameters

## Troubleshooting Bad Gateway Errors

### Common Causes and Solutions:

1. **Port Configuration**

   - Ensure your production environment sets the correct `PORT` environment variable
   - The application defaults to port 3000 if no PORT is specified

2. **Process Management**

   - Use a process manager like PM2 in production:

   ```bash
   npm install -g pm2
   pm2 start index.js --name "express-chapa"
   ```

3. **Reverse Proxy Configuration**

   - If using Nginx, ensure proper proxy configuration:

   ```nginx
   location / {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_set_header X-Real-IP $remote_addr;
       proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
       proxy_set_header X-Forwarded-Proto $scheme;
       proxy_cache_bypass $http_upgrade;
   }
   ```

4. **Firewall Settings**

   - Ensure the application port is open in your firewall
   - Check if your hosting provider blocks certain ports

5. **Memory and Resource Limits**
   - Monitor server resources (CPU, memory)
   - Consider using clustering for better performance

## Health Check

The `/health` endpoint returns:

```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456,
  "environment": "production"
}
```

## Security Features

- Helmet.js for security headers
- CORS protection
- Request size limits
- Error message sanitization in production
- Proper HTTP status codes

## Deployment Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure `PORT` environment variable
- [ ] Set up `ALLOWED_ORIGINS` for CORS
- [ ] Use a process manager (PM2, Forever, etc.)
- [ ] Set up reverse proxy (Nginx, Apache)
- [ ] Configure SSL/TLS certificates
- [ ] Set up monitoring and logging
- [ ] Test health check endpoint
