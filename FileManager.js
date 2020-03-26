import fs from 'fs' 

function readFile(path) {
    return fs.readFileSync(path, 'utf-8')
}

function writeFile(path, value, isCreationEnabled) {
    if(fs.existsSync(path) || isCreationEnabled){
        fs.writeFileSync(path, value)
    }    
}

export default {
    readFile,
    writeFile
}