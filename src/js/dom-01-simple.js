document.addEventListener("DOMContentLoaded" , () => {
    const inputElments = [...document.querySelectorAll(
        'input[type="number"].app-cmp-input'
        )];
    
    inputElments.forEach((Element) => {
        console.debug(Element);
        Element.addEventListener('change', ()=> {
            const result = inputElments.reduce(
                (carry,elem) => carry + elem.valueAsNumber,
                0,
            )
            // let result = 0;
            // for(const elem of inputElments) {
            //     result += elem.valueAsNumber;
            // }

            document.querySelector('output.app-cmp-result').textContent =`${result}`;
        })
    });
    
});

