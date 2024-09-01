# Nebu: ECS MVVM Game Engine

This project implements a high-performance Entity Component System (ECS) game engine using an MVVM (Model-View-ViewModel) architecture. It leverages Yjs for real-time collaboration and data synchronization, Babylon.js for rendering, and Web Workers for off-main-thread computation.

## Architecture Overview

The engine is built on the following key concepts:

1. **MVVM (Model-View-ViewModel)**: Separates the game logic and state from the rendering and user interface.
2. **ECS (Entity Component System)**: Provides a flexible and performant game object model.
3. **Web Workers**: Offloads heavy computations to background threads for improved performance.
4. **Yjs**: Enables real-time collaboration and data synchronization.
5. **Babylon.js**: Handles 3D rendering and scene management.

### Key Components

- **Model**: Implemented using Yjs, manages the game state and data persistence.
- **ViewModel**: Acts as an intermediary between the Model and View, providing an abstraction of the game state.
- **View**: Uses Babylon.js to render the game world and handle user input.
- **Worker**: Runs game logic and systems in a separate thread.

## Project Structure

```
ecs-mvvm-game-engine/
├── src/
│   ├── model/
│   │   ├── GameModel.ts
│   │   └── components/
│   ├── viewmodel/
│   │   ├── GameViewModel.ts
│   │   └── EntityViewModel.ts
│   ├── view/
│   │   ├── GameView.ts
│   │   └── EntityView.ts
│   ├── worker/
│   │   ├── GameWorker.ts
│   │   └── systems/
│   ├── shared/
│   │   ├── types/
│   │   └── utils/
│   └── main.ts
├── public/
│   ├── index.html
│   └── styles.css
├── tests/
├── docs/
├── webpack.config.js
├── tsconfig.json
└── package.json
```

## Key Features

- Real-time multiplayer support using Yjs
- High-performance game logic execution in Web Workers
- Efficient data transfer between threads using SharedArrayBuffer
- Scalable ECS architecture for complex game worlds
- Reactive updates from Model to View through ViewModel

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open `http://localhost:8080` in your browser

## Contributing

Contributions are welcome! Please read our contributing guidelines and code of conduct before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
