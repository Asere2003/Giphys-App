
interface Props {
    title : string;
    descriptions? : string;
}

export const CustomHeader = ( { title, descriptions}: Props ) => {
    return (
        <div className="content-center">
            <h1>{ title} </h1>
            { descriptions && <p> { descriptions } </p>}
        </div>
    )
}
