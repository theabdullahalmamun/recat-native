import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import rev from "../screens/rev";
import about from "../screens/about";
import personal from "../screens/personal";
import career from "../screens/career";
import contact from "../screens/contact";
import skill from "../screens/skill";

const screens={
    Home:{
        screen: Home
    },
    career:{
        screen: career
    },
    about:{
        screen: about
    },
    personal:{
        screen: personal
    },
    skill:{
        screen: skill
    },
    contact:{
        screen: contact
    }
}
const HomeStack=createStackNavigator(screens)
export default createAppContainer(HomeStack);