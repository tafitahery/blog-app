import { db } from '../db.js';
import jwt from 'jsonwebtoken';

export const getPosts = (req, res, next) => {
  const q = req.query.cat
    ? 'SELECT * FROM posts WHERE cat = ?'
    : 'SELECT * FROM posts';

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getPost = (req, res, next) => {
  const q =
    'SELECT users.username, users.img AS userImg, posts.id, posts.title, posts.description, posts.img, posts.cat, posts.date FROM posts JOIN users ON users.id = posts.uid WHERE posts.id = ?';

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'jwtkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const q =
      'INSERT INTO posts (title, description, img, date, cat, uid) VALUES (?)';
    const values = [
      req.body.title,
      req.body.description,
      req.body.img,
      req.body.date,
      req.body.cat,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json('Post has been created!');
    });
  });
};

export const deletePost = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'jwtkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const postId = req.params.id;
    const q = 'DELETE FROM posts WHERE id = ? AND uid = ?';

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json('You can delete only your post!');
      return res.status(200).json('Post has been deleted!');
    });
  });
};

export const updatePost = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json('Not authenticated!');

  jwt.verify(token, 'jwtkey', (err, userInfo) => {
    if (err) return res.status(403).json('Token is not valid!');

    const postId = req.params.id;
    const q =
      'UPDATE posts SET title = ?, description = ?, img = ?, cat = ? WHERE id = ? AND uid = ?';
    const values = [
      req.body.title,
      req.body.description,
      req.body.img,
      req.body.cat,
    ];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(201).json('Post has been updated!');
    });
  });
};
