interface OvalShapeProps  {
    title : string;
    className?: string;
}


export default function ovalShape ({title, className = " " } : OvalShapeProps){
    return (
        <span
            className={`px-4 py-2 bg-gray-800 text-yellow-400 border border-yellow-400/30 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-all duration-200${className}`}
        >{title} </span>
    )
}
