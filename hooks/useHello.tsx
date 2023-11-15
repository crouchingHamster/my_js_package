import {useState} from "react";

const useHello = (): {setName: (value: (((prevState: string) => string) | string)) => void, getGreeting: () => string} => {
    const [name, setName]  = useState('Unknown');

    const getGreeting = () => {
        return `Hello ${name}`;
    }

    return {setName, getGreeting}
}

export default useHello;