import React from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  position: {
    display: 'flex',
    alignItems: 'Center',
  },
  button: {
      display:"block",
      margin: "0 auto", 
     }
}));

export default function NewUserButton({ AddUser }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handlSubmit = () => {
    AddUser(1);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <div className={classes.position}>

      <Button
        variant="contained"
        color="primary"
        size="large"
        // className={classes.button}
        startIcon={<PersonAddIcon />}
        onClick={handleOpen}
      > 
        Add
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >     
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <Button variant="contained" color="primary" onClick={handlSubmit} className={classes.button}>
              Submit
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>  
  );
}
