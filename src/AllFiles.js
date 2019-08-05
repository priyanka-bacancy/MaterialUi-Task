import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import data from './constants';
import file from './file_upload.png';
// import info from './info.png';

const AllFiles = ({ classes }) => {
  return (
    <Grid container className={{ root: classes.root }}>
      {
        data.map((docType, key) => (
          <Grid item sm={2} classes={{ root: classes.root }} key={key}>
            <Grid classes={{ root: classes.heading }}>{docType.name}</Grid>
            {
              docType.documents.map((doc, key) => {
                return doc.expiryDate
                  ? <DocWithExpiry classes={classes} key={key} doc={doc} />
                  : <DocWithoutExpiry classes={classes} key={key} doc={doc} />
              })
            }
          </Grid>
        ))
      }
    </Grid>
  )
}

const DocWithExpiry = ({ classes, doc }) => (
  <Grid item classes={{ root: classes.docWithExpiry }} className={classes.space}>
    <Grid container className={classes.buttonWrapper}>
      <Grid item xs={2}><i className="material-icons">description</i></Grid>
      <Grid item className={classes.dateFont}>{doc.expiryDate}</Grid>
    </Grid>
  </Grid>
)

const DocWithoutExpiry = ({ classes, doc }) => (
  <Grid>
    <Grid item classes={{ root: classes.docWithoutExpiry }} className={classes.space}>
      <Grid>{doc.name}</Grid>
      <Grid container classes={{ root: classes.buttonWrapper }}>
        <Grid item className={classes.buttonMain}>
          <Button size="small" color="inherit" className={classes.buttonStyle}>Notify</Button>
        </Grid>
        <Grid item className={classes.buttonMain}>
          <Button size="small" color="inherit" className={classes.buttonStyle}>
            Upload
            <img src={file} className={classes.image} alt="Upload"/>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

const AllFilesStyle = {
  root: {
    borderTop: '1px solid white',
    borderRight: '1px solid white',
    backgroundColor: '#8b6f47',
    color: 'white',
  },
  heading: {
    color: 'white',
    borderBottom: '1px solid white',
    padding: '4px',
    backgroundColor: '#5d9e8a',
    height: '80px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Roboto',
    fontSize: '14px',
  },
  docWithExpiry: {
    fontFamily: 'Roboto',
    borderBottom: '1px solid white',
    backgroundColor: '#5d9e8a',
    color: 'white',
  },
  docWithoutExpiry: {
    fontFamily: 'Roboto',
    color: 'white',
    borderBottom: '1px solid white',
    padding: '0',
    position: 'relative',
    backgroundColor: '#8b6f47'
  },
  dateFont: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'right',
    color: '#f1cd63',
  },
  space: {
    padding: '10px 0 0 10px',
    position: 'relative',
    height: '98px',
    fontFamily: 'Roboto',
    fontSize: '16px',
  },
  image: {
    width: '18px'
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: '15px',
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonMain: {
    width: '49%'
  },
  buttonStyle: {
    color: 'white',
    border: 'solid 1px #eadbc7',
    padding: '1px 1px',
    borderRadius: '16.5px',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
}

export default withStyles(AllFilesStyle)(AllFiles);
