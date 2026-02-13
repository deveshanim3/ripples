"use client";
import { useState } from 'react'
import Box from './Box'

const Grid:React.FC= () => {
    const [grid,setGrid]=useState(Array(9).fill(0))
    
    const handleReset=():void=>{
          setGrid(Array(9).fill(0))
    }
   
    const handleClick=(i:number):void=>{
        setGrid(prev=>{
            if(prev[i]>=15)return prev;

            const next=[...prev];
            next[i]+=1
            const val=next[i];
            const row=Math.floor(i/3)
            const col=i%3

            if(val%3==0){
                if(col<2){
                    const rightIdx=i+1
                    if(prev[rightIdx]<15){
                        next[rightIdx]-=1
                    }
                }
            }
            if(val%5==0){
                if(row<2){
                    const downIdx=i+3
                    if(prev[downIdx]<15){
                        next[downIdx]+=2
                    }
                }
            }
            return next
        })
    }
    return (
        <div className='flex justify-center items-center flex-col gap-4'>
        <button onClick={handleReset} className='px-4 py-2 bg-slate-800 text-white rounded-md cursor-pointer'>Reset</button>
        <div className='grid grid-cols-3 grid-rows-3 gap-2'>
            {
                grid.map((value,idx)=>{
                    return(
                        <Box key={idx} value={value} onClick={()=>handleClick(idx)} />
                        )
                })
            }
        </div>
        </div>
    )
}

export default Grid