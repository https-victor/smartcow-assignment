import React from "react";
import { onUpdatePlan } from "../../../../app/features/auth/auth-slice";
import { useDispatch, useSelector } from "../../../../app/hooks";
import Button from "../../../../components/Button/Button";
import "./MyPlan.scss";
import { ReactComponent as Check } from "../../../../assets/svg/check.svg";
import { ReactComponent as Uncheck } from "../../../../assets/svg/uncheck.svg";
import classNames from "classnames";

type Props = {};

const MyPlan = (props: Props) => {
  const userPlan = useSelector((state) => state.auth.user?.plan);
  const dispatch = useDispatch();
  console.log(userPlan);
  const plans = [
    {
      title: "Free",
      vantages: [
        { icon: 0, title: "Pellentesque interdum libero et" },
        { icon: 0, title: "Pellentesque posuere jdfkdfkdfhd" },
        { icon: 0, title: "Cras sed felis eget" },
        { icon: 0, title: "Maecenas eget luctus" },
        { icon: 0, title: "Nullam vitae augue" },
      ],
      value: 0,
    },
    {
      title: "Pro",
      vantages: [
        { icon: 0, title: "Maecenas eget luctus purus" },
        { icon: 0, title: "Graesent in sollicitudin velit" },
        { icon: 0, title: "Donec in orci vitae nisi " },
        { icon: 0, title: "Class aptent taciti" },
        { icon: 1, title: "Ut blandit vestibulum" },
      ],
      value: 12,
    },
    {
      title: "Team",
      vantages: [
        { icon: 0, title: "Etiam ac finibus nisi, a porttitor" },
        { icon: 0, title: "Quisque tincidunt velit a sapien vulputate" },
        { icon: 0, title: "Vivamus pulvinar" },
        { icon: 0, title: "In hac habitasse platea" },
        { icon: 1, title: "Nullam vitae augue" },
      ],
      value: 23,
    },
    {
      title: "Agency",
      vantages: [
        { icon: 0, title: "Praesent in sollicitudin velit" },
        { icon: 0, title: "Nulla tincidunt finibus interdum" },
        { icon: 0, title: "Nullam vitae augue" },
        { icon: 0, title: "Curabitur eleifend" },
        { icon: 1, title: "Quisque vel ex enim" },
      ],
      value: 43,
    },
  ];
  return (
    <div className="plans-wrapper">
      {plans.map((plan, idx) => {
        const ButtonTitle = () => {
          return typeof userPlan === "number" ? (
            userPlan === idx ? (
              <p className="button-plan">Current Plan</p>
            ) : userPlan > idx ? (
              <Button onClick={() => dispatch(onUpdatePlan(idx as any))}>
                Downgrade
              </Button>
            ) : (
              <Button onClick={() => dispatch(onUpdatePlan(idx as any))}>
                Upgrade
              </Button>
            )
          ) : null;
        };
        return (
          <div
            className={classNames("plan", userPlan === idx && "active")}
            key={"plan" + idx}
          >
            <p className="title">{plan.title}</p>
            <ul className="vantages-list">
              {plan.vantages.map((vantage, idx) => {
                return (
                  <li key={vantage.title + idx} className="vantage">
                    {vantage.icon === 0 ? <Check /> : <Uncheck />}
                    <p>{vantage.title}</p>
                  </li>
                );
              })}
            </ul>
            <p className="cost">${plan.value}</p>
            <ButtonTitle />
          </div>
        );
      })}
    </div>
  );
};

export default MyPlan;
