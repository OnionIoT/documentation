---
title: Ownership and Permissions
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Ownership and Permissions {#ownership-and-permissions}

Linux enforces ownership at the file level. Every file has a user owner, a group owner, and permission bits that control who can read, write, or execute it. Root (the super user) can override any setting, but regular users are restricted.

### Inspecting Permissions

Revisit the shell script from the previous section. Running it with `sh LogGen.sh` works, but executing it directly fails:

```
./LogGen.sh
```

```
/bin/ash: ./LogGen.sh: Permission denied
```

Use `ls -l` to inspect the current permissions:

```
ls -l
```

![Permission listing](http://i.imgur.com/toiOOTm.png)

The leftmost column shows details such as:

- `-` vs `d` to indicate a file or directory.  
- `rwx` triplets for the owner, group, and others.  
- `---` indicates no permission.

For `LogGen.sh` the entry likely reads `-rw-r--r--`, meaning the owner can read/write but not execute.

### Granting Execute Permission

Use `chmod` to adjust permissions. The command below grants read, write, and execute rights to everyone:

```
chmod 777 LogGen.sh
```

Run `ls -l` again to confirm the change:

```
ls -l
```

![Updated permissions](http://i.imgur.com/DvQMeeP.png)

Now the script can be launched directly:

```
./LogGen.sh
```

![Script runs successfully](http://i.imgur.com/7ud9EHX.png)

With permissions under control, you can confidently manage files and collaborate with other users on the Omega.

<GiscusDocComment />
