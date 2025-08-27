#!/usr/bin/env node

import 'dotenv/config';
import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { generateReadme } from './src/readme-generator.js';
import { generateContributing } from './src/contributing-generator.js';
import { getProjectDetails } from './src/utils/helpers.js';

// Initialize the command line interface
const program = new Command();

// Set up the command line interface with commands and descriptions
program
  .name('doc-autobot')
  .description('A CLI tool to automatically generate `README.md` and `CONTRIBUTING.md` files for your projects. Doc Autobot streamlines the documentation process by leveraging AI to generate comprehensive and professional project documentation.')
  .version('1.0.3');

// Get project details from package.json or current working directory
// This will be used to generate the README.md and CONTRIBUTING.md files
// If package.json is not found, it will still provide the rootPath
// This ensures that the tool can run even if the project is not initialized with npm
const projectDetails = getProjectDetails();

// Define commands for generating README.md 
program
  .command('readme')
  .description('Generate a README.md file')
  .action(async () => {
    console.log(chalk.yellowBright('Generating README.md...'));
    await generateReadme(projectDetails);
  });

// Define commands for generating CONTRIBUTING.md
program
  .command('contributing')
  .description('Generate a CONTRIBUTING.md file')
  .action(() => {
    console.log(chalk.yellowBright('Generating CONTRIBUTING.md...'));
    generateContributing(projectDetails);
  });

// Define a command to generate both README.md and CONTRIBUTING.md files
// It allows users to generate both files in one go
program
  .command('both')
  .description('Generate both README.md and CONTRIBUTING.md files')
  .action(async () => {
    console.log(chalk.yellowBright('Generating README.md and CONTRIBUTING.md...'));
    await generateReadme(projectDetails);
    generateContributing(projectDetails);
  });

// Run the command line interface
// This will prompt the user to choose what files they want to generate
// It provides a wizard-like experience for users to easily generate documentation files
const runWizard = async () => {
 
  const answers = await inquirer.prompt(
    {
      type: 'list',
      name: 'filesToGenerate',
      message: 'What do you want to generate?',
      choices: ['README.md', 'CONTRIBUTING.md', 'All'],
    }
  );


  if (answers.filesToGenerate === 'README.md' || answers.filesToGenerate === 'All') {
    console.log(chalk.yellowBright('Generating README.md...'));
    await generateReadme(projectDetails);
  }

  if (answers.filesToGenerate === 'CONTRIBUTING.md' || answers.filesToGenerate === 'All') {
    console.log(chalk.yellowBright('Generating CONTRIBUTING.md...'));
    generateContributing(projectDetails);
  }
};

// Set the action for the program to run the wizard
// This will be executed when the user runs the command without any specific sub-command
// It provides a user-friendly interface to choose what files to generate
program.action(async () => {
  console.log(chalk.blueBright('Welcome to Doc Autobot!🤖'));
  
  // Run the wizard to prompt the user for input
  await runWizard();
});

// Parse the command line arguments
// This will execute the appropriate command based on user input
program.parse(process.argv);