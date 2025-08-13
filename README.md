# E-SEO TEAM Website

A modern, multilingual website for E-SEO TEAM - a professional web development and SEO services company. Built with Next.js 14, TypeScript, and PostgreSQL.

## 🌐 Live Website

**Visit our website**: [www.e-seo.info](https://www.e-seo.info)

## 🌟 Features

- **Multilingual Support**: English and Serbian localization
- **Modern UI/UX**: Beautiful animations with Framer Motion
- **Portfolio Showcase**: Dynamic project filtering and pagination
- **Contact Form**: Email integration with Resend
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Database Integration**: PostgreSQL with Prisma ORM

## 🛠️ Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **next-intl** - Internationalization

### Backend & Database

- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **Resend** - Email service integration

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **dotenv-cli** - Environment management

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── (pages)/        # Page components
│   │   │   ├── about-us/   # About page
│   │   │   ├── contact/    # Contact page
│   │   │   └── portfolio/  # Portfolio page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── _components/        # Shared components
│   │   ├── ui/            # UI components
│   │   ├── projects/      # Portfolio components
│   │   ├── Sidebar.tsx    # Navigation sidebar
│   │   └── LangsSwitcher.tsx # Language switcher
│   └── _actions/          # Server actions
├── i18n/                  # Internationalization config
├── db/                    # Database utilities
├── email-templates/       # Email templates
├── types/                 # TypeScript types
├── utils/                 # Utility functions
└── images/               # Static images

messages/
├── en.json               # English translations
└── rs.json              # Serbian translations

prisma/
└── schema.prisma        # Database schema
```

## 🚀 Development

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Resend API key (for email functionality)

## 🌐 Internationalization

The website supports multiple languages:

- **English** (`/en`) - Default language
- **Serbian** (`/rs`) - Serbian language

Language files are located in the `messages/` directory. To add a new language:

1.  Create a new JSON file in `messages/`
2.  Add the locale to `src/i18n/routing.ts`
3.  Update the language switcher component

## 📧 Contact Form

The contact form integrates with Resend for email delivery:

- Form validation with Zod
- Email templates with React Email
- Automatic email notifications

## 🎨 Customization

### Styling

- Colors and themes are defined in `tailwind.config.ts`
- Global styles in `src/app/[locale]/globals.css`
- Component-specific styles use Tailwind classes

### Content

- Text content is managed through translation files
- Images are stored in `src/images/`
- Static files in `public/` directory

## 🗄️ Database

The project uses PostgreSQL with the following schema:

```
model Project {
  project_id       Int     @id @default(autoincrement())
  project_name     String? @db.VarChar(255)
  project_url      String? @db.VarChar(255)
  project_platform String? @db.VarChar(255)

  @@map("projects")
}
```

## 🚀 Deployment

This website is deployed on **Vercel** and automatically updates on every push to the main branch.

## 📄 License

This project is private and proprietary to E-SEO TEAM.

## 📞 Contact

- **Phone**: +381 63 7675989
- **Email**: kontakt@e-seo.info
- **Website**: [www.e-seo.info](https://www.e-seo.info)

---

**E-SEO TEAM** - Professional website creation and optimization solutions
