
import { BrowserRouter, Route } from "react-router-dom"; 
import { Provider } from 'react-redux'
import store from "./redux/store";
import User from "./components/User";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="main-route-place">
                    <Route exact path="/" component={User} /> 
                </div>
            </BrowserRouter>
        </Provider>

    );
}
export default App;
