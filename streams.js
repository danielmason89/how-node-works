const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //  Solution 1 - problem when file is big, or too many requests..
    //     fs.readFile('test-file.txt', (err, data) => {
    //         if (err) console.log(err);
    //     res.end(data);
    // });


    // Solutions 2 - Streams
    //     const readable = fs.createReadStream('test-file.txt')

    //     readable.on('data', chunk => {
    //         res.write(chunk);
    //     });
    //     readable.on('end', () => {
    //         res.end();
    //     });
    //     readable.on('error', err => {
    //         console.log(err);
    //         res.statusCode = 500;
    //         res.end("File not found");
    //     });

    // Solution 3: pipe is best way to consume stream methods and events or use them. 
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);
    // readableSource.pipe(writeableDEST)

});


server.listen(8000, '127.0.0.1', () => {
    console.log('Listening...')
});