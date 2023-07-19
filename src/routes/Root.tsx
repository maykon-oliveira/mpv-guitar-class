import { Link } from "react-router-dom";
import { GiNotebook, GiMusicalNotes } from 'react-icons/gi';
import Footer from "../components/Footer";

export default function Root() {
    const navigation = [
        {
            icon: (
                <GiMusicalNotes />
            ),
            title: 'Exercicío de Intervalos',
            link: './intervalo-exe'
        },
        {
            icon: (
                <GiNotebook />
            ),
            title: 'Pentatônica',
            link: './pentatonica'
        }
    ]

    return (
        <div className="flex flex-col min-h-full">
            <section className="text-gray-600 body-font flex-1">
                <div className="container px-5 py-10 mx-auto">
                    {navigation.map((link, i) => (
                        <div key={i} className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="p-2 w-full">
                                <Link to={link.link} className="bg-gray-100 rounded flex p-4 h-full items-center">
                                    <span className="mr-1" style={{ fontSize: '1.5rem' }}>
                                        {link.icon}
                                    </span>
                                    <span className="title-font font-medium">{link.title}</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}