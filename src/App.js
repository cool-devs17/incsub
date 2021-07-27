import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import validator from 'validator';

import './index.css';
import { TextFieldsTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  ic_app: {
    backgroundColor: '#286efa',
  },
  ic_container: {
    maxWidth: 1800,
  },
  ic_card: {
    maxWidth: 480,
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: 'none',
  },
  ic_paper: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ic_smPaper: {
    backgroundColor: '#fff',
    padding: 24,
  },
  ic_letter: {
    backgroundColor: '#286efa',
    color: '#fff',
  },
  ic_next: {
    width: '100%',
    height: 50,
    backgroundColor: '#286efa',
    color: '#fff'
  },
  ic_height100: {
    height: '100vh'
  },
  ic_formCtrl: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
  },
  ic_terms: {
    marginTop: 45,
    fontSize: 14,
  },
  ic_title: {
    fontWeight: 'bold',
  },
  ic_desc: {
    fontSize: 14,
  },
  ic_link: {
    color: '#286efa',
    fontWeight: 'bold',
  },
  ic_actions: {
    marginTop: 35,
    padding: 0,
  },
  ic_padding0: {
    padding: 0,
  },
  ic_displayNone: {
    display: 'none',
  }
}));

function App() {
  const classes = useStyles();
  const mdMatches = useMediaQuery(
    json2mq({
      minWidth: 960,
    }),
  );
  const smMatches = useMediaQuery(
    json2mq({
      minWidth: 600,
    }),
  );
  
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    type: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({
    name: false,
    email: false,
    type: false,
    password: false
  });

  const handleChange = (prop) => (event) => {
    formValidate(prop, event.target.value);
    setValues({ ...values, [prop]: event.target.value });
  };

  const formValidate = (prop, value) => {
    let validateF = false;
    if (validator.isEmpty(value)) {
      validateF = true;
    } else {
      if (prop === 'email') {
        validateF = !validator.isEmail(value);
      } else if (prop === 'password') {
        validateF = !validator.isStrongPassword(value);
      }
    }
    setErrors({...errors, [prop]: validateF});
  };

  return (
    <div className={classes.ic_app}>
      <CssBaseline />
      <Container className={smMatches ? classes.ic_container : classes.ic_padding0}>
        <Grid container spacing={0} className={classes.ic_height100}>
          <Grid item xs={12} sm={12} md={7} className={smMatches ? classes.ic_paper : classes.ic_smPaper}>
            <form 
              className={classes.ic_signup}
            >
              <Card className={classes.ic_card}>
                <CardContent className={classes.ic_padding0}>
                  <Typography component="h1" variant="h4" className={classes.ic_title}>
                    Let's set up your account
                  </Typography>
                  <Typography className={classes.ic_desc} style={{marginTop: 45, marginBottom: 20}}>
                    Already have an account?&nbsp;&nbsp;
                    <Link href="#" className={classes.ic_link}>
                      Sign in
                    </Link>
                  </Typography>
                  <FormControl fullWidth className={classes.ic_formCtrl} variant="outlined">
                    <TextField
                      id="your-name"
                      label="Your name *"
                      defaultValue={values.name}
                      value={values.name}
                      onChange={handleChange('name')}
                      variant="outlined"
                      error={errors.name}
                      helperText={errors.name ? 'Name can not be empty' : ''}
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.ic_formCtrl} variant="outlined">
                    <TextField
                      id="email-address"
                      label="Email address *"
                      defaultValue={values.email}
                      value={values.email}
                      onChange={handleChange('email')}
                      variant="outlined"
                      error={errors.email}
                      helperText={errors.email ? 'Please enter a valid email address' : ''}
                    />
                  </FormControl>
                  <FormControl fullWidth className={classes.ic_formCtrl} variant="outlined">
                    <InputLabel id="type">I would describe my user type as *</InputLabel>
                    <Select
                      labelId="type"
                      id="type-outlined"
                      value={values.type}
                      onChange={handleChange('type')}
                      label="I would describe my user type as *"
                    >
                      <MenuItem value="admin">Administrator</MenuItem>
                      <MenuItem value="client">Client</MenuItem>
                      <MenuItem value="buyer">Buyer</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth className={classes.ic_formCtrl} variant="outlined">
                    <TextField
                      id="password"
                      label="Password *"
                      type="password"
                      defaultValue={values.password}
                      value={values.password}
                      onChange={handleChange('password')}
                      error={errors.password}
                      helperText="Minium password 8 characters(Strong Password is Required)"
                      variant="outlined"
                    />
                  </FormControl>
                </CardContent>
                <CardActions className={classes.ic_actions}>
                  <Button className={classes.ic_next} variant="contained" type="submit">Next</Button>
                </CardActions>
                <Typography className={classes.ic_terms}>
                  By clicking the "Next" button, you agree to creating a free account, and to&nbsp;
                  <Link href="#" className={classes.ic_link}>
                    Terms of Service
                  </Link>
                  &nbsp;and&nbsp;
                  <Link href="#" className={classes.ic_link}>
                    Privacy Policy. 
                  </Link>
                </Typography>
              </Card>
            </form>
          </Grid>
          <Grid item md={5} className={mdMatches ? classes.ic_letter : classes.ic_displayNone}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
              <div style={{maxWidth: 300}}>
                <Typography component="h4" variant="h4" className={classes.ic_title}>
                  Dummy Heading
                </Typography>
                <Typography style={{fontSize: 20, marginTop: 45, marginBottom: 20}}>
                  Lorem ipsum dolor sit amet, consectetur adpicing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magnaqulia.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
