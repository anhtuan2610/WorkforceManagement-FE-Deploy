import { useNavigate } from "react-router-dom";
import { useUserStore } from "../stores/user";
import { useEffect, useState } from "react";
import { TResponseInfoUser } from "../services/auth-api";

export default function Profile() {
  const [, setRole] = useState<string | undefined>();
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [userInfo, setUserInfo] = useState<TResponseInfoUser>(
    user || {
      email: "",
      fullName: "",
      id: 0,
      isActive: false,
      role: "",
      typeAuthentication: "",
    }
  );

  useEffect(() => {
    if (user) {
      if (user?.role) {
        setRole(user.role.toLowerCase());
      }
    }
  }, [user]);

  function handleOnchangeProfile(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleUpdateProfile() {
    console.log(userInfo);
  }

  return (
    <div className="main-container p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="page-header mb-8">
          <div className="flex justify-between items-center">
            <h4 className="text-3xl font-bold text-gray-800">Profile</h4>
            <nav>
              <ol className="breadcrumb inline-flex space-x-2 text-sm">
                <li>
                  <div
                    className="text-blue-600 hover:underline cursor-pointer"
                    onClick={() => navigate(`/get-started`)}
                  >
                    Home
                  </div>
                </li>
                <li className="text-gray-500">/ Profile</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar (Profile Information) */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="profile-photo text-center mb-6">
              <div className="relative inline-block">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/036/744/532/non_2x/user-profile-icon-symbol-template-free-vector.jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto"
                />
                <a
                  href="#"
                  className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  <i className="fa fa-pencil"></i>
                </a>
              </div>
              <h5 className="text-xl font-semibold text-gray-800">
                {userInfo?.fullName}
              </h5>
              <p className="text-gray-500">ID Code: 12345678</p>
            </div>

            <div className="profile-info">
              <h5 className="text-lg font-semibold text-blue-500 mb-4">
                Contact Information
              </h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <strong>Gender:</strong> Male
                </li>
                <li>
                  <strong>Date of Birth:</strong> 01/01/1990
                </li>
                <li>
                  <strong className="read-only:">Email:</strong>{" "}
                  {userInfo?.email}
                </li>
                <li>
                  <strong>Phone:</strong> 123-456-7890
                </li>
                <li>
                  <strong>Address:</strong> 123 Main St, City, Country
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section (Settings & Change Password) */}
          <div className="col-span-2 bg-white shadow-lg rounded-lg p-6">
            <div className="tabs">
              <div className="tab-content">
                {/* Settings Section */}
                <div id="settings" className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Edit Personal Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        name="fullName"
                        type="text"
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="John Doe"
                        value={userInfo?.fullName}
                        onChange={handleOnchangeProfile}
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-200"
                        defaultValue="johndoe@example.com"
                        value={user?.email}
                        disabled
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="1990-01-01"
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700">
                        Gender
                      </label>
                      <select className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="123-456-7890"
                      />
                    </div>
                    <div className="form-group md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <textarea
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="123 Main St, City, Country"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    onClick={handleUpdateProfile}>
                      Update Information
                    </button>
                  </div>
                </div>

                <div className="my-8 border-t border-gray-300"></div>

                {/* Change Password Section */}
                <div id="change-password" className="space-y-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Change Password
                  </h4>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700">
                        Old Password
                      </label>
                      <input
                        type="password"
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Old password"
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="New password"
                      />
                    </div>
                    <div className="form-group">
                      <label className="block text-sm font-medium text-gray-700">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
