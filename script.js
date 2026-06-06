const buttons = document.querySelectorAll(".button")
const dis = document.querySelector(".display")

let displayed = ''

function button_checker(button){
    const value = button.target.textContent;

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
    else if (value === '%') {
        displayed = eval(dis.innerHTML.replaceAll('÷', '/').replaceAll('×', '*').replaceAll('−', '-')) + '%';
        dis.innerHTML = displayed;
    }
    else if (value === '+/-') {
        const res = eval(dis.innerHTML.replaceAll('÷', '/').replaceAll('×', '*').replaceAll('−', '-'));
        displayed = String(-res);
        dis.innerHTML = displayed;
    }
    else if (value === 'AC' || value === 'C') {
        displayed = '';
        dis.innerHTML = '0';
        document.querySelector('#clear').textContent = 'AC';
    }
    else if (value === '.' && dis.innerHTML.at(-1) === '.') {
        return;
    }
    else {
        displayed += value;
        dis.innerHTML = displayed;
        document.querySelector('#clear').textContent = 'C';
    }
}

buttons.forEach(button => {
    button.addEventListener('click', button_checker);
});