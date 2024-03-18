import { ShoeType } from "../types"

type CardProps = {
  shoe : ShoeType
}

function Card({shoe}:CardProps){
  return(
    <div
      className={`${shoe.className} max-w-xl transform cursor-pointer transition hover:scale-105`}
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