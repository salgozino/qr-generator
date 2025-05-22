# QR Code Generator

This project is a Next.js web application that allows users to input a URL and generate a QR code for that URL. It provides a user-friendly interface and utilizes utility functions for QR code generation.

## Project Structure

```
├── src
│   ├── app
│   │   ├── layout.tsx          # Layout component for the application
│   │   └── page.tsx            # Main entry point of the application
│   ├── components
│   │   └── QRCodeGenerator.tsx  # Component for generating QR codes
│   └── utils
│       └── qr-generator.ts      # Utility functions for QR code generation
├── .env                          # Environment variables
├── .gitignore                    # Files and directories to ignore by Git
├── next.config.js                # Configuration settings for Next.js
├── package.json                  # npm configuration file
├── tsconfig.json                 # TypeScript configuration file
└── README.md                     # Documentation for the project
```

## Getting Started

To get started with the QR Code Generator project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd qr-generator-web
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Run the application:**
   ```bash
   yarn run dev
   ```
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. Enter a URL in the input field.
2. Click the "Generate QR Code" button.
3. The QR code will be displayed on the page.

## License

This project is licensed under the MIT License.
