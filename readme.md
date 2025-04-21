# GraphQl Server

## Overview

This is Simple graphql server to utilize the power of graphql.

This is a simple backend for managing book and their Authors, I used the graphql server to take hands on experiance of graphql by building this project

## Tech Stack

- Typescript
- node with express
- Graphql
- Apollo Server
- PostgreSQL
- Prisma
- Docker

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 16.0 or higher)
- npm (version 7.0 or higher) or yarn
- Git
- Docker

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Available Scripts

- "start": "node build/index.js"
- "dev": "tsc-watch --onSuccess \"npm run start\""

# Quick Start

### Installation

Clone the repository and install dependencies:

```bash
# Clone the project
git clone [your-repository-url]
cd [project-name]

# Install dependencies
npm install
# or
yarn
```

### Docker

```bash
docker compose -f docker.compose.yml up -d
```

### Development

start the development server

```bash
npm run dev
# or
yarn dev
```

## Common Issues & Solutions

1. **Port Already in Use**
   ```bash
   kill -9 $(lsof -ti:5173)
   ```
2. **Apollo works with only express 4**

   ```bash
   npm uninstall express
   npm install express@4
   ```

3. **Do not install your own types if alreday exists like**
   ```bash
   npm install @types/express
   ```
   this can cause mismatch in versions of types
