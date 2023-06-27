const WebSocket = require('ws');

const url = 'ws://localhost:8080';

// Create a WebSocket connection
const ws = new WebSocket(url);

// Event: Connection established
ws.on('open', () => {
  console.log('Connected to the server');
  
  // Send a message to the server
  ws.send('Hello, server!');
});

// Event: Message received from the server
ws.on('message', (message) => {
  console.log('Received message:', message.toString());
});

// Event: Connection closed
ws.on('close', (code, reason) => {
  console.log('Connection closed:', code, reason);
});

// Event: Error occurred
ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});
