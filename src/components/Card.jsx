import { user } from "./data";
import Link from "./Link";
function Card() {
  const {img, name, job, location, links, } =user;
  return (
    <div className="card" >
      <div className="card-container">
        <img src={img} alt={name} />
        <h1>{name}</h1>
        <h2>{job}</h2>
        <ul className="list-items">
          {links.map((item) =>{
          const { id, name, url, }=item;
          return <Link key={id} name={name} url={url}/>;
        })}

        </ul>
      </div>
    </div>
  );
}
export default Card;