import React, { useState, useEffect } from 'react';

const QueryReplies = () => {
  const [queries, setQueries] = useState([]);
  const [reply, setReply] = useState('');
  const [activeQuery, setActiveQuery] = useState(null);

  useEffect(() => {
    // Fetch the queries from your backend or API
    const fetchQueries = async () => {
      const response = await fetch('/api/queries'); // Replace with your API endpoint
      const data = await response.json();
      setQueries(data);
    };

    fetchQueries();
  }, []);

  const handleReplySubmit = (queryId) => {
    // Handle reply submission to the backend or API
    console.log(`Replying to query ${queryId}: ${reply}`);
    // Reset the reply state
    setReply('');
    setActiveQuery(null);
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Replies to Your Queries</h2>
      {queries.length > 0 ? (
        <ul className="space-y-4">
          {queries.map((query) => (
            <li key={query.id} className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-800 font-semibold">Query: {query.query}</p>
              <p className="text-gray-600 mt-2">Reply: {query.response}</p>
              <button
                className="mt-2 text-blue-500 hover:underline"
                onClick={() => setActiveQuery(query.id)}
              >
                {activeQuery === query.id ? 'Cancel' : 'Reply'}
              </button>
              {activeQuery === query.id && (
                <div className="mt-4">
                  <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                    rows="3"
                    placeholder="Write your reply..."
                  ></textarea>
                  <button
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                    onClick={() => handleReplySubmit(query.id)}
                  >
                    Submit Reply
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">No queries found.</p>
      )}
    </div>
  );
};

export default QueryReplies;
