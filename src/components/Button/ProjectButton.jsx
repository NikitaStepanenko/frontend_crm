import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import StackForm from '../Form/StackForm.jsx';
import addProject from '../../Redux/Actions/ProjectsActions/addProject';

const useStyles = makeStyles((theme) => ({
  modal: {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '4px solid #000',
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
    padding: '20px 40px'
  },
  position: {
    // padding: 'auto 20px', 
    display: 'flex',
    alignItems: 'Center',
  },
  button: {
    fontSize: '13 px',
  },
  submitButton: {
    marginTop: '20px',
  },
  inputForm: {
    width: '100%',
    margin: '5px 0',
  },
  descriptionForm: {
    maxHeight: '40px',
    width: '100%',
  },
  smallForm: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  modalWidth: {
    width: '700px',
  },
}));

export default function NewUserButton({ AddProject }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState({
    name: '', status: '', price: '', stack: [], description: '',
  });

  const dispatch = useDispatch();


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };
  const stackChange = (stack) => {
    setProject({ ...project, stack });
  };

  return (

    <div className={classes.position}>

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        onClick={handleOpen}
      >
        Add new project
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
          <div className={clsx(classes.paper, classes.modalWidth)}>
            <form className={classes.root} noValidate autoComplete="off">
              <h2>Add new project</h2>
              <TextField label="Project Name" inputProps={{ 'aria-label': 'description' }} className={classes.inputForm} name='name' onChange={handleChange} />
              <div className={classes.smallForm}>
                <FormControl className={clsx(classes.formControl, classes.inputForm)}>
                  <InputLabel htmlFor="filled-age-native-simple" name='status'>Status</InputLabel>
                  <Select
                    name='status'
                    // value={age}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="pending">Pending</MenuItem>
                  </Select>
                  {/* <FormHelperText>Placeholder</FormHelperText> */}
                </FormControl>

                <TextField label="Price" inputProps={{ 'aria-label': 'description' }} className={classes.inputForm} name='price' onChange={handleChange} />
              </div>
              <StackForm name='stack' stackChange={stackChange} />
              {/* <TextField label="Stack" inputProps={{ 'aria-label': 'description' }} className={classes.inputForm} /> */}
              <TextField label="Description" inputProps={{ 'aria-label': 'description' }} className={classes.descriptionForm} name='description' onChange={handleChange} />
              <Button variant="contained" color="primary" onClick={() => { dispatch(addProject(project)); setOpen(false); }} className={classes.submitButton}>
                Submit
              </Button>
            </form>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
