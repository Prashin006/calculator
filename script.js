if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}
function ready() {
    let string = '';
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (event) => {
            let value = event.target.innerHTML;
            // if (value == '<i class="fa-solid fa-delete-left">') {
            //     let length = string.length;
            //     string = string.slice(0, length - 1);
            // }
            if (value == 'C') {
                string = '';
                document.querySelector('input').value = string;
            }
            else if (value == '%') {
                string = string + value;
                document.querySelector('input').value = string;
                if (value == '=') {
                    let myArray = string.split('%');
                    console.log(myArray.length);
                    console.log(myArray[0], myArray[1]);
                }

            }
            // else if (value == '<i class="fa-solid fa-delete-left"></i>') {
            //     string.length = string.length - 1;
            //     document.querySelector('input').value = string;
            // }
            else if (value == '=') {
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else {
                // console.log(value);
                string = string + value;
                document.querySelector('input').value = string;
            }

        });
    });
}