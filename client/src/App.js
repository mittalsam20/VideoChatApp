import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Vplayer from "./components/vplayer";
import Options from "./components/options";
import Notify from "./components/notify";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    // [theme.breakpoints.down("xs")]: {
    //   width: "90%",
    // },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h3" align="center">
            Vc Meet
          </Typography>
        </AppBar>

        <Vplayer />
        <Options>
          <Notify />
        </Options>
      </div>
    </>
  );
};

export default App;
