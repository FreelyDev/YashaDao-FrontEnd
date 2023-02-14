import PropTypes from 'prop-types';
import { useState } from 'react';
import Topbar from './topbar/Topbar';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import SideBar from './SideBar/SideBar';
import Menu from 'components/menu/Menu';

const useStyles = makeStyles(theme => ({
  layout: {
    backgroundColor: '#141422',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    backgroundRepeat : 'repeat',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    '& .gradient-circle': {
        position: 'fixed',
        top: '15rem',
        right: 'auto',
        bottom: 'auto',
        left: '-15rem',
        width: '72vh',
        height: '72vh',
        borderRadius: '50%',
        backgroundImage: 'radial-gradient(#436f9d,rgba(255,255,255,.25))',
        opacity: 0.2,
        // -webkit-filter: blur(56px);
        WebkitFilter :'blur(56px)',
        filter: 'blur(56px)',
        zIndex: 2,
        pointerEvents: 'none',
    },
    '& .gradient-circle--primary': {
      backgroundImage: 'radial-gradient(rgba(239,101,93,.75),rgba(129,73,191,.18))',
      top: '-15rem',
      right: '-15rem',
      bottom: 'auto',
      left: 'auto',
    }
  },
  
  layoutContent: {
    flex: 1,
    display: 'flex',
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      width: '100%',
    },
  },
  sideBar: {
    width: '16vw',
    minWidth: 230,
    maxWidth: 300,
    padding: '13px 1.5vw',
    position: 'relative',
    marginRight : 15,
    background: '#fff',
    borderRadius : 20,
    boxShadow: "0px 16px 60px #00000008",
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '100%',
      padding: '0px 20px',
      marginTop: 80,
    },
  },
  mainContent: {
    width: '100%',
    borderRadius : 20,
    boxShadow: "0px 16px 60px #00000008",
    height : 'auto',
    margin : 0,

    [theme.breakpoints.down('xs')]: {
      width: '100%',
      maxWidth: '100%',
      padding: 0,
    },
  },
}));
const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      
      <div className={`${classes.layout}`}>
        <div className="gradient-circle"></div>
        <div className="gradient-circle gradient-circle--primary"></div>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className={classes.layoutContent}>
          <div className={`${classes.mainContent}`}>
            {children}
          </div>
        </div>
        <Footer />
        
      </div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} children={<SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}/>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
