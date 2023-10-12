import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

export default function Single() {
  return (
    <div className="signle">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/18528247/pexels-photo-18528247/free-photo-of-mode-homme-amour-gens.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <div className="info">
            <span>Jane</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=1`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, saepe
          nulla. Adipisci, quo consequatur. Explicabo ducimus illo architecto
          accusantium dolore consequatur ex iure quibusdam adipisci ab atque
          harum ratione, unde rem cupiditate inventore. Assumenda magnam
          sapiente, libero dignissimos sit dicta distinctio iure praesentium
          reiciendis nulla fuga asperiores iste labore laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          placeat incidunt quam sed ullam beatae a! Saepe exercitationem vero
          voluptate perferendis? Quisquam debitis maiores fugiat similique
          excepturi voluptate repellat vero velit rem earum? Amet laboriosam
          neque voluptatem recusandae iure sed dignissimos fugit quisquam esse
          delectus accusamus tempora quaerat ea culpa itaque assumenda fugiat,
          ipsa commodi asperiores minima! Veniam voluptatem ipsam, temporibus,
          praesentium amet id, ea perferendis rem soluta perspiciatis dolorum.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          repellendus tempore voluptatem aliquam, quidem deleniti maiores, fugit
          amet nam pariatur, nostrum provident enim delectus quibusdam. Tenetur
          atque, nisi voluptatibus a similique neque voluptate iste! Ratione
          architecto distinctio provident, ea sit eveniet delectus dolores quis?
          Harum, fugiat. Aliquam totam nemo doloremque amet assumenda doloribus,
          beatae adipisci!
        </p>
      </div>
      <Menu />
    </div>
  );
}
