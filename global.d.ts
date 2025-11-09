/// <reference types="@react-three/fiber" />

// Це каже TypeScript, що JSX елементи від @react-three/fiber валідні
declare namespace JSX {
  interface IntrinsicElements {
    // Підключаємо все, що підтримує @react-three/fiber
    // Це робиться через імпорт JSX типів із бібліотеки
    // Нічого додатково не потрібно
  }
}
