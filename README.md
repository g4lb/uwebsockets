# TypeScript Client-Server Project with uWebSockets.js

This is a simple client-server project implemented in TypeScript using the uWebSockets.js library. It demonstrates how to establish a WebSocket connection between a client and a server for real-time communication.

## Prerequisites

- Node.js (version v16.14.2)
- npm (version 8.5.0)

## Installation

1. Clone the repository or download the source code.

2. Navigate to the project directory using a terminal.

3. Install the project dependencies by running the following command:

   ```shell
   npm install
   ```

   This command will install the necessary dependencies specified in the package.json file.

4. Build and install uWebSockets.js manually:

   Since uWebSockets.js is not available as an npm package by default, we need to install it manually. Follow the steps below:

   - Visit the uWebSockets.js GitHub repository: [https://github.com/uNetworking/uWebSockets.js](https://github.com/uNetworking/uWebSockets.js)

   - Clone or download the repository to your local machine.

   - downloaded one of the official releases (I used the Latest v20.30.0).

## Usage

1. Start the server:

   ```shell
   node server/server.ts
   ```

   The server will start running on port 8080.

2. Open a separate terminal window.

3. Start the client:

   ```shell
   node client/client.js
   ```

   The client will establish a WebSocket connection with the server and exchange messages.

4. Observe the logs in both the server and client terminals, showing the connection and message exchanges.

5. To close the client or server, press `Ctrl + C` in the respective terminal.

## Project Structure

The project structure is as follows:

- `server.ts`: Contains the server-side code for establishing a WebSocket server and handling client connections.

- `client.js`: Contains the client-side code for connecting to the server and sending/receiving messages.

- `package.json`: Defines the project's dependencies and scripts.

## Dependencies

The following dependencies are used in this project:

- uWebSockets.js (installed manually): A WebSocket library for efficient real-time communication.