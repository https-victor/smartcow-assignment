import React from "react";
import "./Billing.scss";
import { ReactComponent as Down } from "../../../../assets/svg/down-arrow.svg";
import { ReactComponent as PDF } from "../../../../assets/svg/pdf.svg";
import { useSelector } from "../../../../app/hooks";

type Props = {};

const Billing = (props: Props) => {
  const billings = useSelector((state) => state.auth.user?.billings);
  return (
    <div className="table-wrapper">
      <div className="table-header">
        <div id="id">Reference ID</div>
        <div>
          Date <Down />
        </div>
        <div>Amount</div>
        <div>Invoice</div>
      </div>
      <div className="billings-container">
        {billings?.map((billing) => {
          return (
            <div className="billing-wrapper">
              <div>{billing.id}</div>
              <div>{billing.date}</div>
              <div>${billing.amount}</div>
              <div>
                <PDF
                  onClick={() => {
                    window.open(billing.invoice, "_blank");
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Billing;
