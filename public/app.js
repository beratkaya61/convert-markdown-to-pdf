document.getElementById('convert-button').addEventListener('click', function() {
});

document.getElementById('file-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('markdown-input').value = e.target.result;
    };

    reader.readAsText(file);
});

document.getElementById('upload-button').addEventListener('click', function() {
    document.getElementById('file-upload').click();
});

