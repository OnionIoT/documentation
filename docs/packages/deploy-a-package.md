# Deploy a Package Repo

import { GiscusDocComment } from '/src/components/GiscusComment';

<!-- TODO: potentially rename this file so it fixes the URL? -->

<!-- TODO: rewrite this intro to make it clear the article aims to explain and show an example of deploying a package repo that can be used by an Omega device -->

<!-- TODO: in whole article change HTTP web server -> HTTP file server -->

The primary aim of this article is to offer an accessible method for deploying and accessing packages from an HTTP web server. A process is provided to use an AWS S3 bucket for deploying packages and maintaining a package feed repository on a remote web server.

## Package repo

A package repo is an HTTP web server that stores compiled packages along with a package index. It is used by the package manager on Omega2 devices as a source from which to install packages. A package repo helps enable and track the deployment of packages, which includes the package's release version. Hosting a package repo streamlines the deployment of custom packages using OpenWRT's existing infrastructure.

## Deploy the package repo

Once the packages have been compiled, they can then be deployed on a reliable HTTP web server that is publicly accessible. The AWS S3 bucket is a practical choice for use as an HTTP web server.

### Step 1: Setup Hosting for the Package Repo

Before deploying your packages, you will need a web-accessible place to store the packages. Onion's preferred method for hosting a Package Repo is an AWS S3 bucket.

**This step only needs to be done once!** 

Setup an AWS S3 bucket to store and host your packages.  We encourage readers to read and follow the AWS documentation on:

1. [Setting up and using an AWS S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) - create the bucket to host your package repo
1. [S3 Access control and enabling public access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-management.html) - the files in the bucket must be publicly read accessible in order to be used by OPKG
1. [Enabling static website hosting from the S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EnableWebsiteHosting.html) - make it accessible through the HTTP, which is how OPKG will access the repo

### Step 2: Copy Compiled Packages to the Package Repo

Use the following command to deploy the compiled packages to the created AWS S3 bucket:

```shell
aws s3 cp <local_path> s3://<s3_bucket_name>/<optional_subdirectory> --recursive --acl public-read
```

Replace the following parameters with the values noted:

- `<local_path>` with the local path of the compiled packages.
- `<s3_bucket_name>` with the name of the created S3 bucket.
- `<optional_subdirectory>` with any optional subdirectory within your bucket where you want to store the packages.
- The `--recursive` flag ensures that all files and subdirectories are uploaded recursively.
- The `--acl public-read` switch enables public access to the files in the bucket, ensuring that the package repo is accessible by the [**package manager**](./opkg-package-manager.md) on the end device.

<!-- TODO: add an example based on onion's usage -->

### Step 3: Use the package repository

To use the AWS S3 bucket as the deployed package repository, use the opkg package manager to install these packages on an Omega2 device.

See the [Advanced Package Management article](./advanced-package-management) for information on adding a package repo to the OPKG configuration.

Then refer to the instructions provided in the [**OPKG Package Manager**](./opkg-package-manager) article for explanations on updating the package lists, searching for packages to install, and installing packages.

<!-- TODO: spell out exactly what’s needed to be done: add package repo to opkg, opkg update to refresh the package lists, and the new packages are now available -->

<GiscusDocComment />
