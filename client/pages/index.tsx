import { FormEvent } from 'react'
import fetch from 'isomorphic-unfetch'
import { Box, Button, Grid, Paper, Stack, TextField } from '@mui/material'

const HomePage = () => {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = new FormData(e.currentTarget)
		const email = form.get('email')
		const password = form.get('password')

		try {
			const apireq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth`, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ email, password })
			})

			console.log(await apireq.json())
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Grid sx={{ flexGrow: 1 }} container spacing={2}>
			<Grid item xs={12}>
				<Grid sx={{ mt: 2 }} container justifyContent='center' spacing={2}>
					<Grid item xs={12} md={4}>
						<Paper>
							<Box p={3}>
								<form onSubmit={handleSubmit}>
									<Stack direction='column' spacing={2}>
										<TextField label='Courriel' name='email' type='email' />
										<TextField label='Mot de passe' name='password' type='password' />
										<Button type='submit'>GO</Button>
									</Stack>
								</form>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default HomePage
