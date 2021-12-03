# pluralsight-js-path
## 1. JavaScript Variables and Types
### 1.1. Course Overview
 
 Course content:
 - Template literals and tagged templates
 - Difference between let and const keywords
 - How to test strings for specific content

With this course you will know how to make your JS code more maintainable.

 ### 1.2. Using Variables, Literals, and Assignments
 
 How This Course Works
 - Install VS Code
 - Basic VS Code and JS web development
 - Use demo code: https://github.com/bmaluijb/GetYourLoanApp.git
 
 To use code open index.html with a browser.

 Run cloned project index.html with a modern browser to start project.

Demo content
- Using template literals
- Using tagged template literals
- Difference between let and const
- Destructuring syntax

 Using Template Literals

This is not the best way to create long string.
```js
let summaryText = "Dear" + la.ApplicationName + ", " + reviewText + " Your risk profile is " + riskProfile;
```

For a better implementation we can use a template.

 ```js
 let data = {
    id: 1,
    name: "Tom",
    price: 130.0
 }
 //template literal preserves line breaks 
 let summaryText = `This is a template literal for data, 
 id:${data.id}, 
 name:${data.name}, 
 price:${data.price}`;
 console.log(summaryText);
 ```