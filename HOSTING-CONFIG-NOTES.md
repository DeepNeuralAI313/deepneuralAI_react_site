# Firebase Hosting Configuration
# This file is already configured in firebase.json

# Additional recommendations for when you add custom domain (deepneuralai.in):

## 1. Force HTTPS (Firebase does this automatically)
## 2. Set up 301 redirects from www to non-www or vice versa

# To redirect www.deepneuralai.in to deepneuralai.in:
# Add this in Firebase Console > Hosting > Advanced settings

# Example firebase.json hosting configuration (already done):
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}

## Security Headers to Add:
# Consider adding these headers in firebase.json for better security:
# - X-Frame-Options: DENY
# - X-Content-Type-Options: nosniff
# - Referrer-Policy: strict-origin-when-cross-origin
# - Permissions-Policy: geolocation=(), microphone=(), camera=()
