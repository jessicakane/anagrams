import {useState} from 'react';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import {Link, useLocation} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { IntructionsModal } from '../IntructionsModal';


export const LoginPage = () => {

    const {userName, updateUserName, isLoggedIn, setIsLoggedIn} = useContext(AppContext);

    const[text, setText] = useState('');
    const[show, setShow] = useState(false);

    const handleLogin = () => {
        if (text.trim() === '') {
            return;
          }
        setIsLoggedIn(true);
        updateUserName(text);
        setText('');
        setShow(true);
    }

  return (
    <div className = "loginFormContainer">
      
        {isLoggedIn ? (<h1 className = 'header'>Welcome {userName}!</h1>) : <h1 className = 'header'>Log in to play!</h1>}
        {isLoggedIn ? (<p className = 'lead'>Let's play <Link to = '/'> Anagrams</Link></p>) : (
        <div className = "userNameContainer">
            <label htmlFor='userName'>User Name</label>
            <input
            type = 'text'
            id = 'userName'
            className = 'userNameInput'
            value = {text}
            onChange = {(e) => {setText(e.target.value)}}/>
            <Button type = 'button' onClick={handleLogin} className = 'btn btn-success'>Log in</Button>
            
        </div>)}
        <IntructionsModal show = {show} setShow = {setShow} userName = {userName}/>
        
    </div>
  )
}

