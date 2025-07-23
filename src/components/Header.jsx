import { Link } from "react-router-dom";
import '../App.css'

const Header = ({searchTerm,onSearch}) => {
    
    const handleChange=(event)=>{
        setSearchTerm(event.target.value);
        
    }
    const handleKeyDown=(event)=>{
        if(event.key==='Enter'){
           event.preventDefault();
            onSearch(searchTerm);
        }

    }
    return (
        <header className="headerbar">
            <Link to="/" className="logo">Mini Blog</Link>
            <input onChange={handleChange} onKeyDown={handleKeyDown}className="searchbar"type="text" name="input" value={searchTerm} placeholder="Search ..."/>

        </header>
    )
}
export default Header;