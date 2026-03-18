# Small Overview

It's a desktop app for learning german using AI for generating tests.

The application was coded with Electron-Vite-React, TypeScript and Huggingface API for AI.

## Setting up

Install all npm modules

```bash
cd ai-deutsch-test
npm i
```

(Optional) If you want to use Demo version with no API requests to HF make sure you set in App.tsx

```tsx
const isDemo = true;
```

Create .env and fill it with your Huggingface API Key

```
HF_TOKEN="hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

To run an app:

```bash
npm run dev
```

## Gallery

![alt text](./readme-img/image01.png)

![alt text](./readme-img/image02.png)

![alt text](./readme-img/image03.png)

![alt text](./readme-img/image04.png)

![alt text](./readme-img/image05.png)
