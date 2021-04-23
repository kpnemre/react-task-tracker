import PropTypes from 'prop-types';
import React from 'react';
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {

    // const onClick=()=>{
    //     console.log("emre")
    // }
    console.log("Header: rendering")
    return (
        <header className="header">

           {/* <h1 style={headingStyle}>{props.title}</h1>  */}
           <h1 >{title}</h1> 
           <Button color="red" text={showAdd? "Close": "Add"} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps ={
    title:"Task Tracker"
}
// propstan bilgi gelmezse default olarak bunu ata
Header.propTypes ={
    title:PropTypes.string.isRequired,
    color:PropTypes.string,
    onClick:PropTypes.func,
}
// prop geçilen değişkenin tipini belirler. string dışında bir değişken girilirse hata verir.

// CSS in Js
//  const headingStyle ={
//      color:"red",
//      backgroundColor:"black"
//  }
export default React.memo(Header);
