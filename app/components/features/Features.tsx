import { useRouter } from "next/navigation"
import Container from "../Container"
import Callery from "./Callery"
import FeaturesProducts from "./FeaturesProducts"

const Features = () => {
    const router = useRouter()

    const handleClick = () => { router.push('/shop') }

    return (
        <section className="bg-primary w-full pb-20">
            <Callery />
            <FeaturesProducts />
            <div className="bg-perfect bg-cover bg-center flex-center w-full h-screen relative">
                <div className="w-full h-screen bg-black bg-opacity-50 absolute top-0"></div>
                <div className="flex-center flex-col gap-5 relative z-8">
                    <h1 className="text-white text-3xl">Find Your Perfefct Plant</h1>
                    <button
                        onClick={handleClick}
                        className="button w-fit"
                    >Get Started</button>
                </div>
            </div>
            <Container>
                <div className="bg-perfect bg-cover bg-center flex items-center justify-end w-full h-[40vh] mt-20 relative">
                    <div className="w-full h-full bg-black bg-opacity-30 absolute top-0"></div>
                    <div className="w-2/4 flex items-start flex-col gap-5 relative z-8">
                        <h1 className="text-white text-3xl">Find Your Perfefct Plant</h1>
                        <p className="text-white">A plant a positive information</p>
                        <button 
                            onClick={handleClick}
                            className="button w-fit"
                        >Cam Goldes</button>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="flex flex-col gap-2 relative z-8 mt-20 mb-5">
                    <h1 className="text-black text-3xl">Instagram feed</h1>
                    <p className="text-light ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, mollitia et.</p>
                </div>
            </Container>
            <div className="bg-footer bg-cover bg-center flex-center w-full h-[40vh] relative ">
                <div className="w-full h-full bg-black bg-opacity-30 absolute top-0"></div>
            </div>
        </section>
    )
}

export default Features