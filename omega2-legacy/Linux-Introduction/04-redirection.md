---
title: Redirection
---

import { GiscusDocComment } from '/src/components/GiscusComment';

## Redirection {#redirection}

Redirection lets you pass the output of one command as input to another command or file. Combined with piping, it enables powerful one-liners.

### Input/Output Redirection

Earlier you saw how `cat` can create files. When you run:

```
cat > filename
```

the terminal prompts for input and writes everything you enter to `filename`. This is output redirection.

#### `echo`

You can redirect other commands as well. For example, use `echo` to overwrite or append to a file:

```
echo "Hello Omega" > hello.txt
```

```
echo "Another line" >> hello.txt
```

The single `>` overwrites existing content or creates the file, while `>>` appends to the end. The following screenshot shows both operators in action:

![Output redirection](http://i.imgur.com/EWQ0SvZ.png)

#### `sort`

To redirect a file into a command, combine the `<` operator with an executable. For example, `sort` organizes text alphabetically:

```
sort < alpha.txt
```

![Input redirection](http://i.imgur.com/TIkn320.png)

You can combine input and output redirection to create new files:

```
sort < alpha.txt > ordered.txt
```

![Input and output redirection](http://i.imgur.com/gi6NDdA.png)

### Piping

Pipes (`|`) chain commands so the output of one becomes the input of the next. Suppose `names.txt` contains one name per line. This command finds lines containing both `a` and `j`:

```
cat names.txt | grep a | grep j
```

![Pipe example](http://i.imgur.com/wZbo9Hk.png)

- `cat` prints the file contents.  
- `grep a` filters for lines containing `a`.  
- `grep j` filters the remaining lines down to those containing `j`.

Getting comfortable with pipes is essential for advanced CLI work. Continue to the [Shell Scripting guide](./shell-scripting) to automate repetitive command sequences.

<GiscusDocComment />
