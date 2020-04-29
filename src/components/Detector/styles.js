export const styles = (theme) => ({
    palette: {
        primary: "#7ed957",
        secondary: "#58d8bf",
    },
    cropContainer: {
        position: "relative",
        width: "100%",
        height: 200,
        background: "#333",
        [theme.breakpoints.up("sm")]: {
            height: 400,
        },
    },
    cropButton: {
        flexShrink: 0,
        margin: 2,
    },
    controls: {
        padding: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            alignItems: "center",
        },
    },
    sliderContainer: {
        display: "flex",
        flex: "1",
        alignItems: "center",
    },
    sliderLabel: {
        [theme.breakpoints.down("xs")]: {
            minWidth: 65,
        },
    },
    slider: {
        padding: "22px 0px",
        marginLeft: 16,
        margin: 10,
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row",
            alignItems: "center",
            margin: "10px",
        },
    },
});
