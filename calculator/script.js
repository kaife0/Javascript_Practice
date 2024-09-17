const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.textContent;
        // console.log(`Button text: ${buttonText}`);

        switch (buttonText) {
            case 'X':
                screenValue += '*';
                break;
            case 'C':
                screenValue = '';
                break;
            case '=':
                try {
                    screenValue = eval(screenValue);
                } catch (error) {
                    screenValue = 'Error';
                }
                break;
            default:
                screenValue += buttonText;
                break;
        }

        screen.value = screenValue;
    });
});