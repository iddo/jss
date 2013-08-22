Java Shell Scripting
====================

A bash script to allow ad-hoc java scripting

Installation
------------

Make sure the "jss" script is in your path

Usage
-----

Make sure your executable script starts with

```bash
#!/usr/bin/env jss
```

After which you can write java code that will be executed.

Example
-------

Create a file name `helloworld` with the following content

```java
#!/usr/bin/env
System.out.println("Hello World!");
```

give the file executable permissions

```bash
chmod +x helloworld
```

run the file

```bash
./helloworld
```
