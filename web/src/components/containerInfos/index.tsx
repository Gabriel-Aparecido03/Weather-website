interface Props {
    title:string
    info:string
    adicional?:string
}

export function ContainerInfos({title,info,adicional}:Props) {
    return (
        <div className="bg-blue-300 w-3/4 p-4 text-gray-300 text-center">
            <h3 className="text-md">{title}</h3>
            <h1 className="text-4xl font-bold">{info}</h1>
            <span></span>
        </div>
    )
}