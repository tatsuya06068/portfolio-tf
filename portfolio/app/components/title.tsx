const title : React.FC<{title:string}>= (prop) => {
    return(
        <h1 className="font-bold text-6xl my-5">
            {prop.title}
        </h1>
    )
}
export default title