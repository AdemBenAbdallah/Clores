import Image from "next/image"

const Info = () => {
    return (
        <section className="w-full flex items-center gap-24 p-5 md:p-20 bg-[#f2f2f2]">
            <div className="hidden md:flex-1 md:flex-center">
                <Image
                    src="/assests/img/home/C.webp"
                    alt="information"
                    width={350}
                    height={350}
                    priority={true}
                />
            </div>
            <div className="space-y-2 flex-1">
                <h1 className="text-primay text-xl sm:text-3xl">Welcome to Clores</h1>
                <p className="max-sm:text-[14px]">CLORES Company is the ultimate destination for plant enthusiasts
                    seeking valuable botanical information. Our comprehensive database
                    is a treasure trove of knowledge on a wide array of plant species,
                    covering care, propagation, and historical significance.
                    Whether you&apos;re a seasoned gardener or a budding enthusiast,
                    CLORES offers the tools and resources you need to deepen your
                    understanding of the plant world. We are dedicated to fostering
                    a greener, healthier planet by sharing our passion for plants.
                </p>
            </div>
        </section>
    )
}

export default Info