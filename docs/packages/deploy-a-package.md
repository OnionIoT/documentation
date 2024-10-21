# Deploy a Package Repo

import { GiscusDocComment } from '/src/components/GiscusComment';

The primary aim of this article is to offer an accessible method for deploying and accessing packages from an HTTP web server. A process is provided to use an AWS S3 bucket for deploying packages and maintaining a package feed repository on a remote web server.

## Package repo

A package repo is an HTTP web server that stores compiled packages along with a package index. It is used by the package manager on Omega2 devices as a source from which to install packages. A package repo helps enable and track the deployment of packages, which includes the package's release version. Hosting a package repo streamlines the deployment of custom packages using OpenWRT's existing infrastructure.

## Deploy the package repo

Once the packages have been compiled, they can then be deployed on a reliable HTTP web server that is publicly accessible. The AWS S3 bucket is a practical choice for use as an HTTP web server.

### Step 1: Deploy a package feed

Before deploying your packages, you will need to create and configure an AWS S3 bucket.

:::tip

For more information on setting up and using an **aws-s3** bucket, see the [**aws documentation**](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html).

:::

:::note

Make sure that the bucket is configured to allow public access.

:::

Use the following command to deploy the compiled packages to the created AWS S3 bucket:

```shell
aws s3 cp <local_path> s3://<s3_bucket_name>/<optional_subdirectory> --recursive --acl public-read
```

Replace the following parameters with the values noted:

- **<local_path>** with the local path of the compiled packages.
- **<s3_bucket_name>** with the name of the created S3 bucket.
- **<optional_subdirectory>** with any optional subdirectory within your bucket where you want to store the packages.
- The **--recursive** flag ensures that all files and subdirectories are uploaded recursively.
- The **--acl public-read** switch enables public access to the files in the bucket, ensuring that the package repo is accessible by the [**package manager**](./opkg-package-manager.md) on the end device.

### Step 2: Use the package repository

To use the AWS S3 bucket as the deployed package repository, use the opkg package manager to install these packages on an Omega2 device.

Refer to the instructions provided in the [**OPKG Package Manager**](./opkg-package-manager.md) article. This article explains how to install packages from an HTTP web server, update existing packages, or remove installed packages from an Omega2 device.

<GiscusDocComment />
