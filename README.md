<a href="https://flotiq.com/">
    <img src="https://editor.flotiq.com/fonts/fq-logo.svg" alt="Flotiq logo" title="Flotiq" align="right" height="60" />
</a>

Next JS starter for blog with Flotiq source
===========================

Kick off your project with this blog boilerplate. This starter ships with the main Next JS configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.
Check our live demo: [https://flotiq-nextjs-blog-1.netlify.app](https://flotiq-nextjs-blog-1.netlify.app) 

> [!NOTE]
> On the main branch, you can see a project based on the Next.js app router. This setup leverages the latest routing capabilities provided by Next.js, offering improved performance and flexibility. On the `page-router` branch, there is a starter that uses an older version of routing, specifically the page router. This version might be more familiar to those who have worked with previous iterations of Next.js.

## Quick start

1. **Start the project from template using npx**

    ```bash
    git clone https://github.com/flotiq/flotiq-nextjs-blog-1 flotiq-nextjs-blog-1
    ```

2. **Import example data from starter to Flotiq**

    ```bash
    npm i -g flotiq-cli
    cd flotiq-nextjs-blog-1
    flotiq import .flotiq [flotiqApiKey]
    ```
    _Note: You need to put your Read and write API key as the `flotiqApiKey` for import to work, You don't need any content types in your account._

3. **Configure application**

    The next step is to configure our application to know from where it has to fetch the data.
    
    Flotiq provides a tool named [flotiq-setup](https://github.com/flotiq/flotiq-setup)
    for automatically populating`.env` files with your Flotiq API keys.
    
    ```bash
    npx flotiq-setup
    ```
    
    After executing this command, a browser window will open with the Flotiq login screen. Upon successful authentication,
    the command will automatically generate appropriately filled `.env` files for you.

    If you want to use Google Analytics functionality add
    `NEXT_PUBLIC_GA_ID=123` to your `.env` file.

    _Note: If there are existing .env files in the project, flotiq-setup may overwrite them._

4. **Install dependencies**

    Navigate into your new site’s directory and run
    
    ```bash
    yarn install
    ```
   
5. **Flotiq codegen - install SDK**
    
    This package simplifies JavaScript Fetch API integration for your Flotiq project, tailored to your Flotiq account
    data.
    
    To install Flotiq SDK you can use flotiq-nextjs-setup CLI, that will not only seamlessly generate SDK for your Next.js project, but will also add content cache revalidation endpoint, handle draft mode for unpublished content on Flotiq and more. To use the flotiq-nextjs-setup CLI simply run the setup:

    ```bash
    npx flotiq-nextjs-setup
    ```
    If you want to read more about our flotiq-nextjs-setup CLI, refer to our [Flotiq NextJS docs](https://flotiq.com/docs/Universe/nextjs/nextjs-setup/).

    If instead you prefer to install only Flotiq SDK, manually, do the following steps:

    ```bash
    npx flotiq-codegen-ts generate --compiled-js
    ```
    
    Now, in your project, you can use the `FlotiqApi` class for easy and convenient communication with the Flotiq API.
    
    ```javascript
    import { FlotiqApi } from '../flotiqApi/index';
    const api = new FlotiqApi(apiKey);
    
    const postItem = await flotiq.BlogpostAPI.get({ id: '123' });
    const title = postItem.title;
    // ...
    ```

    Examples of its usage can be found in the `lib/blogpost.js` file of this project or can be explored in the
    [flotiq-codegen-ts repository](https://github.com/flotiq/flotiq-codegen-ts)
    
    _Note: If you make any changes (additions or deletions) to the `content type definitions` in your Flotiq account, you will need to rerun `npx flotiq-codegen-ts generate --compiled-js` command._

6. **Developing**
    
    Navigate into your new site’s directory and start it up.
    
    ```shell
    yarn dev
    ```
    
    Your site is now running at `http://localhost:3000`!
    
    Open the `flotiq-nextjs-blog-1` directory in your code editor of choice and edit `pages/[pages].js`. Save your changes and the browser will update in real time!

7. **Manage your content using Flotiq editor**
    
    You can now easily manage your content using [Flotiq editor](https://editor.flotiq.com)

    _Note: If you are using `FlotiqApi` generated from `flotiq-codegen-ts` remember to rerun `npx flotiq-codegen-ts generate --compiled-js`
    command after changes (additions or edits) to the `content type definitions` in your Flotiq_

## Deploy

Deploy this starter with one click on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fflotiq%2Fflotiq-nextjs-blog-1)

You can also deploy this project to [Heroku](https://www.heroku.com/) in 3 minutes:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2Fflotiq%2Fflotiq-nextjs-blog-1)

Or to [Netlify](https://www.netlify.com/):

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fflotiq%2Fflotiq-nextjs-blog-1)

## Learning Next.js

Looking for more guidance? Full documentation for Next.js lives [on the website](https://nextjs.org/). Here are some places to start:

- **To dive straight into code samples, head [to the Next.js documentation](https://nextjs.org/docs/getting-started).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Collaborating

If you wish to talk with us about this project, feel free to hop on our [![Discord Chat](https://img.shields.io/discord/682699728454025410.svg)](https://discord.gg/FwXcHnX).

If you found a bug, please report it in [issues](https://github.com/flotiq/flotiq-nextjs-blog-1/issues).
