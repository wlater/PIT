import { Link } from "react-router-dom"

export const FavouriteGenresHero = () => {

    return (

        <section className="flex max-lg:flex-col w-full max-lg:gap-20 items-stretch bg-amber-50 p-5">

            <div className="flex flex-col items-start lg:gap-16 gap-10 lg:w-1/2 max-lg:items-center max-lg:text-center">

                <p className="text-5xl max-lg:text-3xl font-semibold leading-snug w-4/6">
                    What is your favourite genre?
                </p>

                <div className="text-xl max-lg:text-lg font-light w-4/6">

                    A equipe da Livraria adoraria oferecer uma variedade de gêneros para agradar a todos.
                    Seja romance, ficção científica ou mistério, sinta-se à vontade para explorar nossa biblioteca.
                    Temos certeza de que poderemos fornecer conteúdo de qualidade para você!

                </div>

                <Link to={"/search"} type="button" className="custom-btn-2">
                    Explore our books
                </Link>

            </div>

            <div className="border border-green-500 w-1/2 max-lg:w-full max-lg:h-80 bg-home-hero-2 bg-cover bg-no-repeat bg-center" />

        </section>

    )

}