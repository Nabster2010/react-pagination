import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/Post";

import Pagination from "./components/Pagination";

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [postsPerPage] = useState(10);
	const [curretPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
			setPosts(res.data);
			setLoading(false);
		};
		fetchPosts();
	}, []);

	//get the current posts
	const indexOfLastPost = curretPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	//change page
	const getPageNumber = pageNumber => {
		setCurrentPage(pageNumber);
	};
	return (
		<div className="container mt-3">
			<h1 className="text-primary mb-3"> My Blog</h1>
			<Post posts={currentPosts} loading={loading} />
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={posts.length}
				getPageNumber={getPageNumber}
			/>
		</div>
	);
}

export default App;
