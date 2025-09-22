import styles from './CssModule.module.css';

 export const Hero=()=>{
    let value="hello world";
    console.log(value);
    return(
        <>
        <div>
            <div>
                <h3> Welcome to login</h3>
            </div>
        <form className={styles.hero}>
            <div>
                <label for="name">Enter your Name</label>
                <input type="text" name="name" id="name" value="" placeholder="Enter your username"></input>
            </div>
            <div>
                <label for="password">Enter your Password</label>
                <input type="password" name="password" id="password" value="" placeholder="password"></input>
            </div>
            <div>
                <input type="submit" value="submit"></input>
            </div>
        </form>
        </div>
        </>
    )
}
