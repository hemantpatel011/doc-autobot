import fs from 'fs-extra';
import { getProjectContent } from './utils/helpers.js';
import { generateReadmeFromProject } from './utils/gemini.js';
import chalk from 'chalk';


  // Generates a README.md file for the project using the provided project details.
  // It reads the project content, generates the README.md using Gemini AI, and writes it to the file system.
export const generateReadme = async (projectDetails) => {
  console.log('Reading project content...');
  const projectContent = getProjectContent(projectDetails.rootPath);
  const readmeContent = await generateReadmeFromProject(projectContent);
  fs.writeFileSync('README.md', readmeContent);
  console.log(chalk.green('Successfully generated README.md'));
};