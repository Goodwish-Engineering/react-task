import { Link } from "react-router-dom";
import '../App.css'
import { useState } from "react";
const Header = () => {
    const [searchTerm,setSearchTerm]=useState('');
    const handleChange=(event)=>{
        setSearchTerm(event.target.value);
        
    }
    const handleKeyDown=(event)=>{
        if(event.key==='Enter'){
           
            console.log(searchTerm);
        }

    }
    return (
        <header className="headerbar">
            <Link to="/" className="logo">Mini Blog</Link>
            <input onChange={handleChange} onKeyDown={handleKeyDown}className="searchbar"type="text" name="input" value="" placeholder="Search ..."/>

        </header>
    )
}
export default Header;