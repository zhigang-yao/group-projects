# Yao Group Page

## Overview
This is a repository for our [group page](https://zhigang-yao.github.io/group-projects/).
The website is based on [mkdocs-material](https://squidfunk.github.io/mkdocs-material/), with customized [homepage](https://zhigang-yao.github.io/group-projects/), [Notion embedding page](https://zhigang-yao.github.io/group-projects/), and [projects gallery](https://zhigang-yao.github.io/group-projects/).

## Maintenance
### Update the seminar list:
- Export the entire Notion project with sub-pages;
- Rename the main html file as `pri.html`;
- Replace all the files in `docs/pri`;
- Commit the changes to GitHub.

### Add new projects:
- Create a new folder: `docs/[Project_Name]`;
- Create an index file `docs/[Project_Name]/index.md` and add the overview;
- ~~Revise `material/.overrides/main.html` accordingly to add it in the homepage;~~
- ~~Revise `material/.overrides/blog.html` accordingly to add it in the gallery;~~
- Revise `mkdocs.yml` accordingly to add this project into
    - *nav:* the navigator
    - *projects:* the gallery
    ```
    - name: name of the project #card title
      text: description of the project #text under the image
      fig: fig.png #name of the image under docs/assets/images/
      url: pf/ #name of the project folder docs/[Project_Name]
      app: false #is this an application project?
      filter: true #image hover effect?
      selected: true #show on the home page?
    ```
- Commit the changes to GitHub.