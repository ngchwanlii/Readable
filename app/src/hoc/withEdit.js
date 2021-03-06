import React from 'react';
import { connect } from 'react-redux';
import { commonActions } from '../actions/common-actions';

export const withEdit = Component => {
  class EditWrapper extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  }

  return connect(null, {
    onEdit: commonActions.edit,
  })(EditWrapper);
};
