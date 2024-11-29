
function DonorForm() {

  return (
    <div className="">

      {/* Conditional rendering of forms */}
      <div className="mt-10">
          <div>
            <h2 className="text-xl font-bold mb-4">Donor Form</h2>
            {/* Donor form content */}
            <form>
              <label className="block mb-2" htmlFor=''>Name:</label>
              <input type="text" className="border rounded px-2 py-1 mb-4 w-full" placeholder="Enter your name" />

              <label className="block mb-2" htmlFor=''>Blood Group:</label>
              <input type="text" className="border rounded px-2 py-1 mb-4 w-full" placeholder="Enter your blood group" />

              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </div>
      </div>
    </div>
  );
}

export default DonorForm;
