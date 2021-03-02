import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Films = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(films => setFilms(films));
    }, [])


    return(
        <main className="container">
            <section className="row mt-3">
                <div className="col-md-12 d-flex justify-content-center">
                    <ul className="list-group">
                        {films.map(film => (
                            <li key={`film-item-${film.id}`} className="list-group-item d-flex justify-content-between align-items-center">
                                {film.title}
                                <Link to={`/Films/${film.id}`} className="btn btn-primary">
                                    Read Profile
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Films;