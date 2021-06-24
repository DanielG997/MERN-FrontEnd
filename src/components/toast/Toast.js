import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import '../../styles/App.css'


const Toast = ({ open, message, severity = 'success' }) => (
  <div>
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      variant="outlined"
      open={open}
      autoHideDuration={6000}
      severity="success"
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  </div>
);


export default Toast;