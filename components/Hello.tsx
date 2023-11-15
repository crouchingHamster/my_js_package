import useHello from "../hooks/useHello";

const Hello = ({name} : {name: string}) => {
    const {getGreeting} = useHello(name);

    return <div>{getGreeting()}</div>
}

export default Hello;