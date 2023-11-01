import createFooter from './footer';
import createRestaurantHomePage from './restaurant';
import { createTabsExp } from './tabs';

function initialLoad() {
    createTabsExp();
    createRestaurantHomePage();
    createFooter();
}

export default initialLoad;