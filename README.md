# CLI FILE MANAGER
The simple CLI application for working with file system and some special commands.

## How to start
`npm run start` - run app with anonymous user

`npm run start -- --username=Siarhei` - run app with specified user

## Commands
> If you use spaces in the paths, don't wrap it in quotes. Example: cd D:\Dir with space\File with space.txt

- ###_*Navigation & working directory*_
`up` - go upper from current directory

`cd path_to_directory` - go to dedicated folder from current directory (path_to_directory can be relative or absolute)

Examples:
```
cd ../Dir
cd D:\Dir
cd ../Dir with space
```

`ls` - print in console list of all files and folders in current directory

- ###_*Basic operations with files*_

`cat path_to_file` - read file and print it's content in console

Examples: 
```
cat ../file.txt
cat D:\Dir\file.txt
cat ../Dir with space/File with space.txt
```

`add new_file_name` - create empty file in current working directory

Examples:
```
add file.txt
add File with space.txt
add .config
```

`rn path_to_file new_filename` - rename file

Examples:
```
rn ../file.txt newFile.txt
rn D:\Dir\file.txt newFile.txt
rn ../Dir with space/File with space.txt newFile.txt
```

`cp path_to_file path_to_new_directory` - copy file

Examples:
```
cp ../file.txt ../Dir/
cp D:\Dir\file.txt C:\Dir\
cp ../Dir with space/File with space.txt C:\Dir with space\
```

`mv path_to_file path_to_new_directory` - move file (same as copy but initial file is deleted)

Examples:
```
mv ../file.txt ../Dir/
mv D:\Dir\file.txt C:\Dir\
mv ../Dir with space/File with space.txt C:\Dir with space\
```

`rm path_to_file` - delete file

Examples:
```
rm ../file.txt
rm D:\Dir\file.txt
rm ../Dir with space/File with space.txt
```

- ###_*Operating system info*_
`os --EOL` - print EOL (default system End-Of-Line) to console

`os --cpus` - print host machine CPUs (overall amount of CPUS plus model and clock rate (in GHz) for each of them) info to console

`os --homedir` - print home directory to console

`os --username` - print current system user name to console

`os --architecture` - print CPU architecture for which Node.js binary has compiled to console

- ###_*Hash calculation*_
`hash path_to_file` - calculate hash for file and print it into console

Examples:
```
hash ./file.txt
hash D:\Dir\file.txt
hash ../Dir with space/File with space.txt
```

- ###_*Compress and decompress operations*_
`compress path_to_file path_to_destination` - compress file with same name

_- path_to_destination = directory_

Examples:
```
compress ../file.txt ../Dir/
compress D:\Dir\file.txt C:\Dir\
compress ../Dir with space/File with space.txt C:\Dir with space\
```

`decompress path_to_file path_to_destination` - decompress file with same name

_- path_to_destination = directory_

_- you can specify or not the extension .br_

Examples:
```
decompress ../file.txt ../Dir/
decompress D:\Dir\file.txt.br C:\Dir\
decompress ../Dir with space/File with space.txt C:\Dir with space\
```

###If you find a bug please let me know [Linkedin](https://www.linkedin.com/in/sergey-sudakov-dev/). Thank you!