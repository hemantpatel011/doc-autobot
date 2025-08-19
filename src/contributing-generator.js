import fs from 'fs-extra';
import chalk from 'chalk';

// Function to generate the content for CONTRIBUTING.md
const generateContributingContent = (answers) => {
  const { name: projectName } = answers;

  let content = `# Contributing to ${projectName || 'Project Name'}\n\n`;
  content += `Thank you for your interest in contributing to our project! We welcome all contributions, from bug reports to new features.\n\n`;

  content += `## 🚀 How to Contribute\n\n`;
  content += `1. **Fork the repository.**\n`;
  content += `2. **Create a new branch:**\n`;
  content += `   
`;
  content += `   git checkout -b my-new-feature\
`;
  content += `   \n
`;
  content += `3. **Make your changes and commit them:**\n`;
  content += `   
`;
  content += `   git commit -m 'Add some feature'\
`;
  content += `   \n
`;
  content += `4. **Push to the branch:**\n`;
  content += `   
`;
  content += `   git push origin my-new-feature\
`;
  content += `   \n
`;
  content += `5. **Submit a pull request.**\n\n`;

  return content;
};

// Generates a CONTRIBUTING.md file for the project
export const generateContributing = (answers) => {
  const contributingContent = generateContributingContent(answers);
  fs.writeFileSync('CONTRIBUTING.md', contributingContent);
  const { name: projectName } = answers;
  if (projectName) {
    console.log(chalk.green(`Successfully generated CONTRIBUTING.md for ${projectName}`));
  } else {
    console.log(chalk.redBright('Project name not provided, but CONTRIBUTING.md was still generated.'));
  }
};