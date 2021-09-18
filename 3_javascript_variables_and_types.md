# pluralsight-js-path
## 1. JavaScript Variables and Types
### 1.1. Course Overview
 
 Course content:
 - Template literals and tagged templates
 - Difference between let and const keywords
 - How to test strings for specific content

 ### 1.2. Using Variables, Literals, and Assignments

 Run cloned project index.html with a modern browser to start project.

 Using Template Literals

 ```js
 let data = {
    id: 1,
    name: "Tom",
    price: 130.0
 }
 //template preserves linebreaks 
 let summaryText = `This is a template literal for data, 
 id:${data.id}, 
 name:${data.name}, 
 price:${data.price}`;
 console.log(summaryText);
 ```