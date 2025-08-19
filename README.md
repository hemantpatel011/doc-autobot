# doc-autobot

A CLI tool to automatically generate `README.md` and `CONTRIBUTING.md` files for your projects. Doc Autobot streamlines the documentation process by leveraging AI to generate comprehensive and professional project documentation.

## Screenshots

*(Add screenshots or GIFs demonstrating the CLI in action here)*

## Features and Functionalities

*   **AI-Powered README Generation**: Leverages the Gemini API to analyze your project content and generate a comprehensive `README.md` file, covering various aspects of your project.
*   **CONTRIBUTING.md Generation**: Automatically creates a standard `CONTRIBUTING.md` file with common guidelines for contributors, promoting a clear contribution process.
*   **Interactive CLI**: Provides a user-friendly command-line interface using `inquirer` for an intuitive experience, guiding users through the documentation generation process.
*   **Flexible Generation Options**: Allows users to generate `README.md` only, `CONTRIBUTING.md` only, or both files in a single run.
*   **Project Content Analysis**: Automatically detects project details from `package.json` and scans other relevant project files to gather information for accurate and comprehensive documentation generation.

## Available npm/yarn scripts

You can run the following scripts using `npm` or `yarn`:

*   `npm start`: `node index.js` - Runs the CLI tool directly from its entry point.

Additionally, `doc-autobot` is designed as a global CLI tool and can be executed directly after installation:

*   `doc-autobot`: Runs the interactive wizard, prompting you to choose which files to generate.
*   `doc-autobot readme`: Generates only the `README.md` file for your project.
*   `doc-autobot contributing`: Generates only the `CONTRIBUTING.md` file for your project.
*   `doc-autobot both`: Generates both `README.md` and `CONTRIBUTING.md` files.

## Installation Steps

### Prerequisites

*   **Node.js**: Ensure you have Node.js (version 18 or higher recommended) installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Global Installation (Recommended)

To use `doc-autobot` as a global command-line tool accessible from any directory, install it via npm:

```bash
npm install -g doc-autobot
```

After successful installation, you can run `doc-autobot` from any directory on your system.

### Without Global Installation

You can also use `doc-autobot` directly without a global installation using `npx`:

```bash
npx doc-autobot
```

### Local Installation (for development or direct project use)

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/hemantpatel011/doc-autobot.git
    cd doc-autobot
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the CLI**:
    ```bash
    npm start
    # or execute the binary directly:
    ./index.js
    ```

## Tech Stack

*   **Node.js**: The JavaScript runtime environment for building the CLI tool.
*   **Commander.js**: A robust library used for building elegant command-line interfaces.
*   **Inquirer.js**: Provides interactive command-line user interfaces for prompts and choices.
*   **Chalk**: A library for terminal string styling, used to make console output more readable and engaging.
*   **Dotenv**: Used to load environment variables from a `.env` file into `process.env`.
*   **fs-extra**: Extends Node.js's native `fs` module with additional useful file system methods.
*   **Google Generative AI SDK (`@google/generative-ai`)**: The core component for AI-driven documentation generation, powered by Gemini models.

## Environment Variables

To enable the AI-powered README generation feature, you need to set up your Gemini API key.

1.  Obtain a `GEMINI_API_KEY` from the [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Create a `.env` file in the root directory of the `doc-autobot` project (or in the directory from which you run the CLI, if installed globally).
3.  Add your Gemini API key to this file:

    ```env
    GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
    ```

## Folder Structure Overview

```
.
├── .env                  # Environment variables (e.g., GEMINI_API_KEY)
├── .gitignore            # Specifies intentionally untracked files to ignore
├── CONTRIBUTING.md       # Guidelines for contributing to this project
├── index.js              # Main CLI application entry point
├── package.json          # Project metadata, scripts, and dependencies
├── package-lock.json     # Records the exact dependency tree
├── LICENSE               # Project's license file (MIT License)
├── docs/                 # Additional project documentation
│   ├── CHANGELOG.md      # Chronological list of project changes
│   └── CODE_OF_CONDUCT.md # Community code of conduct
└── src/                  # Source code for the CLI's functionalities
    ├── contributing-generator.js # Logic for generating CONTRIBUTING.md content
    ├── readme-generator.js       # Logic for generating README.md content using AI
    └── utils/                    # Utility functions and AI integration
        ├── gemini.js             # Handles interaction with the Gemini AI API
        └── helpers.js            # Helper functions for project analysis and file handling
```

## Contribution Guidelines

We welcome contributions to Doc Autobot! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for more details on how to get started, report bugs, or suggest new features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author Information

*   **Hemant Patel**

## Acknowledgements

*   Thanks to the developers and communities behind **Commander.js**, **Inquirer.js**, **Chalk**, **Dotenv**, **fs-extra**, and the **Google Generative AI SDK** for providing invaluable tools that made this project possible.