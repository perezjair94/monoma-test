import { authentication } from "@/services/user.service";
import Head from "next/head";
import { useState } from "react";
import Loading from "react-loading";

function SignInPage() {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typeInputPassword, setTypeInputPassword] = useState("password");
  const changeTypeInput = () =>
    setTypeInputPassword(
      typeInputPassword === "password" ? "text" : "password"
    );
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const target = e.currentTarget;
    const auth = await authentication({
      email: target.email.value,
      password: target.password.value,
    });
    setForm(auth);
    if (!auth.state) setLoading(false);
    setTimeout(() => {
      setForm(null);
    }, 2000);
  };
  return (
    <div className="max-w-screen-lg mx-auto p-10 h-screen">
      <Head>
        <title>Sign In Monoma</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-rows-6 lg:grid-cols-2 lg:gap-10 h-full">
        <div>
          <h2 className="text-teal-500 font-semibold text-xl">Monoma</h2>
          <h3 className="font-semibold text-2xl mt-3">Sign In</h3>
          <div className="lg:w-4/5 mt-4">
            <form onSubmit={onSubmit}>
              <div>
                <label
                  className="mb-2 inline-block font-semibold"
                  htmlFor="email"
                >
                  Correo
                </label>
                <input
                  className="border border-gray-400 w-full rounded-md p-2 px-3"
                  placeholder="Correo electrónico"
                  autoComplete="none"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  className="mb-2 inline-block font-semibold"
                  htmlFor="email"
                >
                  Contraseña
                </label>
                <div className="flex space-x-3">
                  <input
                    className="border border-gray-400 w-full rounded-md p-2 px-3"
                    placeholder="Contraseña"
                    autoComplete="none"
                    type={typeInputPassword}
                    name="password"
                    required
                  />
                  <button
                    type="button"
                    onClick={changeTypeInput}
                    className="bg-gray-200 p-1 px-2 rounded-md"
                  >
                    {typeInputPassword === "password" ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-red-500 text-white p-2 w-full block rounded-md hover:bg-red-600">
                  {loading ? (
                    <span className="flex justify-center">
                      <Loading
                        type="bubbles"
                        color="white"
                        height={25}
                        width={25}
                      />
                    </span>
                  ) : (
                    <span>Sign In</span>
                  )}
                </button>
              </div>
              <div className="mt-3">
                {form && form.state ? (
                  <span>{form.message}</span>
                ) : (
                  <span className="text-red-500">{form?.message}</span>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="row-span-6 hidden lg:inline-block">
          <img
            className="w-full object-cover object-center rounded-2xl"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${Math.floor(
              Math.random() * 100
            )}.png`}
          />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
