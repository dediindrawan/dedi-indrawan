// change image on user platform using basically
function setSharedImage() {
    let sharedImage = 'https://i.ibb.co.com/2FqrBCm/logo.png';

    // set user popular platform are needed
    if (window.location.href.includes('whatsapp.com')) {
        sharedImage = 'https://i.ibb.co.com/2FqrBCm/logo.png';
    } else if (window.location.href.includes('instagram.com')) {
        sharedImage = 'https://i.ibb.co.com/2FqrBCm/logo.png';
    } else if (window.location.href.includes('telegram.com')) {
        sharedImage = 'https://i.ibb.co.com/2FqrBCm/logo.png';
    } else if (window.location.href.includes('twitter.com')) {
        sharedImage = 'https://i.ibb.co.com/2FqrBCm/logo.png';
    } else if (window.location.href.includes('youtube.com')) {
        sharedImage = 'https://i.ibb.co.com/2FqrBCm/logo.png';
    } else if (window.location.href.includes('tiktok.com')) {
        sharedImage = 'https://i.ibb.co.com/2FqrBCm/logo.png';
    } else if (window.location.href.includes('gmail.com')) {
        sharedImage = 'https://i.ibb.co.com/2FqrBCm/logo.png';
    };

    // set display picture when link is shared by user
    document.querySelector('meta[property="og:image"]').setAttribute('content', sharedImage);
};
setSharedImage();