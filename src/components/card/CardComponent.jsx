import { useStoreFavorite } from "../../store/favorite.store";
import Link from 'next/link';
import React from 'react'
import { FaHeart } from "react-icons/fa";

export default function CardComponent({id,image, name, type, hp, attack}) {
  const { selectedFavoriteIds, toggleHeartIcon } = useStoreFavorite()
  let isSelected = selectedFavoriteIds.includes(id)
  return (
    <div className="border-2 relative w-[400px] h-[530px] overflow-hidden border-gray-200  rounded-md">
                {/* image area */}
                <Link href={`/pokemon/${id}`} className="flex overflow-hidden justify-center items-center w-full bg-gray-200">
                <img src={image} width="100%" height="100%"/>
                </Link>
                {/* content area */}
                <div className="mt-4 p-4">
        <h1 className="text-2xl font-bold "> {name} </h1>
        {isSelected?<FaHeart onClick={()=>toggleHeartIcon(id)} size={25} color="red" className="absolute top-2 right-2 cursor-pointer" />:<FaHeart onClick={()=>toggleHeartIcon(id)} size={25} color="white" className="absolute top-2 right-2 cursor-pointer" />}
        
          <div className="bg-fuchsia-900 opacity-[0.9] text-white py-2 px-5 rounded-full absolute top-2 left-2 flex items-center justify-center"><h3 className="font-bold opacity-[1]"> {type} </h3></div>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-full cursor-pointer hover:bg-blue-600 transition duration-300">Click Me</button>
           </div>
     </div>
  )
}
