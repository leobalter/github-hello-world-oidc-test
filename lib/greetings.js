/**
 * Creates a personalized greeting message
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
export function createGreeting(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }
  
  return `Hello, ${name}!`;
}

/**
 * Formats a message with decorative borders
 * @param {string} message - The message to format
 * @returns {string} A formatted message
 */
export function formatMessage(message) {
  const border = '='.repeat(message.length + 4);
  return `${border}\n  ${message}  \n${border}`;
}

/**
 * Gets information about the current environment
 * @returns {object} Environment information
 */
export function getEnvironmentInfo() {
  return {
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    timestamp: new Date().toISOString()
  };
}
