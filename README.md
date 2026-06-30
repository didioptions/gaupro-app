# GauPro - South Africa's #1 Service Marketplace

GauPro is built with Next.js, Tailwind CSS, and Firebase. It is optimized for deployment on **Firebase App Hosting**.

## 🚀 Deployment Checklist

### 1. Upgrade to the Blaze Plan
Firebase App Hosting requires the **Blaze (Pay-as-you-go) Plan** to enable Cloud Run resources. 
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Upgrade** at the bottom left.
3. Select **Blaze Plan**. 

**Cost Note:** Google Cloud Run has a 2-million-request free tier. For GauPro, your monthly hosting cost will be **R0** until you reach high traffic levels.

### 2. Connect Your HostAfrica Domain
1. In the Firebase Console, navigate to **Build > App Hosting**.
2. Select your active backend and click the **Settings** tab.
3. Find **Custom Domains** and click **Add Domain**.
4. Log in to your [HostAfrica account](https://my.hostafrica.co.za/) and add the **A Records** and **TXT Record** provided by Firebase.

### 3. Estimated Monthly Costs (ZAR)
| Traffic | Cost Estimate |
| :--- | :--- |
| 100 - 1,000 visitors | R0.00 |
| 5,000 visitors | R0.00 - R20.00 |
| 10,000 visitors | R10.00 - R60.00 |

## 🛠️ Project Management

- **Admin Hub**: Access at `/pro/admin` (Requires `role: "admin"` in your user document).
- **Marketplace Seeding**: Go to `/pro/admin/seed-pros` to deploy real business inventory.
- **Service Requests**: Handled via dual-write collections `/leads_public` (metadata) and `/leads_private` (PII) for maximum security and SEO.

---
© 2025 Gaupro (Pty) Ltd. All rights reserved.