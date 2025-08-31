# Doc Autobot 🤖: AI-Powered Documentation Generator

**Automatically generate `README.md` and `CONTRIBUTING.md` files for any project using the power of Google's Gemini AI. A must-have CLI tool for developers.**

![Doc Autobot Logo](https://img.shields.io/badge/Doc%20Autobot-CLI%20Tool-blue?style=for-the-badge&logo=github)
![Version](https://img.shields.io/badge/version-1.0.7-yellow?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
[![Made with doc-autobot](https://img.shields.io/badge/Made%20with-doc--autobot🤖-blue?style=for-the-badge)](https://github.com/hemantpatel011/doc-autobot.git)

### 🔍 What is Doc Autobot?

Doc Autobot 🤖 is a powerful Command Line Interface (CLI) tool designed to eliminate the tedious task of writing boilerplate documentation. This developer tool automatically generates essential markdown files for your project.

Its main purpose is to create:

-   `README.md` → A professional, context-aware introduction to your project.
-   `CONTRIBUTING.md` → Clear, standardized guidelines for anyone wanting to contribute.

Instead of writing docs from scratch, Doc Autobot uses Google Gemini AI to analyze your project, understand its context (from files like `package.json`), and instantly generate high-quality, ready-to-use documentation.

### ⚡ Why Do You Need It?

We all know this struggle:

-   Writing good documentation is boring and time-consuming.
-   A missing or poor README makes a project look unprofessional and hard to use.
-   Every successful open-source project needs clear contribution guides.

👉 **Doc Autobot is the solution.** It removes friction by providing instant, intelligent, and consistent automatic documentation, letting you focus on coding.

### 🌟 Key Benefits

-   **Save Hours of Manual Work**: Stop writing repetitive docs and generate them in seconds.
-   **Look Professional**: Instantly give your project a polished, professional appearance.
-   **Standardize Documentation**: Keep your docs consistent across all your repositories.
-   **Perfect for Everyone**: Ideal for open-source maintainers, developers in hackathons, students, and anyone who wants to automate their workflow.

## Features

*   **AI-Powered README Generation**: Automatically creates a detailed `README.md` by analyzing your project's files and metadata.
*   **Automatic `CONTRIBUTING.md` Generation**: Quickly generates a standard, comprehensive `CONTRIBUTING.md` file.
*   **Interactive Wizard**: A user-friendly wizard guides you through the options if you run the tool without commands.
*   **Simple Commands**: Offers dedicated commands (`readme`, `contributing`, `both`) for specific file generation.
*   **Project Context Awareness**: Intelligently fetches details from `package.json` to create context-aware documentation.
*   **Works with Any Tech Stack**: A versatile developer tool for any project (Node.js, Python, Go, Rust, etc.).

## [Demo](https://github.com/hemantpatel011/doc-autobot/blob/main/README.md#demo)

## Installation

To use this Node.js CLI tool, you need Node.js (v18 or higher) installed.

### Global Installation (Recommended)

Install the tool globally to use it in any project on your system.

```bash
npm install -g doc-autobot
```

### Run without Installation

You can also run the tool directly without a global installation using `npx`.

```bash
npx doc-autobot
```

## Configuration

To enable AI-powered `README.md` generation, you must provide a Google Gemini API key.

1.  Obtain your key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  Create a `.env` file in the directory **where you run the `doc-autobot` command**.
3.  Add your API key to the `.env` file:

```
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE
```

## Usage

Once installed, you can run the following commands in your project's root directory.

### Interactive Mode

For a guided experience, run the main command without any arguments:

```bash
doc-autobot
```

### Direct Commands

*   **Generate a README file:**
    ```bash
    doc-autobot readme
    ```

*   **Generate a Contributing guide:**
    ```bash
    doc-autobot contributing
    ```

*   **Generate both files at once:**
    ```bash
    doc-autobot both
    ```

## Tech Stack

*   **Node.js**: The runtime environment.
*   **JavaScript (ESM)**: The programming language used.
*   **Gemini AI (`@google/generative-ai`)**: Powers the intelligent documentation generation.
*   **Commander.js**: For building the command-line interface.
*   **Inquirer.js**: For creating the interactive wizard.
*   **Chalk**: For colorful console output.
*   **Dotenv**: For managing environment variables.
*   **FS-Extra**: For file system operations.

## Folder Structure

```
doc-autobot/
├── src/                  # Source code for the CLI logic
│   ├── contributing-generator.js # Logic for generating CONTRIBUTING.md
│   ├── readme-generator.js     # Logic for generating README.md
│   └── utils/                  # Utility functions
├── .env                  # Environment variables
├── index.js              # Main entry point for the CLI
├── package.json          # Project metadata and dependencies
└── LICENSE               # Project license
```

## Contribution Guidelines

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines on how to get involved.

Please also adhere to our [Code of Conduct](docs/CODE_OF_CONDUCT.md) to ensure a welcoming and inclusive environment.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Show your support

Give a ⭐️ if you find this project useful!

## Author & Acknowledgements

**Hemant Patel**

*   GitHub: [hemantpatel011](https://github.com/hemantpatel011)
*   LinkedIn: [Hemant Patel](https://www.linkedin.com/in/hemant-patel-a67031341/)

> **Note**: This README was generated by `doc-autobot`!

Thanks to the developers of the open-source libraries that made this project possible.

[![Made with doc-autobot](https://img.shields.io/badge/Made%20with-doc--autobot🤖-blue?style=for-the-badge)](https://github.com/hemantpatel011/doc-autobot.git)
