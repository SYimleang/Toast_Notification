const toastBox = document.getElementById('toastBox');
const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
const invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, please check again!';

const showToast = (msg) => {
    try {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    switch(true) {

        case msg.includes('error') :
            toast.classList.add('error');
            break;
        case (msg.includes('Invalid')) :
            toast.classList.add('invalid');
            break;
        default :
            break;
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
    } catch (error) {
        console.error('Error occurred while showing toast: ', error);
    }
}