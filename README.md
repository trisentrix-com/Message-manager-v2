# Message Manager v2

<div align="center">

![Message Manager Logo](public/assets/images/message-logo.png)

**Modern Web Interface for Message API Management**

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.3.4-646CFF.svg)](https://vitejs.dev/)

[🌐 Demo](https://manager.message-api.com) • [📖 Documentation](https://doc.message-api.com) • [💬 Community](https://message-api.com/discord)

</div>

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Docker](#docker)
- [API Integration](#api-integration)
- [Internationalization](#internationalization)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## 🚀 About

Message Manager v2 is a modern, responsive web interface built with React and TypeScript for managing [Message API](https://github.com/messageAPI/message-api) instances. It provides a comprehensive dashboard for WhatsApp API management, chatbot integrations, and real-time monitoring.

### Key Highlights

- 🎨 **Modern UI/UX** - Built with Radix UI and Tailwind CSS
- 🌍 **Multi-language** - Support for PT-BR, EN-US, ES-ES, FR-FR
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- ⚡ **Real-time Updates** - WebSocket integration for live data
- 🔧 **Easy Configuration** - Environment-based configuration
- 🐳 **Docker Ready** - Containerized deployment

## ✨ Features

### 📊 **Dashboard & Monitoring**

- Instance overview and status monitoring
- Real-time connection status
- Performance metrics and analytics
- Multi-instance management

### 💬 **Chat Management**

- WhatsApp chat interface
- Message history and search
- Media file handling
- Contact management

### 🤖 **Chatbot Integrations**

- **OpenAI** - GPT-powered conversations
- **Dify** - AI workflow automation
- **Typebot** - Visual flow builder
- **Chatwoot** - Customer support platform
- **Flowise** - Low-code AI apps
- **N8N** - Workflow automation
- **message Bot** - Built-in chatbot

### 🔗 **Event Integrations**

- **Webhook** - HTTP event delivery
- **WebSocket** - Real-time events
- **RabbitMQ** - Message queue integration
- **SQS** - Amazon Simple Queue Service
- **Apache Kafka** - Event streaming platform

### ⚙️ **Configuration Management**

- Instance settings and behavior
- Proxy configuration
- Authentication management
- Environment variables

### 🎨 **User Experience**

- Dark/Light theme support
- Multi-language interface
- Responsive design
- Keyboard shortcuts
- Accessibility features

## 📸 Screenshots

<details>
<summary>Click to view screenshots</summary>

### Dashboard

![Dashboard](docs/images/dashboard.png)

### Chat Interface

![Chat](docs/images/chat.png)

### Chatbot Configuration

![Chatbot](docs/images/chatbot.png)

### Settings

![Settings](docs/images/settings.png)

</details>

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Message API instance running
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/messageAPI/message-manager-v2.git
cd Message-manager-v2
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Installation

### Method 1: NPM (Recommended)

```bash
# Install globally
npm install -g message-manager

# Or run directly
npx message-manager
```

### Method 2: Docker

```bash
# Pull and run
docker run -p 3000:80 messageapi/message-manager:latest

# Or use docker-compose
docker-compose up -d
```

### Method 3: Build from Source

```bash
# Clone repository
git clone https://github.com/messageAPI/message-manager-v2.git
cd Message-manager-v2
# Install dependencies
npm install

# Build for production
npm run build

# Serve built files
npm run preview
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Message API Configuration
VITE_message_api_URL=http://localhost:8080
VITE_message_api_KEY=your-api-key

# Application Configuration
VITE_APP_NAME="Message Manager"
VITE_APP_VERSION="2.0.0"

# Optional: Custom Branding
VITE_LOGO_URL="/assets/images/custom-logo.png"
VITE_FAVICON_URL="/assets/images/custom-favicon.ico"

# Optional: Analytics
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### API Connection

The manager connects to your Message API instance. Configure the connection in the login screen or via environment variables.

### Customization

- **Themes**: Modify `src/index.css` for custom styling
- **Languages**: Add translations in `src/translate/languages/`
- **Components**: Extend UI components in `src/components/ui/`

## 🛠️ Development

### Development Setup

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Radix + Tailwind)
│   └── providers/      # Context providers
├── pages/              # Application pages/routes
├── lib/                # Utilities and API clients
│   ├── queries/        # React Query hooks
│   └── utils.ts        # Helper functions
├── contexts/           # React contexts
├── translate/          # Internationalization
├── types/              # TypeScript type definitions
└── services/           # External service integrations
```

### Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Library**: Radix UI, Tailwind CSS
- **State Management**: React Query, Context API
- **Routing**: React Router DOM
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Charts**: Recharts
- **Real-time**: Socket.io Client

## 🐳 Docker

### Using Docker Compose

```yaml
version: "3.8"
services:
  message-manager:
    image: messageapi/message-manager:latest
    ports:
      - "3000:80"
    environment:
      - VITE_message_api_URL=http://message-api:8080
    depends_on:
      - message-api
```

### Building Custom Image

```bash
# Build image
docker build -t my-message-manager .

# Run container
docker run -p 3000:80 my-message-manager
```

## 🔌 API Integration

### Connecting to Message API

1. **Login Screen**: Enter your Message API URL and credentials
2. **Environment**: Set `VITE_message_api_URL` and `VITE_message_api_KEY`
3. **Runtime**: Configure via the settings page

### API Endpoints

The manager uses the following Message API endpoints:

- `GET /instance` - List instances
- `POST /instance` - Create instance
- `GET /instance/:name` - Get instance details
- `POST /message/sendText` - Send messages
- `GET /chat` - List chats
- And many more...

### Authentication

Supports multiple authentication methods:

- API Key authentication
- JWT tokens
- Instance-specific tokens

## 🌍 Internationalization

### Supported Languages

- 🇧🇷 **Portuguese (Brazil)** - `pt-BR`
- 🇺🇸 **English (US)** - `en-US`
- 🇪🇸 **Spanish** - `es-ES`
- 🇫🇷 **French** - `fr-FR`

### Adding New Languages

1. Create translation file in `src/translate/languages/`
2. Add language option in `src/components/language-toggle.tsx`
3. Update `src/translate/i18n.ts`

Example translation file structure:

```json
{
  "dashboard": {
    "title": "Dashboard",
    "instances": "Instances"
  },
  "chat": {
    "send": "Send",
    "message": "Message"
  }
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm run test`
5. Commit changes: `npm run commit`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing code style
- Run `npm run lint` before committing
- Write meaningful commit messages

### Reporting Issues

Please use our [Issue Templates](.github/ISSUE_TEMPLATE/) when reporting bugs or requesting features.

## 📄 License

This project is licensed under the Apache License 2.0 with additional conditions - see the [LICENSE](LICENSE) file for details.

### Commercial Usage

Message Manager can be used commercially, but please review the license conditions regarding:

- Logo and copyright information
- Usage notification requirements

For commercial licensing inquiries, contact: contato@message-api.com

## 🆘 Support

### Community Support

- 💬 **Discord**: [Join our community](https://message-api.com/discord)
- 📖 **Documentation**: [Official docs](https://doc.message-api.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/messageAPI/message-manager-v2/issues)

### Professional Support

- 📧 **Email**: contato@message-api.com
- 🌐 **Website**: [message-api.com](https://message-api.com)
- 💼 **Enterprise**: Custom solutions available

### FAQ

<details>
<summary>How do I connect to my Message API instance?</summary>

Use the login screen to enter your API URL and credentials, or set the `VITE_message_api_URL` environment variable.

</details>

<details>
<summary>Can I customize the interface?</summary>

Yes! You can modify themes, add languages, and customize components. See the [Configuration](#configuration) section.

</details>

<details>
<summary>Is this compatible with Message API v1?</summary>

Message Manager v2 is designed for Message API v2+. For v1 compatibility, use Message Manager v1.

</details>

---

<div align="center">

**Made with ❤️ by the Message API Team**

[⭐ Star us on GitHub](https://github.com/messageAPI/message-manager-v2) • [🐛 Report Issues](https://github.com/messageAPI/message-manager-v2/issues) • [💬 Join Discord](https://message-api.com/discord)

</div>
