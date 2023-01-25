import { useState } from "react";
import Head from "next/head";
import AlertMessage from "@/components/AlertMessage";
import Button from "@/components/Button";
import ChangePasswordButton from "@/components/ChangePasswordButton";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Text from "@/components/Text";
import { authentication } from "@/services/user.service";
import Loading from "react-loading";

function SignInPage() {
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typeInputPassword, setTypeInputPassword] = useState("password");

  const onChangeTypeInput = () =>
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
          <Text isPrimary>Monoma</Text>
          <Text>Sign In</Text>
          <div className="lg:w-4/5 mt-4">
            <form onSubmit={onSubmit}>
              <div>
                <Label htmlFor="email">Correo</Label>
                <Input
                  isSmall
                  placeholder="Correo electrónico"
                  autoComplete="none"
                  type="email"
                  name="email"
                  value="jair@mail.com"
                  required
                />
              </div>
              <div className="mt-4">
                <Label htmlFor="email">Contraseña</Label>
                <div className="flex space-x-3">
                  <Input
                    placeholder="Contraseña"
                    autoComplete="none"
                    type={typeInputPassword}
                    name="password"
                    value="monoma123"
                    required
                  />
                  <ChangePasswordButton
                    typeInputPassword={typeInputPassword}
                    onChangeTypeInput={onChangeTypeInput}
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button isFull isPrimary>
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
                </Button>
              </div>
              <div className="mt-3">
                {form && form.state ? (
                  <AlertMessage>{form.message}</AlertMessage>
                ) : (
                  <AlertMessage type="danger">{form?.message}</AlertMessage>
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
