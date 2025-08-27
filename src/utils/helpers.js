import fs from 'fs-extra';
import path from 'path';
import ignore from 'ignore';

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

// Whitelisted file extensions and configuration files
// Programming & scripting languages
const whitelistedExtensions = [
  // Common languages
  '.js', '.jsx', '.ts', '.tsx', '.java', '.py', '.rb', '.php', '.go', '.rs', '.kt', '.swift', '.c', '.cpp', '.h', '.cs',
  
  // Web & Styling
  '.html', '.css', '.scss', '.sass', '.less',
  
  // Config/Meta
  '.json', '.yaml', '.yml', '.toml', '.ini',
  
  // Docs
  '.md', '.rst',
  
  // Build/Infra
  '.dockerfile', '.sh', '.bat', '.makefile'
];


// Config, metadata & docs
const whitelistedFiles = [
  // Node/Frontend
  'package.json', 'webpack.config.js', 'babel.config.js', 'vite.config.js', 'tsconfig.json', '.eslintrc.js',
  
  // Python
  'requirements.txt', 'pyproject.toml', 'setup.py', 'Pipfile',
  
  // Java
  'pom.xml', 'build.gradle', 'settings.gradle',
  
  // PHP
  'composer.json',
  
  // Rust
  'Cargo.toml',
  
  // Go
  'go.mod', 'go.sum',
  
  // C/C++
  'CMakeLists.txt', 'Makefile',
  
  // Docker/K8s
  'Dockerfile', 'docker-compose.yml',
  
  // Infra
  '.github/workflows', 'Jenkinsfile', 'azure-pipelines.yml'
];



// Function to get the content of the project directory
// It reads all files and directories recursively and returns their content as a string
// This will be used to generate the README.md file
// It excludes node_modules, .git, and files mentioned in .gitignore
export const getProjectContent = (dir) => {
  if (!dir || typeof dir !== 'string') {
    throw new Error('A valid directory path must be provided to getProjectContent.');
  }

  let content = '';
  const ig = ignore();

  // Check for .gitignore file and add its rules to the ignore instance
  const gitignorePath = path.join(dir, '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    const gitignore = fs.readFileSync(gitignorePath, 'utf-8');
    ig.add(gitignore);
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(process.cwd(), fullPath);

    // Skip ignored files and directories
    if (ig.ignores(relativePath)) {
      continue;
    }

    const stats = fs.statSync(fullPath);
    if (file !== 'node_modules' && file !== '.git' && file !== 'README.md') {
      if (stats.isDirectory()) {
        content += getProjectContent(fullPath);
      } else {
        const fileExtension = path.extname(file);
        const fileName = path.basename(file);

        // Include whitelisted files and files with whitelisted extensions
        if (whitelistedFiles.includes(fileName) || whitelistedExtensions.includes(fileExtension)) {
          content += `--- ${fullPath} ---
`;
          content += fs.readFileSync(fullPath, 'utf-8');
          content += '\n';
        }
      }
    }
  }
  return content;
};
