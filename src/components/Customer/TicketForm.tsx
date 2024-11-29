export type TTicketForm = {
  projectName: string;
  description: string;
  urls: string;
  taxCode: string;
};

export default function TicketForm({
  setStep,
  ticketForm,
  setTicketForm,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  ticketForm: TTicketForm;
  setTicketForm: React.Dispatch<React.SetStateAction<TTicketForm>>;
}) {
  function handleOnchange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setTicketForm((prevData) => {
      if (!prevData) return prevData;
      return { ...prevData, [name]: value };
    });
  }

  const isFormValid =
    ticketForm.projectName && ticketForm.description && ticketForm.urls &&
  ticketForm.taxCode;

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-50 shadow-md rounded-md my-10">
      <h2 className="text-2xl font-bold text-gray-500 mb-4">Submit a Ticket</h2>
      <div>
        {/* Project Name */}
        <div className="mb-4">
          <label
            htmlFor="projectName"
            className="block text-sm font-medium text-gray-700"
          >
            Project Name
          </label>
          <input
            type="text"
            name="projectName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your project name"
            onChange={handleOnchange}
            value={ticketForm.projectName}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            name="description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter project description"
            required
            onChange={handleOnchange}
            value={ticketForm.description}
          />
        </div>

        {/* URL */}
        <div className="mb-4">
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700"
          >
            Project URL
          </label>
          <input
            type="url"
            name="urls"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter project URL"
            required
            onChange={handleOnchange}
            value={ticketForm.urls}
          />
        </div>

        {/* Tax Code */}
        <div className="mb-4">
          <label
            htmlFor="taxCode"
            className="block text-sm font-medium text-gray-700"
          >
            Tax Identification Number (TIN):
          </label>
          <input
            name="taxCode"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter your company Tax Identification Number"
            required
            onChange={handleOnchange}
            value={ticketForm.taxCode}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded font-semibold text-base ${
              !isFormValid
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-600"
            }`}
            onClick={() => setStep((prev) => prev + 1)}
            disabled={!isFormValid}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
