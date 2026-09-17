# CLASS 31: Node.js Runtime, Buffer, Streams & Bun
1. Line1 :[
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

2. This is used so as to get all CLI arguments used after the name of the working directory

3. 

```javascript
console.log(Buffer.from("مرحبا")); // 10
console.log(Buffer.from("hello")); // 5
console.log("مرحبا".length); // 5
```
The first line is 10 because 2 bytes represent a single character in arabic text.
The third line counts the number of characters and not byte hence why it is 5
 
4. This will crash the file as it will be processed by the RAM. This will be heavy and will cause a delay even if not crashed

5. readable.pipe(Writeable) and pipeline(readable,writabel) both function similarly by connecting writestream to readstream, but are slightly different as pipeline() provides built in handling of errors and cleanup. pipeline can also automatically destroy connected streams on failure

One situation where

6. console.log(buf.toString("hex")) -> 4e6f64652e6a73
console.log(buf.toString("base64")) -> Tm9kZS5qcw==

7. Stream keeps memory flat due to its processing of data piece by piece such that no matter how big the file is the RAM used always remains at approximately the same value for each piece of data processed.
The bucket approach grows linearly while the pipe approach stays flat 

8. Bun and node
- Bun has a built in package manager. I would prefer node as it has a bigger community of users
- It has built in bundler and test runner. I would use bun in this case
- It can run a ts file directly. Bun would be prefered since it does not need extra compile step

# CLASS 32: Express and Typescript
9. 
10. 
11. 
12. 
13. 
14. 

# CLASS 33: Middleware and Error Handling
15. 
16. 
17. 
18. 
19. 
20. 

21. 
