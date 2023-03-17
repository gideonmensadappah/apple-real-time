import { FC } from "react";
import "./wrapper.css";

type Props = {
  children: React.ReactNode;
};
const Wrapper = (props: Props) => {
  const { children } = props;
  return <div className='wrapper'>{children}</div>;
};

export default Wrapper;

const Container: FC<Props> = (props) => {
  const { children } = props;
  return <div className='wrapper-container'>{children}</div>;
};
Wrapper.Container = Container;
