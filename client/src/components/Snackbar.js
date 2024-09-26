import React, {useContext} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import {Context} from "../index";
import {observer} from "mobx-react-lite";


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const CustomizedSnackbars =  observer(() => {
    const {snackBar} = useContext(Context)
    const classes = useStyles();
    const severity = snackBar._snackAlertName
    const message = snackBar._snackMessage
    if(snackBar._snackState === false) return null
    const handleOpen = () => {
        snackBar.openSnackBar()
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        snackBar.closeSnackBar()
    };

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical:'bottom', horizontal:'right' }}
                open={handleOpen}
                autoHideDuration={3000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
})
export default CustomizedSnackbars;
