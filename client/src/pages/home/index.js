import React, {Component, Fragment} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ggl from 'graphql-tag'
import {Query} from 'react-apollo';

const _query = ggl`
    query {
    all {
     id
    name,
    release_date,
    by_company,
    price
  }
  }
`;

class Home extends Component {

	render() {
		return (
			 <Paper>
				 <Query query={_query}>
					 {
						 ({loading, error, data}) => {
							 if (loading) return <h4>Loading...</h4>;
							 if (error) return <h1>Failed</h1>;
							 return (
								  <Fragment>
									  <Table aria-label="simple table">
										  <TableHead>
											  <TableRow>
												  <TableCell align="center">Name</TableCell>
												  <TableCell align="center">Production(g)</TableCell>
												  <TableCell align="center">Price</TableCell>
											  </TableRow>
										  </TableHead>
										  <TableBody>
											  {
												  data.all.map(res => (
														<TableRow key={res.id}>
															<TableCell component="th" scope="res">
																{res.name}
															</TableCell>
															<TableCell align="center">{res.by_company}</TableCell>
															<TableCell align="center">{res.price}</TableCell>
														</TableRow>
												  ),)
											  }
										  </TableBody>
									  </Table>
								  </Fragment>
							 )
						 }
					 }
				 </Query>
			 </Paper>
		);
	}
}

// export default connect(
//     mapStateToProps,
// )(Home);

export default Home;
