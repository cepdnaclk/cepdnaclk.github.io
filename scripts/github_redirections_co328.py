# REQUIREMENTS ------------
# pip install requests
# -------------------------

# TODO:
# No validation done by assume everything is ok,
# But better to write validation logic too

import requests
import json
import os

# Where the API is available
apiBase = "https://api.ce.pdn.ac.lk"
apiIndex = apiBase + "/projects/"

studentSource = apiBase + "/people/v1/students/all/"
projectSource = apiBase + "/projects/v1/all/"

student_dict = {}
supervisor_dict = {}
tag_dict = {}

projectSource = apiBase + '/projects/v1/all/index.json'
req_projects = requests.get(projectSource)
if req_projects.status_code == 200:
    projects = json.loads(req_projects.text)

# projects_url = '../projects/v1/all/index.json'
# with open(projects_url, 'r') as f:
#     projects = json.load(f)

for p_name in projects:

    # # read the project information from the project's index file
    # filename = projects[p_name]['api_url'].replace(
    #     'http://api.ce.pdn.ac.lk', '..') + "index.json"
    # proj_data = json.load(open(filename, "r"))

    cat_code = projects[p_name]['category']['code']
    cat_title = projects[p_name]['category']['title']

    if cat_code == '6sp':
        req_proj_data = requests.get(projects[p_name]['api_url'])
        print("Reading from " + projects[p_name]['api_url'])
        if req_proj_data.status_code == 200:
            proj_data = json.loads(req_proj_data.text)

        # print(proj_data['title'])
        old_url = proj_data['page_url'].replace(
            "https://cepdnaclk.github.io", "").replace("6sp", "co328")
        new_url = proj_data['page_url'].replace(
            "https://cepdnaclk.github.io", "")

        print([old_url, new_url])

        file_content = """---
layout: redirect
permalink: """ + old_url + """/
forward_url: """ + new_url + """/
---
"""

        filename = "../redirections/e17-co328/" + \
            new_url.replace("/", "") + ".md"
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        outputFile = open(filename, "w+")
        outputFile.write(file_content)
