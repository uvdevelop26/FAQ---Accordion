const botones = document.querySelectorAll('.btn');
const boxBody = document.querySelectorAll('.box-body');
const iconMinusURL = 'assets/images/icon-minus.svg'
const iconPlusURL = 'assets/images/icon-plus.svg'


botones.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        const imgURL = item.lastElementChild;

        if ((imgURL.src).includes('plus')) {
            imgURL.src = iconMinusURL
            boxBody[index].classList.remove('box-close');

        } else if ((imgURL.src).includes('minus')) {
            imgURL.src = iconPlusURL
            boxBody[index].classList.add('box-close');
        }
    });
});