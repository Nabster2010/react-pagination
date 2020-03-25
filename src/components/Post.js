import React from "react";

const Post = ({ posts, loading }) => {
	if (loading) {
		return <h2>loading..</h2>;
	}

	return (
		<ul className="list-group mb-4">
			{posts.map(post => (
				<li className="list-group-item" key={posts.id}>
					{post.title}
				</li>
			))}
		</ul>
	);
};
export default Post;
