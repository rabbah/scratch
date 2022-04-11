# init cli and functions resources
```
doctl sbx connect
```

# deploy, either locally or with remote-build (latter matches app platform)
```
doctl sbx deploy .
```
or
```
doctl sbx deploy . --remote-build
```

# invoke function
```
doctl sbx functions invoke sample/hello
```
