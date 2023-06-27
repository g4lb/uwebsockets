const uws = require('../uWebSockets.js-20.30.0/uws');

const port = 8080;

// Create a WebSocket server
const app = uws.App();

// Handle incoming WebSocket connections
app.ws('/*', {
  open: (ws) => {
    console.log('A client connected');
    ws.send('Welcome to the server!');
  },
  message: (ws, message) => {
    // Convert the ArrayBuffer to a string
    const decoder = new TextDecoder('utf-8');
    const decodedMessage = decoder.decode(message);
    console.log('Received message:', decodedMessage);
    ws.send(`You sent: ${decodedMessage}`);
  },
  close: (ws) => {
    console.log('A client disconnected');
  },
});

// Start the server
app.listen(port, (token) => {
  if (token) {
    console.log(`uWebSockets Server started on port ${port}`);
  } else {
    console.error('Failed to start server');
  }
});
