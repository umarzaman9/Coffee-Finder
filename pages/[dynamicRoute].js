import {useRouter} from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

const DynamicRoute = () => {
	const router = useRouter();
	const value = router.query.dynamicRoute;
	return (
				
				<div>
					<Head>
        				<title>{value}</title>
    			  </Head>
 					{value}
	 			</div>
	 		);
}
export default DynamicRoute;