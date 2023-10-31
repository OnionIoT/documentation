# Contributing

We welcome all feedback and suggestions, as well as Pull Requests!

## General Info

All doc articles are available in the `docs/` directory of this repo. The files are written in markdown and have `.md` exensions. 

In order for articles to be listed in the sidebar on the site, the `sidebars.js` file needs to be modified.

* **Markdown Syntax:** MDX is the parsing engine, which can do much more than just parsing standard Markdown syntax, like rendering React components inside  documents as well. More information here: https://docusaurus.io/docs/markdown-features
* **Sidebar:** The `sidebars.js` file determines the categories and ordering of documentation articles and categories on the side. To learn more, see https://docusaurus.io/docs/sidebar

## Editing a Docs Article

All docs articles can be found in the `docs/` directory. 

A document's URL location on `https://documentation.onioniot.com/` is its file path relative to the docs folder in this repo.

For example:
* URL for article: `https://documentation.onioniot.com/hardware-interfaces/external-storage`
* Path to markdown file `docs/hardware-interfaces/external-storage.md`

Make any edits as necessary and submit a Pull Request with:
* A brief description of the changes
* Why you believe this change is necessary

### Alternative

If you have the URL of an article but you're struggling to find the path to the article in this repo, head to the bottom of the article in your browser and click on **Edit this page**:

![docs article with edit button highlighted](./static/img/edit-article.png)

It will lead to the corresponding file on GitHub.

## Adding a Docs Article

Adding a new docs article involes: 

1. Making a new markdown file
2. Adding it to the sidebar definition

### Step 1: Making a New Markdown File

1. Create a new markdown file. 
2. To keep the docs articles organized, the new file should be nested in a directory that corresponds to it's category. Keep in mind the file path relative to `docs` in this repo will impact the doc article's URL.
3. Populate the Markdown file with the article contents. See the following for supported Markdown features: https://docusaurus.io/docs/markdown-features
4. Populate the **Front Matter** of the article. The front matter must define the Title of the article as this will show up in the side bar. Example of front matter below. See the following for more info: https://docusaurus.io/docs/create-doc#doc-front-matter. 

```
---
title: My Article Title
---
```

### Step 2: Adding it to the Sidebar Definition

The `sidebars.js` file defines the content of the sidebar. This includes the categories, which articles appear in which category, and the order of articles and categories.

See the Docusaurus sidebar documentation for more details: https://docusaurus.io/docs/sidebar

## Adding a Category

Occasionally, a new category will need to be added to the documentation site. 

To add a new category:

1. Create a new directory under `docs`, give it a descriptive name (with no spaces) to match the document category name
2. Update the `sidebars.js` file that defines the categories to add the new category and docs articles that are part of the category


> For more info on the Sidebar definition file, see [the section above](#step-2-adding-it-to-the-sidebar-definition)

## Testing your Changes Locally

Test all of your changes locally to make sure they render properly on the website.

See the **Developing** section in the [README](./README.md) for information on how to build the site on your local machine. Any modern computer with NodeJS installed will be able to handle building this site.