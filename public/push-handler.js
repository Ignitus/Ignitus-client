self.addEventListener('push', (ev) => {
  const data = ev.data.json();
  self.registration.showNotification(data.title, {
    body: 'Hello!',
    icon: 'https://via.placeholder.com/50x50',
  });
});
