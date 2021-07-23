import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <>
      <div>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Typography variant="h2" align="center">
              Vc Meet
            </Typography>
          </Toolbar>
        </AppBar>
        {/* Video player */}
        {/* options -> notifications */}
      </div>
    </>
  );
}

export default App;
