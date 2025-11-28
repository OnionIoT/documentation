---
title: Exploring the File System
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Exploring The File System {#exploring-the-file-system}

Linux organizes everything into files and directories. By the end of this section you will be able to navigate directories and create or delete both directories and files.

### How To Navigate In Linux

Connect to your Omega and open a terminal.

#### `pwd`

Use `pwd` (print working directory) to display your current location:

```
pwd
```

![pwd output](http://i.imgur.com/oisFW07.png)

If `pwd` prints `/`, you are at the root of the filesystem. Any other path indicates a subdirectory.

#### `ls`

The `ls` command lists the contents of the current directory. Run it to see what lives in `/`:

```
ls
```

![ls output](http://i.imgur.com/vmAsoz8.png)

Depending on your terminal, files may be color-coded (blue for directories, green for executables, etc.). Use `ls -l` for a detailed listing that shows permissions and ownership.

#### `cd`

The `cd` command changes directories. Supply a path to move to a new location:

```
cd /usr/bin
```

Confirm the change with `pwd`. A few helpful variations:

| Command | Description |
| --- | --- |
| `cd` | Return to the root directory. |
| `cd ..` | Move up one directory level. |
| `cd .` | Stay in the current directory. |
| `cd -` | Jump back to the previous directory. |

### How To Create/Delete Files And Directories

#### `mkdir`

Create directories with `mkdir` followed by the name or path:

```
mkdir NewDirectory
```

```
mkdir newdirectoryname1 newdirectoryname2 newdirectoryname3
```

```
mkdir /tmp/usr/NewDirectory
```

![mkdir output](http://i.imgur.com/p31a1Y4.png)

#### `rmdir`

Remove empty directories with `rmdir`:

```
rmdir DirectoryName
```

```
rmdir path/directoryname
```

![rmdir output](http://i.imgur.com/QPo4AWQ.png)

#### `touch`

Create empty files with `touch`:

```
touch newFileName
```

```
touch path/newFileName
```

![touch output](http://i.imgur.com/dSfGlfz.png)

#### `cat`

Use `cat` to create a file and immediately add content:

```
cat newfile
```

After typing your content, press `Ctrl+D` to save. `cat` also prints file contents:

```
cat filename
```

```
cat path/filename
```

![cat output](http://i.imgur.com/QI145Tn.png)

#### `rm`

Delete files with `rm`:

```
rm filename
```

```
rm path/filename
```

![rm output](http://i.imgur.com/IABPbx4.png)

You now have the basics for navigating the Omega filesystem. Continue with the [Redirection guide](./redirection) to learn how to pipe data between commands.

<GiscusDocComment />
