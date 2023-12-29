function sendTwitter() {
    const text = 'blabla';
    const sendUrl = `https://twitter.com/intent/tweet?text=${text}&url=${location.href}`;

    window.open(sendUrl, "_blank");
}

function sendFacebook() {
    const sendUrl = `https://www.facebook.com/sharer/sharer.php?u=${location.href}`;

    window.open(sendUrl, "_blank");
}