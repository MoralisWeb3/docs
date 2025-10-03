# API Protection Documentation

## Overview

This documentation site implements multiple layers of protection for backend API routes to prevent unauthorized access and abuse while maintaining functionality for legitimate users.

## Protection Layers

### 1. Edge Middleware (`middleware.ts`)

The middleware runs on Vercel Edge before requests reach API routes and implements:

#### Origin Verification
- Checks `Origin` and `Referer` headers
- Only allows requests from:
  - `https://docs.moralis.com` (production)
  - `https://docs-moralis.vercel.app` (preview deployments)
  - `http://localhost:3000` (local development)
  - `http://localhost:3001` (alternative local port)

#### Bot Detection
Blocks requests from common bot user agents including:
- Generic bots and crawlers
- Command-line tools (curl, wget)
- Programming language HTTP clients (python-requests, java, okhttp)

#### Request Validation
- Requires `X-Requested-With: XMLHttpRequest` header OR
- Requires `Accept: application/json` header

This ensures requests come from legitimate JavaScript fetch/XMLHttpRequest calls, not direct browser navigation or programmatic access.

### 2. Security Headers (`vercel.json`)

Global security headers applied to all API routes:

```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
}
```

### 3. CORS Configuration

Dynamically set based on request origin:
- Only allowed origins receive CORS headers
- Restricts methods to: `GET, POST, OPTIONS`
- Allows headers: `Content-Type, Authorization, X-Requested-With`

## Protected Paths

The following API paths are protected by middleware:

- `/api/search/:path*` - Search functionality
- `/api/gpt/:path*` - GPT/AI endpoints
- `/api/chat/:path*` - Chat functionality
- `/api/assistant/:path*` - Assistant endpoints

## Response Codes

| Code | Reason | Description |
|------|--------|-------------|
| 200 | Success | Request passed all checks |
| 400 | Bad Request | Missing required headers |
| 401 | Unauthorized | Authentication failed |
| 403 | Forbidden | Bot detected or invalid origin |

## Testing

### Legitimate Request (Allowed)
```javascript
// From docs.moralis.com
fetch('/api/search', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  body: JSON.stringify({ query: 'test' })
})
```

### Direct Access (Blocked)
```bash
# Will be blocked due to missing origin/referer
curl https://docs.moralis.com/api/search
```

### Bot Access (Blocked)
```bash
# Will be blocked due to bot user agent
curl -H "User-Agent: python-requests/2.28.0" https://docs.moralis.com/api/search
```

## Monitoring

The middleware logs blocked requests with details:
- Path accessed
- Origin/Referer
- User Agent (truncated to 100 chars)
- IP address

Check Vercel logs or set up log drains to monitor:
- Failed access attempts
- Bot detection triggers
- Suspicious traffic patterns

## Additional Vercel Firewall Features

For production, consider enabling additional Vercel features:

### 1. IP Allow/Block Lists
- Block specific IPs or CIDR ranges
- Whitelist known good IPs

### 2. Rate Limiting
- Configure request rate limits per IP
- Prevent DDoS and abuse

### 3. Attack Challenge Mode
- Presents challenges to suspicious requests
- Automatically validates legitimate users

### 4. WAF Rules
- Custom security rules
- Managed rulesets for common vulnerabilities

## Best Practices

1. **Monitor Logs**: Regularly check blocked requests to ensure legitimate users aren't affected
2. **Update Allow Lists**: Keep allowed origins current as deployment URLs change
3. **Review Bot Patterns**: Update bot detection patterns as new scrapers emerge
4. **Test Changes**: Always test middleware changes in preview deployments first
5. **Document Exceptions**: If adding exceptions to rules, document the reason

## Troubleshooting

### Users Report API Errors

1. Check if their origin is in `ALLOWED_ORIGINS`
2. Verify they're sending proper headers
3. Check Vercel logs for specific error messages

### API Works Locally But Not in Production

1. Ensure production domain is in `ALLOWED_ORIGINS`
2. Verify Vercel environment variables are set
3. Check that middleware is deployed with the application

### Preview Deployments Have Issues

Preview deployment URLs are automatically allowed via the pattern:
- `.*[.]vercel[.]app$`

If specific preview URLs need allowlisting, add them explicitly.

## Security Considerations

### Current Limitations

1. **IP Spoofing**: Origin headers can be forged in some scenarios
2. **DDOS**: Middleware alone doesn't prevent large-scale DDOS (use Vercel WAF)
3. **User Agent Spoofing**: Bots can fake legitimate user agents

### Recommended Enhancements

1. Add rate limiting per IP address
2. Implement API key authentication for sensitive endpoints
3. Use Vercel WAF for additional protection
4. Set up alerting for unusual traffic patterns
5. Consider adding CAPTCHA for high-risk endpoints

## Configuration Updates

To modify protection settings:

1. Edit `middleware.ts` for:
   - Adding/removing allowed origins
   - Updating bot patterns
   - Changing protected paths

2. Edit `vercel.json` for:
   - Global security headers
   - Function timeouts
   - Redirects and rewrites

3. Use Vercel Dashboard for:
   - IP block/allow lists
   - WAF rules
   - Rate limiting
   - Attack challenge mode

## Support

For issues or questions about API protection:
1. Check Vercel logs in the dashboard
2. Review middleware logic in `middleware.ts`
3. Test with browser dev tools network tab
4. Consult Vercel documentation on security features
