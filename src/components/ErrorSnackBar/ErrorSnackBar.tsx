import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {InitialStateType, setAppErrorAC} from "../../app/app-reduser";

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

export function ErrorSnackbar() {

    // const [open, setOpen] = React.useState(true)
    const dispatch = useDispatch();
    const progresLoad = useSelector<AppRootStateType, InitialStateType>(state => state.app)

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return  dispatch(setAppErrorAC({error: null}))
        }
            dispatch(setAppErrorAC({error: null}))
    }

    return (
        <Snackbar open={progresLoad.error !== null} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {progresLoad.error}
            </Alert>
        </Snackbar>
    )
}

