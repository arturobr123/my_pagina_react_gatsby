import React from "react"
import Header from '../components/header';
import Repositories from '../components/Repositories';
import Codigofacilito from '../components/codigofacilito';
import EducationNav from '../components/EducationNav';

export default () => {
  return(
    <div>
      <Header/>
      <EducationNav/>
      <Repositories/>
      <Codigofacilito/>
    </div>
  );
}
