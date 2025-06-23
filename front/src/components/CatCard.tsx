import '../assets/cat1.png' 

interface IProps {
  key: string
  url: string
}
const CatCard = ({key, url}: IProps) => {
    return (
        <div 
            key={key}
            className="w-[225px] h-[225px] bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_9px_18px_0_rgba(0,0,0,0.18),0_6px_5px_0_rgba(0,0,0,0.24)]"
            style={{ backgroundImage: `url(${url})` }}
        />
    )
}

export default CatCard
