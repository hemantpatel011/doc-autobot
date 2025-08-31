# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.6] - 2025-08-31

### Changed
- Updated documentation.
- Updated README.md.

## [1.0.5] - 2025-08-31

### Added
- Add Demo in Readme.md
### Changed

- Updated version to `1.0.4`.

## [1.0.4] - 2025-08-28

### Added
- Included a "Made with doc-autobot" badge at the end of every generated README.md.

### Changed
- Updated version to `1.0.4`.

## [1.0.3] - 2025-08-28

### Added
- Whitelisting for file extensions and specific configuration files to improve the context sent to the AI.
- Explicit exclusion of `README.md` from the project content sent to the AI to prevent self-referencing loops.

### Changed
- Updated the Gemini AI model to `gemini-2.5-pro` for higher quality `README.md` generation.
- Refined the `README.md` generation prompt to be more specific and yield better-structured output.
- Improved error handling in the `generateReadme` function.

## [1.0.2] - 2025-08-26

### Added

- Added `both` command to generate both `README.md` and `CONTRIBUTING.md` files.
- Added an interactive wizard to guide users through the file generation process.

### Changed

- Improved the `README.md` generation prompt for better results.
- Updated the `CONTRIBUTING.md` template with more detailed instructions.
- Enhanced the console output with `chalk` for better readability.

### Fixed

- Fixed a bug where the tool would crash if `package.json` was not found.
- Corrected typos in the command descriptions.

### Removed

- Removed unused dependencies to reduce the package size.

## [1.0.0] - 2025-08-20

### Added

- Initial release of `doc-autobot`.
- Feature: Generate `README.md` using Gemini AI.
- Feature: Generate `CONTRIBUTING.md` from a template.
- CLI commands: `readme`, `contributing`, `both`, and interactive wizard.