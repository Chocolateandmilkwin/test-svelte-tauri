import "./style.css";
import App from "./App.svelte";
let appContainer = document.createElement('div');
document.body.appendChild(appContainer);
const app = new App({ target: appContainer, });
export default app;