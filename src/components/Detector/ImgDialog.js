import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const styles = {
    appBar: {
        position: "relative",
        background: "#7ed957",
        fontFamily: "Josefin Sans, sans-serif",
    },
    flex: {
        flex: 1,
    },
    imgContainer: {
        position: "relative",
        flex: 1,
        padding: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        maxWidth: "100%",
        maxHeight: "100%",
    },
    result: {
        fontFamily: "Josefin Sans, sans-serif",
        color: "#5abf2f",
        fontSize: "medium",
        position: "relative",
        flex: 1,
        margin: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ImgDialog extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <Dialog
                maxWidth="md"
                open={!!this.props.img}
                onClose={this.props.onClose}
                TransitionComponent={Transition}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="default"
                            onClick={this.props.onClose}
                            aria-label="Close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography
                            variant="h2"
                            color="secondary"
                            className={classes.flex}
                        >
                            <p>Detection Result </p>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <p className={classes.result}>{this.props.result} Detected!</p>
                <div className={classes.imgContainer}>
                    <img
                        src={this.props.img}
                        alt="Cropped"
                        className={classes.img}
                    />
                </div>
            </Dialog>
        );
    }
}

export default withStyles(styles)(ImgDialog);
