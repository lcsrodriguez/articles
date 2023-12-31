# Create a private PyPi server


Here's a complete tutorial allowing you to set up a private and fully-customizable PyPi server.


It


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

**References**
1. https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html
2. https://stackoverflow.com/questions/16785493

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

First, create or update a text-file called `.pypirc` in your home directory:
- `$HOME` for UNIX-based systems $\longrightarrow$ `~/.pypirc`
- `C:\Users\<user>\.pypirc`




## Conclusion


