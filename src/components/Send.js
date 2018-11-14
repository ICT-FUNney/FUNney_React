import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
<<<<<<< HEAD
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
=======
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

>>>>>>> TextFieldでの記述に変更

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  submitButton: {
    margin: theme.spacing.unit,
    width: 200,
  },
  modalButton: {
    margin: theme.spacing.unit,
    width: 50,
    color: '#FF8C00',
    float: 'right',
  },
  input: {
    display: 'none',
  },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
});
const Send = (props) =>{
  const { classes } = props;
  return (
    <div>
      <form
        noValidate
        autoComplete="off"
				onSubmit={e=>{props.sendSubmit(e)}}
      >
        <div>
<<<<<<< HEAD
          <TextField
            id="sendMoney"
            name="sendMoney"
            helperText={props.errorMoneyText}
            error={props.errorMoney}
            label="送金金額"
            className={classes.textField}
            onChange={e=>{props.handleChange(e)}}
            value={props.sendMoney}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            id="studentNum"
            name="studentNum"
            helperText={props.errorNumText}
            error={props.errorNum}
            label="送り先 学籍番号"
            className={classes.textField}
            onChange={e=>{props.handleChange(e)}}
            value={props.studentNum}
            margin="normal"
=======
          <TextField　className={classes.textField}
            label="送金金額"              
            id="sendMoney"
            name="sendMoney"
            error={props.errorMoney||props.errorMoneyEmpty}
            onChange={e=>{props.handleChange(e)}}
            InputLabelProps={{error: false}}
            value={props.sendMoney}
            helperText={props.errorEmptyMoney?"入力されていません":props.errorMoney?"半角数字のみ入力してください":""}
          />
        </div>
        <div>
          <TextField className={classes.textField}
            label="送信先 学籍番号"
            id="studentNum"
            name="studentNum"
            error={props.errorNum||props.errorNumEmpty}
            onChange={e=>{props.handleChange(e)}}
            value={props.studentNum}
            helperText={props.errorEmptyNum?"入力されていません":props.errorNum?"半角数字のみ入力してください":""}
>>>>>>> TextFieldでの記述に変更
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.submitButton}
            type="submit"
          >
            send
          </Button>
        </div>
      </form>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.submitModal}
        onClose={props.closeModal}
      >
        <div className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            確認
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            {props.studentNum}に{props.sendMoney}FNYを送りますか？
          </Typography>
          <Button
            className={classes.modalButton}
            onClick={props.sendDetermine}
          >
            OK
          </Button>
          <Button
            className={classes.modalButton}
            onClick={props.closeModal}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}
export default withStyles(styles)(Send);
