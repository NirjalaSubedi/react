import "./style.css"
export const Suscribe=()=>{
    const[email,setEmail]=useState("567");
    const handleInputChange=(e)=>{
        setEmail(e.target.value);
    }
    return(
        <form>
            <input onChange={handleInputChange} value={email}type="email" placeholder="enter email"/>
            <button type="submit">Suscribe</button>
        </form>
    )
}