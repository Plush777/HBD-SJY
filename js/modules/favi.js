export function favi() {
    const f = document.getElementById('favi');
    let i = 0;

    setInterval(() => {
        i = (i + 1) % 4;
        f.href = `../images/ico/ico-favicon0${i + 1}.png`;
    }, 2000);
}