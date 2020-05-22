import React, { Component } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import PaperPdf from "./PaperPdf";
import { withStyles } from "@material-ui/core/styles";
const styles = {
  rotate: {
    transform: "rotate(-90deg)",
    marginTop: "80px"
  },
  paperMedication: {
    height: "130px"
  },
  paperSign: {
    height: "70px"
  },
  paperSignLabel: {
    textAlign: "center"
  },
  paperLabel: {
    fontWeight: "bold"
  },
  vitalSign: {
    '& td, & th': {
      borderRight: '1px solid rgba(0, 0, 0, 0.12)',
      textAlign: 'center'
    }
  }
};

class AnesthesiaPdfTemplate extends Component {
  getRemitNumber(date) {
    let { day, month, year, time } = date;
    year = year.substring(2);
    time = time.replace(":", "");
    const remitNumber = `${year}${month}${day}${time}`;

    return remitNumber;
  }

  render() {
    const { classes } = this.props;

    const {
      date,
      anesthetist,
      urgency,
      patient,
      surgeon,
      surgery,
      practice,
      patientHealth,
      duration,
      weight,
      asa,
      eco2,
      spo2,
      vitalSign,
      liquids,
      medication,
      inductionMaintenance,
      observations,
      aldrete,
      goTo
    } = this.props.data;
    const remito = this.getRemitNumber(date);

    return (
      <Grid container spacing={1}>
        <Grid item container xs={12}>
          <Grid item container xs={4}>
            <Grid item xs={3}>
              <PaperPdf className={classes.paperLabel}>FECHA:</PaperPdf>
            </Grid>
            <Grid item xs={4}>
              <PaperPdf>
                {date.day}-{date.month}-{date.year}
              </PaperPdf>
            </Grid>
            <Grid item xs={12}>
              &nbsp;
            </Grid>
            <Grid item xs={5}>
              <PaperPdf className={classes.paperLabel}>URGENCIA:</PaperPdf>
            </Grid>
            <Grid item xs={5}>
              <PaperPdf>{urgency}</PaperPdf>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <PaperPdf>Logo</PaperPdf>
          </Grid>
          <Grid item container xs={5} justify="flex-end">
            <Grid item xs={5}>
              <PaperPdf className={classes.paperLabel}>REMITO Nº:</PaperPdf>
            </Grid>
            <Grid item xs={6}>
              <PaperPdf>SLP {remito}</PaperPdf>
            </Grid>
            <Grid item xs={5}>
              <PaperPdf className={classes.paperLabel}>MATRÍCULA:</PaperPdf>
            </Grid>
            <Grid item xs={6}>
              <PaperPdf>{anesthetist.medicalRegistration}</PaperPdf>
            </Grid>
            <Grid item xs={3}>
              <PaperPdf className={classes.paperLabel}>O. SOCIAL:</PaperPdf>
            </Grid>
            <Grid item xs={9}>
              <PaperPdf>{patient.socialSecurity.socialSecurity}</PaperPdf>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container spacing={1}>
          <Grid item container xs={6}>
            <Grid item xs={4}>
              <PaperPdf className={classes.paperLabel}>
                APELLIDO Y NOMBRE:
              </PaperPdf>
            </Grid>
            <Grid item xs={8}>
              <PaperPdf>{patient.name}</PaperPdf>
            </Grid>
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={6}>
              <PaperPdf className={classes.paperLabel}>
                PRÁCTICA REALIZ. POR:
              </PaperPdf>
            </Grid>
            <Grid item xs={6}>
              <PaperPdf>{surgeon}</PaperPdf>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item container xs={2}>
            <Grid item xs={6}>
              <PaperPdf className={classes.paperLabel}>EDAD:</PaperPdf>
            </Grid>
            <Grid item xs={6}>
              <PaperPdf>
                {patient.age.age} {patient.age.ageType}
              </PaperPdf>
            </Grid>
          </Grid>
          <Grid item container xs={2}>
            <Grid item xs>
              <PaperPdf className={classes.paperLabel}>SEXO:</PaperPdf>
            </Grid>
            <Grid item xs>
              <PaperPdf>{patient.sex}</PaperPdf>
            </Grid>
          </Grid>
          <Grid item container xs={2}>
            <Grid item xs={4}>
              <PaperPdf className={classes.paperLabel}>H.C:</PaperPdf>
            </Grid>
            <Grid item xs={8}>
              <PaperPdf>{patient.clinicalHistory}</PaperPdf>
            </Grid>
          </Grid>
          <Grid item container xs>
            <Grid item xs={3}>
              <PaperPdf className={classes.paperLabel}>AF.Nº:</PaperPdf>
            </Grid>
            <Grid item xs>
              <PaperPdf>{patient.affiliateNumber}</PaperPdf>
            </Grid>
          </Grid>
          <Grid item container xs={2}>
            <Grid item xs>
              <PaperPdf className={classes.paperLabel}>DNI:</PaperPdf>
            </Grid>
            <Grid item xs>
              <PaperPdf>{patient.patientID}</PaperPdf>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs container>
            <Grid item xs={3}>
              <PaperPdf className={classes.paperLabel}>
                PRÁCTICA REALIZADA:
              </PaperPdf>
            </Grid>
            <Grid item xs>
              <PaperPdf>{surgery.map(item => `${item} `)}</PaperPdf>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs={5} container>
            <Grid item xs>
              <PaperPdf className={classes.paperLabel}>
                PRÁCTICA MÁS IMP:
              </PaperPdf>
            </Grid>
            <Grid item xs>
              <PaperPdf>{practice.mainPractice}</PaperPdf>
            </Grid>
          </Grid>
          <Grid item xs container>
            <Grid item xs>
              <PaperPdf className={classes.paperLabel}>
                PRÁCTICAS ADICIONALES:
              </PaperPdf>
            </Grid>
            <Grid item xs>
              <PaperPdf>{practice.secondaryPractice}</PaperPdf>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs={3}>
            <PaperPdf className={classes.paperLabel}>ANTECEDENTES:</PaperPdf>
          </Grid>
          <Grid item xs={9}>
            <PaperPdf>{patientHealth.previousState}</PaperPdf>
          </Grid>
          <Grid item xs={3}>
            <PaperPdf className={classes.paperLabel}>ESTADO ACTUAL:</PaperPdf>
          </Grid>
          <Grid item xs={9}>
            <PaperPdf>{patientHealth.currentState}</PaperPdf>
          </Grid>
          <Grid item xs={3}>
            <PaperPdf className={classes.paperLabel}>EXAMÉN FÍSICO:</PaperPdf>
          </Grid>
          <Grid item xs={9}>
            <PaperPdf>{patientHealth.physicalExam}</PaperPdf>
          </Grid>
          <Grid item xs={3}>
            <PaperPdf className={classes.paperLabel}>
              EX. COMPLEMENTARIOS:
            </PaperPdf>
          </Grid>
          <Grid item xs={9}>
            <PaperPdf>{patientHealth.complementaryExams}</PaperPdf>
          </Grid>
          <Grid item xs={3}>
            <PaperPdf className={classes.paperLabel}>
              COND. DE INGRESO:
            </PaperPdf>
          </Grid>
          <Grid item xs={9}>
            <PaperPdf>{patientHealth.entryConditions}</PaperPdf>
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs container>
            <Grid item xs={8}>
              <PaperPdf className={classes.paperLabel}>
                HORA DE INICIO:
              </PaperPdf>
            </Grid>
            <Grid item xs>
              <PaperPdf>{date.time}</PaperPdf>
            </Grid>
          </Grid>
          <Grid item xs container>
            <Grid item xs>
              <PaperPdf className={classes.paperLabel}>DURACIÓN:</PaperPdf>
            </Grid>
            <Grid item xs>
              <PaperPdf className={classes.paperLabel}>{duration}m</PaperPdf>
            </Grid>
          </Grid>
          <Grid item xs container>
            <Grid item xs={4}>
              <PaperPdf className={classes.paperLabel}>PESO:</PaperPdf>
            </Grid>
            <Grid item xs>
              <PaperPdf className={classes.paperLabel}>{weight}</PaperPdf>
            </Grid>
          </Grid>
          <Grid item xs container>
            <Grid item xs={4}>
              <PaperPdf className={classes.paperLabel}>ASA:</PaperPdf>
            </Grid>
            <Grid item xs>
              <PaperPdf>{asa}</PaperPdf>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item container xs spacing={1}>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <PaperPdf>Grafico</PaperPdf>
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs>
                  <PaperPdf className={classes.paperLabel}>ECO2:</PaperPdf>
                </Grid>
                {eco2.map((item, index) => (
                  <Grid item xs>
                    <PaperPdf>{item}&nbsp;</PaperPdf>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} container>
                <Grid item xs>
                  <PaperPdf className={classes.paperLabel}>SPO2:</PaperPdf>
                </Grid>
                {spo2.map((item, index) => (
                  <Grid item xs>
                    <PaperPdf>{item}&nbsp;</PaperPdf>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs={3}>
                <PaperPdf className={classes.paperLabel}>LÍQUIDOS:</PaperPdf>
              </Grid>
              <Grid item xs>
                <PaperPdf>{liquids}</PaperPdf>
              </Grid>
            </Grid>
            <Grid item xs={12} container>
              <Grid item xs={1}>
                <PaperPdf
                  className={[classes.paperMedication, classes.paperLabel]}>
                  <div className={classes.rotate}>MEDICACIÓN:</div>
                </PaperPdf>
              </Grid>
              <Grid item xs>
                <PaperPdf className={classes.paperMedication}>
                  <ul>
                    {medication.split(",").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </PaperPdf>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} container>
            <TableContainer component={PaperPdf}>
              <Table size="small" padding="none" className={classes.vitalSign}>
                <TableHead>
                  <TableRow>
                    <TableCell style={{ borderRight: '1px solid rgba(0, 0, 0, 0.12)' }}>min</TableCell>
                    <TableCell>TAS</TableCell>
                    <TableCell>TAD</TableCell>
                    <TableCell>FC</TableCell>
                    <TableCell>BIS</TableCell>
                    <TableCell>tam</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vitalSign.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.time}</TableCell>
                      <TableCell>{item.tas}</TableCell>
                      <TableCell>{item.tad}</TableCell>
                      <TableCell>{item.fc}</TableCell>
                      <TableCell>{item.bis}</TableCell>
                      <TableCell>{item.tam}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            <PaperPdf className={classes.paperLabel}>
              INDUCCIÓN Y MANTENIMIENTO:
            </PaperPdf>
          </Grid>
          <Grid item xs={12}>
            <PaperPdf>{inductionMaintenance}</PaperPdf>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            <PaperPdf className={classes.paperLabel}>OBSERVACIONES:</PaperPdf>
          </Grid>
          <Grid item xs>
            <PaperPdf>{observations}</PaperPdf>
          </Grid>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item xs={3} container>
            <Grid item xs={6}>
              <PaperPdf className={classes.paperLabel}>ALDRETE:</PaperPdf>
            </Grid>
            <Grid item xs={6}>
              <PaperPdf>{aldrete}/10</PaperPdf>
            </Grid>
            <Grid item xs={6}>
              <PaperPdf className={classes.paperLabel}>PASE A:</PaperPdf>
            </Grid>
            <Grid item xs={6}>
              <PaperPdf>{goTo}</PaperPdf>
            </Grid>
          </Grid>
          <Grid item xs container justify="center" alignItems="center">
            <Grid item xs={12}>
              <PaperPdf className={classes.paperSign} />
            </Grid>
            <Grid item xs={10}>
              <PaperPdf
                className={[classes.paperSignLabel, classes.paperLabel]}>
                FIRMA CIRUJANO
              </PaperPdf>
            </Grid>
          </Grid>
          <Grid item xs container justify="center" alignItems="center">
            <Grid item xs={12}>
              <PaperPdf className={classes.paperSign} />
            </Grid>
            <Grid item xs={10}>
              <PaperPdf
                className={[classes.paperSignLabel, classes.paperLabel]}>
                FIRMA ANESTESISTA
              </PaperPdf>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AnesthesiaPdfTemplate);
