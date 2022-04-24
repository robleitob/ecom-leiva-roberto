//import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer greeting='Acá se mostraran los productos!!!'/>
        </>
    );
}

export default App;