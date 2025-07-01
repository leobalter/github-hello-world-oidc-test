# GitHub Hello World OIDC Test

A simple Node.js utility for testing OIDC trusted publishers with GitHub Actions and npm.

## Features

- Simple greeting functionality
- Environment information utilities
- ES modules support
- Basic test suite

## Installation

```bash
npm install @your-org/github-hello-world-oidc-test
```

## Usage

### Command Line

```bash
# Default greeting
npx @your-org/github-hello-world-oidc-test

# Custom greeting
npx @your-org/github-hello-world-oidc-test "npm team"
```

### Programmatic

```javascript
import { createGreeting, formatMessage, getEnvironmentInfo } from '@your-org/github-hello-world-oidc-test/lib/greetings.js';

const greeting = createGreeting('World');
const formatted = formatMessage(greeting);
console.log(formatted);

const envInfo = getEnvironmentInfo();
console.log(envInfo);
```

## Development

```bash
# Run tests
npm test

# Run the application
npm start
```

## OIDC Testing

This package is specifically designed for testing OIDC trusted publishers with:
- GitHub Actions workflows
- npm package publishing
- Trusted publisher authentication

## License

MIT
