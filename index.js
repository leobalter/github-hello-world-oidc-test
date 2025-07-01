#!/usr/bin/env node

import { createGreeting, formatMessage } from './lib/greetings.js';

/**
 * Main function that demonstrates the hello world functionality
 */
function main() {
  const name = process.argv[2] || 'World';
  const greeting = createGreeting(name);
  const formattedMessage = formatMessage(greeting);
  
  console.log(formattedMessage);
  
  return {
    greeting,
    timestamp: new Date().toISOString(),
    packageName: '@lbplayground/github-hello-world-oidc-test'
  };
}

// Export for testing
export { main };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
