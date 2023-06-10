const styles = {
    container: (isMobile, isTablet, isDesktop, selectedBackground) => ({
        width: isMobile ? "100%" : isTablet ? "704px" : isDesktop ? "742px" : "335px",
        height: isTablet ? "640px" : "420px",
        backgroundImage: selectedBackground ? `url(${selectedBackground})` : "",
        backgroundColor: selectedBackground ? "" : "#121417",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        position: "relative",
    }),
    radioGroup: (isTablet) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: isTablet ? "flex-end" : "flex-start",
        position: "absolute",
        bottom: "16px",
        right: "16px",
        gap: "8px",
    }),
    icon: (isTablet) => ({
        height: isTablet ? "64px" : "40px",
        width: isTablet ? "64px" : "40px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        borderRadius: "6px",
    }),
    text: (isTablet) => ({
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "18px",
        letterSpacing: "0em",
        textAlign: "right",
        color: "#FFFFFF",
        position: "absolute",
        bottom: isTablet ? "88px" : "64px",
        right: "24px",
    }),
    canvasContainer: {
        position: "relative",
    },
    canvasHeight: {
        position: "absolute",
        color: "rgba(255, 255, 255, 0.5)",
        top: "5px",
        bottom: "5px",
        left: "-70px",
        fontSize: "14px",
        borderRight: "1px solid #fff",
        display: "flex",
        alignItems: "center",
        paddingRight: "10px",
    },
    canvasWidth: {
        position: "absolute",
        color: "rgba(255, 255, 255, 0.5)",
        bottom: "-30px",
        fontSize: "14px",
        left: 0,
        right: 0,
        borderTop: "1px solid #fff",
        paddingTop: "10px",
        textAlign: "center",
    },
    canvasWrapper: {
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(10px + 2vmin)",
        color: "white",
    },
    customSwitchMobile: {
        position: "absolute",
        top: "18px",
        right: "14px",
    },
    customSwitchTablet: {
        position: "absolute",
        top: "24px",
        right: "24px",
    },
};

export default styles;