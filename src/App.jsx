import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="text-xl font-bold p-4">
      Backend says: {message}
    </div>
  );
}

export default App;
