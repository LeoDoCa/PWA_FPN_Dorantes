// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyB5EHsd2u1Bj0E_nXKCYv75EFCTwzPkZ8Y",
  authDomain: "test-login-e0c6c.firebaseapp.com",
  projectId: "test-login-e0c6c",
  storageBucket: "test-login-e0c6c.firebasestorage.app",
  messagingSenderId: "590610330563",
  appId: "1:590610330563:web:45b5c6e72ccf192571c376"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "./images/192.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});