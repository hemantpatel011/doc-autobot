# Doc Autobot 🤖

![Doc Autobot Logo](https://img.shields.io/badge/Doc%20Autobot-CLI%20Tool-blue?style=for-the-badge&logo=github)
<<<<<<< HEAD
![Version](https://img.shields.io/badge/version-1.0.5-blue?style=for-the-badge)
=======
![Version](https://img.shields.io/badge/version-1.0.3-yellow?style=for-the-badge)
>>>>>>> 33d74a22fd421f1803f4bc87e775254d835032ed
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

### 🔍 What is Doc Autobot?

Doc Autobot 🤖 is a Command Line Interface (CLI) tool designed to save developers from the pain of writing boilerplate documentation.

Its main job is to automatically generate two essential files every project needs:

- `README.md` → The main documentation file for your project.
- `CONTRIBUTING.md` → Guidelines for contributors.

Instead of starting from scratch, Doc Autobot uses Google Gemini AI to analyze your project, fetch details like package.json, and instantly create professional, context-aware, ready-to-use docs.

### ⚡ Why Doc Autobot?

We all know this struggle:

- Writing good documentation is boring and time-consuming.
- A missing or poor README makes projects look unprofessional.
- Every open-source project needs at least a README + CONTRIBUTING guide.

👉 Doc Autobot removes that friction — by generating high-quality documentation instantly, intelligently, and consistently.

### 🌟 Why It’s Useful

- Saves hours of manual writing.
- Helps beginners maintain professional-looking projects.
- Standardizes docs across repositories.
- Perfect for open-source maintainers, hackathons, and students.

## Features

*   **AI-Powered `README.md` Generation:** Automatically creates a detailed `README.md` by analyzing your project's content.
*   **Templated `CONTRIBUTING.md` Generation:** Quickly generates a standard `CONTRIBUTING.md` file.
*   **Interactive Wizard**: If you run the tool without commands, a user-friendly wizard guides you through the options.
*   **Multiple Commands**: Offers dedicated commands for generating specific files.
*   **Project Context Awareness**: Fetches details from `package.json` to inform documentation generation.
*   **Tech Stack Agnostic**: Useful for any type of project.


## Demo
![1](https://github.com/user-attachments/assets/29988f14-da9e-4af3-b9c5-a8d6d5475afa)
![2](https://github.com/user-attachments/assets/0ffa2c31-43ae-4703-bd42-1c3cc0481e8e)
![3](https://github.com/user-attachments/assets/1eddafb6-13ef-42a2-8899-b46ab3f717f3)


* **BEFORE**

<img width="1885" height="921" alt="Before_Mzackybot" src="https://github.com/user-attachments/assets/feb1b4f5-5108-4d3b-abab-3e3fdd2b6e8e" />


* **AFTER**    [View full after repository](https://github.com/hemantpatel011/MackyBot)

  <img width="1891" height="909" alt="Screenshot 2025-08-24 032036" src="https://github.com/user-attachments/assets/711076fc-7baa-4340-b6c3-39b8eb50a57e" />
  

## Installation

To use Doc Autobot, you need Node.js (v18 or higher) installed.

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
* GitHub: [hemantpatel011](https://github.com/hemantpatel011)
* LinkedIn: [Hemant Patel](https://www.linkedin.com/in/hemant-patel-a67031341/)

> **Note**: This README was generated by `doc-autobot`!

Thanks to the developers of the open-source libraries that made this project possible.

[![Made with doc-autobot](https://img.shields.io/badge/Made%20with-doc--autobot🤖-green?style=for-the-badge)](https://github.com/hemantpatel011/doc-autobot.git)
