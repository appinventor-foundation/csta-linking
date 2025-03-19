# CSTA Standards Linking Tool

[![Next.js](https://img.shields.io/badge/Next.js-15.2.2-blue.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-blue.svg)](https://tailwindcss.com/)

A tool designed to help educators, teachers, and policymakers better determine how their curriculum aligns with Computer Science Teachers Association (CSTA) standards. This application provides a PDF analysis tool to identify relevant standards in educational materials.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
- [Usage](#usage)

## Features

### PDF Analysis Tool

Upload educational materials (PDF format) to:
- Automatically identify relevant CSTA National standards
- View matching state standards
- Adjust confidence thresholds for matches
- See detailed information about each standard

## Technologies

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **AI**: OpenAI API for content analysis
- **Vector Database**: Pinecone for semantic search
- **Data Processing**: Custom data processing for standards data

## Setup

### Prerequisites

- Node.js (v18 or higher)
- Yarn
- PostgreSQL database
- OpenAI API key
- Pinecone API key

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/csta_standards"

# OpenAI
OPENAI_API_KEY="your-openai-api-key"

# Pinecone
PINECONE_API_KEY="your-pinecone-api-key"
```

#### Setting Up PostgreSQL

1. Install PostgreSQL if you haven't already
2. Create a new database:
   ```bash
   createdb csta_standards
   ```
3. Update the `DATABASE_URL` in your `.env` file with your PostgreSQL credentials

For more information on setting up PostgreSQL, refer to the [official documentation](https://www.postgresql.org/docs/current/tutorial-start.html).

#### Obtaining API Keys

- **OpenAI API Key**: Sign up at [OpenAI Platform](https://platform.openai.com/) and create an API key
- **Pinecone API Key**: Create an account at [Pinecone](https://www.pinecone.io/) and create an API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/appinventor-foundation/csta-linking.git
   cd Data-Processing
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Generate Prisma client:
   ```bash
   yarn generate
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### PDF Analysis

1. Navigate to the PDF Analysis page by clicking "Analyze PDF" on the home page
2. Upload a PDF file containing educational material
3. Select a state (optional) to see state-specific standards
4. Adjust the confidence threshold as needed
5. Click "Upload and Analyze" to process the document
6. View the matching CSTA standards and related state standards

