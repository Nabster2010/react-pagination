import React from "react";

const Pagination = ({ postsPerPage, totalPosts, getPageNumber }) => {
	const pageNumbers = [];
	for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul className="pagination">
				{pageNumbers.map(number => (
					<li key={number} className="page-item">
						<a
							href="!#"
							className="page-link"
							onClick={() => getPageNumber(number)}
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
