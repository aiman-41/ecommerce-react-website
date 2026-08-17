
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    alert(`Submitted with email: " ${data.email}" and password: ${data.password}`)
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "1rem" }}>
          <label >
            Email
            <input type="text"
              placeholder="you@example.com"
              {...register("email", { required: "Email is required" })} />
          </label>
          {errors.email && (
            <p style={{ color: "crimson" }}>{errors.email.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label >
            Password
            <input type="password"
              placeholder="......."
              {...register("password", {
                required: "Password is required", minLength: {
                  value: 8,
                  message: "Password must be atleast 8 characters"
                },
                maxLength: {
                  value: 12,
                  message: "Password must be at most 12 characters"
                }
              })} />
          </label>
          {errors.password && (
            <p style={{ color: "crimson" }}>{errors.password.message}</p>
          )}
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}