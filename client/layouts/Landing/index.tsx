import { DockRounded, GitHub, Inventory, JoinFull } from '@mui/icons-material'
import { Divider, Grid, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { Fragment } from 'react'

interface ILandingLayoutProps {
	readonly children: JSX.Element | JSX.Element[]
}

const LandingLayout = ({ children }: ILandingLayoutProps) => {
	return (
		<Fragment>
			<Container>
				<Grid container direction={'column'}>
					<Grid item xs={12}>
						<Stack justifyContent='center' alignItems={'center'}>
							<Typography variant='h1' fontWeight={(t) => t.typography.fontWeightBold}>
								space
							</Typography>
							<Typography color={(t) => t.palette.grey[800]} variant='subtitle1'>
								content management system
							</Typography>
						</Stack>
					</Grid>
					<Grid>
						<Divider />
					</Grid>
					<Grid item xs={12}>
						<Box pt={2} pb={2}>
							<Grid container spacing={2}>
								<Grid item xs={3}>
									<JoinFull />
								</Grid>
								<Grid item xs={3}>
									<Typography>product</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography>services</Typography>
								</Grid>
								<Grid item xs={3}>
									<Typography>links</Typography>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					{children}
				</Grid>
			</Container>
			<footer>
				<Grid
					container
					sx={(t) => ({ backgroundColor: t.palette.grey[900], p: t.spacing(8), mt: t.spacing(8) })}>
					<Grid item xs={12}>
						<Typography color={(t) => t.palette.grey[100]}>Links to get self-hosted started:</Typography>

						<Typography color={(t) => t.palette.grey[100]} fontWeight={(t) => t.typography.fontWeightBold}>
							Github <GitHub />
						</Typography>
						<Typography color={(t) => t.palette.grey[100]} fontWeight={(t) => t.typography.fontWeightBold}>
							Docker <DockRounded />
						</Typography>
						<Typography color={(t) => t.palette.grey[100]} fontWeight={(t) => t.typography.fontWeightBold}>
							npm <Inventory />
						</Typography>
					</Grid>

					<Grid item xs={12} sx={(t) => ({ mt: t.spacing(5) })}>
						<Typography color={(t) => t.palette.grey[100]} variant='caption'>
							open-source project
						</Typography>
					</Grid>
				</Grid>
			</footer>
		</Fragment>
	)
}

export default LandingLayout
