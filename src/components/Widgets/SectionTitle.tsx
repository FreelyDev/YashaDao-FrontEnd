import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 'fit-content',
    marginBottom : 100,
    [theme.breakpoints.down('xs')]: {
      marginBottom : 64,
    },
    '& h1':{
      color : '#fff',
      fontSize : 32,
      position : 'relative',
      padding : '10px 30px',
      textAlign : 'center',
      [theme.breakpoints.down('xs')]: {
      },
      '& .star01':{
        position : 'absolute',
        bottom : 0,
        left : 0,
      },
      '& .star02':{
        position : 'absolute',
        top : 0,
        right : 0,
      },
    },
    '& .line':{
      width : '100%',
      height : '1.25rem',
    },
  },

}));


const SectionTitle = ({ title}) => {
  const classes = useStyles();
  return (
    <div className={classes.title}>
        <h1>
        <img src="/assets/icons/icon_star_01.svg" alt="" className="star01" />
        {title}
        <img src="/assets/icons/icon_star_02.svg" alt="" className="star02" />
        </h1>
        <img src="/assets/imgs/header-line.svg" alt="" className="line" />
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

SectionTitle.defaultProps = {
    title: '',
};

export default SectionTitle;
