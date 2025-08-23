# Contributing to doc-autobot

First off, thank you for considering contributing to `doc-autobot`! It’s people like you that make the open-source community such a great place. Your contributions are valuable and will help make this tool better for everyone.

This document provides guidelines for contributing to the project. Please read it carefully to ensure a smooth and effective contribution process.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](docs/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior.

## How Can I Contribute?

There are many ways to contribute, from writing code and documentation to reporting bugs and suggesting new features.

*   **Reporting Bugs:** If you find a bug, please open an issue on GitHub.
*   **Suggesting Enhancements:** If you have an idea for a new feature or an improvement to an existing one, please open an issue to discuss it.
*   **Pull Requests:** If you want to contribute code, you can open a pull request.

## Getting Started: Your First Contribution

Ready to make a contribution? Here’s how to set up the project for local development.

### 1. Fork the Repository

Click the "Fork" button at the top right of the [repository page](https://github.com/hemantpatel011/doc-autobot) to create a copy of the project in your own GitHub account.

### 2. Clone Your Fork

Clone the repository to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/doc-autobot.git
cd doc-autobot
```

### 3. Install Dependencies

This project uses Node.js and npm for dependency management. Make sure you have them installed.

```bash
npm install
```

This will install all the necessary dependencies listed in `package.json`.

### 4. Create a Development Branch

Create a new branch for your changes. Use a descriptive name for your branch.

```bash
git checkout -b feature/your-new-feature-name
```

or for a bug fix:

```bash
git checkout -b fix/issue-description
```

### 5. Make Your Changes

Now you can start making your changes to the code. The main logic for the CLI is in `index.js` and the `src` directory.

Since this is a CLI tool, you can run it locally to test your changes:

```bash
node index.js [command] [options]
```

For example, to generate a README file:

```bash
node index.js generate readme
```

### 6. Commit Your Changes

Once you are happy with your changes, commit them with a clear and descriptive commit message. We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

```bash
git add .
git commit -m "feat: Add a new feature"
# or
git commit -m "fix: Resolve a bug"
```

### 7. Push to Your Fork

Push your changes to your forked repository on GitHub:

```bash
git push origin feature/your-new-feature-name
```

### 8. Open a Pull Request

Go to your fork on GitHub and click the "New pull request" button. Fill out the pull request template with a description of your changes and why they are needed.

## Style Guide

Please follow the existing code style in the project. We use a linter to enforce a consistent style. Before submitting your pull request, make sure your code is free of linting errors.

## Testing

Currently, we are working on adding a comprehensive test suite. If you are adding a new feature, please consider adding tests for it.

## Questions?

If you have any questions, feel free to open an issue on GitHub. We are here to help!