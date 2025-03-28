import React from "react";
import {
  FaHandshake,
  FaUsers,
  FaCalendarAlt,
  FaBalanceScale,
  FaMoneyBillWave,
  FaBarcode,
  FaShieldAlt,
} from "react-icons/fa";

const businessInfo = [
  { icon: <FaHandshake />, label: "Nature of Business", value: "Trader - Wholesaler/Distributor" },
  { icon: <FaUsers />, label: "Total Number of Employees", value: "26 to 50 People" },
  { icon: <FaCalendarAlt />, label: "GST Registration Date", value: "01-07-2017" },
  { icon: <FaBalanceScale />, label: "Legal Status of Firm", value: "Partnership" },
  { icon: <FaMoneyBillWave />, label: "Annual Turnover", value: "5 - 25 Cr" },
  { icon: <FaBarcode />, label: "Import Export Code (IEC)", value: "24130******" },
  { icon: <FaBarcode />, label: "GST No.", value: "24AASFM1611K1Z8" },
  {
    icon: <FaShieldAlt />,
    label: "Trustseal Verified",
    value: <img src="/images/trust-seal.png" alt="Trust Seal" className="w-12 h-12" />,
  },
];

const BusinessSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side - Company Introduction */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">
          WELCOME TO <span className="text-green-700">Shivam Agrotech</span>
        </h1>
        <p className="text-gray-700 leading-relaxed">
          We <strong>"Shivam Agrotech"</strong> are engaged in{" "}
          <span className="font-bold text-gray-800">
            IMPORTER, WHOLESALER, AND MANUFACTURER
          </span>{" "}
          of excellent quality agricultural battery sprayers, motors, and all types of battery sprayer spare parts.
        </p>
        <p className="text-gray-700">GET IN TOUCH WITH US FOR BEST DEALS</p>
        <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
          Contact Us
        </button>
      </div>

      {/* Right Side - Business Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {businessInfo.map((info, index) => (
          <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg shadow-sm bg-gray-100">
            <div className="text-green-700 text-3xl">{info.icon}</div>
            <div>
              <h3 className="text-sm font-semibold">{info.label}</h3>
              <p className="text-sm text-gray-600">{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSection;
