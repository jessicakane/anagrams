import './App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/pages/LoginPage';
import { NavBar } from './components/NavBar';
import { GamePage } from './components/pages/GamePage';
import { AppContext } from './context/AppContext';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const[userName, setUserName] = useState('');

    const updateUserName = (userName) => {
        setUserName(userName);
    }

    useEffect(() => {
        localStorage.setItem('userName', userName);
        localStorage.setItem('isLoggedIn', isLoggedIn);
        console.log('we have stored username!', localStorage.getItem('isLoggedIn'));
    }, [userName, isLoggedIn])

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn) {
            console.log(storedIsLoggedIn);
            setIsLoggedIn(storedIsLoggedIn === 'true');
        }
        if (storedUserName) {
            console.log('userName');
            setUserName(storedUserName);
        }
    },[])

    return (
        <BrowserRouter>
        <div className="App">
        <AppContext.Provider value = {{userName, updateUserName, isLoggedIn, setIsLoggedIn}}>
                <NavBar/>
                <Routes>
                    <Route path ='/login' element = {<LoginPage />} />
                    <Route path = '/' element = {isLoggedIn ? (<GamePage/>) : (<LoginPage/>)}/>
                </Routes>
        </AppContext.Provider>
        </div>
        </BrowserRouter>
    );
}

export default App;

// to do:
// 1) clear board function
// 2) better algorythm to determine if root has been changed
