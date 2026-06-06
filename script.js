const buttons = document.querySelector(".button")
const dis = document.querySelectorAll(".display")

let displayed = ''

function button_checker(){

    if (value === '=') {
        if (dis.innerHTML.includes('%')) {
            const proc = dis.innerHTML.split('%');
            displayed = String(proc[0] * proc[1] / 100);
            dis.innerHTML = displayed;
        }
        else {
            const res = eval(dis.innerHTML.replaceAll('÷', '/').replaceAll('×', '*').replaceAll('−', '-'));
            dis.innerHTML = res;
            displayed = String(res);
        }
    }