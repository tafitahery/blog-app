import { db } from '../db.js';

export const getPosts = (req, res, next) => {
  const q = req.query.cat
    ? 'SELECT * FROM posts WHERE cat = ?'
    : 'SELECT * FROM posts';

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res, next) => {
  const q =
    'SELECT users.username, users.img AS userImg, posts.title, posts.description, posts.img, posts.cat, posts.date FROM posts JOIN users ON users.id = posts.uid WHERE posts.id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res, next) => {};

export const deletePost = (req, res, next) => {
  const q = 'DELETE FROM posts WHERE id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json('The post has been deleted!');
  });
};

export const updatePost = (req, res, next) => {
  res.json('from controller');
};
