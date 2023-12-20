import React, { useState } from 'react';
import RequestForm from './requestform';
import RequestHandler from './requesthandler';
import style from './app.module.css'
function App() {
  const [request, setRequest] = useState(null);

  const handleRequestSubmit = (amount) => {
    setRequest(amount);
  };

  return (
    <div className={style.App}>
      <h1 className={style.h1}> Request System</h1>
      <RequestForm onSubmit={handleRequestSubmit} />
      {request && <RequestHandler request={request} />}
    </div>
  );
}

export default App;