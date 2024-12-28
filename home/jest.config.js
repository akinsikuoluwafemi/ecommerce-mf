/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: "jest-environment-jsdom", // Explicitly use the jsdom environment
  };
};
