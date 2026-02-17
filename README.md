<div align="center">

# E M U K O K O

### Where Technology Meets Community Growth

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel)](https://emukoko.vercel.app)

**[Live Site](https://emukoko.vercel.app)** | **[SRS Document](EMukoko_SRS_Document.md)**

---

</div>

## About

**Emukoko Innovations** is a Zimbabwean AgriTech startup building a smart beekeeping platform that integrates Internet of Things (IoT) monitoring, Artificial Intelligence (AI) diagnostics, and a digital marketplace. The platform empowers rural beekeeping communities with data-driven tools to increase honey production, ensure product quality, and access fair markets directly.

The name *Emukoko* reflects our deep connection to community and growth — the foundation of everything we build.

---

## The Problem

Beekeeping in rural Zimbabwe faces compounding challenges that limit its potential as a sustainable livelihood:

| Challenge | Impact |
|:--|:--|
| **Colony Loss** | Up to 40% of colonies lost annually from undetected pests, diseases, and environmental shifts |
| **Market Access** | Farmers depend on middlemen who absorb large margins, reducing farmer earnings |
| **Knowledge Gaps** | New beekeepers lack structured training and mentorship resources |
| **Quality Trust** | Consumers cannot verify honey purity or origin, enabling adulterated products in the market |

---

## The Solution

Emukoko addresses these challenges through a unified platform with five core pillars:

```
  Smart Hive IoT          AI Diagnostics          Digital Marketplace
  ---------------         ---------------         -------------------
  Temperature             Pest Detection          Direct-to-Consumer
  Humidity                Disease Alerts          QR Traceability
  Weight                  Yield Forecasting       Fair Pricing
  Vibration               Maintenance AI          Mobile Payments
```

```
  Learning Chartboard          Community Model
  ---------------------        ----------------------
  Best Practices               Partner & Profit Cycle
  Video Guides                 Beehive Loan Program
  Expert Mentorship            Revenue Reinvestment
```

---

## Partner & Profit Model

The platform operates on a circular five-phase model that creates sustainable growth for all stakeholders:

```
    [1] Smart Hive Installation
             |
             v
    [2] AI-Powered Monitoring
             |
             v
    [3] Optimized Harvesting
             |
             v
    [4] Marketplace & Traceability
             |
             v
    [5] Community Reinvestment ---> loops back to [1]
```

**Phase 1** — IoT-enabled hives installed at no upfront cost via beehive loan program  
**Phase 2** — AI continuously monitors sensor data and camera images for threats  
**Phase 3** — Data-driven insights optimize harvest timing and verify quality  
**Phase 4** — Verified honey sold on the marketplace with QR-code traceability  
**Phase 5** — Profits flow back to fund new installations and training programs  

---

## Platform Architecture

```
+-----------------------------------------------------------------+
|                    PRESENTATION LAYER                            |
|  Next.js 16  |  Tailwind CSS 4  |  Responsive Mobile-First UI  |
+-----------------------------------------------------------------+
         |                    |                    |
+-----------------------------------------------------------------+
|                    APPLICATION LAYER                             |
|  RESTful API  |  JWT Auth  |  IoT Ingestion  |  AI Pipeline    |
+-----------------------------------------------------------------+
         |                    |                    |
+-----------------------------------------------------------------+
|                       DATA LAYER                                |
|  PostgreSQL  |  TimescaleDB (IoT)  |  Cloud Object Storage     |
+-----------------------------------------------------------------+
```

---

## Website Pages

The Phase 1 public-facing website includes the following pages:

| Page | Route | Description |
|:--|:--|:--|
| **Home** | `/` | Hero section, value proposition, ecosystem overview, live hive demo, gallery |
| **About Us** | `/about` | Mission, vision, values, team profiles, impact goals |
| **How It Works** | `/how-it-works` | 5-phase Partner & Profit model explanation, FAQ |
| **Technology** | `/technology` | IoT sensor details, AI features, data flow, QR traceability, tech stack |
| **Contact** | `/contact` | Contact form with role selector, email and location info |

---

## Technology Stack

| Layer | Technology | Purpose |
|:--|:--|:--|
| Frontend | Next.js (React), TypeScript | Server-side rendering, static generation, type safety |
| Styling | Tailwind CSS 4 | Utility-first responsive design system |
| Backend *(planned)* | Node.js / Express | RESTful API, business logic, authentication |
| Database *(planned)* | PostgreSQL + TimescaleDB | Relational data + time-series IoT sensor storage |
| IoT Protocol *(planned)* | MQTT + HTTP fallback | Low-bandwidth sensor data transmission |
| AI/ML *(planned)* | TensorFlow Lite / ONNX | Pest detection, yield forecasting, predictive maintenance |
| Payments *(planned)* | Paynow, EcoCash, Stripe | Regional mobile money + international card processing |
| Hosting | Vercel | Frontend deployment with edge network |
| Monitoring *(planned)* | Sentry, UptimeRobot | Error tracking and uptime monitoring |

---

## Development Phases

The project follows a 12-week Agile development timeline:

```
Week  1-4    Phase 1    Basic Website Structure
              |          Static pages, responsive design, SEO,
              |          backend scaffolding, auth API, staging deploy
              |
Week  5-8    Phase 2    Demo Account & Interactive Features
              |          Auth UI, farmer dashboard, simulated IoT data,
              |          marketplace UI, Learning Chartboard
              |
Week  9-12   Phase 3    Final Product
                         Live IoT integration, AI diagnostics,
                         payment processing, admin panel, QR codes
```

---

## Project Structure

```
emukoko/
  public/                  Static assets (SVGs, favicon)
  src/
    app/
      page.tsx             Home page
      layout.tsx           Root layout (Navbar, Footer, SEO metadata)
      globals.css          Global styles and Tailwind theme
      about/
        page.tsx           About Us page
      how-it-works/
        page.tsx           How It Works page
      technology/
        page.tsx           Technology page
      contact/
        page.tsx           Contact page (client component)
        layout.tsx         Contact layout (metadata)
    components/
      Navbar.tsx           Responsive navigation with mobile menu
      Footer.tsx           Footer with newsletter, sitemap, social links
  EMukoko_SRS_Document.md  Full Software Requirements Specification
  vercel.json              Vercel deployment configuration
  next.config.ts           Next.js configuration
  tsconfig.json            TypeScript configuration
  package.json             Dependencies and scripts
```

---

## Getting Started

**Prerequisites:** Node.js 18.18+ installed

```bash
# Clone the repository
git clone https://github.com/Nqobileee/emukoko.git
cd emukoko

# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

The development server runs at `http://localhost:3000`.

---

## Team

| Name | Role | Responsibilities |
|:--|:--|:--|
| **Princess** | Frontend Developer, UI/UX Designer | User experience, responsive layouts, consumer pages, QR integration, marketplace UI |
| **Edith** | Backend Developer, Systems Architect | API architecture, database design, IoT integration, AI diagnostics, deployment |

---

## User Classes

The platform serves three primary user groups:

| User | Description | Access |
|:--|:--|:--|
| **Farmer** | Rural beekeepers managing Smart Hives | Dashboard, IoT data, harvest submission, Learning Chartboard |
| **Consumer** | Honey buyers seeking pure, traceable products | Marketplace, QR traceability, order tracking |
| **Admin** | Emukoko operations staff | Full system access, quality control, analytics |

---

## Non-Functional Requirements

| Category | Target |
|:--|:--|
| Performance | Page load under 3s on 3G networks |
| API Latency | Under 500ms (95th percentile) |
| IoT Latency | Sensor to dashboard under 5 seconds |
| Accessibility | WCAG 2.1 AA compliant |
| Security | HTTPS/TLS 1.3, bcrypt hashing, JWT auth, RBAC |
| Uptime | 99.5% SLA in production |

---

## License

This project is proprietary to Emukoko Innovations.

---

<div align="center">

**Emukoko Innovations** | Zimbabwe

*Revolutionizing beekeeping through technology, community, and trust.*

[emukoko.vercel.app](https://emukoko.vercel.app)

</div>