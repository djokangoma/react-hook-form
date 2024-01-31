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
    <div className="flex flex-col p-5  bg-purple-600 w-80 h-90 rounded-b-lg m-10">
      <div>
        <h1 className="text-2xl font-semibold text-center text-white ">
          contact form
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="text-white">Name</label>
            <input
              className="bg-pink-50 rounded-full mb-4 ml-4 mt-4"
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
            <label className="text-white">Telephone</label>
            <input
              className="bg-pink-50 rounded-full mb-4 ml-4"
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
            <label className="text-white">Email</label>
            <input
              className="bg-pink-50 rounded-full mb-4 ml-4"
              type="email"
              name="email"
              {...register("email", { required: "ce champ est obligatoire" })}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>

          <div>
            <label className="text-white">Age</label>
            <input
              className="bg-pink-50 rounded-full mb-4 ml-4"
              type="number"
              name="age"
              {...register("age", { required: "ce champ est obligatoire" })}
            />
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>

          <div>
            <label className="text-white">Genre</label>
            <select
              {...register("name")}
              className="bg-pink-50 rounded-full mb-4 ml-4"
            >
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <button
            className="bg-gradient-to-r from-gray-400 to-white-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg p-2 text-white"
            type="submit"
          >
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
}
