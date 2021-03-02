import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const People = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(people => setPeople(people));
    }, [])


    return(
        <main className="container">
            <section className="row mt-3">
                <div className="col-md-12 d-flex justify-content-center">
                    <ul className="list-group">
                        {people.map(person => (
                            <li key={`person-item-${person.id}`} className="list-group-item d-flex justify-content-between align-items-center">
                                {person.name} | {person.age}
                                <Link to={`/People/${person.id}`} className="btn btn-primary">
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

export default People;