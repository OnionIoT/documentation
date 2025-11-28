---
title: Shell Scripting
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Shell Scripting {#shell-scripting}

Shell scripts execute a series of commands in one run, making repetitive tasks easy to automate. On the Omega, you typically use the Bourne shell (`sh`).

### Sample Script

The following script logs who ran it and when. The comments explain each step:

```
# Anything after the hash symbol is considered a comment.
# This script will create log of the time the script that was executed
# and the name of the person who executed it. The log will be stored in
# a file called log.txt, found in the "/" directory. The script will 
# also display the contents of the log.txt file on the terminal. 
#The line below tells Linux which shell to use for execution

#!/bin/bash 

# Create NAME variable with value name
NAME=name 

# Create DATE variable with value date
DATE=date 

#Prompt User to input their name
echo -n "Please Enter Your Name >"

#Store the value entered by the user into the variable username
read username

#Store the value of our username in NAME variable
NAME=$username

#The DATE stores the value returned by the date command. in form $(command)
DATE=$(date)

#Append the NAME and DATE values to the log.txt file
echo $NAME $DATE >> /log.txt 

#Display the contents of the log.txt file
cat /log.txt
```

Save the script as `LogGen.sh`, make it executable, and run it:

```
sh LogGen.sh
```

Run it multiple times with different names and you will see new log entries appended to `/log.txt`.

![Shell script output](http://i.imgur.com/9Q9mRWm.png)

Next, learn about [Ownership and Permissions](./ownership-and-permissions) to control who can run or edit the files you create.

<GiscusDocComment />
