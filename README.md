# Markdown to PDF Converter

This is a simple web application that allows you to convert Markdown files into PDF documents. You can either type or paste Markdown content into the editor or upload an existing Markdown file. The application then uses [Pandoc](https://pandoc.org/) and [markdown-pdf](https://www.npmjs.com/package/markdown-pdf) to perform the conversion and provide you with a downloadable PDF file.

## Getting Started

Follow these steps to set up and run the Markdown to PDF Converter locally:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

```bash
   git clone https://github.com/your-username/markdown-to-pdf.git
```

2. cd markdown-to-pdf

3. npm install

### Configuration
Before running the application, make sure that you have Pandoc and LATEX installed on your system. You can download it from the Pandoc website.

### Pandoc command to convert markdown to PDF
pandoc "markdownFileName".md --pdf-engine=xelatex -o "pdfName".pdf

### Running the Application
To start the application, use the following command:

```
npm start
```

### Usage

- Enter or paste your Markdown content into the editor.

- To upload an existing Markdown file, click the "Upload Markdown File" button.

- Click the "Convert to PDF" button to generate a PDF file from your Markdown content.

- The PDF file will be available for download.

### License
This project is licensed under the MIT License. See the LICENSE file for details.
