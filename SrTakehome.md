# Pager Chat Exercise

### Overview

Hello! As part of the interview process, we'd like you to create a realtime chat application based on the specifications outlined below.

We provide this assignment to candidates so they can think about a problem in a close-to-real-work setting. We find that it takes about 6 to 8 hours to complete this exercise. We are providing this as a guidance on the level of effort that this exercise may require, not to place any time limits.

You should be prepared to discuss your approach with one of our engineers during your interview.


### Requirements

- Use [React] or [Vue]
- Don't use a boilerplate or a cli tool. Create your own architecture, build process, folder structure. Show us your experience.
- Integrate with BE service provided: `https://pager-hiring.herokuapp.com/?username=<username>`. Documentation for this service is provided below.

### Design

- Design can be accessed [here]

### Features

- User should be prompted to provide a username when accessing the application
- User should be able to send and receive messages in real time
- User should be able to view messages per design and it should get updated in real time
- User should be able to scroll and see previous messages (includes messages that were sent while the user was disconnected)
- User should see `<username> is typing...` indicator. If more than one person is typing, then indicate that `People are typing...`
- Use https://ui-avatars.com/ to generate avatar with initials
- [Giphy API] integration: during chat, any user can send and receive an animated gif url from the service via `/gif <query>` command. Do not use any third party library for this part.


### Submission

Your submission should:
- Implement the design and features per specifications.
- Demonstrate your ability to architect a project from the ground up, design extensible components, and handle scalability.
- Avoid excessive use of third party code. We value your understanding of the language, not the ability to use different libraries.

Your code should go into a public Github repo and a working release should be deployed to a cloud platform such as **Heroku**, **Firebase**, **Netlify**, **Now**, or other of your preference. We will run your submission in the latest version of Chrome so it does not need to support other browsers.

Please email a link to the repo and the hosted application to [web-homework@pager.com] at least 48 hours prior to your interview.  This will give the interviewer time to review the submission and prepare for the discussion.

Happy coding!

![wow](http://i3.kym-cdn.com/photos/images/newsfeed/000/582/577/9bf.jpg)

## Server API

- The server uses **[socket.io]** and is running on `https://pager-hiring.herokuapp.com/?username=<username>`.
- You should use `socket.io-client` library to connect to it.
- The client have to provide an `<username>` as a query parameter, otherwise the server will disconnect the client.

### Server events

> Those are the events that you should listen for.

#### `user-connected`

```js
socket.on('user-connected', username => {
  // <username> is a string with the name of the user who connect to the chat
})
```

#### `user-disconnected`

```js
socket.on('user-disconnected', username => {
  // <username> is a string with the name of the user who disconnect from the chat
})
```

#### `is-typing`

```js
socket.on('is-typing', typers => {
  // <typers> is a map where the `key` is the <username> and the value is a `boolean` that is `true` if the user is typing and `false` if not.
  typers = {
    [username: string]: boolean
  }
})
```

#### `message`

```js
socket.on('message', message => {
  // <message> is an object with one of the following schemas:
  message = {
    type: 'text',
    username: string,
    time: Date,
    text: string
  };
  // or
  message = {
    type: 'image',
    username: string,
    time: Date,
    url: string,
    alt: string | null
  };
})
```

### Client events

> Those are the events that you should send.

#### `text-message`

```js
// <text> is the text of the message
socket.emit('text-message', text: string);
```

#### `image-message`

```js
// <url> is a string with the image location
// <alt> is an **optional** text represatation of the image 
socket.emit('image-message', {url: string, [alt: string]});
```

#### `typing`

```js
// <status> is a boolean that should be true if the user is actually typing or false if not
socket.emit('typing', status: boolean);
```

### Testing our **Socket.IO** server

We can suggest this web interface:
https://amritb.github.io/socketio-client-tool/#url=aHR0cHM6Ly9wYWdlci1oaXJpbmcuaGVyb2t1YXBwLmNvbS8/dXNlcm5hbWU9Y2FuZGlkYXRl&opt=&events=user-connected,user-disconnected,is-typing

[giphy api]: https://developers.giphy.com/docs/api/
[socket.io]: http://socket.io/
[react]: https://facebook.github.io/react/
[vue]: https://vuejs.org
[socket.io]: https://socket.io/
[here]: https://www.figma.com/proto/CXcCODrNmUMsCEggBp17IK/Engineering-Interview?node-id=1%3A3&viewport=-576%2C130%2C0.5&scaling=min-zoom
[web-homework@pager.com]: web-homework@pager.com

### Issue

* sid undefined
https://github.com/socketio/socket.io-client/issues/1392