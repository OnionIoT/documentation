# Onion Documentation

Welcome to the source for https://documentation.onioniot.com/

This repo is based on [Docusaurus 2](https://docusaurus.io/), a modern static website generator and is used to build our documentation site. 

Continuous Deployment (CD) is setup for this repo so all pushes to the `main` branch will automatically update the https://documentation.onioniot.com/ site.

**This is documentation for firmware based on OpenWRT 23.05 only! Visit the legacy https://docs.onion.io site for documentation on the v0.3.4 (and earlier) firmware**

## Editing Documentation

All doc articles are available in the `docs/` directory of this repo. The files are written in markdown and have `.md` exensions. 

In order for articles to be listed in the sidebar on the site, the `sidebars.js` file needs to be modified.

* **Markdown Syntax:** MDX is the parsing engine, which can do much more than just parsing standard Markdown syntax, like rendering React components inside  documents as well. More information here: https://docusaurus.io/docs/markdown-features
* **Sidebar:** The `sidebars.js` file determines the categories and ordering of documentation articles and categories on the side. To learn more, see https://docusaurus.io/docs/sidebar


## Developing 

You shouldn't need to run the site if you simply want to edit the documentation, although you could if you want to be sure it works as expected. See the details below

### Local Development

First, install dependencies

```
yarn
```

Next, run the site:

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### CI Build

```
$ npm ci
$ npm run build
```

This is the command the AWS Amplify CI (Continuous Integration) system uses to build the site (generate static content into the `build` directory). This has stricter rules than the local development build. 
