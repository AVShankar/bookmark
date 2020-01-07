# Bookmark_App 📑

Bookmark app is a web application done using ReactJS and Firebase for Authentication. 

User can maintain their bookmarks using this app.

Website's homepage when not signed-in with Google will look like: 

![Image of Yaktocat](https://github.com/AVShankar/bookmark/blob/master/Screenshots/sign-in.png)

--------------------------------------------------------------------------------------------------------------------------------------

Click on the ```Sign in with Google``` to sign in to the app (it will redirect you to Google Authenticator page 🔒)

When you've successfully logged-in into the app, you will be able to view homepage  like this: 

![Image of Yaktocat](https://github.com/AVShankar/bookmark/blob/master/Screenshots/home.png)

Note: Your Google account name will be displayed after "Hello" below navbar

--------------------------------------------------------------------------------------------------------------------------------------

If you would like to add a new bookmark, you can simply click on the ```Add new``` button to get the form, and just paste the URL, tags. App will get title, image and description for the url you pasted

![Image of Yaktocat](https://github.com/AVShankar/bookmark/blob/master/Screenshots/form.png)

--------------------------------------------------------------------------------------------------------------------------------------

If you would like to remove the bookmark, simply click the ```Delete``` button ❌

---------------------------------------------------------------------------------------------------------------------------------------

How to install? 🛠

Create a file named ```firebaseConfig.js``` inside ```src``` folder and then paste your firebase project config credentials. And, export it as firebaseConfig. Then follow the below steps,

1.Create a React app using ```cmd : npx create-react-app project_name``` from CMD line

2.Install Express, Axios, Cors, json-server, firebase using ```cmd : npm install express axios cors json-server firebase```

3.Install a npm package for firebase-auth using ```cmd : npm install react-with-firebase-auth```

4.Install cheerio, request using cmd : ```npm install cheerio request```

5.Install body-parser using ```cmd : npm install body-parser```

6.Install Bootstrap using ```cmd : npm install bootstrap```

7.Initiate the below servers:

NodeJS using ```cmd : node index.js from project folder```

ReactJS using ```cmd : npm start from project folder```

json-server using ```cmd : json-server --watch db.json -p 8080``` from project folder

--------------------------------------------------------------------------------------------------------------------------------------

<h2>Happy Coding! 🤖
