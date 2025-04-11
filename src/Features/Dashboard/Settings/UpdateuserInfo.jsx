import { motion } from "framer-motion";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Formrow from "../../../ui/Formrow";
import { levels, settingsvariants } from "../../../utils/Constants";
import { useUpdateUser } from "./useUpdateuser";
import toast from "react-hot-toast";

function UpdateUserInfo() {
  const { itemVariants, containerVariants } = settingsvariants;
  const {
    handleFileChange,
    register,
    errors,
    handleSubmit,
    image,
    avatar,
    mutate,
    isPending,
  } = useUpdateUser();

  function onSubmit(data) {
    mutate(
      { ...data, avatar },
      { onSuccess: () => toast.success("user info successfully updated") }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <motion.div variants={containerVariants}>
        <h2 className="text-2xl font-bold mb-6 dark:text-white">
          Account Settings
        </h2>
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <img
                src={image}
                alt="Profile"
                className="w-24 h-24 rounded-xl object-cover"
              />
              <label className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-xl cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>

                <input
                  type="file"
                  id="avatar"
                  disabled={isPending}
                  accept="image/*"
                  onChange={(e) => handleFileChange(e)}
                  className="hidden"
                />
              </label>
            </div>
            <div>
              <h3 className="font-semibold dark:text-white text-lg">
                Profile Picture
              </h3>
              <p className="text-gray-600 dark:text-white">
                Upload a new profile picture
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <Formrow name={"Full Name"} error={errors?.name?.message}>
              <Input
                register={register}
                title="name"
                type="text"
                placeholder="John Doe"
                validation={{ required: "Please Fill in Your Name" }}
              />
            </Formrow>
            <Formrow name="Username" error={errors?.username?.message}>
              <Input
                register={register}
                title="username"
                validation={{ required: "Please fill in a valid username" }}
                placeholder="Enter your Username"
              />
            </Formrow>
            <Formrow name="Level" error={errors?.level?.message}>
              <select
                placeholder="select level"
                className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                {...register("level", { required: "This field is required" })}
              >
                <option>Select Current level</option>
                {levels.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </Formrow>
            <Formrow name={"Email Address"} error={errors?.name?.email}>
              <Input
                register={register}
                title="email"
                type="email"
                placeholder="john@example.com"
                validation={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid Email",
                  },
                }}
              />
            </Formrow>
            <Formrow name={"Phone Number"} error={errors?.phone_no?.message}>
              <Input
                register={register}
                title="phone_no"
                type="tel"
                placeholder="+234 XXX XXX XXXX"
                validation={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^0\d{10}$/,
                    message: "Enter a valid phone number",
                  },
                }}
              />
            </Formrow>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Button isLoading={isPending} variant="primary">
            Save Changes
          </Button>
        </motion.div>
      </motion.div>
    </form>
  );
}
export default UpdateUserInfo;
