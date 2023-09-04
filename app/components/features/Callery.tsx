import Container from "../Container";

interface PlantSectionProps {
    imageClass: string;
    title: string;
}
const bg1 = "bg-section1"
const bg2 = "bg-section2"
const bg3 = "bg-section3"
const bg4 = "bg-section4"
export const PlantSection: React.FC<PlantSectionProps> = ({ imageClass, title }) => (
    <div className={`bg-${imageClass} bg-cover bg-center w-80 h-96 relative flex items-end`}>
        <div className="w-full h-full bg-black bg-opacity-40 absolute top-0"></div>
        <div className="text-white p-11 relative z-8">
            <h3 className="text-xl mb-2">{title}</h3>
            <p className="text-[14px] border-b-2 w-fit">See more</p>
        </div>
    </div>
);

const Callery: React.FC = () => {
    return (
        <section>
            <Container>
                <div className="flex-center gap-10 flex-wrap p-12">
                    <div className="flex flex-col gap-10">
                        <PlantSection imageClass="section1" title="House Plant Accessories" />
                        <PlantSection imageClass="section3" title="Seed Packets" />
                    </div>
                    <div className="pt-12 flex flex-col gap-10">
                        <PlantSection imageClass="section2" title="New Arrivals" />
                        <PlantSection imageClass="section4" title="Shipping Info" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Callery;
