import fs from 'fs-extra';
import path from 'path';

// Function to get project details from package.json
// This function will return an object with project details
// If package.json is not found, it will return an object with rootPath
export const getProjectDetails = () => {
  try {
    const packageJson = fs.readJsonSync('package.json');
    return {
      name: packageJson.name,
      description: packageJson.description,
      author: packageJson.author,
      license: packageJson.license,
      dependencies: packageJson.dependencies,
      scripts: packageJson.scripts,
      rootPath: process.cwd(), // Ensure rootPath is always present
    };
  } catch (error) {
    return {
      rootPath: process.cwd(), // Ensure rootPath is always present
    };
  }
};

// Function to get the content of the project directory
// It reads all files and directories recursively and returns their content as a string
// This will be used to generate the README.md file
// It excludes node_modules and .git directories
export const getProjectContent = (dir) => {
  if (!dir || typeof dir !== 'string') {
    throw new Error('A valid directory path must be provided to getProjectContent.');
  }
  let content = '';
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    if (file !== 'node_modules' && file !== '.git') {
      if (stats.isDirectory()) {
        content += getProjectContent(fullPath);
      } else {
        content += `--- ${fullPath} ---
`;
        content += fs.readFileSync(fullPath, 'utf-8');
        content += '\n';
      }
    }
  }
   return content;
};