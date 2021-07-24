import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Vplayer from "./components/vplayer";
import Options from "./components/options";
import Notify from "./components/notify";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.wrapper}>
        <AppBar position="static" color="inherit" className={classes.appbar}>
          <Toolbar>
            <Typography variant="h3" align="center">
              Vc Meet
            </Typography>
          </Toolbar>
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
