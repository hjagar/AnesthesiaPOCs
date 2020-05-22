import React from "react";
import "./styles.css";
import AnesthesiaPdfTemplate from "./AnesthesiaPdfTemplate";

export default class App extends React.Component {
  state = {
    date: {
      day: '27',
      month: '06',
      year: '2019',
      time: '16:15'
    },
    anesthetist: {
      id: 0,
      firstname: '',
      lastname: '',
      medicalRegistration: '4503'
    },
    urgency: 'NO',    
    patient: {
      name: 'FERRADA OSCAR',
      socialSecurity: {
        socialSecurity: 'PAMI',
        urpa: '',
        nomenclator: ''
      },
      sex: 'M',
      clinicalHistory: '1',
      affiliateNumber: '15044395450100',
      patientID: '18724504',
      age: {
        age: '75',
        ageType: 'A'
      }
    },
    surgeon: 'Dr. ALBERTI',
    surgery: ['VEDA','BIOPSIA','ANALGESIA SIST 24HS'],
    practice: {
      mainPractice: '160205',
      secondaryPractice: ['160301']
    },
    patientHealth: {
      previousState: 'SIN OTROS ANTECEDENTES PATOLOGICOS',
      currentState: 'BUEN ESTADO GENERAL',
      physicalExam: 'NORMOTENSO, LUCIDO UTE.',
      complementaryExams: 'LABORATORIO Y EXAMEN CARDIOVASCULAR DENTRO DE PARAMETROS',
      entryConditions: 'EN CONDICIONES',
    },
    duration: 15,
    weight: '71kg',
    asa: '2',
    vitalSign: [
      { time: 0, tas: 95, tad: 94, fc: 85, bis: '', tam: 81 },
      { time: 5, tas: 98, tad: 75, fc: 84, bis: '', tam: 83 },
      { time: 10, tas: 97, tad: 72, fc: 80, bis: '', tam: 80 },
      { time: 15, tas: '', tad: '', fc: '', bis: '', tam: '' },
    ],
    eco2: ['', '', '', ''],
    spo2: ['98', '97', '97', ''],
    liquids: 'solución fisiologica 500 cc',
    medication: 'Diclofenac 75mg, Dexametasona 8mg, Cefazolina 2g',
    inductionMaintenance: 'Porpofol 230mg + fentanilo 100mcg + lidocaina spray 10% 2ml',
    observations: 'ANALGESIA POST OPERATORIA: Diclofenac 75 mg diluidos en 100 ml SF',
    aldrete: '10',
    anesthetistSignature: '',
    goTo: 'URPA',
  };
  render(){
    return (
      <div className="App">
        <AnesthesiaPdfTemplate data={this.state} />
      </div>
    );
  }
}
