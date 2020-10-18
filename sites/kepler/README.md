# kepler.ce.pdn.ac.lk Server

This is a GPU server of the Department of Computer Engineering, University of Peradeniya. 

The administrator changes will be documented [here](https://github.com/cepdnaclk/kepler-server-documentation). This is only accessible by the staff.

You can use this server using the LDAP login for ce.pdn.ac.lk undergraduates (which is used for CO top floor lab, aiken and tesla) without sudo access.

## FAQ

<!-- ### How can a ce.pdn.ac.lk undergraduate get a docker enabled account?

Send an email to headce[at]eng.pdn.ac.lk with your registration number requesting an account in this server. If you are allowed to have one, head of the Department will forward the request to the server admin and you will recieve a login.
 -->

### I am not an undergraduate of the Department of Computer Engineering, University of Peradeniya. Can I use this server?

Ask headce[at]eng.pdn.ac.lk.<!--  Specify whether you need a normal LDAP account or a normal LDAP account + docker. -->

### How can I connect to this server?

You can use ssh login. Since kepler.ce.pdn.ac.lk is not a public IP you shoud either (a) use a computer in the Peradeniya network or (b) ssh to a public IP server like tesla.ce.pdn.ac.lk or aiken.ce.pdn.ac.lk and ssh to kepler.ce.pdn.ac.lk from there.

### What is ssh?
[This](https://ce-pdn-ac-lk.com/cewiki/server_use:use_of_servers) is a good set of instructions on the matter. If it is not clear (or unaccessible), contact dhanushki.mapitigama[at]eng.pdn.ac.lk 

### What are the GPUs in this server?

Tesla K40c and Quadro K620.

###  What is the operating system of this server?

Ubuntu 20.4.


### How can I install python packages?

You can do it using **conda** with any account. Create your own conda environment to be safe. You do not need anyone's permission to install a python package inside your conda environment.
<!-- 2. **docker** with docker enabled accounts. -->

###  Can I install some software here?

Please request through any [CO staff member](http://www.ce.pdn.ac.lk/academic-staff/). Please note that the server admin has no authority to install something unless it is requested by a staff memeber.

### What can I do if my doubt is not listed here?

[Ask](https://gihan.me/contact) via email.

### What software is installed in this server?

* Ubuntu 20.04.1 LTS
* NVIDIA-Driver Version: 455
* CUDA Version: 11.1
* cuDNN 8.0.4
* conda 4.8.5
* cmake 3.16.3
* gcc 9.3.0


### I broke something. What should I do?

Write an [email](https://gihan.me/contact) if this is not urgent. If not [call](https://gihan.me/contact).