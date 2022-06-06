import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "../app/hooks";
import { Layout } from "../components/layout/Layout";
import { SignIn, SignUp } from "../pages/auth";
import { VideoForm, Library, Profile } from "../pages/main";

export const appRoutes = {
  video: "/video/:id",
  newVideo: "/video",
  signUp: "/signup",
  signIn: "/",
  home: "/",
  profile: "/profile",
};

export const Router = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const authRoutes = [
    { path: appRoutes.signIn, element: <SignIn /> },
    { path: appRoutes.signUp, element: <SignUp /> },
    { path: "*", element: <Navigate to="/" /> },
  ];
  const mainRoutes = [
    { path: appRoutes.home, element: <Library /> },
    { path: "/video", element: <VideoForm /> },
    { path: "/video/:id", element: <VideoForm /> },
    { path: appRoutes.profile, element: <Profile /> },
    { path: "*", element: <Navigate to="/" /> },
  ];

  const router = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: isLoggedIn ? mainRoutes : authRoutes,
    },
  ]);
  return router;
};
