import React, { useState } from 'react';
import RequestForm from '../components/requestform';
// import RequestHandler from './requesthandler';
import style from '../components/app.module.css'
import NavBar from '../components/navbar';
function App() {
  // const [request, setRequest] = useState([]);

  // const handleRequestSubmit = (amount) => {
  //   setRequest(amount);
  // };

  return (
    <div>
<NavBar></NavBar>


    <div className={style.App}>
      <h1 className={style.h1}> Request System</h1>
      <RequestForm></RequestForm>
      

    </div>
  </div>
  );
}

export default App;