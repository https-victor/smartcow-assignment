import { useState } from "react";
import { onLogout } from "../../../app/features/auth/auth-slice";
import { useDispatch } from "../../../app/hooks";
import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import Billing from "./Billing/Billing";
import Details from "./Details/Details";
import MyPlan from "./MyPlan/MyPlan";
import "./Profile.scss";
export const Profile = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Profile", "My Plan", "Billing"];
  const Page = () => {
    switch (activeTab) {
      case 1:
        return <MyPlan />;
      case 2:
        return <Billing />;
      default:
        return <Details />;
    }
  };
  return (
    <>
      <Header
        title="Profile"
        actions={[
          {
            title: "Logout",
            variant: "text",
            color: "error",
            onClick: () => {
              dispatch(onLogout());
            },
          },
        ]}
      />
      <Container overflow>
        <div className="tabs">
          {tabs.map((tab, idx) => {
            return (
              <Button
                key={tab + idx}
                padding={false}
                variant="text"
                color={activeTab === idx ? "primary" : "neutral"}
                onClick={() => {
                  setActiveTab(idx);
                }}
              >
                {tab}
              </Button>
            );
          })}
        </div>
        <Page />
      </Container>
    </>
  );
};
