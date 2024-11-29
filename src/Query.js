import React, { useState } from 'react';

const queriesData = [
  {
    id: 1,
    title: 'Organ Donation Process',
    description: 'How does the organ donation process work?',
    comments: [
      { id: 1, user: { name: 'Alice' }, text: 'The process starts with registration as a donor.' },
      { id: 2, user: { name: 'Bob' }, text: 'A medical evaluation is done to determine eligibility.' },
    ],
  },
  {
    id: 2,
    title: 'Doctor Appointment Scheduling',
    description: 'What is the best way to schedule an appointment with a specialist?',
    comments: [
      { id: 1, user: { name: 'Carol' }, text: 'You can use the online appointment scheduling system.' },
      { id: 2, user: { name: 'Dave' }, text: 'It is recommended to book appointments well in advance.' },
    ],
  },
];

const Query = () => {
  const [queries, setQueries] = useState(queriesData);
  const [commentText, setCommentText] = useState('');
  const [activeQuery, setActiveQuery] = useState(null);
  const currentUser = { name: 'Current User' }; // Replace with actual user info

  const handleCommentSubmit = (queryId) => {
    const newComment = { id: Date.now(), user: currentUser, text: commentText };
    const updatedQueries = queries.map(query => {
      if (query.id === queryId) {
        return { ...query, comments: [...query.comments, newComment] };
      }
      return query;
    });
    setQueries(updatedQueries);
    setCommentText('');
    setActiveQuery(null);
  };

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
            <li key={query.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{query.title}</h3>
              <p className="text-gray-600 mt-2">{query.description}</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-700">Comments</h4>
                <ul className="space-y-2 mt-2">
                  {query.comments.map((comment) => (
                    <li key={comment.id} className="text-gray-600">
                      <span className="font-bold">{comment.user.name}:</span> {comment.text}
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-2 text-blue-500 hover:underline"
                  onClick={() => setActiveQuery(query.id)}
                >
                  {activeQuery === query.id ? 'Add Comment' : 'Add Comment'}
                </button>
                {activeQuery === query.id && (
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
                      onClick={() => handleCommentSubmit(query.id)}
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
