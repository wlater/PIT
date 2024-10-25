import { Link } from "react-router-dom"

export const BeginJourneyHero = () => {

    return (

        <section className="flex max-lg:flex-col lg:justify-between gap-20 w-full items-stretch mt-10 bg-teal-50 p-5">

            <div className="flex flex-col items-start lg:gap-16 gap-10 lg:w-5/12 max-lg:items-center max-lg:text-center">

                <p className="text-5xl max-lg:text-3xl font-semibold leading-snug ">
                    Descubra um mundo de histórias incríveis
                </p>

                <div className="text-xl max-lg:text-lg font-light">

                    <p>Explore nossa vasta coleção e encontre</p>
                    <p>o livro perfeito para você.</p>

                </div>

                <Link to={"/search"} type="button" className="custom-btn-2">
                    Ver Catálogo
                </Link>

            </div>

            <div className="border border-green-500 w-7/12 max-lg:w-full max-lg:h-80 bg-home-hero-1 bg-cover bg-no-repeat bg-center" />

        </section>

    )

}