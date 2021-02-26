# kepler.ce.pdn.ac.lk Server

This is a GPU server of the Department of Computer Engineering, University of Peradeniya. 

The administrator changes will be documented [here](https://github.com/cepdnaclk/server-documentation-public).

You can use this server using the LDAP login for ce.pdn.ac.lk undergraduates (which is used for CO top floor lab, aiken and tesla) without sudo access.

## FAQ

### Is there a limit to GPU Usage on this server?

Short answer: You should [inform the admin](https://cepdnaclk.github.io/sites/servers/admin/) if you are using more than 4GB of GPU memory.


Long answer:

You are allowed to use the whole GPU for your work. But there are some guidelines to make sure you don't block others from using the GPU unnecessarily. The Tesla K40C card on this server can be used by more than one person simultaneously in most situations.


GPU usage can be checked by running the command **nvidia-smi**. The CPU and RAM usage can be checked by running the command **htop**.


_**If a user is blocking the GPU by using more than 4GB at a given moment:**_

[Contact the admin](https://cepdnaclk.github.io/sites/servers/admin/) and request him/her to kill the process.


_**If you are using the GPU for deep learning:**_ 

If your code is implemented using a neural network framework, it might try to allocate the full GPU memory even when it is not needed. This issue can be corrected by modifying the code.

This is the code to be added for tensorflow 2.2 or newer.
```
import tensorflow as tf
gpus = tf.config.experimental.list_physical_devices('GPU')
if gpus:
    try:
        for gpu in gpus:
            tf.config.experimental.set_memory_growth(gpu, True)

    except RuntimeError as e:
        print(e)
```

You may find such code to correct this issue in similar frameworks as well. 

If you make this change and your NN training still requires more than 4GB of GPU memory, you can try setting a **smaller batch_size** in the NN training step. Following is a piece of code for Keras.

```
nn.fit(xTrain,yTrain,epochs=100,verbose=1,batch_size=8)
```

If you cannot reduce the memory footprint of your NN training, please [inform the admin](https://cepdnaclk.github.io/sites/servers/admin/) so that s/he will not kill your process to give space to another user.


_**If you are using the GPU for something else:**_

It is okay to use the full GPU memory for short periods of time (around 5 min). But if you use the GPU for a longer period of time you should [inform the admin](https://cepdnaclk.github.io/sites/servers/admin/) about your requirement.


### How can I connect to this server?

You can use ssh login. Since kepler.ce.pdn.ac.lk is not a public IP you shoud either (a) use a computer in the Peradeniya network or (b) ssh to a public IP server like tesla.ce.pdn.ac.lk or aiken.ce.pdn.ac.lk and ssh to kepler.ce.pdn.ac.lk from there.

### What is ssh?
[This](https://ce-pdn-ac-lk.com/cewiki/server_use:use_of_servers) is a good set of instructions on the matter. If it is not clear (or unaccessible), contact dhanushki.mapitigama[at]eng.pdn.ac.lk 

### What are the GPUs in this server?

Tesla K40c and Quadro K620.

###  What is the operating system of this server?

Ubuntu 20.4.


### What software is installed in this server?

* Ubuntu 20.04.1 LTS
* NVIDIA-Driver Version: 455
* CUDA Version: 11.1 Update 1
* cuDNN 8.0.4
* conda 4.8.5
* cmake 3.16.3
* gcc 9.3.0
* openjdk 11.0.8
* ffmpeg 4.2.4
* SWIG 4.0.1
* R 3.6.3 
* Blender 2.82


### What datasets are hosted in kepler?

We store frequently used datasets inside the kepler.ce.pdn.ac.lk local storage for easy access. You can access these by the following commands
```
ls /storage/datasets/
``` 
These datasets are in the read only mode. You can use these datsets as the input for your tasks but you have to output the results to your home directory. The following datasets are stored at the moment.
* CIFAR (10 and 100): [Website](https://www.cs.toronto.edu/~kriz/cifar.html)
* MOT 15,16,17,20: [Webisite](https://motchallenge.net/). Please note that there is an issue with unzipping MOT17.
* Shapenet (core) v1: [Website](https://www.shapenet.org/), [Research paper](https://arxiv.org/abs/1512.03012).
* Learning to See in the Dark: [Website](https://github.com/cchen156/Learning-to-See-in-the-Dark), [Research Paper](https://cchen156.github.io/paper/18CVPR_SID.pdf)
* Brightening Train
* LOL Dataset [Website](https://daooshee.github.io/BMVC2018website/)
* Dakshina [Website](https://github.com/google-research-datasets/dakshina)
* Oxford Town Center Dataset
* Exclusively Dark Image Dataset: [Gitrepo](https://github.com/cs-chan/Exclusively-Dark-Image-Dataset/tree/master/Dataset), [Research paper](http://cs-chan.com/doc/cviu.pdf)
* UCF101  Action recognition dataset [Web](https://www.crcv.ucf.edu/data/UCF101.php), [Research paper](https://www.crcv.ucf.edu/papers/UCF101_CRCV-TR-12-01.pdf)



### What other ML tools are hosted in kepler?
You can access these by the following commands
```
ls /storage/datasets/
``` 

* Yolo v4 and v3 weights




### How to compile CUDA C/C++ code?
```
nvcc code.cu -arch=sm_35
```

The **-arch=sm_35** flag is required to compile code properly on this server.


###  Can I install some software here?

Please request through any [CO staff member](http://www.ce.pdn.ac.lk/academic-staff/). Please note that the server admin has no authority to install something unless it is requested by a staff memeber.

### What can I do if my doubt is not listed here?

[Ask](./../admin/) via email.


### I am not an undergraduate of the Department of Computer Engineering, University of Peradeniya. Can I use this server?

Ask headce[at]eng.pdn.ac.lk.<!--  Specify whether you need a normal LDAP account or a normal LDAP account + docker. -->


### I broke something. What should I do?

Write an [email](./../admin/) if this is not urgent. If not [call](./../admin/).