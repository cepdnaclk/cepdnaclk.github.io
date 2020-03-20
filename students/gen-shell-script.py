'''
gihanjayatilaka[at]eng[dot]pdn[dot]ac[dot]lk 2020-03-20
'''
import argparse
import csv


def isOkay(thisSite,allStudents):
    '''
    2020-03-20 gihanjayatilaka[at]eng.pdn.ac.lk: Implement later.

    This function should check if the sitename matches the required criteria.
    Ask roshanr[at]eng.pdn.ac.lk what this criteria should be.
    Suggestion: Should contain {(at least 1 letter from both first OR last names) AND
                (at least 4 letters from first OR last name)}
    '''
    return True


def stripNestedList(x):
    for i in range(len(x)):
        for j in range(len(x[i])):
            x[i][j]=x[i][j].strip()
    return x

if __name__=='__main__':
    args=argparse.ArgumentParser()
    args.add_argument("--siteInfoCSV",dest="siteInfoCSV",type=str)
    args.add_argument("--studentInfoCSV",dest="studentInfoCSV",type=str)
    args.add_argument("--outputBASH",dest="outputBASH",type=str)
    args.add_argument("--exceptionsBASH",dest="exceptionsBASH",type=str)
    args.add_argument("--outputHTML", dest="outputHTML", type=str)

    args=args.parse_args()
    siteInfoCSV=open(args.siteInfoCSV,mode='rt')
    allSitesInfo = csv.reader(siteInfoCSV)

    studentInfoCSV=open(args.studentInfoCSV,mode='rt')
    allStudentsInfo = csv.reader(studentInfoCSV)

    outputBASH=open(args.outputBASH,mode="w+")
    outputBASH.write("#!/usr/bin/env bash\n")

    outputBASH.write("OUTPUT_HTML={}\n".format(args.outputHTML))
    outputBASH.write("echo \"<html><title>Department of Computer Engineering, University of Peradeniya : Students</title><body><h3>Department of Computer Engineering, University of Peradeniya : Students</h3><ul>\" > $OUTPUT_HTML\n")

    allSitesInfo=sorted(stripNestedList(list(allSitesInfo)))




    for siteIdx in range(1,len(allSitesInfo)):
        thisSite=allSitesInfo[siteIdx]
        if isOkay(thisSite,allStudentsInfo):
            outputBASH.write("git clone https://github.com/{}/{}.github.io.git\n".format(thisSite[1],thisSite[1]))
            outputBASH.write("mv {}.github.io {}\n".format(thisSite[1],thisSite[2]))

            if thisSite[3]=="False":
                outputBASH.write("echo \"<li><strike><a href=\"https://tesla.ce.pdn.ac.lk/students/{}/\">{}</a></strike></li>\" >> $OUTPUT_HTML\n".format(thisSite[2],thisSite[2]))
            else:
                outputBASH.write(
                    "echo \"<li><a href=\"https://tesla.ce.pdn.ac.lk/students/{}/\">{}</a></li>\" >> $OUTPUT_HTML\n".format(
                        thisSite[2], thisSite[2]))

    exceptionsBASH=open(file=args.exceptionsBASH,mode="rt")
    exceptionsBASH=exceptionsBASH.readlines()
    print(exceptionsBASH)
    for line in exceptionsBASH:
        outputBASH.write(line)#The '\n' comes from the file read

    outputBASH.write("echo \"</ul></body></html>\" >> $OUTPUT_HTML\n")

    print("PROGRAM END: gen-shell-scrpt.py")
