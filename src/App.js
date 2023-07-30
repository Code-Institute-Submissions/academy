import './App.css';
import {useEffect, useState} from "react";
import {axiosClient} from "./api/axiosDefaults";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Navigation />
            <header className="App-header">
                <p>
                    Welcome to Academy Site
                </p>
            </header>
        </div>
    );
}

export default App;
