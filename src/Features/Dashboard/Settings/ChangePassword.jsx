// import { useForm } from "react-hook-form";
// import styles from "../../../modules/Edit.module.css";
// import { fetchConstantValue } from "../../../utils/constants";
// import InputArea from "../../../ui/InputArea";
// import Button from "../../../ui/Button";

// function EditPassword({ email, submitForm }) {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm({
//     defaultValues: {
//       email,
//     },
//   });

//   const emailRegex = fetchConstantValue("email");
//   const passwordRegex = fetchConstantValue("password");
//   return (
//     <form onSubmit={handleSubmit(submitForm)} className={styles.form1}>
//       <InputArea error={errors?.email?.message} label={"Email Address"}>
//         <input
//           name={"email"}
//           type={"email"}
//           id="email"
//           disabled
//           placeholder={"fill in your email address"}
//           {...register("email", {
//             required: "This field is required",
//             pattern: {
//               value: emailRegex,
//               message: "please input a valid email",
//             },
//           })}
//         />
//       </InputArea>

//       <InputArea error={errors?.email?.message} label={"Password"}>
//         <input
//           name={"Password"}
//           type={"password"}
//           id="password"
//           disabled
//           placeholder={"fill in your New Password"}
//           {...register("password", {
//             required: "This field is required",
//             pattern: {
//               value: passwordRegex,
//               message:
//                 "Password must include one uppercase letter a number and a special character",
//             },
//           })}
//         />
//       </InputArea>

//       <div className={styles.ctaContainer}>
//         <Button type="reset" gradient={"revert"} variation={"medium"}>
//           Cancel{" "}
//         </Button>
//         <Button
//           disabled={true}
//           type="reset"
//           gradient={"primary"}
//           variation={"medium"}
//         >
//           Submit{" "}
//         </Button>
//       </div>
//     </form>
//   );
// }

// export default EditPassword;
