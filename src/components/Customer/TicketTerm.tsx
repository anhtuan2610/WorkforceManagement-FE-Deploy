import { useState } from "react";

export default function TicketTerm({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  }) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div className="p-4 max-w-lg mx-auto bg-gray-50 shadow-md rounded-md my-10">
      <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
      <p className="text-lg mb-4">
        By using our services, you agree to the following terms and conditions.
        You acknowledge that all information provided during registration is
        accurate and up-to-date. You understand that your account may be
        suspended or terminated if false or misleading information is detected.
        The services provided are subject to availability and may be modified or
        discontinued at any time without notice. You are responsible for the
        security of your login credentials and agree not to share your account
        with unauthorized individuals. By submitting a request or ticket, you
        consent to the collection and processing of your data in accordance with
        our privacy policy. We reserve the right to decline or modify any
        request based on internal review.
      </p>

      <div className="flex items-center mb-6">
        <input
          id="agree"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          onChange={() => setIsChecked(!isChecked)}
        />
        <label
          htmlFor="agree"
          className="ml-2 text-lg font-medium text-red-700"
        >
          I agree to the terms and conditions
        </label>
      </div>

      {/* Nút điều hướng */}
      <div className="flex justify-between">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold text-base"
          onClick={() => setStep((prev) => prev - 1)}
        >
          Back
        </button>
        <button
          className={`bg-blue-500 text-white px-4 py-2 rounded font-semibold text-base ${!isChecked ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}
          onClick={() => setStep((prev) => prev + 1)}
          disabled={!isChecked}
        >
          Next
        </button>
      </div>
    </div>
  );
}
