const fs = require('fs');

// craeting file
fs.open('./std.txt', 'w',(err)=>{
    if(err) throw err;
    console.log("FILE CREATED");
})
//writing file
fs.writeFile('./std.txt','Abdiaziz Ahmed Adan',(err)=>{
    if(err) throw err;
    console.log("DONE!")
})

// reanaming file

fs.rename('./emplyeeNames','./emplyeeNames.txt',(err)=>{
    if(err) throw err;
    console.log("FILE RENAMED!")
})


// readig file

 fs.readFile('./emplyeeNames.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString())
 })



 // creating Folder 

 fs.mkdir('./CA192Class',(err)=>{
    if(err) throw err;
    console.log("Folder Created");
 })

// if folder not exists create now 
 if(!fs.existsSync('./CA192Class')){
    fs.mkdir('./CA192Class',(err)=>{
        if(err) throw err;
        console.log("Folder Created");

    })

 }
 // otherwise remove 
 else{
    fs.rmdir('./CA192Class',(err)=>{
        if(err) throw err;
        console.log("Folder Removed");
    })
}

// file reading using readStream method
let readStream = fs.createReadStream('./emplyeeNames.txt',{encoding:'utf-8'});
// Event listener
readStream.on('data', (chunk)=>{
    console.log(chunk);// also you can use toString() method instead of encoding
  //  console.log(chunk.toString());
})

// uploading file and thier data from existance file to another file using pipe methed

let read_stream = fs.createReadStream('./emplyeeNames.txt');
let writeStream = fs.createWriteStream('./empNames.txt');
read_stream.pipe(writeStream)
console.log("File uploaded");



const zlip = require('zlib');
fs.createReadStream('./std.txt').pipe(zlip.createGzip()).pipe(fs.createWriteStream('std.txt.gz'));
console.log("File comprized")









