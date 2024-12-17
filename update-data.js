const fs = require('fs');
const fetch = require('node-fetch');

const owner = 'ym-sunyan';
const repo = 'test';

async function fetchFileContent(path) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const response = await fetch(url);
    const data = await response.json();
    if (Array.isArray(data)) {
        const promises = data.map(async (item) => {
            if (item.type === 'file' && item.name === 'config.txt') {
                const content = await fetchFileContent(item.path);
                const uploadTime = await fetchFileUploadTime(item.path);
                return { path: item.path, content, uploadTime };
            } else if (item.type === 'dir') {
                return fetchFileContent(item.path);
            }
        });
        return (await Promise.all(promises)).flat();
    } else {
        const content = Buffer.from(data.content, 'base64').toString('utf-8');
        return content;
    }
}

async function fetchFileUploadTime(path) {
    const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${path}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
        return data[0].commit.committer.date;
    } else {
        throw new Error(`No commit info found for ${path}`);
    }
}

async function updateDataJson() {
    const data = await fetchFileContent('');
    const dataJson = data.reduce((acc, item) => {
        acc[item.path] = { content: item.content, uploadTime: item.uploadTime };
        return acc;
    }, {});
    fs.writeFileSync('data.json', JSON.stringify(dataJson, null, 2));
}

updateDataJson().catch(console.error);
