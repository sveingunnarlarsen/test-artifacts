async function importDeploymenFile(evt) {
    if (evt.target.files.length < 1) {
        return;
    }

    console.log(evt.target.files[0]);

    const formData = new FormData();
    formData.append('myFile', evt.target.files[0]);

    await fetch('/api/serverscript/postimage/save', {
        method: 'POST',
        body: formData,
    });
}

window.importDeploymenFile = importDeploymenFile;


console.log('test');

console.log('test2');