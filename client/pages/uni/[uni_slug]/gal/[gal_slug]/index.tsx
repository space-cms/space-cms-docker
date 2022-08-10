import { Divider, Grid } from '@mui/material'
import { Container } from '@mui/system'
import { GetServerSidePropsContext } from 'next'

interface IGalaxyPageProps {
	readonly params: {
		readonly uni_slug: string
		readonly gal_slug: string
	}
}

const GalaxyPage = ({ params: { gal_slug, uni_slug } }: IGalaxyPageProps) => {
	return (
		<Container>
			<Grid container direction={'column'}>
				<Grid item>
					<div>
						uni: <strong>{uni_slug}</strong>
					</div>
				</Grid>
				<Grid item>
					<div>
						gal: <strong>{gal_slug}</strong>
					</div>
				</Grid>
				<Grid item>
					<Divider sx={(t) => ({ marginTop: t.spacing(1) })} />
				</Grid>
			</Grid>
		</Container>
	)
}

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
	return { props: { params } }
}

export default GalaxyPage
