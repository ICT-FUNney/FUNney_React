import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  sendForm: {
    justifyContent: "center",
    width: "80%",
  },
  textFieldWeb: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  textFieldApp: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: "20%",
    width: "100%",
  },
  submitButtonWeb: {
    margin: theme.spacing.unit,
    width: 200,
  },
  submitButtonApp: {
    justifyContent: "center",
    transform: 'translate(50%,-50%)',
    width: "50%",
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
  paperWeb: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
  paperApp: {
    position: 'absolute',
    width: "60%",
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
  const errEmpMes="入力されていません";
  const errNumMes="半角数字のみ入力してください";
  return (
    <div className={(window.innerWidth >= 765)?null:classes.sendForm}>
      <form
        noValidate
        autoComplete="off"
				onSubmit={e=>{props.sendSubmit(e)}}
      >
        <div>
          <TextField　className={(window.innerWidth >= 765)?classes.textFieldWeb:classes.textFieldApp}
            label="送金金額"
            id="sendMoney"
            name="sendMoney"
            error={props.errorMoney||props.errorMoneyEmpty}
            onChange={e=>{props.handleChange(e)}}
            InputLabelProps={{error: false}}
            value={props.sendMoney}
            helperText={props.errorEmptyMoney? errEmpMes : (props.errorMoney? errNumMes :"")}
          />
        </div>
        {!(props.errorEmptyMoney||props.errorMoney)?<br/>:null}
        <br/>
        <div>
          <TextField className={(window.innerWidth >= 765)?classes.textFieldWeb:classes.textFieldApp}
            label="送り先 学籍番号"
            id="studentNum"
            name="studentNum"
            error={props.errorNum||props.errorNumEmpty}
            onChange={e=>{props.handleChange(e)}}
            InputLabelProps={{error: false}}
            value={props.studentNum}
            helperText={props.errorEmptyNum? errEmpMes : (props.errorNum? errNumMes :"")}
          />
        </div>
        {!(props.errorEmptyNum||props.errorNum)?<br/>:null}
        <br/>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={(window.innerWidth >= 765)?classes.submitButtonWeb:classes.submitButtonApp}
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
        <div className={(window.innerWidth >= 765)?classes.paperWeb:classes.paperApp}>
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
