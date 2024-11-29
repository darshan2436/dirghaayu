import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Query = () => {
  const [queries, setQueries] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [activeQuery, setActiveQuery] = useState(null);

  // Fetch queries from the API on component mount
  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/queries/show");
        setQueries(response.data); // assuming the response contains the queries data
      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };

    fetchQueries();
  }, []); // Empty dependency array ensures it only runs once after component mounts

  // Handle comment submission
  const handleCommentSubmit = async (queryId) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/queries/${queryId}/add-comment`,
        { comment: commentText }
      );
      console.log("Comment added successfully:", response.data);
  
      // Ensure the response contains the updated query with the new comment
      const updatedQuery = response.data.query;  // Updated query object from the server
  
      // Update the local state with the updated query
      setQueries((prevQueries) =>
        prevQueries.map((query) =>
          query._id === updatedQuery._id ? updatedQuery : query  // Update the specific query
        )
      );
  
      // Reset comment input after submission
      setCommentText('');
      setActiveQuery(null); // Close the comment input area
    } catch (error) {
      console.error("Error adding comment:", error.response || error.message);
    }
  };
  
  

  // Handle cancel button
  const handleCancelClick = () => {
    setCommentText('');
    setActiveQuery(null);
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Queries</h2>
      {queries.length > 0 ? (
        <ul className="space-y-4">
          {queries.map((query) => (
            <li key={query._id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{query.title}</h3>
              <p className="text-gray-600 mt-2">{query.query}</p> {/* Fix: Use query.query for description */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-700">Comments</h4>
                <ul className="space-y-2 mt-2">
                  {query.comments && query.comments.length > 0 ? (
                    query.comments.map((comment, index) => (
                      <li key={index} className="text-gray-600">
                       {new Date(comment.date).toLocaleString()} - {comment.comment}   
                      </li>
                    ))
                  ) : (
                    <p>No comments yet.</p>
                  )}
                </ul>
                <button
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => setActiveQuery(query._id)} // Fix: Use _id for query identifier
                >
                  {activeQuery === query._id ? 'Add Comment' : 'Add Comment'}
                </button>
                {activeQuery === query._id && (
                  <div className="mt-4">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="w-full p-2 border rounded-lg"
                      rows="3"
                      placeholder="Write your comment..."
                    ></textarea>
                    <button
                      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                      onClick={() => handleCommentSubmit(query._id)} // Fix: Use _id
                    >
                      Submit Comment
                    </button>
                    <button
                      className="mt-2 ml-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">No queries found.</p>
      )}
    </div>
  );
};

export default Query;
