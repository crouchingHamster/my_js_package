const useHello = ({name}: {name: string}): {getGreeting: () => string} => {
    const getGreeting = () => {
        return `Hello ${name}`;
    }

    return {getGreeting}
}

export default useHello;