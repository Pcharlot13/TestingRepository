function createBasicAlertModal() {
    // Create modal elements
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalText = document.createElement('p');
    // Remove the close button
    // const closeButton = document.createElement('span'); - done button to close instead

    // Set attributes
    modal.setAttribute('id', 'basicAlertModal');
    modal.classList.add('modal');

    modalContent.classList.add('modal-content');
    modalContent.style.display = 'flex';
    modalContent.style.flexDirection = 'column';
    modalContent.style.alignItems = 'center';
    modalContent.style.justifyContent = 'center';

    // Append elements
    modalContent.appendChild(modalText);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Ensure the upload button and file input are created only once
    let uploadButton = document.getElementById('uploadButton');
    let fileInput = document.getElementById('fileInput');

    if (!uploadButton) {
        uploadButton = document.createElement('button');
        uploadButton.setAttribute('id', 'uploadButton');
        uploadButton.textContent = 'Upload';
        uploadButton.classList.add('upload-button');
        modalContent.appendChild(uploadButton);
    }

    // Add Done button
    let doneButton = document.getElementById('doneButton');
    if (!doneButton) {
        doneButton = document.createElement('button');
        doneButton.setAttribute('id', 'doneButton');
        doneButton.textContent = 'Done';
        doneButton.classList.add('done-button');
        modalContent.appendChild(doneButton);
    }

    if (!fileInput) {
        fileInput = document.createElement('input');
        fileInput.setAttribute('id', 'fileInput');
        fileInput.type = 'file';
        fileInput.style.display = 'none';
        modalContent.appendChild(fileInput);
    }

    uploadButton.onclick = function() {
        fileInput.click();
    };

    fileInput.onchange = function(event) {
        const file = event.target.files[0];
        if (file) {
            console.log('File selected:', file.name);
            // Handle the file as needed
        }
    };

    // Close modal on Done button click
    doneButton.onclick = function() {
        modal.style.display = 'none';
        location.reload();
    };

    // Close modal on outside click
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            location.reload();
        }
    };

    return {
        show: function(text) {
            modalText.textContent = text;
            modal.style.display = 'flex';
        },
        hide: function() {
            modal.style.display = 'none';
        }
    };
}
