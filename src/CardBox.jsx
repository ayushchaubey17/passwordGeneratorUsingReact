
export default function CardBox({img,name,title}){
    return(
        <div className="border-2 border-black w-11/12 sm:w-1/2 my-4 mx-auto rounded-md p-3 text-center font-bold">
        <img src={`${img}`} alt="" />
        <h1>Name is {name}</h1>
        <p>About this {title}</p>
        
        
        </div>
    )
}