// import { useState } from "react";
// import { terms } from "../components/Data";

// const AffiliateProgram = () => {
//   // State for the form inputs
//   const [affiliateForm, setAffiliateForm] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     address: '',
//     passport: null,
//     validID: null,
//     website: '',
//     bankName: '',
//     acctNo: '',
//     agreement: false,
//     isWebsiteOptional: false, // State for website optional checkbox
//     isBankDetailsOptional: false // State for bank details optional checkbox
//   });

//   // State to manage modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // State for form submission status
//   const [formStatus, setFormStatus] = useState({ submitted: false, error: false });

//   // Function to handle input field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAffiliateForm({ ...affiliateForm, [name]: value });
//   };

//   // Function to handle file inputs
//   const handleFileChange = (e) => {
//     const { name } = e.target;
//     const file = e.target.files[0];
//     setAffiliateForm({ ...affiliateForm, [name]: file });
//   };

//   // Function to handle checkbox changes
//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setAffiliateForm({ ...affiliateForm, [name]: checked });
//   };

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Log the form values to check if the data is there
//     console.log(affiliateForm);
  
//     // Validation: Check required fields
//     if (!affiliateForm.name || !affiliateForm.email || !affiliateForm.phoneNumber || !affiliateForm.agreement) {
//       setFormStatus({ submitted: false, error: true });
//       return;
//     }
  
//     setFormStatus({ submitted: false, error: false });
  
//     // Send form data to the backend using fetch
//     fetch('http://localhost:3001/send-email', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(affiliateForm),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Form successfully submitted:', data);
//         setFormStatus({ submitted: true, error: false });
//       })
//       .catch(error => {
//         console.error('Error submitting form:', error);
//         setFormStatus({ submitted: false, error: true });
//       });
//   };
  

//   return (
//     <div className="bg-gray-100 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
//           Become an Affiliate
//         </h2>

//         <p className="text-lg text-center text-gray-700 mb-8">
//           Join our affiliate program and earn commissions by referring new clients to us!
//           As an affiliate, you can help people find their dream homes while getting rewarded.
//         </p>

//         <div className="bg-white rounded-lg shadow-lg p-8 grid place-items-center">
//           <h3 className="text-2xl font-semibold text-blue-600 mb-4">
//             Affiliate Registration
//           </h3>

//           {/* Form submission status */}
//           {formStatus.error && (
//             <div className="text-red-600 text-center mb-4">
//               Please fill in all required fields and agree to the terms.
//             </div>
//           )}
//           {formStatus.submitted && (
//             <div className="text-green-600 text-center mb-4">
//               Your application has been successfully submitted.
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4 w-8/12 mx-auto">
            // {/* Full Name */}
            // <div>
            //   <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            //     Full name / Corporate name <span className="text-red-500">*</span>
            //   </label>
            //   <input
            //     type="text"
            //     id="name"
            //     name="name"
            //     className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
            //     placeholder="Enter your full name"
            //     value={affiliateForm.name}
            //     onChange={handleChange}
            //     required
            //   />
            // </div>

            // {/* Email */}
            // <div>
            //   <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            //     Email <span className="text-red-500">*</span>
            //   </label>
            //   <input
            //     type="email"
            //     id="email"
            //     name="email"
            //     className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
            //     placeholder="Enter your email address"
            //     value={affiliateForm.email}
            //     onChange={handleChange}
            //     required
            //   />
            // </div>

            // {/* Phone Number */}
            // <div>
            //   <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            //     Phone Number <span className="text-red-500">*</span>
            //   </label>
            //   <input
            //     type="number"
            //     id="phoneNumber"
            //     name="phoneNumber"
            //     className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
            //     placeholder="Enter your phone number"
            //     value={affiliateForm.phoneNumber}
            //     onChange={handleChange}
            //     required
            //   />
            // </div>

            // {/* Address */}
            // <div>
            //   <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            //     Address
            //   </label>
            //   <textarea
            //     id="address"
            //     name="address"
            //     className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
            //     placeholder="Enter your address"
            //     value={affiliateForm.address}
            //     onChange={handleChange}
            //   />
            // </div>

            // {/* Website (Optional) */}
            // <div>
            //   <label>
            //     <input 
            //       type="checkbox"
            //       checked={affiliateForm.isWebsiteOptional}
            //       onChange={handleCheckboxChange}
            //       name="isWebsiteOptional"
            //       className="mr-2"
            //     />
            //     Website (Optional)
            //   </label>
            //   {affiliateForm.isWebsiteOptional && (
            //     <input
            //       type="url"
            //       id="website"
            //       name="website"
            //       className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
            //       placeholder="Enter your website URL"
            //       value={affiliateForm.website}
            //       onChange={handleChange}
            //     />
            //   )}
            // </div>

            // {/* Bank Details (Optional) */}
            // <div>
            //   <label>
            //     <input 
            //       type="checkbox"
            //       checked={affiliateForm.isBankDetailsOptional}
            //       onChange={handleCheckboxChange}
            //       name="isBankDetailsOptional"
            //       className="mr-2"
            //     />
            //     Bank Details (Optional)
            //   </label>
            //   {affiliateForm.isBankDetailsOptional && (
            //     <h4 className="pt-4">Provide your bank account details for commission payments <span className="text-red-500">*</span></h4>
            //   )}
            //   {affiliateForm.isBankDetailsOptional && (
            //     <input
            //       type="text"
            //       id="bankName"
            //       name="bankNames"
            //       className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
            //       placeholder="Provide your Bank Name"
            //       value={affiliateForm.bankDetails}
            //       onChange={handleChange}
            //     />
            //   )}
            //   {affiliateForm.isBankDetailsOptional && (
            //     <input
            //       type="text"
            //       id="acctNo"
            //       name="acctNo"
            //       className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
            //       placeholder="Provide your Account Number"
            //       value={affiliateForm.bankDetails}
            //       onChange={handleChange}
            //     />
            //   )}
            // </div>

            // {/* Upload Passport */}
            // <div>
            //   <label htmlFor="passport" className="block text-sm font-medium text-gray-700">
            //     Upload Passport <span className="text-red-500">*</span>
            //   </label>
            //   <input
            //     type="file"
            //     id="passport"
            //     name="passport"
            //     className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
            //     onChange={handleFileChange}
            //     required
            //   />
            // </div>

            // {/* Valid ID / CAC */}
            // <div>
            //   <label htmlFor="validID" className="block text-sm font-medium text-gray-700">
            //     Attach valid ID or CAC Certificate of Incorporation
            //   </label>
            //   <input
            //     type="file"
            //     id="validID"
            //     name="validID"
            //     className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
            //     onChange={handleFileChange}
            //   />
            // </div>

            // {/* Agreement Checkbox */}
            // <div>
            //   <label htmlFor="agreement" className="flex items-center">
            //     <input
            //       type="checkbox"
            //       id="agreement"
            //       name="agreement"
            //       className="mr-2"
            //       checked={affiliateForm.agreement}
            //       onChange={handleCheckboxChange}
            //     />
            //     <span className="text-gray-700">
            //       I agree to the{" "}
            //       <button
            //         type="button"
            //         className="text-blue-500 underline"
            //         onClick={() => setIsModalOpen(true)}
            //       >
            //         Terms and Conditions
            //       </button>
            //     </span>
            //   </label>
            // </div>

//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
//             >
//               Apply Now
//             </button>
//           </form>
//         </div>

//         {/* Modal for Terms and Conditions */}
//         {isModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg p-8 w-11/12 md:w-1/2 max-h-[80vh] overflow-auto">
//               <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
//               {terms.map((term, index) => (
//                 <div key={index} className="mb-2">
//                   {term.condition}
//                 </div>
//               ))}
//               <button
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
//                 onClick={() => setIsModalOpen(false)}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
//   console.log(affiliateForm);

// };

// export default AffiliateProgram;

import { useState } from "react";
import { terms } from "../components/Data";

const AffiliateProgram = () => {
  // State for the form inputs
  const [affiliateForm, setAffiliateForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    passport: null,
    validID: null,
    website: '',
    bankName: '',
    acctNo: '',
    agreement: false,
    isWebsiteOptional: false,
    isBankDetailsOptional: false
  });

  // Separate state for managing the visibility of different modals
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false); // For Terms & Conditions modal
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // For Success modal
  const [isFormVisible, setIsFormVisible] = useState(true); // For form visibility

  // State for form submission status
  const [formStatus, setFormStatus] = useState({ submitted: false, error: false });

  // Function to handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAffiliateForm({ ...affiliateForm, [name]: value });
  };

  // Function to handle file inputs
  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setAffiliateForm({ ...affiliateForm, [name]: file });
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAffiliateForm({ ...affiliateForm, [name]: checked });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(affiliateForm);
    // Validation: Check required fields
    if (!affiliateForm.name || !affiliateForm.email || !affiliateForm.phoneNumber || !affiliateForm.agreement) {
      setFormStatus({ submitted: false, error: true });
      return;
    }

    // Clear error if fields are filled correctly
    setFormStatus({ submitted: false, error: false });

    const formData = new FormData();
    formData.append('name', affiliateForm.name);
    formData.append('email', affiliateForm.email);
    formData.append('phoneNumber', affiliateForm.phoneNumber);
    formData.append('address', affiliateForm.address);
    formData.append('passport', affiliateForm.passport);
    formData.append('validID', affiliateForm.validID);
    formData.append('website', affiliateForm.website);
    formData.append('bankName', affiliateForm.bankName); // This is potentially the issue
    formData.append('acctNo', affiliateForm.acctNo); // This is potentially the issue
    

    // Simulating successful form submission (replace with actual API call)
    fetch('https://new-flexi-server.vercel.app/api/send-emai', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log("Form successfully submitted:", data);
        setFormStatus({ submitted: true, error: false });

        // Hide the form upon successful submission
        setIsFormVisible(false); // Hide the form
        setIsSuccessModalOpen(true);    // Open the success modal
      })
      .catch(error => {
        console.error("Error submitting form:", error);
        setFormStatus({ submitted: false, error: true });
      });
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Become an Affiliate
        </h2>

        <p className="text-lg text-center text-gray-700 mb-8">
          Join our affiliate program and earn commissions by referring new clients to us!
        </p>

        {/* Hide the form after successful submission */}
        {isFormVisible && (
          <div className="bg-white rounded-lg shadow-lg p-8 grid place-items-center">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Affiliate Registration
            </h3>

            {/* Form submission status */}
            {formStatus.error && (
              <div className="text-red-600 text-center mb-4">
                Please fill in all required fields and agree to the terms.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 w-8/12 mx-auto">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full name / Corporate name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your full name"
                  value={affiliateForm.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your email address"
                  value={affiliateForm.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your phone number"
                  value={affiliateForm.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter your address"
                  value={affiliateForm.address}
                  onChange={handleChange}
                />
              </div>

              {/* Website (Optional) */}
              <div>
                <label>
                  <input 
                    type="checkbox"
                    checked={affiliateForm.isWebsiteOptional}
                    onChange={handleCheckboxChange}
                    name="isWebsiteOptional"
                    className="mr-2"
                  />
                  Website (Optional)
                </label>
                {affiliateForm.isWebsiteOptional && (
                  <input
                    type="url"
                    id="website"
                    name="website"
                    className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
                    placeholder="Enter your website URL"
                    value={affiliateForm.website}
                    onChange={handleChange}
                  />
                )}
              </div>

              {/* Bank Details (Optional) */}
              <div>
                <label>
                  <input 
                    type="checkbox"
                    checked={affiliateForm.isBankDetailsOptional}
                    onChange={handleCheckboxChange}
                    name="isBankDetailsOptional"
                    className="mr-2"
                  />
                  Bank Details (Optional)
                </label>
                {affiliateForm.isBankDetailsOptional && (
                  <h4 className="pt-4">Provide your bank account details for commission payments <span className="text-red-500">*</span></h4>
                )}
                {affiliateForm.isBankDetailsOptional && (
                  <input
                    type="text"
                    id="bankName"
                    name="bankName"
                    className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
                    placeholder="Provide your Bank Name"
                    value={affiliateForm.bankName}
                    onChange={handleChange}
                  />
                )}
                {affiliateForm.isBankDetailsOptional && (
                  <input
                    type="text"
                    id="acctNo"
                    name="acctNo"
                    className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
                    placeholder="Provide your Account Number"
                    value={affiliateForm.acctNo}
                    onChange={handleChange}
                  />
                )}
              </div>

              {/* Upload Passport */}
              <div>
                <label htmlFor="passport" className="block text-sm font-medium text-gray-700">
                  Upload Passport <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="passport"
                  name="passport"
                  className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
                  onChange={handleFileChange}
                  required
                />
              </div>

              {/* Valid ID / CAC */}
              <div>
                <label htmlFor="validID" className="block text-sm font-medium text-gray-700">
                  Attach valid ID or CAC Certificate of Incorporation
                </label>
                <input
                  type="file"
                  id="validID"
                  name="validID"
                  className="mt-1 block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm"
                  onChange={handleFileChange}
                />
              </div>

              {/* Agreement Checkbox */}
              <div>
                <label htmlFor="agreement" className="flex items-center">
                  <input
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    className="mr-2"
                    checked={affiliateForm.agreement}
                    onChange={handleCheckboxChange}
                  />
                  <span className="text-gray-700">
                    I agree to the{" "}
                    <button
                      type="button"
                      className="text-blue-500 underline"
                      onClick={() => setIsTermsModalOpen(true)}
                    >
                      Terms and Conditions
                    </button>
                  </span>
                </label>
              </div>


              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition duration-300"
              >
                Apply Now
              </button>
            </form>
          </div>
        )}

        {/* Success Modal */}
        {isSuccessModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-11/12 md:w-1/2 max-h-[80vh] overflow-auto">
              <h2 className="text-2xl font-bold mb-4">Application Successful!</h2>
              <p>Thank you for your submission.</p>
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => setIsSuccessModalOpen(false)} // Close the success modal
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Modal for Terms and Conditions */}
        {isTermsModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-11/12 md:w-1/2 max-h-[80vh] overflow-auto">
              <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
              {terms.map((term, index) => (
                <div key={index} className="mb-2">
                  {term.condition}
                </div>
              ))}
              <button
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                onClick={() => setIsTermsModalOpen(false)} // Close the Terms and Conditions modal
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Button to open Terms and Conditions modal */}
        {/* <button
          type="button"
          className="text-blue-500 underline"
          onClick={() => setIsTermsModalOpen(true)} // Open the Terms and Conditions modal
        >
          Terms and Conditions
        </button> */}
      </div>
    </div>
  );
};

export default AffiliateProgram;
