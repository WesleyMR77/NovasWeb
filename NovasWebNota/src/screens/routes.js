import { creatStackNavigatior } from "react-native";

import login from "./Login";

export default creatStackNavigatior({
    login
}), {
    navigatorOption: {
        headerStyle: {
            backgroundColor:"#400191"
        }
        headerTintColor: "#ffe"
    }
}