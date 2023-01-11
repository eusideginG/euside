import ReactDOM from "react-dom/client";
import { HushRouter } from "react-router-dom"
import "./index.css";
import App from "./JS/App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HushRouter basename={'/euside'}>
        <App />
    </HushRouter>
);