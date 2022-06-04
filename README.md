This is the applicaiton built for the The Princeton Ethiopian Miracles of Mary Project. It is meant to help users navigate, read and learn about stories cataloged through this project.


## Setup Instructions

### Replit Setup

The replit setup is by far the easiest method to quickly get a development server running. If you have a replit account, just import this github repository and set the run command as `npm run dev`. While replit is the fastest way to get onboarded, I've seen some issues on the replit version of the code that I've never seen on my local version, so it could be worth taking the time to setup the local environment.

### Local Setup

After importing the project, navigate into the project folder and run the command:

```bash 
npm install
```

And then run the development server with:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/*](http://localhost:3000/api/*). This endpoint can be edited in `pages/api/*.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Design
  ### Data
  The data in this webapp is powered by the data collected in this project: [pemm-data](https://github.com/Princeton-CDH/pemm-data). The project catalogs Miracles of Mary stories, found in Ethiopian, Eritrea & Egyptian manuscripts ranging from the 13th century - 19th centry.
  
  ### PEMM Web App
  #### Learn More about Next.js
  
    To learn more about Next.js, take a look at the following resources:
    
    - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
    - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
  ### Backend

## Getting Started

## Deployment

### AWS Amplify

Submit a Pull Request to get your code into the `main`, `lab1` or `lab2` branchs and amplify will auto detect and deploy the app.
