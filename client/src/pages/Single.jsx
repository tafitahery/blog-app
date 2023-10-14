import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link, useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

export default function Single() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8800/api/posts/${id}`
        );
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div className="signle">
      <div className="content">
        <img src={post.img} alt="" />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/18528247/pexels-photo-18528247/free-photo-of-mode-homme-amour-gens.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <div className="info">
            <span>Jane</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=1`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.description}
      </div>
      <Menu />
    </div>
  );
}
