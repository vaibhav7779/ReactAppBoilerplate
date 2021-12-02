import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import {
  Button,
  DigitalInput,
  FileUploader,
  Tabs,
  Typography,
  YesNoSwitch,
} from '@subzero/glacier';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LoginWrapper from './Login.wrapper';
import { performLogin } from './Login.actions';

class LoginContainer extends PureComponent {
  componentDidMount() {
    const { actions } = this.props;
    actions.login({ email: 'ankit@gmail.com', password: 'password' });
  }

  render() {
    const items = [
      {
        href: '/1',
        title: 'tab 1',
      },
      {
        href: '/2',
        title: 'tab 2',
      },
      {
        href: '/3',
        title: 'tab 3',
      },
    ];
    return (
      <div>
        <Typography type="h1"># Subzero Elements</Typography>
        <Typography type="h1">Heading 1</Typography>
        <Typography type="h2">Heading 2</Typography>
        <Typography type="h3">Heading 3</Typography>
        <Typography type="h4">Heading 4</Typography>
        <Typography type="h5">Heading 5</Typography>
        <Typography type="h6">Heading 6</Typography>
        <br />
        <div className="buttons">
          <Typography type="h2"># Buttons</Typography>
          <Button>Primary button</Button>&nbsp;
          <Button color="secondary">Secondary button</Button>&nbsp;
          <Button hasIconOnly />
          &nbsp;
          <Button color="secondary" hasIconOnly />
          <br />
        </div>
        <div className="digitInput">
          <Typography type="h2"># DigitInput</Typography>
          <DigitalInput length={6} size="medium" onChange={() => {}} />
          <br />
          <DigitalInput length={6} size="small" onChange={() => {}} />
          <br />
        </div>

        <div className="datePicker">
          <Typography type="h2"># Yes-no switch</Typography>
          <YesNoSwitch onChange={() => {}} value />
          <YesNoSwitch disabled value />
          <br />
        </div>

        <div className="fileUploader">
          <Typography type="h2"># File Uploader</Typography>
          <FileUploader description="Upload Files" type="pdf" value={50} />
          <br />
        </div>

        <div className="tabs">
          <Typography type="h2"># Tabs</Typography>
          <Tabs items={items} />
          <Tabs items={items} type="container" />
          <br />
        </div>

        <LoginWrapper />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.login.loading,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    login: (loginDetails) => {
      return dispatch(performLogin(loginDetails));
    },
  },
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginContainer),
);
