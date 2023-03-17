import { FC } from "react";
import "./header.css";
type Props = {
  children: React.ReactNode;
};

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Header.StrongSpan>Applce Inc</Header.StrongSpan>
        <br />
        <span>As at: Oct 20, 2021 UTC</span>
      </div>
      <div>
        <Header.StrongSpan>145.35</Header.StrongSpan>
        <br />
        <span>+1.5 0</span>
      </div>
    </header>
  );
};

export default Header;

const StrongSpan: FC<Props> = (props) => {
  const { children } = props;
  return (
    <span className='header-head-span'>
      <strong>{children}</strong>
    </span>
  );
};

Header.StrongSpan = StrongSpan;
