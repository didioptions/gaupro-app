# GauPro - South Africa's #1 Service Marketplace

GauPro is built with Next.js, Tailwind CSS, and Firebase. It is optimized for deployment on **Firebase App Hosting**.

## 🚀 How to Connect Your HostAfrica Domain

Since GauPro is hosted on Firebase (not Vercel), follow these steps to link your domain:

### 1. Upgrade to the Blaze Plan
Firebase App Hosting requires the **Blaze (Pay-as-you-go) Plan**. 
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Upgrade** at the bottom left.
3. Select the **Blaze Plan**. (Note: Cloud Run has a large free tier, so costs are typically R0 for low-traffic sites).

### 2. In the Firebase Console
1. Navigate to **Build > App Hosting**.
2. Select your active backend.
3. Click on the **Settings** tab and find **Custom Domains**.
4. Click **Add Domain** and enter your domain name (e.g., `gaupro.co.za`).
5. Firebase will provide you with **DNS Records** (typically two `A` records and a `TXT` record for verification).

### 3. In your HostAfrica Client Area
1. Log in to your [HostAfrica account](https://my.hostafrica.co.za/).
2. Go to **Services > My Domains**.
3. Click on your domain and find **DNS Management** or **Manage Nameservers**.
4. **Add the A Records**: Point `@` (your root domain) to the IP addresses provided by Firebase.
5. **Add the TXT Record**: Add the verification string provided by Firebase.
6. **Wait for Propagation**: DNS changes can take anywhere from 1 to 24 hours to take effect globally.

## 🛠️ Project Structure

- `src/app`: Next.js App Router (Pages and Layouts)
- `src/components`: Reusable UI components (ShadCN)
- `src/firebase`: Firebase configuration and custom hooks
- `src/lib`: Data libraries, SEO utils, and service definitions
- `src/ai`: Genkit AI flows for matching and support

## 🔐 Admin Access
To access the Admin Hub (`/pro/admin`), ensure your user document in the `users` collection has the field `role: "admin"`.

---
© 2025 Gaupro (Pty) Ltd. All rights reserved.
