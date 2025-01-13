# Startup Progress Tracker

A modern web application built with React and TypeScript to help startups track their progress across different phases of development.

## Features

- 📊 Interactive dashboard with progress visualization
- 🔄 Real-time progress tracking across startup phases
- 📱 Responsive design for mobile and desktop
- 🔒 Secure authentication with multiple providers
- 📈 Visual metrics and analytics
- ⚡ Fast and intuitive user interface

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Default Login Credentials

- Email:
- Password: 

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase (Authentication & Database)
- React Router
- Recharts
- Lucide Icons

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── auth/          # Authentication related components
│   └── ...
├── contexts/          # React Context providers
├── lib/              # Utility functions and configurations
├── pages/            # Page components
└── types/            # TypeScript type definitions
```

## Authentication Methods

- Email/Password
- Google
- GitHub
- Apple
- Password Reset functionality

## Features by Phase

1. **Idea Validation & Market Research**
   - Survey response tracking
   - Competitor analysis
   - Market research documentation

2. **Building MVP**
   - Development progress tracking
   - Feature completion status
   - User feedback management

3. **Business Model & Financials**
   - Financial projections
   - Business model tracking
   - Cost structure analysis

4. **Pitch Deck & Storytelling**
   - Pitch deck progress
   - Presentation feedback
   - Story development tracking

5. **Investor Outreach & Fundraising**
   - Investor pipeline management
   - Meeting tracking
   - Funding progress visualization

6. **Post-Funding & Growth**
   - Growth metrics
   - Milestone tracking
   - Performance monitoring

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Setup

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
