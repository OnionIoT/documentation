# Style Guide

This Style Guide provides an overview of a consistent method for writing and editing Omega2 documentation. Internal team members and technical writers who are responsible for creating or updating documentation will find this guide helpful. 

Throughout the documentation process, standardization and effectiveness are maintained by following these guidelines.

## General Guidelines And Formating

### Audience  

The guidelines are designed for technical writers, subject matter experts, and any other internal team member who wants to create or edit documentation.

### Tone and Style

- Use a clear and concise writing style.
- Follow the standard capitalization rules of American English.
- Maintain a professional technical tone and use a third-person POV (Point of View).
- Use active voice for clarity. 
- Maintain consistency in tone across all documents.

### Formatting

- Maintain consistent Markdown formatting throughout the document development process(e.g. follow [Markdown Cheatsheet](https://www.markdownguide.org/cheat-sheet/) )
- Use the following format to create a page title. D not use both a title and an H1 in the document as this violates Markdown rules.

```mdx
---
title: My Title
---
```

- Use headings and subheadings tags using markdown hashtags (e.g. # for H1, ## for H2 and ### for H3 etc.)
- For notes, tips, and warnings, use the built-in admonitions from [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions) syntax.
- For single inverted commas, add customized commas without copy-paste (e.g. ` ’` replace it with ``` ' ``` by typing it in the markdown file)

**Example:** If document contains the phrase `Omega’s`, it should be manually converted to ```Omega`s```.

- Don't highlight code syntax for bash scripting (e.g. use only ```CODE_SNIPPET```)
- Avoid unnecessary line space in the markdown file.
- Maintain names and version references for every software package (e.g. `omega2-ctrl_0.3-1_mipsel_24kc.ipk` )
- Use descriptive names for user-replaced values.

**Example:** If a package name is used and it is replaceable according to a specific version then use `<value_name>`.
It should be surrounded by angle brackets `< >` and separated underscores `_` for multi-word values.
**e.g.** `<PACKAGE_VERSION>`

- Links and Hyperlinks
	- URLs must lead to the correct target locations within the document or to a valid external web page location.
	- Use relative links within articles when linking to other sections of the documentation.
	- Links and Hyperlinks should be embedded when possible.
		- **Example:** Instead of saying - see the Reference Guide at: http://somedocument - you should say - see the [Reference Guide](link_url), where the link is embedded.
- Do not promise features that are in development and not in public. Only document features that exist already or that will be finished before the document is live.
- Don't use a filename extension to refer to a type of file. 
 - **Example:** Use an `IPK` file instead of a `.ipk` file. 
- Use qualifying nouns for technical keywords. 
 - **Example:** When referring to a file called `example.ipk`, call it the `example.ipk` file and not an `example.ipk` by itself.

### File Naming Conventions

Standard file naming conventions should be used for both Markdown and image files.

#### Markdown Files

Onion uses lowercase filenames for all Markdown files. For longer filenames use the en dash between words.

**Example:**

*Correct:* one-wire-devices.md

*==Incorrect==:* One-Wire-Devices.md

#### Image Files

Onion uses lowercase filenames for all image files. For longer filenames use the en dash or the underscore character between words. (*Do not use spaces between words.*)

Use short descriptive names for the image file names.

**Example:**

*Correct:* omega2-pinout-pwm-highlights.png

*Correct:* omega2-pinout_pwm-highlights.png

*==Incorrect==:* omega2 pinout pwm highlights.png

## Grammar and Language

- Follow a recognized grammar style guide by following American English rules.
- Use correct spelling and grammar.
- Avoid words like "simple," "straightforward," "easy," "simple," "obviously," and "just,".
- Define acronyms and terms on first use **e.g. OPKG: Open Package Management**.
- Write high-quality, engaging content and provide a high-level overview of a specific topic.
- Provide context. Don't assume that the reader already knows everything.
- Don't try to write exactly the way you speak;  Don't try to be super-entertaining. 

## Visual Elements

### Images and Diagrams

- Use clear and relevant visuals.
- Use **[draw.io](https://app.diagrams.net)** to create state diagrams.
- Maintain a consistent style for captions for every diagram.
- Ensure proper resolution and clarity for images to enhance visibility.
- Test diagrams on different platforms to ensure responsiveness and compatibility.
- Embed images directly into the document to avoid broken links or dependencies.
- If a diagram is needed then store these images in the **OnionIoT/documentation repo** for future reference.

### Code Snippets

- Use markdown syntax to add code snippets `(```YOUR_CODE_SNIPPET```)`.
- Specify the code language `(```shell YOUR_CODE_SNIPPET```)`

**Example:** if the code snippet is **opkg update** then convert it into

 ```shell
opkg update
```

- Highlight important code elements in line using a single quotation (e.g. ``` `INLINE_CODE` ```)

**Example:** If the inline code element is **.config** then convert it into `.config` 

- Do not use screenshots to show code examples.
- Avoid incorporating copyrighted code from external sources; instead, reference it by providing a link to the source.
- Use syntax highlighting for better code readability.

**Example:** If a code snippet is written in JavaScript(e.g. for NodeJs) then convert it into:

    ```js
    function A(){
    //code
    }
    ```

- Test code snippets in the relevant environment/platforms to verify compatibility and accuracy.
- Provide code snippets that conform to the most recent firmware software versions or configurations.

## Onion Corp Documentation Template 

Onion Corp. adheres exclusively to the syntax conventions of Markdown and Docusaurus to create all documentation. This template is helpful for new technical writers and internal team members.

Follow the given documentation template structure to create documentation.

## Documentation Structure

### Title

#### Introduction

Write a **high-level** overview in **3 to 4 sentences** and make it relevant to the topic. Do not cover out-of-the-box things.

#### Topic TL;DR

Write an engaging **closer/ tl;dr** in 2 to 3 sentences and stick to the topic.

### Level 1: Heading

#### Article Body

Follow only standard American English rules and use a **professional technical tone** as **third person POV(point of View)**

**Format:** Use supported markdown and docusaurus syntax 

**Inline Code:**  For inline code follow a single quotation using markdown syntax.

**Code Snippet:**  Follow **[markdown syntax](https://www.markdownguide.org/cheat-sheet/)**.

**Admonitions:** Use **[Docusaurus admonitions](https://docusaurus.io/docs/markdown-features/admonitions)** syntax for highlighting tip, note, info, warning, and danger lines accordingly.

**Diagrams:** Use the syntax provided by **[draw.io](https://app.diagrams.net)** when creating state diagrams and flowcharts for clearer comprehension. Additionally, include markdown comments within the diagram code to facilitate future modifications.

**Note:** Rearrange the following points by the specified documentation topic accordingly. For a more detailed overview follow the style guide points.

### Level 2: Heading

Follow the same points written in Level 1: Heading

### Level 3: Heading

Follow the same points written in Level 1: Heading

**bold text**
Follow the same points written in Level 1: Heading

### Article Comments

To include a comment box on an article (powered Giscus and Github Discussions), add the following to the bottom of the article markdown:

```mdx
import { GiscusDocComment } from '/src/components/GiscusComment';

<GiscusDocComment />
```
