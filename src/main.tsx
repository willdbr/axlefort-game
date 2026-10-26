import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>AxleFort: Tactical Siege</h1>
      <p>Build your rolling bastion. Shatter their foundation.</p>
      <div style={{ marginTop: '30px', padding: '20px', background: '#131B2E', borderRadius: '12px', display: 'inline-block' }}>
        <p>Versão Mobile Android em compilação nuvem (GitHub Actions).</p>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);