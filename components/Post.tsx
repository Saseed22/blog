interface Props{
  title: string,
  text: string,
  img?:string | undefined
  profile?:string | undefined
}

const Post = ({title,text,img,profile}:Props) => {
  return (
      <div className="max-w-6xl mx-auto hover:scale-105  duration-200 ">
          <div className=" p-4 ">
            <div  className="flex flex-col justify-between items-center">
            <img className="rounded" src={img} alt="/" />
              <div className="flex items-end justify-between">
             <div className="">
              <h1 className="font-bold text-xl mt-4 lg:text-3xl">{ title}</h1>
              <p className="leading-6 mt-2">{text }</p>
               </div>
               <img className="w-10 h-10 rounded-full" src={profile} alt="/" />
              </div>
            </div>
          </div>
    </div>
  )
}

export default Post