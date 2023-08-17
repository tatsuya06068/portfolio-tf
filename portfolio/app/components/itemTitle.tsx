const itemTitle : React.FC<{itemTitle:string}>= (prop) => {
    return(
        <h1 className="font-bold text-2xl my-5">
            {prop.itemTitle}
        </h1>
    )
}
export default itemTitle