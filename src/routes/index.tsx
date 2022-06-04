import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "../app/hooks";
import { Layout } from "../components/layout/Layout";
import { SignIn, SignUp } from "../pages/auth";
import { VideoForm, Library, Profile } from "../pages/main";

export const appRoutes = {
  createVideo: "/create-video",
  signUp: "/signup",
  signIn: "/",
  home: "/",
  profile: "/profile",
  editVideo: "/edit-video",
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
    { path: appRoutes.createVideo, element: <VideoForm mode="create" /> },
    { path: appRoutes.editVideo, element: <VideoForm mode="edit" /> },
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
