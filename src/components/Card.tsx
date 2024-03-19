import { useDispatch } from "react-redux"
import { ProductProps } from "../types"
import { PREVIEW } from "../redux/actions"

function Card({shoe}:ProductProps){
  const dispatch = useDispatch()
  return(
    <div
      className={`${shoe.className} max-w-xl transform cursor-pointer transition hover:scale-105`}
      onClick={()=>dispatch(PREVIEW(shoe))}
    >
      <div className="p-8">
        <h1 className="text-2xl font-bold">{shoe.title}</h1>
        <h3 className="mt-10 font-semibold underline underline-offset-4">
          SHOP NOW +
        </h3>
      </div>
      <img
        className="absolute left-[40%] top-5 h-40 w-56"
        src={shoe.src}
      />
    </div>
  )
}

export default Card