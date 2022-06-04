import React from "react";
type SVGProps = React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
};
interface Props extends SVGProps {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  active?: boolean;
}

const IconButton = ({ active = false, icon: Icon, ...props }: Props) => {
  return <Icon fill={active ? "#3860AD" : "#999999"} {...props} />;
};

export default IconButton;
