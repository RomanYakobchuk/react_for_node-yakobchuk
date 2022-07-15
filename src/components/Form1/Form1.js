import React, {useRef} from 'react';

const Form1 = () => {

    const name = useRef(); // краще юзати для отримання даних з інпуту, не для реєстрації
    const age = useRef();

    const submit = (e) => {
        e.preventDefault()
        const name1 = name.current.value;
        const age1 = age.current.value;
        const user = {name1, age1}
        console.log(user);
    }

    return (
        <form onSubmit={submit}>
            <div>
                <label>Name: </label>
                <input type="text" ref={name}/>
            </div>
            <div>
                <label>Age: </label>
                <input type="number" ref={age}/>
            </div>
            <button>save</button>
        </form>
    );
};

export {Form1};