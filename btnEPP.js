import { createBasicAlertModal } from './BasicAlertModal.js';

document.getElementById('EPPfiles').addEventListener('click', function() {
    const basicAlertModal = createBasicAlertModal();

    // Ensure modal content is selected correctly
    const modalContent = document.querySelector('#basicAlertModal > div');

    // Show the modal
    basicAlertModal.show('Upload EPP files');
});

