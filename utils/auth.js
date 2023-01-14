import React from "react";
import Router from "next/router";
import { getCookie, setCookie, deleteCookie } from "cookies-next";

export const auth = (ctx) => {
  const token = getCookie("token", ctx);
  const user = getCookie("user", ctx);

  if (ctx && ctx.req && !token) {
    ctx.res?.writeHead(302, { Location: "/auth/signin" });
    ctx.res.end();
    return;
  }

  if (!ctx.req) return Router.push("/");

  return { token, user };
};

export const login = (token, user) => {
  setCookie("token", token);
  setCookie("user", JSON.stringify(user));
  Router.push("/");
};

function redirect(res) {
  if (res) {
    // SSR
    res.writeHead(302, { Location: "/auth/signin" });
    res.end();
  } else {
    // Client side
    Router.push("/auth/signin");
  }
}

export const withAuthSync = (Component, { loggedOnly = false } = {}) => {
  const withAuthSession = (props) => {
    return <Component {...props} />;
  };

  withAuthSession.getInitialProps = async (ctx) => {
    let token = getCookie("token", ctx);

    if (loggedOnly && !token) redirect(ctx.res);

    let componentProps = {};
    if (Component.getInitialProps) {
      componentProps = await Component.getInitialProps(ctx);
    }

    return { token, ...componentProps };
  };

  return withAuthSession;
};

export const logout = () => {
  deleteCookie("token");
  // To trigger the event listener we save some random data into the `logout` key
  Router.push("/auth/signin");
};
