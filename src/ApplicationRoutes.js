import {Route} from 'react-router';
import { Favorites } from './views/Favorites';
import {Home} from './views/Home';
import {MovieDetail} from './views/MovieDetail';

export const ApplicationRoutes = () => {
    return (<>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={MovieDetail} />
        <Route exact path="/favorites" component={Favorites} />
    </>);
}