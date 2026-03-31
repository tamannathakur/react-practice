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