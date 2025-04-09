import { motion } from "framer-motion";

function UserCard({ user }) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white p-6 rounded-xl col-span-2 shadow-sm"
    >
      <div className="flex items-center gap-6 mb-6">
        <img
          src={user.avatar || "https://www.gravatar.com/avatar/?d=mp"}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
          <p className="text-gray-600">PharmD Program - {user.level}</p>
          <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
            Advanced Standing
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600">GPA</p>
          <p className="text-2xl font-bold text-blue-600">3.8</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-gray-600">Credits</p>
          <p className="text-2xl font-bold text-green-600">86</p>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-gray-600">Lab Hours</p>
          <p className="text-2xl font-bold text-purple-600">124</p>
        </div>
        <div className="p-4 bg-orange-50 rounded-lg">
          <p className="text-sm text-gray-600">Certifications</p>
          <p className="text-2xl font-bold text-orange-600">3</p>
        </div>
      </div>
    </motion.div>
  );
}

export default UserCard;
