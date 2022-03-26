# E-commerce Back End Starter Code
[![MIT License](https://img.shields.io/badge/license-MIT-green?style=plastic "MIT License" )](./LICENSE)
[![Node v16.14 ](https://img.shields.io/badge/Node%20v16.14-339933?labelColor=ffffff&style=plastic&logo=node.js&logoColor=339933 'Node.JS')](https://nodejs.org/)
[![ESM v3.2.25](https://img.shields.io/badge/ESM-%20v3.2.25-gold?labelColor=ffffff&style=plastic 'ESM')](https://www.npmjs.com/package/esm)



## Table Of Contents
* [Description](#description)
* [Installation](#installation)
  * [Dependancies](#dependancies)
  * [Clone](#clone)
  * [Zip](#zip)
* [Usage](#usage)
  * [Starting](#starting)
  * [Insomnia](#insomnia)
  * [Gets](#gets)
  * [Posts](#posts)
  * [Deletes](#deletes)
* [Contact Me](#contact-me)
* [License](#license)
## Description
This was a project that helped me practice my ORM (Object-Relational Mapping) skills to create products that have categories and tags.I had a fun time building the models and connecting the routes to allow for GETS/POSTS/PUTS/DELETES or in other words some CRUD operations. [here](https://drive.google.com/file/d/1ZQlNkelu_vlUaQ3jHG_TY9XBawkSuM7d/view).


## Installation

You will need to have Nodejs installed along with Node Package Manager(NPM)  You can
find some links below on how to install Node and NPM on Windows, Linux, and macOS.
### Dependancies
[![Node v16.14 ](https://img.shields.io/badge/Node%20v16.14-339933?labelColor=ffffff&style=plastic&logo=node.js&logoColor=339933 'NodeJS download page')](https://nodejs.org/en/download/)
* [How to Install Node.js and NPM on Windows - phoenixNAP](https://phoenixnap.com/kb/install-node-js-npm-on-windows)
* [How to install Node.js and npm on macOS - newline](https://www.newline.co/@Adele/how-to-install-nodejs-and-npm-on-macos--22782681)
* 
### Clone
Assuming you have Node and NPM you can clone this GitHub repo, go into the directory,
and install the package.json file with NPM.
```bash
git clone https://github.com/K-Bugz/E-Commrades.git
cd E-Commrades
npm install
```
### Zip
Another method is to download the zip file, unzip the contents to a specific directory
and install the package.json file.

These commands that work on all three. (Windows, macOS, Linux) assuming they have
curl & tar.  Which newer version of Windows have.
```bash
curl -L -o E-Commrades.zip https://github.com/K-Bugz/E-Commrades/archive/refs/heads/main.zip
unzip E-Commrades.zip
cd E-Commrades-main
npm install
```

## Usage
Once the project is install and you are in the folder you can run it by using this command
### Starting
```bash
npm start
```


### Insomnia
I used Insomnia to call mock front end request to the server. 
#### Gets
You can simply GET all products by putting in the following url: http://localhost:3001/api/products
You can simply GET all categories by putting in the following url: http://localhost:3001/api/categories
You can simply GET all tags by putting in the following url: http://localhost:3001/api/tags

#### Posts
You can simply  POST a product by putting in the following url: http://localhost:3001/api/products
```
{
      "product_name": "Charles Oakley Shirt",
      "price": 21.57,
      "stock": 9,
      "tagIds": [3,8,9],
      "category_id": 6
}
```
You can simply get all categories by putting in the following url: http://localhost:3001/api/categories
```
{
      "category_name": "Special Shirt"
}
```
You can simply get all tags by putting in the following url: http://localhost:3001/api/tags
```
{
      "tag_name": "Sports Player"
}
```
#### Deletes
You can simply  POST a product by putting in the following url: http://localhost:3001/api/products/:id

## Contact Me

- **Phone/SMS**: [(737)703-8407](tel:+17377038407/)
- **Email**: [kbugusky@gmail.com](mailto:kbugusky@gmail.com)
- **GitHub**: [@K-Bugz](https://www.github.com/K-Bugz)
- **LinkedIn**: [kevinbugusky333454](www.linkedin.com/in/kevinbugusky333454)
## License

[![MIT License](https://img.shields.io/badge/license-MIT-green?style=plastic)](./LICENSE)