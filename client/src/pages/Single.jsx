import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Menu from '../components/Menu';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

export default function Single() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${id}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signle">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=1`}>
                <img src={Edit} alt="" />
              </Link>
              <img src={Delete} onClick={handleDelete} alt="" />
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
