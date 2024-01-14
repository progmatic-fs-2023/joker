import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

const USERS = new Map();
USERS.set('rederax', { id: 1, username: 'Roland', role: 'Admin' });
USERS.set('guest', { id: 2, username: 'Guest', role: 'User' });

const SESSIONS = new Map();

app.post('/login', (req, res) => {
  const user = USERS.get(req.body.username);
  if (user == null) {
    res.sendStatus(401);
    return;
  }
  const sessionId = crypto.randomUUID();
  SESSIONS.set(sessionId, user);
  res
    .cookie('sessionId', sessionId, {
      secure: true,
      httpOnly: true,
      sameSite: 'none',
    })
    .send(`Authed as ${req.body.username}`);
});

app.get('/adminData', (req, res) => {
  console.log(req.cookies);
  const user = SESSIONS.get(req.cookies.sessionId);
  if (user == null) {
    res.sendStatus(401);
    return;
  }
  if (user.role !== 'Admin') {
    res.sendStatus(403);
    return;
  }
  res.send('Welcome Admin user');
});
