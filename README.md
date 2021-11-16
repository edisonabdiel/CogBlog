<h1 align="center">CogBlog</h1>

<img width="1436" alt="Screenshot 2021-11-14 at 15 38 58" src="https://user-images.githubusercontent.com/43752457/141685864-5e5936af-42f0-4155-a951-ba7f8897e82d.png">

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#design-reasoning">Design Reasoning</a></li>
    <li><a href="#challenges">Challenges</a></li>
    <li><a href="#getting-stsrted">Getting Started</a></li>
  </ol>
</details>

## About The Project

CogBlog is a modern and fully fuctional blog for fictional characters who are also aspiring writters.

### Key Features

- Modern UI
- Extremely easy to use and intuitive
- Display a list of posts
- Display related posts
- Display a list of categories
- Display a list of post per category
- Display adjacent posts
- Allows you to comment on posts
- Teastable & Scalable
- Resposinve to different screen sizes

## Built With:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [SASS](https://sass-lang.com/)
- [GraphQL](https://graphql.org/)
- [GraphCMS](https://graphcms.com/)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [Google Fonts](https://fonts.google.com/)

### Dependencies

- moment.js
- React Icons
- html-react-parser
- next-themes
- react-multi-carousel

## Design Reasoning

The app was initialised completely from scratch in order to ensure a smooth integration between React - Next - TypeScript - TailwindCSS. 
Also built with a GraphQL API to allow for a more dynamic and scalable experience which integrates perfectly with the GraphCMS API. 

Components were built in a way that allows for a more dynamic and scalable experience which integrates perfectly with the GraphCMS API. 

The UI is meant to be minimalistic yet engaging and intuitive. It was built using SASS for global styles and TailwindCSS for styling to allow great control and autonomy over the layout of the app and also the design and feel of all the elements within it.

<p>all authors and posts are fictional and used for demo porpuses only</p>

## Challenges

Setting up the Post markup in PostDetail was particularly challenging as looping through every single type of content to subsequently add its respective styling was needed in order to display it as semantically as possible. Used a combination of map, if and switch statements to achieve this.

## Getting Started

Install the dependencies 

```bash
npm install
# or
yarn add install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Build 

```bash
npm run build
# or
yarn build
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

 ### Hosted on
 
  [Vercel](https://vercel.com/cogblog)

<h4 align="center">Made with loads of ❤️‍🔥</h4>
