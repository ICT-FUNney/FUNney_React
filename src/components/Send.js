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
  property:{
    width: 200,
    fontWeight: 'normal',
    justifyContent: "center",
    marginLeft: theme.spacing.unit*2,
    marginRight: theme.spacing.unit,
  },
  Big:{
    fontSize: '40px',
  },
});
const Send = (props) =>{
  const { classes } = props;
  const ERR_EMPTY_MESSAGE="入力されていません";
  const ERR_NUMBER_MESSAGE="半角数字のみ入力してください";
  const ERR_MONENY = "残高が不足しています";
  const IS_TABLET=(window.innerWidth <= 1024);
  return (
    <div className={IS_TABLET?classes.sendForm:null}>
      <form
        noValidate
        autoComplete="off"
				onSubmit={e=>{props.sendSubmit(e)}}
      >
        <div>
        {!(IS_TABLET)?<Typography variant="h6"className={classes.property}>
            総資産<span className={classes.Big}> {props.Propety}</span> FNY
          </Typography>:null} 
          <TextField　className={IS_TABLET?classes.textFieldApp:classes.textFieldWeb}
            label="送金金額"
            id="sendMoney"
            name="sendMoney"
            error={props.errorMoney||props.errorMoneyEmpty||props.errorMoney2}
            onChange={e=>{props.handleChange(e)}}
            InputLabelProps={{error: false}}
            value={props.sendMoney}
            helperText={props.errorEmptyMoney? ERR_EMPTY_MESSAGE : (props.errorMoney? ERR_NUMBER_MESSAGE : (props.errorMoney2? ERR_MONENY :""))}
          />
        </div>
        {!(props.errorEmptyMoney||props.errorMoney)?<br/>:null}
        <br/>
        <div>
          <TextField className={IS_TABLET?classes.textFieldApp:classes.textFieldWeb}
            label="送り先 学籍番号"
            id="studentNum"
            name="studentNum"
            error={props.errorNum||props.errorNumEmpty}
            onChange={e=>{props.handleChange(e)}}
            InputLabelProps={{error: false}}
            value={props.studentNum}
            helperText={props.errorEmptyNum? ERR_EMPTY_MESSAGE : props.errorNum ? ERR_NUMBER_MESSAGE: ""}
          />
        </div>
        {!(props.errorEmptyNum||props.errorNum)?<br/>:null}
        <br/>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={IS_TABLET?classes.submitButtonApp:classes.submitButtonWeb}
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
        <div className={IS_TABLET?classes.paperApp:classes.paperWeb}>
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
