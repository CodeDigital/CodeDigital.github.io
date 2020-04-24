import fs from 'fs';
import path from 'path';

const BLACKLISTED_PATHS = ['about','contact','sample-project','p5-project'];

const PROJECTS_DIR = path.join(process.cwd(),'public','_posts','projects');
const WEBLOG_DIR = path.join(process.cwd(),'public','_posts','weblog');
const SCRIPTHTML_DIR = path.join(process.cwd(),'public','scripts.html');

function getFolderNames(folderNames){
    let filteredFolderNames = folderNames.filter(fName => {
        if(!fName.includes('.')){
            return true;
        }else{
            return false;
        }
    });
    return filteredFolderNames
}

export function getProjectThumbnailData() {
    // Get all folder names under /projects
    const folderNames = fs.readdirSync(PROJECTS_DIR)

    const filteredFolderNames = getFolderNames(folderNames);

    const allProjectThumbnailData = filteredFolderNames.map(fName => {
        // const id = fName;
        const jsonPath = path.join(PROJECTS_DIR, fName, "info.json");
        
        // const json = require(jsonPath);
        const buffer = fs.readFileSync(jsonPath);
        let json = JSON.parse(buffer.toString());
        json.dir = fName;

        // if(typeof json.show !== 'undefined'){
        //     if(BLACKLISTED_PATHS.includes(fName)){
        //         json.show = false;
        //     }else{
        //         json.show = true;
        //     }
        // }

        return json;
    });

    return allProjectThumbnailData;
}

export function getWeblogThumbnailData() {
    // Get all folder names under /projects
    const folderNames = fs.readdirSync(WEBLOG_DIR)
    
    const filteredFolderNames = getFolderNames(folderNames);

    const allWeblogThumbnailData = filteredFolderNames.map(fName => {
        // const id = fName;
        const jsonPath = path.join(WEBLOG_DIR, fName, "info.json");
        const buffer = fs.readFileSync(jsonPath);
        let json = JSON.parse(buffer.toString());
        json.dir = fName;
        return json;
    });

    return allWeblogThumbnailData;
}

export function getProject(dir){
    let project = {}

    const jsonPath = path.join(PROJECTS_DIR, dir, "info.json");
    let buffer = fs.readFileSync(jsonPath);
    const json = JSON.parse(buffer.toString());
    project = json;
    
    const htmlPath = path.join(PROJECTS_DIR, dir, "page.html");
    buffer = fs.readFileSync(htmlPath);
    project.html = buffer.toString('utf-8');

    return project;
}

export function getWeblog(dir){
    let weblog = {}

    const jsonPath = path.join(WEBLOG_DIR, dir, "info.json");
    let buffer = fs.readFileSync(jsonPath);
    const json = JSON.parse(buffer.toString());
    weblog = json;
    
    const htmlPath = path.join(WEBLOG_DIR, dir, "page.html");
    buffer = fs.readFileSync(htmlPath);
    weblog.html = buffer.toString('utf-8');

    return weblog;
}

export function getScriptHTML(){
    let buffer = fs.readFileSync(SCRIPTHTML_DIR);
    const html = buffer.toString('utf-8');
    return html;
}