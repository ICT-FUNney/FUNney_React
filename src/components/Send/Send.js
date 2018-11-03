import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class Senda extends React.Component {
	state = {
		studentNum:'',
		sendMoney: '',
  };

	handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

	render(){
		const {classes}=this.props;

		return (
			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					id="studentNum"
					label="送り先 学籍番号"
					placeholder="学籍番号を入力してください"
					className={classes.textField}
	 				onChange={this.handleChange('studentNum')}
					value={this.state.studentNum}
					margin="normal"
				/>
				<TextField
					id="sendMoney"
					label="送金金額"
					placeholder="金額を入力してください"
					className={classes.textField}
					onChange={this.handleChange('sendMoney')}
					value={this.state.sendMoney}
					margin="normal"
				/>
        <Button variant="contained" color="primary" className={classes.button}>
          送金
        </Button>
			</form>
		);
	}
}

export default withStyles(styles)(Senda);
