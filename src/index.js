import { AppRegistry } from "react-native";
import App from "./App";
import "./index.css";

AppRegistry.registerComponent("edvnz-example", () => App);
AppRegistry.runApplication("edvnz-example", {
  rootTag: document.getElementById("root"),
});
