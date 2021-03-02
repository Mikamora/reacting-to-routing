import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PeopleId = () => {
    const { peopleid } = useParams();
    const [people, setPeople] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
        .then(res => res.json())
        .then(people => setPeople(people));
    })

    return(
        <main className="container">
            <section className="row mt-3">
                <div className="col-12 text-center">
                    { <h1 className="text-center">{people?.name}</h1> /*? optional chain (for true or false) if its false ignore it if its not then run it */}
                    <h3 className="text-center">{people?.age} | {people?.gender}</h3>
                    <h3 className="text-center my-4">Eye Color: {people?.eye_color} | Hair Color: {people?.eye_color}</h3>
                    <a className="btn btn-primary text-center my-3" target="null" href={people?.url}>Learn more!</a>
                </div>
            </section>
        </main>
    )
}

export default PeopleId;