import { createTheme } from '@mui/material/styles'
import { blue, red } from '@mui/material/colors'

const theme = createTheme({
	typography: { fontFamily: 'Cousine' },
	palette: {
		primary: {
			main: blue[400]
		},
		secondary: {
			main: blue[900]
		},
		error: {
			main: red.A400
		}
	}
})

export default theme
