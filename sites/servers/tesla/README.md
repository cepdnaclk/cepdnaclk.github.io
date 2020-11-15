# tesla.ce.pdn.ac.lk Server

This is a GPU server of the Department of Computer Engineering, University of Peradeniya. 

The administrator changes will be documented [here](https://github.com/cepdnaclk/server-documentation). This is only accessible by the staff.

You can use this server using the LDAP login for ce.pdn.ac.lk undergraduates (which is used for CO top floor lab, aiken and tesla) without sudo access.

## FAQ

### How can I connect to this server?

You can use ssh login. [This](https://ce-pdn-ac-lk.com/cewiki/server_use:use_of_servers) is a good set of instructions on the matter. If it is not clear (or unaccessible), contact dhanushki.mapitigama[at]eng.pdn.ac.lk 

### What is the Hardware Configuration of this server?
* Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz (8MB Cache, 8 threads)
* 32 GB Memory
* Tesla C2075 GPU (6GB DDR5 Memory, 448 CUDA Cores, Compute Capability 2.0)

###  What is the operating system of this server?

Ubuntu 14.04.5 LTS

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

###  Can I install some software here?

Please request through any [CO staff member](http://www.ce.pdn.ac.lk/academic-staff/). Please note that the server admin has no authority to install something unless it is requested by a staff memeber.

### What can I do if my doubt is not listed here?

Ask [Amila](../amila/) or [Gihan](https://gihan.me/contact/).

### What software is installed in this server?

### I am not an undergraduate of the Department of Computer Engineering, University of Peradeniya. Can I use this server?

Ask headce[at]eng.pdn.ac.lk.

### I broke something. What should I do?

Write an [email](../amila/) if this is not urgent. If not [call](../amila/).