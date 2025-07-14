const logger = (message, data = null) => {
  const logs = JSON.parse(localStorage.getItem('app_logs') || '[]');
  logs.push({
    time: new Date().toISOString(),
    message,
    data,
  });
  localStorage.setItem('app_logs', JSON.stringify(logs));
};

export default logger;
