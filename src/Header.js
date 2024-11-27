import styles from './Header.module.css';
import logo from './ACPCLOGO (2).png';
const Header = () => {
    return ( <div className={styles.cont}>
            <p className={styles.user}>Hello user is here </p> 
            <h2 className={styles.admin}> ACPC Administrator Portal</h2>
            <img className={styles.logo} src ={logo}/>
    </div>);
}
 
export default Header;