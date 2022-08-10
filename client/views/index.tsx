import { Group, Hail, Hotel, LocalPizza } from '@mui/icons-material'
import { Box, Grid, Paper, Stack, styled, Typography } from '@mui/material'
import Link from 'next/link'
import LandingLayout from '../layouts/Landing'

const StyledBox = styled(Box, {})(({ theme }) => ({
	padding: theme.spacing(2)
}))

const StyledPaper = styled(Paper, {})(({ theme }) => ({
	padding: theme.spacing(2),
	marginTop: theme.spacing(2)
}))

const IndexView = () => {
	return (
		<LandingLayout>
			<Grid container justifyContent={'center'}>
				<Grid xs={12} md={10} lg={9} sx={(t) => ({ marginTop: t.spacing(2) })}>
					<Paper variant='outlined'>
						<Grid container>
							<Grid item xs={12} md={4}>
								<StyledBox>
									<Stack>
										<Typography variant='h2' fontStyle={'italic'}>
											why
										</Typography>
										<Typography variant='body1'>
											everybody need an open-source cms that can be{' '}
											<Link href={`/services/self-hosted`}>self-hosted</Link> or{' '}
											<Link href={`/services/cloud-based`}>cloud based</Link>
										</Typography>
									</Stack>
								</StyledBox>
							</Grid>
							<Grid item xs={12} md={4}>
								<StyledBox>
									<Stack>
										<Typography variant='h2' fontStyle={'italic'}>
											we
										</Typography>
										<Typography variant='body1'>
											clients and creators of content management systems
										</Typography>
									</Stack>
								</StyledBox>
							</Grid>
							<Grid item xs={12} md={4}>
								<StyledBox>
									<Stack>
										<Typography variant='h2' fontStyle={'italic'}>
											are
										</Typography>
										<Typography variant='body1'>
											working on the{' '}
											<a href={'https://github.com'} target='_blank'>
												system
											</a>{' '}
											that we need
										</Typography>
									</Stack>
								</StyledBox>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
			<Grid sx={(t) => ({ marginTop: t.spacing(8) })} item xs={12}>
				<Typography variant='h3'>we like to keep it simple;</Typography>
				<StyledPaper variant='outlined'>
					<Grid container spacing={2} direction='row'>
						<Grid item xs={12} md={7}>
							<Typography variant='body1'>a content manager (or a team) controls</Typography>
							<StyledPaper variant='outlined'>
								<Typography variant='body1'>one or many organizations that can holds</Typography>
								<Grid container spacing={2} direction='row'>
									<Grid item xs={12} md={6}>
										<StyledPaper variant='outlined'>
											<Typography variant='body1'>
												space with{' '}
												<Link href='/product/data-schema'>all the contents you need</Link>
											</Typography>
										</StyledPaper>
									</Grid>
									<Grid item xs={12} md={6}>
										<StyledPaper variant='outlined'>
											<Typography variant='body1'>...and many other spaces</Typography>
										</StyledPaper>
									</Grid>
								</Grid>
							</StyledPaper>
						</Grid>
						<Grid item xs={12} md={5}>
							<Typography variant='body1'>
								let's see{' '}
								<Link href={'/demo'} target='_blank'>
									an example
								</Link>:
							</Typography>
							<Stack direction={'row'} spacing={1} justifyContent='center' alignItems={'center'}>
								<Typography variant='body1'>The Content Team</Typography>
								<Group />
							</Stack>

							<StyledPaper variant='outlined'>
								<Stack direction={'row'} spacing={1} justifyContent='center' alignItems={'center'}>
									<Typography variant='body1'>The Dot Organization</Typography>
									<Hail />
								</Stack>
								<Grid container direction='row' spacing={2}>
									<Grid item xs={12} md={6}>
										<StyledPaper variant='outlined'>
											<Stack
												direction={'row'}
												spacing={1}
												justifyContent='center'
												alignItems={'center'}>
												<Typography variant='body1'>Dot's Pizza</Typography> <LocalPizza />
											</Stack>
										</StyledPaper>
									</Grid>
									<Grid item xs={12} md={6}>
										<StyledPaper variant='outlined'>
											<Stack
												direction={'row'}
												spacing={1}
												justifyContent='center'
												alignItems={'center'}>
												<Typography variant='body1'>Dot's Resort</Typography>
												<Hotel />
											</Stack>
										</StyledPaper>
									</Grid>
								</Grid>
							</StyledPaper>
						</Grid>
					</Grid>
				</StyledPaper>
			</Grid>
		</LandingLayout>
	)
}

export default IndexView
