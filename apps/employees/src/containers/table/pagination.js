import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { stringify } from 'query-string';

const Pagination = ({ url, countPages, currentPage }) => {
	const pages = new Array(countPages).fill(0).map((_, i) => i + 1);

	const prevPageUrl = url + '?' + stringify({
		page: currentPage > 1 ? currentPage - 1 : currentPage
	});
	const nextPageUrl = url + '?' + stringify({
		page: currentPage < countPages ? currentPage + 1 : currentPage
	});

	return countPages <= 1 ? null : (
		<nav>
			<ul className="pagination justify-content-center">
				<li className={classNames({
					'page-item': true,
					'disabled': currentPage === 1
				})}>
					<Link className="page-link" to={prevPageUrl}><span>&laquo;</span></Link>
				</li>
				{ pages.map((page, index) => {
					const pageUrl = url + '?' + stringify({ page });
					return (
						<li key={index} className={classNames({
							'page-item': true,
							'active': page === currentPage
						})}>
							<Link className="page-link" to={pageUrl}>{page}</Link>
						</li>
					)
				} ) }
				<li className={classNames({
					'page-item': true,
					'disabled': currentPage === countPages
				})}>
					<Link className="page-link" to={nextPageUrl}><span>&raquo;</span></Link>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
