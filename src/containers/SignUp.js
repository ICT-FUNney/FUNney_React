import React, {Compornet} from 'react';
import SignUpForm from '../compornents/SignUpForm.js';
import SignUpButton from '../compornents/SignUpButton.js';

class SignUp extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div>
          <SignUpForm />
        </div>
        <div>
          <SignUpButton />
        </div>
      </div>
    )
  }
}
