import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import StripeAccountConnection from './view';
import { selectUser } from 'redux/selectors/user';
import { doToast } from 'redux/actions/notifications';

// function that receives state parameter and returns object of functions that accept  state
const select = (state) => ({
  user: selectUser(state),
});

const perform = (dispatch) => ({
  doToast: (options) => dispatch(doToast(options)),
});

export default withRouter(connect(select, perform)(StripeAccountConnection));