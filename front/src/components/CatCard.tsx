import '../assets/cat1.png' 
const CatCard = ({id, }) => {
    return (
        <div className="
            w-[225px] h-[225px] 
            bg-[url(src/assets/cat1.png)] 
            bg-cover
            shadow 
            transition-all 
            duration-300 
            hover:w-[257px] hover:h-[256px] 
            hover:shadow-2xl
            cursor-pointer
        ">
            
        </div>
    )
}

export default CatCard
