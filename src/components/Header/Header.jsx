import Clock from '../utils/Clock';
const styles = {
  header: 'flex justify-between items-center sticky top-0 bg-transparent px-2 sm:px-10 py-0 shadow-md z-50 h-20',
  gmailLink: 'flex justify-between items-center rounded-full p-2 shadow cursor-pointer hover:cursor-pointer',
  logo: 'uppercase',
};

const Header = () => {
  return (
    <div className={styles.header}>
        <button className={styles.gmailLink}>
          Contact Me
        </button>
        <div className={styles.logo}>
            <span>Portfolio</span>
        </div>
        <div>
          <Clock/>
        </div>
    </div>
  );
}

export default Header;
