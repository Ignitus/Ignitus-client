self.addEventListener('push', (ev) => {
  const data = ev.data.json();
  self.registration.showNotification(data.title, {
    body: 'https://github.com/Ignitus',
    icon: 'https://avatars0.githubusercontent.com/u/39058097?s=60&v=4',
  });
});
