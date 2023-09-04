import Container from "../Container";
import { BsArrowRightShort } from 'react-icons/bs'

interface PlantSectionProps {
    imageClass: string;
    title: string;
}
const bg1 = "bg-shop1"
const bg2 = "bg-shop2"
const bg3 = "bg-shop3"
const bg4 = "bg-shop4"
export const PlantSection: React.FC<PlantSectionProps> = ({ imageClass, title }) => (
    <div className={`bg-${imageClass} bg-cover bg-center w-30 h-60 relative flex items-end`}>
        <div className="w-full h-full bg-black bg-opacity-40 absolute top-0"></div>
        <div className="text-white p-11 relative z-8">
            <h3 className="text-[1rem] mb-2">{title}</h3>
            <p className="text-[12px] border-b-2 w-fit">See more</p>
        </div>
    </div>
);

const FeaturesProducts = () => {
    return (
        <Container>
            <div className="flex gap-11 py-20">
                <div className="w-[25rem] flex flex-col justify-center gap-4">
                    <h3 className="text-black text-2xl sm:text-3xl">Featured Products</h3>
                    <p className="hidden sm:block text-[14px] w-full text-white">
                        Discover a diverse selection of high-qualityplants
                        and accessories to elevate your indoor and outdoor spaces.
                    </p>
                    <p className="block sm:hidden text-[12px] w-full text-white">
                        Discover a diverse selection of high-qualityplants
                    </p>
                    <button className="w-fit btn bg-black text-white flex gap-2 items-center">
                        <span>shop</span>
                        <BsArrowRightShort />
                    </button>
                </div>
                <div className="flex gap-4 overflow-hidden">
                    <PlantSection imageClass="shop1" title="Shipping Info" />
                    <PlantSection imageClass="shop2" title="Shipping Info" />
                    <PlantSection imageClass="shop3" title="Shipping Info" />
                    <PlantSection imageClass="shop4" title="Shipping Info" />
                </div>
            </div>
        </Container>
    )
}

export default FeaturesProducts