import useHello from "../hooks/useHello";

const Hello = ({name} : {name: string}) => {
    const {setName, getGreeting} = useHello();
    setName(name);

    return <div>{getGreeting()}</div>
}

export default Hello;