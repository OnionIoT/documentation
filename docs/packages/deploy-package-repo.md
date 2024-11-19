# Deploy a Package Repo

import { GiscusDocComment } from '/src/components/GiscusComment';

This article aims to explain how to deploy a software package repo - with the ultimate goal of enabling an Omega device to install packages from the deployed repo. To facilitate this, an example procedure of using an AWS S3 bucket to deploy a package repo is also included.

## What is a Package Repo?

Once a package is compiled, there needs to be a method for making the packages available to devices. A package repo is an HTTP file server that stores compiled packages, along with a package index. A package repo is used by the package manager on Omega2 devices as a source from which to install packages. 

A package repo helps enable and track the deployment of packages, which includes the package's release version. Hosting a package repo streamlines the deployment of custom packages using OpenWRT's existing infrastructure.

## Deploying a Package Repo

Once the packages have been compiled, they can then be deployed on a publicly accessible HTTP file server. An AWS S3 bucket is a practical choice for use as an HTTP file server.

:::tip

See the [Compile a Package article](./compile-package) for details on how packages can be compiled. Keep in mind that a package index is required by OPKG to recognize and install the packages from the repository. Follow the [Compiling packages for production instructions in the Compile a Package article](./compile-package#compiling-packages-for-production) to ensure a package index is also created during compilation.

:::

### Step 1: Setup Hosting for the Package Repo

Before deploying your packages, you will need a web-accessible place to store the packages. Onion's preferred method for hosting a Package Repo is an AWS S3 bucket.

**This step only needs to be done once!** 

Setup an AWS S3 bucket to store and host your packages. Follow the AWS documentation to set up your S3 bucket securely:

1. [Setting up and using an AWS S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-bucket.html) - create the bucket to host your package repo
1. [S3 Access control and enabling public access](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-management.html) - the files in the bucket must be publicly read accessible in order to be used by OPKG
1. [Enabling static website hosting from the S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EnableWebsiteHosting.html) - make it accessible through HTTP, which is how OPKG will access the repo



### Step 2: Copy Compiled Packages to the Package Repo

:::note

This step uses the AWS CLI (Command Line Interface). Learn more about AWS CLI in the [AWS Documentation](https://docs.aws.amazon.com/cli/).

:::

Use the following command to deploy compiled packages to the AWS S3 bucket:

```shell
aws s3 cp <local_path> s3://<s3_bucket_name>/<optional_subdirectory> --recursive --acl public-read
```

Replace the following parameters with the values noted:

- `<local_path>` with the local path of the compiled packages.
- `<s3_bucket_name>` with the name of the created S3 bucket.
- `<optional_subdirectory>` with any optional subdirectory within your bucket where you want to store the packages.

Explanation of flags:

- The `--recursive` flag ensures that all files and subdirectories are uploaded recursively.
- The `--acl public-read` switch enables public access to the files in the bucket, ensuring that the package repo is accessible by the [**package manager**](./opkg-package-manager.md) on the end device.


#### Example Command

Internally at Onion, after our custom packages are compiled using the OpenWRT SDK, this is the command we use to copy the compiled packages to the Onion Package Repo S3 bucket:

```
aws s3 cp --recursive --acl public-read "openwrt-sdk/bin/packages/mipsel_24kc/onion" "s3://repo.onioniot.com/omega2/packages/openwrt-23.05.3/onion"
```

<!-- TODO: update above with OPENWRT_RELEASE variable -->


### Step 3: Use the Package Repository

To use the newly deployed Package Repo on an Omega2 device, follow these steps

#### Step 3.1: Add the New Package Repository to OPKG Configuration
To inform OPKG about the new package repo, it must be added to the `/etc/opkg/customfeeds.conf` feed configuration file. 
Add a new line with your repository URL. Replace <your_repo_url> with the URL of your S3 bucket (including any optional subdirectory where your packages are stored):
```
src/gz custom_packages http://<your_repo_url>
```
For example, if your S3 bucket is accessible at `http://my-s3-bucket.s3-website-us-east-1.amazonaws.com/packages`, you would add:
```
src/gz custom_packages http://my-s3-bucket.s3-website-us-east-1.amazonaws.com/packages
```

:::tip

See the [Advanced Package Management article](./advanced-package-management) for more details on adding package repos.

:::

#### Step 3.2: Update the Package Lists

Refresh the package lists to include packages from your package repository:

```
opkg update
```

The new packages from your package repo will now be available to install.

#### Step 3.3: Install packages from the repo! 

You can now install packages from your custom repository using the `opkg install` command:

```
opkg install <package_name>
```

Replace `<package_name>` with the name of the package you want to install.

:::tip

See the [**OPKG Package Manager** article](./opkg-package-manager) for more detailed explanations on updating the package lists, searching for packages to install, and installing packages.

:::


<GiscusDocComment />
