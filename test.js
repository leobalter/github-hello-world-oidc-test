import { createGreeting, formatMessage, getEnvironmentInfo } from './lib/greetings.js';
import { main } from './index.js';

/**
 * Simple test runner
 */
function runTests() {
  let passed = 0;
  let failed = 0;

  function test(description, testFn) {
    try {
      testFn();
      console.log(`✅ ${description}`);
      passed++;
    } catch (error) {
      console.log(`❌ ${description}: ${error.message}`);
      failed++;
    }
  }

  console.log('Running tests for github-hello-world-oidc-test...\n');

  test('createGreeting should create a greeting', () => {
    const result = createGreeting('npm');
    if (result !== 'Hello, npm!') {
      throw new Error(`Expected "Hello, npm!" but got "${result}"`);
    }
  });

  test('createGreeting should throw for invalid input', () => {
    try {
      createGreeting('');
      throw new Error('Should have thrown an error');
    } catch (error) {
      if (!error.message.includes('Name must be a non-empty string')) {
        throw error;
      }
    }
  });

  test('formatMessage should format with borders', () => {
    const result = formatMessage('Test');
    if (!result.includes('=======') || !result.includes('  Test  ')) {
      throw new Error('Message not formatted correctly');
    }
  });

  test('getEnvironmentInfo should return environment data', () => {
    const info = getEnvironmentInfo();
    if (!info.nodeVersion || !info.platform || !info.timestamp) {
      throw new Error('Missing environment information');
    }
  });

  test('main function should return expected structure', () => {
    const result = main();
    if (!result.greeting || !result.timestamp || !result.packageName) {
      throw new Error('Main function missing expected properties');
    }
  });

  console.log(`\nTest Results: ${passed} passed, ${failed} failed`);
  
  if (failed > 0) {
    process.exit(1);
  }
}

runTests();
