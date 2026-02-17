# EMUKOKO INNOVATIONS

*Where Technology Meets Community Growth*

---

# Software Requirements Specification (SRS)

## E Mukoko Smart Beekeeping Platform

| Field | Details |
|---|---|
| Document ID | EMK-SRS-2026-001 |
| Version | 1.0 |
| Status | Draft |
| Date | February 17, 2026 |
| Developers | Princess, Edith |
| Timeline | 12 Weeks (3 Months) |
| Contact | info@emukoko.org |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall System Description](#2-overall-system-description)
3. [Phase 1: Basic Website Structure (Weeks 1–4)](#3-phase-1-basic-website-structure-weeks-14)
4. [Phase 2: Demo Account & Interactive Features (Weeks 5–8)](#4-phase-2-demo-account--interactive-features-weeks-58)
5. [Phase 3: Final Product (Weeks 9–12)](#5-phase-3-final-product-weeks-912)
6. [Non-Functional Requirements](#6-non-functional-requirements)
7. [Data Model](#7-data-model)
8. [API Specification Overview](#8-api-specification-overview)
9. [Complete 12-Week Timeline](#9-complete-12-week-timeline)
10. [Testing Strategy](#10-testing-strategy)
11. [Risks & Mitigations](#11-risks--mitigations)
12. [Recommended Technology Stack](#12-recommended-technology-stack)
13. [Appendices](#13-appendices)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document defines the functional and non-functional requirements for the E Mukoko Smart Beekeeping Platform. The platform integrates Internet of Things (IoT) monitoring, Artificial Intelligence (AI) diagnostics, and a digital marketplace to revolutionize the beekeeping industry and empower rural communities.

### 1.2 Scope

The E Mukoko platform encompasses a web-based application with the following core modules: a public-facing marketing website, a farmer dashboard with IoT integration, an AI-powered hive diagnostics system, a digital marketplace for honey sales, an administrative back-office panel, and a consumer-facing QR code traceability system. The system will be developed in three progressive phases over 12 weeks by a two-person development team (Princess and Edith).

### 1.3 Development Approach

The project follows an Agile methodology with weekly sprints and deliverables. Development is structured in three phases:

1. **Phase 1 (Weeks 1–4): Basic Website Structure** – Static site, core pages, responsive design, and foundational backend.
2. **Phase 2 (Weeks 5–8): Demo Account & Interactive Features** – Authentication, farmer dashboard, mock IoT data, demo marketplace.
3. **Phase 3 (Weeks 9–12): Final Product** – Live IoT integration, AI diagnostics, payment processing, admin panel, and production deployment.

### 1.4 Definitions & Acronyms

| Term | Definition |
|---|---|
| IoT | Internet of Things – network of sensors embedded in beehives |
| AI | Artificial Intelligence – algorithms for pest detection and diagnostics |
| SRS | Software Requirements Specification |
| QR Code | Quick Response Code for product traceability |
| API | Application Programming Interface |
| MVP | Minimum Viable Product |
| Smart Hive | IoT-enabled beehive with sensors and cameras |
| Learning Chartboard | Knowledge-sharing platform for beekeeping best practices |

### 1.5 Team & Roles

| Developer | Primary Responsibilities | Secondary Responsibilities |
|---|---|---|
| Princess | Frontend development, UI/UX design, responsive layouts, consumer-facing pages | QR code integration, marketplace UI, testing |
| Edith | Backend development, API architecture, database design, IoT integration | AI diagnostics integration, admin panel, deployment |

---

## 2. Overall System Description

### 2.1 Product Perspective

E Mukoko is a standalone web platform that interfaces with external IoT hardware (Smart Hive sensors), third-party AI models for pest/disease detection, and payment gateways. The system serves three primary user groups: farmers (producers), consumers (buyers), and administrators (E Mukoko staff).

### 2.2 User Classes & Characteristics

| User Class | Description | Technical Skill | Access Level |
|---|---|---|---|
| Farmer | Rural/new beekeepers managing Smart Hives | Low to Medium – mobile-first users | Farmer Dashboard, Learning Chartboard, Harvest Submission |
| Consumer | Honey buyers seeking pure, traceable products | Low – general public | Marketplace, QR Traceability, Order Tracking |
| Admin | E Mukoko staff managing operations | High – internal team | Full system access, quality control, analytics |
| Expert | Experienced beekeepers sharing knowledge | Medium – content contributors | Learning Chartboard content management |

### 2.3 System Architecture Overview

The platform follows a three-tier architecture:

- **Presentation Layer:** Responsive web application (React/Next.js) optimized for mobile and desktop.
- **Application Layer:** RESTful API server (Node.js/Express or Python/FastAPI) handling business logic, authentication, IoT data processing, and AI model integration.
- **Data Layer:** PostgreSQL database for structured data, cloud object storage for images/media, and time-series database for IoT sensor readings.

### 2.4 Operating Environment

- **Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Devices:** Mobile phones (primary), tablets, desktops
- **Hosting:** Cloud-based (AWS/Vercel/DigitalOcean)
- **Connectivity:** Must function on low-bandwidth networks common in rural areas

---

## 3. Phase 1: Basic Website Structure (Weeks 1–4)

This phase establishes the public-facing website, foundational backend infrastructure, and core database schema. The focus is on creating a professional, responsive web presence that communicates E Mukoko's value proposition.

### 3.1 Functional Requirements – Phase 1

| Req ID | Requirement Description | Priority | Phase |
|---|---|---|---|
| FR-1.01 | Homepage with hero section, value proposition, call-to-action buttons | High | Week 1 |
| FR-1.02 | About Us page with mission, vision, team information | High | Week 1 |
| FR-1.03 | How It Works page explaining the 5-phase Partner & Profit model | High | Week 1 |
| FR-1.04 | Contact Us page with form submission and email notification | Medium | Week 2 |
| FR-1.05 | Technology page showcasing Smart Hive IoT and AI features | Medium | Week 2 |
| FR-1.06 | Responsive navigation with mobile hamburger menu | High | Week 1 |
| FR-1.07 | Footer with social links, newsletter signup, and sitemap | Medium | Week 2 |
| FR-1.08 | SEO meta tags, Open Graph tags, and sitemap.xml | Medium | Week 3 |
| FR-1.09 | Backend API scaffolding with project structure and routing | High | Week 2 |
| FR-1.10 | Database schema design for users, hives, products, and orders | High | Week 3 |
| FR-1.11 | User registration and login API endpoints | High | Week 3 |
| FR-1.12 | Basic email service integration for contact form and verification | Medium | Week 4 |
| FR-1.13 | Admin seed data and initial content management setup | Medium | Week 4 |
| FR-1.14 | Deployment pipeline to staging environment | High | Week 4 |

### 3.2 Phase 1 Sprint Schedule

| Week | Sprint | Deliverable | Owner | Status |
|---|---|---|---|---|
| 1 | Sprint 1 | Homepage, About, How It Works pages, Responsive nav | Princess | Pending |
| 1 | Sprint 1 | Project setup, repository, CI/CD scaffold, environment config | Edith | Pending |
| 2 | Sprint 2 | Contact, Technology pages, Footer, Newsletter UI | Princess | Pending |
| 2 | Sprint 2 | API scaffolding, database schema, contact form endpoint | Edith | Pending |
| 3 | Sprint 3 | SEO optimization, animations, image optimization, performance | Princess | Pending |
| 3 | Sprint 3 | User auth API (register/login/verify), JWT implementation | Edith | Pending |
| 4 | Sprint 4 | Cross-browser testing, responsive QA, bug fixes | Princess | Pending |
| 4 | Sprint 4 | Email service, seed data, staging deployment, API documentation | Edith | Pending |

### 3.3 Phase 1 Deliverables Checklist

**Week 1:** Fully responsive homepage, about page, and how-it-works page deployed to staging.

**Week 2:** Contact form functional with email delivery, technology showcase page, complete footer, backend API skeleton live.

**Week 3:** SEO-optimized pages, user registration/login API complete with JWT auth, database schema finalized and migrated.

**Week 4:** Full cross-browser QA pass, staging environment stable, email verification working, all Phase 1 pages pixel-perfect. Phase 1 sign-off meeting.

---

## 4. Phase 2: Demo Account & Interactive Features (Weeks 5–8)

Phase 2 introduces authenticated user experiences, the farmer dashboard with simulated IoT data, demo marketplace, and the Learning Chartboard. A demo account allows stakeholders and potential farmers to experience the full platform without live hardware.

### 4.1 Functional Requirements – Phase 2

| Req ID | Requirement Description | Priority | Phase |
|---|---|---|---|
| FR-2.01 | User authentication UI (login, register, forgot password, email verification) | High | Week 5 |
| FR-2.02 | Farmer onboarding wizard (profile setup, hive registration, location) | High | Week 5 |
| FR-2.03 | Farmer Dashboard: overview cards showing hive count, health status, estimated yield | High | Week 6 |
| FR-2.04 | Simulated IoT data feed: weight, temperature, humidity, vibration charts with mock data | High | Week 6 |
| FR-2.05 | Hive detail page with real-time (simulated) sensor readings and historical graphs | High | Week 6 |
| FR-2.06 | AI Diagnostics demo: mock pest detection alerts with image samples and recommendations | Medium | Week 7 |
| FR-2.07 | Learning Chartboard: categorized knowledge base with articles, videos, and best practices | High | Week 7 |
| FR-2.08 | Marketplace UI: product listing page with honey jars, pricing, location tags, and filters | High | Week 7 |
| FR-2.09 | Product detail page with QR code preview, farmer story, and honey origin information | Medium | Week 8 |
| FR-2.10 | Shopping cart and checkout flow (UI only, no payment processing) | Medium | Week 8 |
| FR-2.11 | Demo account with pre-populated data: 5 hives, 12 months of simulated history, sample orders | High | Week 8 |
| FR-2.12 | Notification system: email and in-app alerts for hive events and orders | Medium | Week 7 |
| FR-2.13 | Farmer profile page with harvest history and earnings summary | Medium | Week 8 |
| FR-2.14 | Market demand dashboard: mock price trends and demand heatmap by location | Medium | Week 8 |

### 4.2 Phase 2 Sprint Schedule

| Week | Sprint | Deliverable | Owner | Status |
|---|---|---|---|---|
| 5 | Sprint 5 | Auth UI (login/register/forgot password), onboarding wizard UI | Princess | Pending |
| 5 | Sprint 5 | Auth backend integration, farmer profile API, hive registration API | Edith | Pending |
| 6 | Sprint 6 | Farmer dashboard UI, IoT charts (Chart.js/Recharts), hive detail page | Princess | Pending |
| 6 | Sprint 6 | Mock IoT data generator, sensor API endpoints, time-series queries | Edith | Pending |
| 7 | Sprint 7 | Marketplace listing page, Learning Chartboard UI, notification center | Princess | Pending |
| 7 | Sprint 7 | AI diagnostics mock API, marketplace API, content management API | Edith | Pending |
| 8 | Sprint 8 | Product detail/QR preview, cart/checkout UI, market demand dashboard | Princess | Pending |
| 8 | Sprint 8 | Demo account data seeding, notification service, integration testing | Edith | Pending |

### 4.3 Demo Account Specification

The demo account provides a fully functional preview of the platform:

| Feature | Demo Data |
|---|---|
| Farmer Profile | Pre-configured demo farmer with profile photo, location, and bio |
| Hives | 5 Smart Hives with unique IDs and varied health statuses |
| IoT History | 12 months of simulated sensor data (weight, temp, humidity, vibration) |
| AI Alerts | 3 sample pest detection alerts with images and resolution history |
| Harvest Records | 8 completed harvests with weight, quality grade, and payment records |
| Marketplace | 15 honey products with varied pricing, locations, and farmer stories |
| Credentials | Email: demo@emukoko.org · Password: DemoFarmer2026! |

### 4.4 Phase 2 Deliverables Checklist

**Week 5:** Working auth system (register, login, email verification, password reset), farmer onboarding wizard complete with profile creation.

**Week 6:** Farmer dashboard live with IoT charts, hive detail pages rendering simulated sensor data with 12-month history.

**Week 7:** Marketplace listings functional with filters and sorting, Learning Chartboard populated with starter content, notification system operational.

**Week 8:** Demo account fully seeded and accessible, checkout flow complete (UI), market demand dashboard functional. Phase 2 demo presentation to stakeholders.

---

## 5. Phase 3: Final Product (Weeks 9–12)

Phase 3 transforms the demo into a production-ready platform with live IoT integration, real AI diagnostics, payment processing, admin operations, and QR code traceability. This phase focuses on data integrity, security hardening, and deployment.

### 5.1 Functional Requirements – Phase 3

| Req ID | Requirement Description | Priority | Phase |
|---|---|---|---|
| FR-3.01 | Live IoT integration: real-time sensor data ingestion from Smart Hive hardware via MQTT/HTTP | High | Week 9 |
| FR-3.02 | IoT data validation: weight reconciliation between sensor readings and delivered harvest | High | Week 9 |
| FR-3.03 | AI pest/disease detection: camera image upload, model inference, and alert generation | High | Week 10 |
| FR-3.04 | AI-powered maintenance scheduling: predictive alerts based on sensor trends | Medium | Week 10 |
| FR-3.05 | Payment gateway integration (mobile money, bank transfer, card payments) | High | Week 10 |
| FR-3.06 | Farmer payout system: automated earnings calculation and disbursement | High | Week 10 |
| FR-3.07 | QR code generation for each honey batch linking to farmer story and IoT verification data | High | Week 11 |
| FR-3.08 | Consumer QR scan page: mobile-friendly traceability view with origin, purity, and farmer info | High | Week 11 |
| FR-3.09 | Admin panel: user management, hive fleet overview, quality control workflow | High | Week 11 |
| FR-3.10 | Admin analytics dashboard: revenue, active farmers, production volume, demand forecasting | Medium | Week 11 |
| FR-3.11 | Quality control module: batch testing records, approval/rejection workflow, branding assignment | High | Week 12 |
| FR-3.12 | Beehive Loan tracking: partnership agreements, repayment status, hive ownership transfer | Medium | Week 12 |
| FR-3.13 | Production deployment: SSL, CDN, monitoring, error tracking, backup configuration | High | Week 12 |
| FR-3.14 | User acceptance testing (UAT), bug fixes, performance optimization, and launch readiness | High | Week 12 |

### 5.2 Phase 3 Sprint Schedule

| Week | Sprint | Deliverable | Owner | Status |
|---|---|---|---|---|
| 9 | Sprint 9 | IoT dashboard update for live data, real-time alert UI components | Princess | Pending |
| 9 | Sprint 9 | MQTT/HTTP IoT ingestion service, data validation engine, sensor API v2 | Edith | Pending |
| 10 | Sprint 10 | Payment flow UI, farmer earnings page, AI alert detail redesign | Princess | Pending |
| 10 | Sprint 10 | AI model integration, payment gateway API, payout calculation engine | Edith | Pending |
| 11 | Sprint 11 | QR code scan page, admin panel UI (users, hives, analytics), consumer traceability view | Princess | Pending |
| 11 | Sprint 11 | QR code generation service, admin APIs, analytics aggregation queries | Edith | Pending |
| 12 | Sprint 12 | UAT execution, bug fixes, performance optimization, final QA | Princess | Pending |
| 12 | Sprint 12 | Quality control module, loan tracking, production deployment, monitoring setup | Edith | Pending |

### 5.3 Phase 3 Deliverables Checklist

**Week 9:** Live IoT data flowing through the system, real-time dashboards updating, weight reconciliation logic operational.

**Week 10:** AI diagnostics processing real images, payment gateway accepting test transactions, farmer payouts calculating correctly.

**Week 11:** QR codes generating and scanning correctly, admin panel fully operational with analytics, consumer traceability pages live.

**Week 12:** All UAT cases passed, production environment deployed with SSL and monitoring, quality control workflow tested end-to-end. Official launch readiness sign-off.

---

## 6. Non-Functional Requirements

### 6.1 Performance

| Req ID | Requirement Description | Priority | Phase |
|---|---|---|---|
| NFR-01 | Page load time under 3 seconds on 3G networks | High | All |
| NFR-02 | API response time under 500ms for 95th percentile | High | Phase 3 |
| NFR-03 | IoT data ingestion latency under 5 seconds from sensor to dashboard | High | Phase 3 |
| NFR-04 | System supports 500 concurrent farmers and 2000 concurrent consumers | Medium | Phase 3 |

### 6.2 Security

| Req ID | Requirement Description | Priority | Phase |
|---|---|---|---|
| NFR-05 | All data transmitted over HTTPS/TLS 1.3 | High | All |
| NFR-06 | Passwords hashed with bcrypt (cost factor 12+) | High | Phase 2 |
| NFR-07 | JWT tokens with 15-minute access, 7-day refresh rotation | High | Phase 2 |
| NFR-08 | Role-based access control (RBAC) for farmer, consumer, admin, expert | High | Phase 2 |
| NFR-09 | SQL injection and XSS prevention on all user inputs | High | All |
| NFR-10 | GDPR-compliant data handling with user data export and deletion | Medium | Phase 3 |

### 6.3 Usability

| Req ID | Requirement Description | Priority | Phase |
|---|---|---|---|
| NFR-11 | Mobile-first responsive design with touch-friendly UI (minimum 44px touch targets) | High | All |
| NFR-12 | WCAG 2.1 AA accessibility compliance | Medium | Phase 1 |
| NFR-13 | Multi-language support (English primary, Shona and Ndebele planned) | Low | Phase 3 |
| NFR-14 | Offline-capable progressive web app (PWA) for farmer dashboard | Medium | Phase 3 |

### 6.4 Reliability & Availability

| Req ID | Requirement Description | Priority | Phase |
|---|---|---|---|
| NFR-15 | 99.5% uptime SLA for production environment | High | Phase 3 |
| NFR-16 | Automated daily database backups with 30-day retention | High | Phase 3 |
| NFR-17 | Graceful degradation when IoT sensors are offline | High | Phase 3 |
| NFR-18 | Error monitoring and alerting via Sentry or equivalent | Medium | Phase 3 |

---

## 7. Data Model

### 7.1 Core Entities

| Entity | Key Fields | Relationships |
|---|---|---|
| User | id, email, password_hash, role, name, phone, location, created_at | Has many Hives, Orders, Harvests |
| Hive | id, farmer_id, iot_device_id, location, status, installed_at, loan_status | Belongs to User, Has many SensorReadings, Alerts |
| SensorReading | id, hive_id, weight, temp_internal, temp_external, humidity, vibration, timestamp | Belongs to Hive |
| Alert | id, hive_id, type (pest/disease/maintenance), severity, image_url, resolved_at | Belongs to Hive |
| Harvest | id, hive_id, farmer_id, weight_sensor, weight_delivered, quality_grade, season, status | Belongs to Hive, User. Has one QRBatch |
| Product | id, harvest_id, name, price, description, origin_location, stock_qty, qr_code_url | Belongs to Harvest. Has many OrderItems |
| Order | id, consumer_id, total, payment_status, payment_method, shipping_address, created_at | Belongs to User. Has many OrderItems |
| Article | id, author_id, title, content, category, media_urls, published_at | Belongs to User (expert). Learning Chartboard content |

### 7.2 Data Integrity Rules

**Weight Reconciliation:** The system must flag any harvest where the absolute difference between sensor-recorded weight (weight_sensor) and delivered weight (weight_delivered) exceeds 10%. Flagged harvests require admin review before marketplace listing.

**QR Traceability:** Every product listed on the marketplace must have a valid QR code linking to the harvest record, farmer profile, and IoT verification data. Products without verified traceability data cannot be listed.

---

## 8. API Specification Overview

The platform exposes a RESTful API organized by domain. All endpoints require authentication via JWT Bearer tokens unless marked as public.

| Method | Endpoint | Description | Auth | Phase |
|---|---|---|---|---|
| POST | /api/auth/register | Register new user | Public | Phase 1 |
| POST | /api/auth/login | Authenticate and return JWT | Public | Phase 1 |
| GET | /api/hives | List farmer's hives | Farmer | Phase 2 |
| GET | /api/hives/:id/sensors | Get sensor readings for a hive | Farmer | Phase 2 |
| POST | /api/iot/ingest | Receive IoT sensor data | Device | Phase 3 |
| POST | /api/ai/diagnose | Submit image for AI pest detection | Farmer | Phase 3 |
| GET | /api/marketplace | List marketplace products | Public | Phase 2 |
| POST | /api/orders | Create new order | Consumer | Phase 3 |
| GET | /api/qr/:batchId | Get traceability data for QR scan | Public | Phase 3 |
| GET | /api/admin/dashboard | Admin analytics and KPIs | Admin | Phase 3 |

---

## 9. Complete 12-Week Timeline

This consolidated timeline shows all weekly deliverables across the three phases with assigned ownership.

| Week | Phase | Deliverable | Owner | Status |
|---|---|---|---|---|
| 1 | Phase 1 | Homepage, About, How It Works – responsive UI | Princess | Pending |
| 1 | Phase 1 | Project setup, CI/CD, repo structure, dev environment | Edith | Pending |
| 2 | Phase 1 | Contact page, Technology page, Footer, Newsletter UI | Princess | Pending |
| 2 | Phase 1 | API scaffold, DB schema, Contact form API | Edith | Pending |
| 3 | Phase 1 | SEO, animations, image optimization, Lighthouse audit | Princess | Pending |
| 3 | Phase 1 | Auth API (register/login/verify), JWT, password hashing | Edith | Pending |
| 4 | Phase 1 | Cross-browser QA, responsive testing, bug fixes | Princess | Pending |
| 4 | Phase 1 | Email service, seed data, staging deploy, API docs | Edith | Pending |
| 5 | Phase 2 | Auth UI, onboarding wizard, farmer profile page | Princess | Pending |
| 5 | Phase 2 | Auth integration, farmer profile API, hive registration API | Edith | Pending |
| 6 | Phase 2 | Farmer dashboard, IoT charts, hive detail page | Princess | Pending |
| 6 | Phase 2 | Mock IoT generator, sensor APIs, time-series queries | Edith | Pending |
| 7 | Phase 2 | Marketplace UI, Learning Chartboard, notification center | Princess | Pending |
| 7 | Phase 2 | AI mock API, marketplace API, content management API | Edith | Pending |
| 8 | Phase 2 | Product detail/QR preview, cart/checkout, demand dashboard | Princess | Pending |
| 8 | Phase 2 | Demo account seeding, notification service, integration tests | Edith | Pending |
| 9 | Phase 3 | Live IoT dashboard, real-time alerts UI | Princess | Pending |
| 9 | Phase 3 | MQTT/HTTP IoT ingestion, data validation, sensor API v2 | Edith | Pending |
| 10 | Phase 3 | Payment UI, farmer earnings page, AI alert redesign | Princess | Pending |
| 10 | Phase 3 | AI model integration, payment gateway, payout engine | Edith | Pending |
| 11 | Phase 3 | QR scan page, admin panel, consumer traceability view | Princess | Pending |
| 11 | Phase 3 | QR generation service, admin APIs, analytics queries | Edith | Pending |
| 12 | Phase 3 | UAT, bug fixes, performance tuning, final QA | Princess | Pending |
| 12 | Phase 3 | QC module, loan tracking, production deploy, monitoring | Edith | Pending |

---

## 10. Testing Strategy

### 10.1 Testing Levels

| Test Level | Description | Responsibility | Phase |
|---|---|---|---|
| Unit Tests | Individual function and component testing with 80%+ coverage | Both | All |
| Integration Tests | API endpoint testing, database operations, service interactions | Edith | Phase 2+ |
| E2E Tests | Full user flow testing (Cypress/Playwright) for critical paths | Princess | Phase 2+ |
| Cross-Browser | Chrome, Firefox, Safari, Edge compatibility verification | Princess | Phase 1+ |
| Performance | Lighthouse audits, load testing, API latency benchmarks | Both | Phase 3 |
| Security | OWASP Top 10 audit, penetration testing, dependency scanning | Edith | Phase 3 |
| UAT | Stakeholder acceptance testing with real user scenarios | Both | Week 12 |

### 10.2 Acceptance Criteria

**Phase 1 Acceptance:** All static pages render correctly across target browsers, Lighthouse performance score above 90, auth API passes all unit tests, staging deployment accessible.

**Phase 2 Acceptance:** Demo account fully functional, all dashboard features working with simulated data, marketplace browsable with filter/sort, Learning Chartboard populated.

**Phase 3 Acceptance:** Live IoT data ingestion confirmed, AI diagnostics returning valid results, payment test transactions successful, QR codes scannable, admin panel operational, production deployment stable for 48 hours.

---

## 11. Risks & Mitigations

| Risk ID | Risk Description | Impact | Likelihood | Mitigation Strategy |
|---|---|---|---|---|
| R-01 | IoT hardware delivery delays | High | Medium | Use simulated data through Phase 2; hardware only needed Week 9 |
| R-02 | AI model accuracy below threshold | Medium | Medium | Start with pre-trained model; plan for iterative retraining with local data |
| R-03 | Low-bandwidth rural connectivity | High | High | PWA with offline mode, compressed images, lazy loading |
| R-04 | Payment gateway integration complexity | Medium | Low | Research providers early; use Paynow/EcoCash APIs with sandbox testing |
| R-05 | Scope creep within 12-week timeline | High | High | Strict sprint scope, weekly stand-ups, feature prioritization by MoSCoW |
| R-06 | Developer availability or illness | High | Low | Cross-training on both frontend and backend; shared documentation |

---

## 12. Recommended Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| Frontend | Next.js (React), Tailwind CSS | SEO-friendly SSR, rapid UI development, mobile-first design |
| Backend | Node.js with Express or FastAPI (Python) | Fast API development, strong ecosystem, async support for IoT |
| Database | PostgreSQL + TimescaleDB extension | Relational integrity, time-series optimized for IoT sensor data |
| Authentication | JWT with bcrypt, optional OAuth 2.0 | Stateless auth, industry standard, mobile-friendly |
| IoT Protocol | MQTT (Mosquitto) + HTTP fallback | Lightweight, low-bandwidth friendly, standard for IoT |
| AI/ML | TensorFlow Lite / ONNX Runtime | Edge-compatible inference, pre-trained pest detection models |
| Payments | Paynow, EcoCash API, Stripe | Regional mobile money support, international card processing |
| Hosting | Vercel (frontend), DigitalOcean/AWS (backend) | Cost-effective, scalable, good African region latency |
| Monitoring | Sentry (errors), UptimeRobot (uptime), Grafana (metrics) | Comprehensive observability stack |
| Charts | Recharts / Chart.js | React-native charting for IoT dashboards and analytics |

---

## 13. Appendices

### 13.1 Revision History

| Version | Date | Changes | Author |
|---|---|---|---|
| 1.0 | 2026-02-17 | Initial SRS document creation | Emukoko Innovations |

### 13.2 Approval Signatures

| Role | Name | Signature | Date |
|---|---|---|---|
| Project Lead | | | |
| Lead Developer (FE) | Princess | | |
| Lead Developer (BE) | Edith | | |
| Stakeholder | | | |

### 13.3 References

- E Mukoko Project Profile (source document)
- IEEE 830-1998: IEEE Recommended Practice for Software Requirements Specifications
- OWASP Top 10 Web Application Security Risks
- WCAG 2.1 Web Content Accessibility Guidelines

---

*End of Document — Emukoko Innovations | Confidential*
