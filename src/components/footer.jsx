import React from "react";

function Footer(){
    var year= new Date().getFullYear();

    return (<footer>
        <h1>Copyright {year}</h1>
    </footer>);
}

export default Footer;