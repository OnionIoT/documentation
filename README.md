# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# TO DO

general:

* [x] remove blog files
* [x] setup CD
* [x] add a contributing info file
* [ ] add pop-up notice stating these are new docs for beta firmware
* [ ] update theme

content:
* [x] add all content from OnionIoT/OpenWRT-Packages repo openwrt-22.03 technical doc page
* [x] add real intro
* [x] improve feedback page - formatting + link to feedback on docs
* [x] add ledchain article
* [x] add how firmware works article
* [x] add device tree overlay category with intro describing what it is and why it's important
* [x] add software spi device tree overlay article
* [ ] populate pin multiplexing docs article