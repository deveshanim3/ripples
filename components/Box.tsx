"use client";
interface BoxProps{
    value:number;
    onClick:()=>void;
}
const Box:React.FC<BoxProps>= ({ value,onClick}) => {
    const locked=value>=15;
    const odd=value%2==1;
    
    let background="bg-[#e0e0e0] text-black"
    if(odd)background="bg-[#1a237e] text-white"
    if(locked)background="bg-red-600 text-white"

    return (
        <button onClick={onClick} disabled={locked} className={`h-25 w-25 border-2 border-black shadow-[2px 2px 0 black] rounded-[4px] flex justify-center items-center font-semibold text-2xl select-none
             ${background}
             ${locked?"cursor-not-allowed":"cursor-pointer"}`}>{value}</button>
    )
}

export default Box