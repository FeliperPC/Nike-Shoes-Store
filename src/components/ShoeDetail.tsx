import nike1 from '../assets/n1-min.png'
function ShoeDetail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/* Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className='flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]'>
          <img src={nike1}/>
        </div>
      </div>
      {/* Description */}
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl font-black md:text-9xl">Nike Air Max 270</h1>
        <p className="font-medium md:text-xl">{`The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient.`}</p>
        <h2 className="text-3xl font-extrabold md:text-6xl">160 $</h2>
        {/* buttoms and links */}
        <div className="space-x-10">
          <button className="w-44 h-14 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add to chart
          </button>
          <a href="#" className="text-lg font-bold underline underline-offset-4">
            View details
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShoeDetail;
