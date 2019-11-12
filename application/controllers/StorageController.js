'use stricts';

const { match } = require('../../shared/patternMatching');
const fs = require('fs');

/**
 * @Controller
 */
exports.getFile = function(req, res, id, storagePath) {

    res.writeHead(200,{});
    
    //TODO: catch no surch file or directory
    var readStream = fs.createReadStream(`${storagePath}${id}`);

    readStream.pipe(res);
};

/**
 * @Controller
 */
exports.preUploadFile = function(req, res, storagePath) {

    res.writeHead(200,{'content-type':'text/html'});
    res.write('<form method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="fileupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    res.end();
};

/**
 * @Controller
 * 
 */
exports.uploadFile = function(req, res, storagePath) {
    // console.log(" req2 -> ", req.file, req.file.filename);
    res.status(200).send(`"${req.file.filename}"`);
}