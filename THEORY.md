# CLASS 31: Node.js Runtime, Buffer, Streams & Bun
__1.__ Line1 :[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\User\\Desktop\\IOTB\\app.js',
  '--port',
  '8080',
  '--host',
  'localhost'
]
Line2:
[ '--port', '8080', '--host', 'localhost' ]
The 2 outputs differ because the one with slice removes the working directory and execPath and starts from index 2 of the array of CLI arguments
0 - The execPath that is where node.exe lives
1 - The current working directory
2 - --node 
3- 8080
4- --host
5- localhost

__2.__ This is used so as to get all CLI arguments used after the name of the working directory

__3.__ 

```javascript
console.log(Buffer.from("مرحبا")); // 10
console.log(Buffer.from("hello")); // 5
console.log("مرحبا".length); // 5
```
The first line is 10 because 2 bytes represent a single character in arabic text.
The third line counts the number of characters and not byte hence why it is 5
 
__4.__ This will crash the file as it will be processed by the RAM. This will be heavy and will cause a delay even if not crashed

__5.__ readable.pipe(Writeable) and pipeline(readable,writabel) both function similarly by connecting writestream to readstream, but are slightly different as pipeline() provides built in handling of errors and cleanup. pipeline can also automatically destroy connected streams on failure

One situation where

__6.__ console.log(buf.toString("hex")) -> 4e6f64652e6a73
console.log(buf.toString("base64")) -> Tm9kZS5qcw==

__7.__ Stream keeps memory flat due to its processing of data piece by piece such that no matter how big the file is the RAM used always remains at approximately the same value for each piece of data processed.
The bucket approach grows linearly while the pipe approach stays flat 

__8.__ Bun and node
- Bun has a built in package manager. I would prefer node as it has a bigger community of users
- It has built in bundler and test runner. I would use bun in this case
- It can run a ts file directly. Bun would be prefered since it does not need extra compile step

# CLASS 32: Express and Typescript
__9.__ GET /api/products/featured returns `{
  "hit": "by-id",
  "id": "featured"
}`
GET /api/products/42 returns `{
  "hit": "by-id",
  "id": "42"
}`
GET /api/products returns `{
  "hit": "fallback"
}`
This is because express matches routes in the order they are defined from top to bottom. The :id parameter matches any single path segment including 'featured' therefore it doies not reach the second route handler specifically for featured

__10.__ req.params.id is always a string to get is as a nuber use Number(req.params.id).<br>
This is because express treats route parameters as text captured from the URL.

__11.__ routes - decides how app responds to a particular URL and HTTP method. controllers - recieves request, calls appropriate services and sends responses. services - contains business logic and handles data('the kitchen')
The file to be changed is products.services.ts beacuse we do not need to change the HTTP route or controller but only how data is obtained in the service

__12.__ The missing line would be app.use(express.json()). It goes before the route handler ie app.post(). It is used to parse JSON into req.body.

__13.__ 

__14.__ (a.) 201 created is for a successfully creaed POST or PUT
(b.) 404 not found
(c.) 400 bad request a missing field is a bad request
(d.) 500 internal server error
(e.) 200 OK the requested resource was fethed successfully

# CLASS 33: Middleware and Error Handling
__15.__ M1 in
M2 GET /
handler starts
handler ends
M1 out

M1 out runs last because next() passes execution to the next handler but still keeps the process on then executes M1 out when other handlers have ran

__16.__ The client sees a loading spinner that never stops. The terminal processes the middleware without moving to the next handler. Express cannot guess the middleware is done because it does not know ones intent and never automatically calls next()

__17.__ 

__18.__ 

__19.__ 

__20.__ 

__21.__