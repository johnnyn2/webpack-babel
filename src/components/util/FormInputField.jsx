/* eslint-disable no-unused-vars */
import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

export default function FormInputField ({ id, name, label, value, handleChange, helperText, error }) {
  const classes = useStyles()
  return (
        <React.Fragment>
            <FormControl error={error}>
                <InputLabel htmlFor="component-error">{label}</InputLabel>
                <Input
                    id={id}
                    name={name}
                    value={value}
                    onChange={e => handleChange(e)}
                    aria-describedby="component-error-text"
                />
                <FormHelperText id="component-error-text">{helperText}</FormHelperText>
            </FormControl>
        </React.Fragment>
  )
}
