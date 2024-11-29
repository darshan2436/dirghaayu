
function DonorForm() {

  return (
    <div className="bg-gradient-to-r from-green-200 via-blue-400 to-purple-200 py-64 " >

      {/* Conditional rendering of forms */}
      
          
            <h1 className="text-2xl font-bold mb-4 text-center py-5">Donor Form</h1>
            {/* Donor form content */}
            <form className="flex flex-col items-center -my-10">
              <fieldset>
                <legend>
              <label className="block mb-2" htmlFor=''>Name:</label>
              <input type="text" className="border rounded px-2 py-1 mb-4 w-full" placeholder="Enter your name" />
               
              <label className="block mb-2" htmlFor=''>Blood Group:</label>
              <input type="text" className="border rounded px-2 py-1 mb-4 w-full" placeholder="Enter your blood group" />

              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded ">
                Submit
              </button>
              </legend>
              </fieldset>
            </form>
          
      
    </div>
  );
}

export default DonorForm;
