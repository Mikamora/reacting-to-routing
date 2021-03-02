import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FilmId = () => {
    const { filmid } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
        .then(res => res.json())
        .then(film => setFilm(film));
    })

    return(
        <main className="container">
            <section className="row mt-3">
                <div className="col-12 text-center">
                    { <h1 className="text-center">{film?.title}</h1> /*? optional chain (for true or false) if its false ignore it if its not then run it */}
                    <h3 className="text-center">{film?.director} | {film?.release_date} | {film?.producer}</h3>
                    <h4 className="text-center my-4">{film?.description} - {film?.rt_score}% on Rotten Tomatoes</h4>
                    <a className="btn btn-primary my-3" href={film?.url} target="null">Learn more!</a>
                </div>
            </section>
        </main>
    )
}

export default FilmId;