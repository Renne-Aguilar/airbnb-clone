import { Avatar, FormControlLabel, Checkbox, Grid, Paper, TextField, Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
//import './Login.css'

const Login=()=> {
    const history = useHistory();
    const paperStyle={padding :20, height: '70vh', width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'pink'}
    return (
        
            <Grid >
               <Paper elevation={10} style={paperStyle}>
               <Grid align='center'>
                   <Avatar style={avatarStyle}/>
                     <h2>Registrarme</h2> 
               </Grid>
               <TextField variant='outlined' label='Nombre' placeholder='Ingresa tu nombre' fullWidth required/>
               <TextField variant='outlined' label='Teléfono' placeholder='Ingresa tu numero de teléfono' type='phone' fullWidth required/>
               <TextField variant='outlined' label='contraseña' placeholder='Crea tu contraseña' type='password' fullWidth required/>
               <FormControlLabel
               control={
                 <Checkbox
                   //checked={state.checkedB}
                   //onChange={handleChange}
                   name="checkedB"
                   color="primary"
                 />
                     }
                     label="Recuerdame"
                 />
                  
                    <Button onClick={() => history.push('/')} type='submit' color='secondary' variant='contained' fullWidth>Ingresar a GoTalk!</Button>
                
               </Paper>
            </Grid>
        
    )
}

export default Login


