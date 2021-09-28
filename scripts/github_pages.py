'''
    REQUIREMENTS:
        pip install requests

    AUTHORS:
        Gihan Jayatilake
        Nuwan Jaliyagoda
        Akila Karunanayake
'''

import requests
import os
import json
import shutil
import traceback

CATEGORIES = {}
BATCHES = {}

# url = 'data/categories/index.json'
# with open(url, 'r') as f:
#     message = json.load(f)
#
# for i in message:
#     CATEGORIES[message[i]['link']] = message[i]['name']
#     BATCHES[message[i]['link']] = set()
#     # print(message[i]['link'])
#
# print(CATEGORIES)

ORGANIZATION = "cepdnaclk"
urls_count = 0
# LOWERCASE = ['a', 'and', 'of', 'for', 'the', 'as', 'at', 'by', 'on', 'per', 'to', 'up', 'via', 'with', 'from' ]

def urlOrganization():
    return "https://api.github.com/orgs/{}".format(ORGANIZATION)

def urlOrganizationRepos(pageNo):
    return "https://api.github.com/orgs/{}/repos?page={}".format(ORGANIZATION, pageNo)

def inRange(x, minNumber, maxNumber):
    if type(x) == str:
        x = int(x)
    if minNumber > maxNumber:
        minNumber, maxNumber = maxNumber, minNumber
    if minNumber <= x and maxNumber >= x:
        return True
    else:
        return False

def write_urls_to_file(file, product):
    # id = product['id']
    lastmod = '' #product['lastmod'].strftime('%F')
    alternate_tags = ''
    # for lang in LANGS:
    #     alternate_tags += "\n\t\t<xhtml:link\n\t\t\trel=\"alternate\"\n\t\t\threflang=\"{lang}\"\n\t\t\thref=\"{href}\"/>".format(
    # 	    lang=lang,
    # 	    href=PRODUCT_DETAILS_URL.format(lang=lang, id=id)
    #     )

    # "\n\t<url>\n\t\t<loc>{location}</loc>\n\t\t<lastmod>{lastmod}</lastmod>\n\t</url>".format(location=product['url'], lastmod=lastmod)
    file.write(
    	"\n\t<url>\n\t\t<loc>{location}</loc>\n\t</url>".format(
    		location=product['url'],
    		lastmod=lastmod)
    )
    # global urls_count
    # urls_count += 1

def generate_xml(FILE_NAME, pages):
    os.makedirs(os.path.dirname(FILE_NAME), exist_ok=True)

    with open(FILE_NAME, "w") as file:
        try:
            print("File %s opened." % FILE_NAME)

            file.write('<?xml version="1.0" encoding="UTF-8"?>\n')
            file.write('<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')

            for page in pages:
                print(page)
                write_urls_to_file(file, page)

            # print('%d URLs are added.' % urls_count)
            # print('Sitemap is ready!')

        except Exception as e:
            print("Unfortunately there is an error!", e)

        finally:
            file.write('\n</urlset>')
            file.close()

if __name__ == "__main__":
    print("START")
    URL = urlOrganization()

    # r = requests.get(url=URL)
    # j = r.json()
    count=0
    gh_pages = []

    for p in range(1, 1000):
        # print('>> ' + urlOrganizationRepos(p))

        r = requests.get(url=urlOrganizationRepos(p))
        jsonData = r.json()

        if len(jsonData) == 0:
            break

        for i in range(len(jsonData)):

            # Filter out the pages having GH Pages and print
            if(jsonData[i]['has_pages']):
                repo_name = jsonData[i]["name"]
                repo = "https://github.com/cepdnaclk/" + repo_name
                page = "https://cepdnaclk.github.io/" + repo_name

                gh_pages.append({ 'name': repo_name, 'repo': repo, 'url': page })
                count = count+1
                # print(page)

    # Prepare the JSON file
    output_path = '../_data/pages.json'
    output_text = json.dumps(gh_pages, indent=3)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    outputFile = open(output_path, "w+", encoding="utf-8")
    outputFile.write(output_text);
    outputFile.close()
    # print(json.dumps(output_text))

    # Prepare the XML file
    generate_xml('../sitemap/generated.xml', gh_pages)

print("END")
