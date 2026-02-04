import { useEffect, useState } from "react"
import styles from './CatFacts.module.css'

const CatFacts = () => {
    //State management
    const [facts, setFacts] = useState([]);  //array, because there are a lot of facts
    //true = data is loading, false = loading complete
    const [loading, setLoading] = useState(true);
    //error message
    const [error, setError] = useState(null); //null = there are no errors

    useEffect(() => {
        //Receiving data
        fetch("https://catfact.ninja/facts?limit=5")
        //Request processing
        .then((response) => {
            if (!response.ok) {
                throw new Error ("Error loading data");
            }
            return response.json();
        })
        .then((data) => {
            setFacts(data.data);
            setLoading(false);
        })
        //If an error occurred during the request
        .catch((err) => {
            //show an error
            setError(err.message);
            //turn off loading
            setLoading(false);
        });
    }, []);  //We execute the code once when the component is mounted

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }


    return (
        <div className={styles.facts_container}>
            <h2 className={styles.facts_header}>Cat Facts</h2>
            <ol className={styles.list_container}>
                {facts.map((fact, index) => (
                    <li key={index} className={styles.list_item}>{fact.fact}</li>
                ))}
            </ol>
        </div>
    );
}

export default CatFacts;