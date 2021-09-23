import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Navbars from "../pages/home/navbars";

function Routes() {
    return (
        <Router>
            <Switch>
                {/*masukkan component pages ke sini */}
                <Route exact path="/">
                    <Navbars></Navbars>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;