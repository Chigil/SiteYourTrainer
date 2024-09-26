import StartPage from "../pages/start-page/container-main";
import GoPage from "../pages/GoPage/GoPage";
import {observer} from "mobx-react-lite";
import {Switch,Redirect,Route} from "react-router-dom";
import {APP_ROUTE, START_ROUTE} from "../utils/consts";
import {useContext} from "react";
import {Context} from "../index";

const AppRouter = observer( () => {
    const {user} = useContext(Context)
    return(
        <Switch>
            {user.IsAuth?
                <div>
                <Route path={START_ROUTE} component={StartPage}/>
                <Route path={APP_ROUTE} component={GoPage}/>
                </div>
                :
                <Route path={START_ROUTE} component={StartPage}/>
            }
            <Redirect to={START_ROUTE}/>
        </Switch>
    )

})

export default AppRouter