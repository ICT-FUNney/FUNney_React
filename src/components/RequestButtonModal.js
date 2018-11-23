import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const styles = (theme) => ({

  modalButtonRequest: {
    margin: theme.spacing.unit,
    width: 50,
    color: '#FF8C00',
    float: 'right',
  },

  modalSubtitle: {
    color: '#696969',
    marginLeft: '20%'
  },

  getModalStyle: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: "none",
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },

  modalBorder:{
    border: "solid 1px black",
  },

});

const RequestButtonModal= (props)=>{
  const { classes } = props;
  return(

     <Modal
         open={props.requestModal}
         onClose={props.closeModal}
         className={classes.modalBorder}
       >
         <div className={classes.getModalStyle}>
           <Typography variant="h6" id="modal-title">
             確認
           </Typography>
           <Typography variant="subtitle1" id="simple-modal-description"
           className={classes.modalSubtitle}
           >
             {`${props.defaultValue}に${props.name}FNYを要求しますか？`}
           </Typography>

           <Button
           onClick={props.requestOk}
           className={classes.modalButtonRequest}
           >
             OK
           </Button>
           <Button onClick={props.requestCancel}
           className={classes.modalButtonRequest}
           >
             Cancel
           </Button>
         </div>
       </Modal>
);}


export default withStyles(styles)(RequestButtonModal);
