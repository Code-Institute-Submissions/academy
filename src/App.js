import './App.css';
import {useEffect, useState} from "react";
import {axiosClient} from "./api/axiosDefaults";

function App() {
    const [categories, setCategories] = useState({ results: [] });
    useEffect(() => {
        const handleMount = async () => {
            try {
                const categories = await axiosClient.get('/categories');
                setCategories(categories);
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome to Academy Site
                </p>
            </header>
        </div>
    );
}

export default App;
