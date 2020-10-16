# Kepler.ce.pdn.ac.lk Server

This is a GPU server of the Department of Computer Engineering, University of Peradeniya. 

The administrator changes will be documented [here](https://github.com/cepdnaclk/kepler-server-documentation). This is only accessible by the staff.

You can use this server using 
1. The LDAP login for ce.pdn.ac.lk undergraduates (which is used for CO top floor lab, aiken and tesla) without sudo access.
2. Using a new login to use docker (and sudo inside docker containers).


## FAQ

### How can a ce.pdn.ac.lk undergraduate get a docker enabled account?

Send an email to headce[at]eng.pdn.ac.lk with your registration number requesting an account in this server. If you are allowed to have one, head of the Department will forward the request to the server admin and you will recieve a login.


### I am not an undergraduate of the Department of Computer Engineering, University of Peradeniya. Can I use this server?

Ask headce[at]eng.pdn.ac.lk.

### How can I connect to this server?

You can use ssh login. Since kepler.ce.pdn.ac.lk is not a public IP you shoud either (a) use a computer in the Peradeniya network or (b) ssh to a public IP server like tesla.ce.pdn.ac.lk or aiken.ce.pdn.ac.lk and ssh to kepler.ce.pdn.ac.lk from there.

### What is ssh?
[This](https://ce-pdn-ac-lk.com/cewiki/server_use:use_of_servers) is a good set of instructions on the matter. If it is not clear (or unaccessible), contact dhanushki.mapitigama[at]eng.pdn.ac.lk 

### What are the GPUs in this server?

Tesla K40c and Quadro K620.

###  What is the operating system of this server?

Ubuntu 20.4.


### How can I install python packaged?

You can do it by

1. **conda** with any account.
2. **Docker** with docker enabled accounts.

###  Can I install some software here?

If you have a docker enabled account, you can install anything inside your container. If not, you have to [request us](https://gihan.me/contact) via *email*.

### What can I do if my doubt is not listed here?

[Ask](https://gihan.me/contact) via email.

### I broke something. What should I do?

Write an [email](https://gihan.me/contact) if this is not urgent. If not [call](https://gihan.me/contact).