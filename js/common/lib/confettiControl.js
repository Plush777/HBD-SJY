function rain() {
    if (!location.hash) {
        setTimeout(() => (confetti.start()), 1000);
        setTimeout(() => (confetti.stop()), 6000);
    } 
}

rain();

window.addEventListener('popstate', function () {
    rain();
});