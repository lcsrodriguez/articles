# Create a private PyPi server


Here's a complete tutorial allowing you to set up a private and fully-customizable PyPi server.


**Outline**:
1. Server-side setup and configuration using `pypiserver`
2. Client-side configuration for `twine` operations
3. Release of a new Python package on PyPi server



## Server-side

Please follow the below procedure to set-up the server:

1. Create a new virtual environment using `venv`:
```shell
python3 -m venv venv
source venv/bin/activate.sh
```
2. Create a specific folder `packages/` where the uploaded packages will be stored:
```shell
mkdir -p packages/
```

3. Install the Python required packages:
```shell
pip3 install pypiserver[passlib] bcrypt
```

*You can check whether all Python requirements are correctly installed.*

4. For security purposes, you can specify $(\mathbf{username}, \mathbf{password})$ couples (encrypted password).

*You can use the following [website](https://hostingcanada.org/htpasswd-generator/) to generate the encrypted password.*

Then, copy-paste the usernames and encrypted passwords with the following format within an empty text-file (for instance called `PASSWORDS`) (1 line for each new user).

```
user1:$2y$10$9wghrmcbxLWG.otvx9l1WOaKKDfg8kR2M0jxcLMP7sDdLiKwXoYQa
user1:$2y$10$q0nuaEKNZDrTiCiuvcFsFeSWXX6LrQGXaJAkfFnMdRYJ6fsl4sZUW
```


```shell
vim PASSWORDS # Copy/past results
cat PASSWORDS
```


5. Run the PyPi server:
```shell
PYPI_SERVER_PORT=8090
pypi-server run -p ${PYPI_SERVER_PORT} packages/
                -P PASSWORDS
                --health-endpoint /ping 
                --welcome index.html
```

**Remarks**:
1. `--health-endpoint` specifies a custom sub-route for heartbeat/ping purposes (HTTP GET request)
2. `--welcome` 

## Client-side

To upload a new package on a remote PyPi server, we will be using the `twine` package.

1. First, create or update a text-file called `.pypirc` in your home directory:
    - `$HOME` for UNIX-based systems $\longrightarrow$ `~/.pypirc`
    - `C:\Users\<user>\.pypirc`


```
[distutils]
index-servers =
	...
	privatepypi
	...

... 

[privatepypi]
  repository = http://localhost:8090
  username = user1
  password = admin

...
```
where `...` denotes other PyPi environments (can be empty if needed).

*This step will prevent you from always writing on stdin your private PyPi credentials*


## Release of a new Python package on PyPi server

1. Remove older deployment files
```shell
rm -rf dist/ build/
rm -rf */*.egg-info *.egg-info
```
2. Install deployment requirements
```shell
python3 -m pip install –-user –-upgrade setuptools wheel twine
```
3. Create new deployment files for our package
```shell
python3 setup.py sdist bdist_wheel
```
4. Upload the package's new version on our server:
```shell
twine upload --repository-url http://localhost:8090 dist/* 
```


## Conclusion

This short post gives you a quick but complete insight on how to setup a private PyPi server and uplaod custom packages to it using `pypiserver` and `twine`.


## References

1. https://pypi.org/project/pypiserver/
2. https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html
3. https://stackoverflow.com/questions/16785493