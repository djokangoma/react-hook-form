import { useState } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    age: 18,
    gender: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });

  const onSubmit = (data) => {
    console.log(data);
    alert("${data.name} a été enregistré");
  };
  // {
  //   ('$formData.gender==="femme"? "enregistrée":"enregistré"');
  // }
  return (
    <div>
      <div>
        <h1>contact form</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: "ce champ est obligatoire",
            })}
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}
        </div>

        <div>
          <label>Telephone</label>
          <input
            type="text"
            name="phone"
            {...register("phone", {
              required: "ce champ est obligatoire",
              pattern: {
                value: /^[0-9]{10}$/i,
                message: "ce champ n'est pas au bon format",
              },
            })}
          />
          {errors.phone && (
            <span style={{ color: "red" }}>{errors.phone.message}</span>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: "ce champ est obligatoire" })}
          />
          {errors.phone && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </div>

        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            {...register("age", { required: "ce champ est obligatoire" })}
          />
          {errors.phone && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}
        </div>

        <div>
          <label>Genre</label>
          <select {...register("name")}>
            <option value="Homme">Homme</option>
            <option value="Femme">Femme</option>
            <option value="Autre">Autre</option>
          </select>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
