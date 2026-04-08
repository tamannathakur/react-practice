2nd

#Parcel
-dev build
-local server
-hmr- hot module  replacement
(makes sure that as soon as file is updated things get updated on the host asw)
-file watching algorithm - written in c++
- caching - faster builds
-Image optimization
-Minification
-Bundling 
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling - support older browsers
-Diagnostic
-Error Handling
-HTTPS
-Tree Shaking(remove unsused code)
-Different dev and prod bundles


//for prod build - npx parcel build index.html where build shows its a prod build

//dist folder has the files which are used to show hosted content
//regeneratable h dist folder and parcel-cache

//anything regeneratable you include in gitignore


//browserslist is a npm package
//package.json have browserslist:{
    last 2 chrome versions
    or last 2 versions
    or last 2 firfox versions
} which would tell app ki our app should work in last n versions of firfox/chrome basically it gives configurations that in these configurations it must work but others like edge or chrome older versions it may work it may not work

3rd

npm start==npm run start
react.createlement creates object which when rendered in dom becomes a html element 
jsx is a syntax made to write react simply
jsx and react are seperate you can write react without jsx but jsx makes it easy

jsx is html like syntax
 
both are same

const heading=React.createElement("h1",{id:"heading"},"namaste react using jsx");

const jsxheading= <h1 id="heading"> namaste react using jsx</h1>

both create react element first we are creating react element using react secondly we are creating react element using jsx