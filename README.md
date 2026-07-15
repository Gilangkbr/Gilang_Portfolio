# Gilang Ananda Akbar Portfolio

A responsive personal portfolio for Gilang Ananda Akbar, a front-end developer based in Indonesia. The website presents his profile, toolkit, services, selected work, development process, and contact information.

## Tech Stack

- React 19
- Vite
- CSS
- React Icons
- EmailJS Browser SDK

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── about/
│   ├── contact/
│   ├── experience/
│   ├── footer/
│   ├── header/
│   ├── nav/
│   ├── portfolio/
│   ├── process/
│   └── services/
├── App.jsx
├── index.css
└── index.jsx
```

The contact form uses EmailJS. Update the service, template, and public key values in `src/components/contact/Contact.jsx` when connecting a different EmailJS account.
