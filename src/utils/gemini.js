import { GoogleGenerativeAI } from '@google/generative-ai';

// Importing the API key from environment variables
// Make sure to set this variable in your environment before running the script 
const API_KEY = process.env.GEMINI_API_KEY;

// Check if the API key is set
// If not, it will log a warning message
if (!API_KEY) {
  console.warn('Gemini API key not found. Please set the GEMINI_API_KEY environment variable.');
}

// Initialize the Gemini AI client with the API key
const genAI = new GoogleGenerativeAI(API_KEY);

// Function to generate README.md content from project content using Gemini AI
// It uses the Gemini AI model to generate a professional README.md file based on the provided project content
export const generateReadmeFromProject = async (projectContent) => {
  if (!API_KEY) {
    throw new Error('Gemini API key is not set.');
  }

  // Using the Gemini AI model to generate content
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  // Prompt for the Gemini AI model to generate README.md content
  const prompt = `
    Acts as a Experience documentation writer. Based on the following project content, generate a professional README.md file.
    The README.md should include the following sections:
    - Project name & description
    - Screenshots (add placeholders)
    - Features and functionalities
    - Available npm/yarn scripts
    - Installation steps (frontend + backend separately)
    - Tech stack (React, Node.js, Express, MongoDB, other dependencies)
    - Environment variables (if any)
    - Database schema (if applicable)
    - Folder structure overview
    - API documentation (if applicable)
    - Future improvements or roadmap(if applicable)
    - Contribution guidelines (link to CONTRIBUTING.md)
    - License (default to MIT)
    - Author information
    - Acknowledgements (if any)

    If there is not an information of any section don't incude those sections. 
    Ensure the README.md is well-structured, easy to read, and formatted with Markdown. Don't give extra text i want markdown only.

    Here is the project content:
    ${projectContent}
  `;

  // Generate the README.md content using the Gemini AI model
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error('Error generating README.md with Gemini:', error);
  
  }
};