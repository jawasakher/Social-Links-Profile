function Link({name , url }){
    return (

    <li className="list-t-item" >
   <a href={url}>{name}</a>
    </li>
 );   
}
export default Link;