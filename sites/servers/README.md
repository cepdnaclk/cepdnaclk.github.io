# Server

This page contains information about the servers of the Department of Computer Engineering, University of Peradeniya.


* FAQ about all servers in general
	* See the bottom of this page.

* FAQ about specific servers
	* [aiken](./aiken/)
	* [kepler](./kepler/)
	* [tesla](./tesla/)

* Other
	* babbage
	* winserver
	* FPGA
	* ARM
	* HP Worksations 1,2,3


* Not in use 
	* Turing
	* IBM


## Administration/Help

[Contact the server admin](./admin/)

## FAQ about all servers in general

### How to keep a program running even when I disconnect the remote terminal?
Read https://www.maketecheasier.com/nohup-and-uses/

### How can I install python packages?

You can do it using **conda** with any account. Create your own conda environment to be safe. You do not need anyone's permission to install a python package inside your conda environment. [This](https://docs.conda.io/projects/conda/en/4.6.0/_downloads/52a95608c49671267e40c689e0bc00ca/conda-cheatsheet.pdf) is a good quick start guide for conda.
<!-- 2. **docker** with docker enabled accounts. -->

In your first attempt to use conda, run the following command.

```
conda init bash
```
You might have to run the following command on every login (unless .bashrc is run automatically)
```
source ~/.bashrc
```
