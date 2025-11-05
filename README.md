# Nameify

Nameify is a lightweight, user-friendly web app for discovering and exploring business names. Whether you're starting a business, changing the name of your brand, or thinking about starting a business, Nameify helps you brainstorm ideas, preview them, and pick the best fit.

<div align="center">

![namify-showcase1](https://github.com/user-attachments/assets/214b65b9-cf98-48db-ac62-1fa7a845e2f1)

</div>

---

Table of Contents
- About
- Demo
- Features
- Tech stack
- Quick start
- Configuration
- Deployment
- Contributing
- Support
- License

---

About
-----
Nameify is a backend focused project that provides an interactive interface to generate, and evaluate business names. The UI is designed to be clean and fast and is deployed at the Koyeb URL below.

Demo
----
Open the live demo: https://nameify.koyeb.app/

Features
--------
- Business name generation
- Responsive, mobile-first UI.

Tech stack
----------
- NodeJS
- Express
- EJS
- TailwindCSS
- JavaScript 
- Hosting: koyeb

Quick start
-----------
Prerequisites
- Node.js (v16+ recommended)
- A package manager: npm, yarn, or pnpm 

Clone the repo
```bash
git clone https://github.com/devjenko/Nameify.git
cd Nameify
```

Install dependencies
```
- npm i
```

Run locally
```
- npm run watch:css
- npm run dev
```

Build for production
```
npm run build
```

Configuration
-------------
The business name generator uses an LLM api to generate business names. If you wish to clone the project and test it out yourself you will need to create a .env file and paste in your own LLM api key to be able to use the generation. 

Deployment
----------
This project is currently hosted on Render: https://nameify.koyeb.app/


Contributing
------------
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: git checkout -b feature/your-feature
3. Commit your changes: git commit -m "Add your feature"
4. Push to your branch and open a Pull Request.

Support
-------
If you have questions or need help, open an issue in the repository or contact the maintainer:

- Owner: @devjenko
- Project page: https://github.com/devjenko/Nameify
- Live demo: https://nameify.koyeb.app/

License
-------
“All Rights Reserved” — no one can copy, modify, or distribute this work without permission.

Acknowledgements
----------------
- Inspiration, libraries, or data sources used:
- MistralAi API
- DaisyUi Components 
---
