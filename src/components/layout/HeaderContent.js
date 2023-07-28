import { Button } from "antd";
import styled from "@emotion/styled";
import PlusSign from "../svgs/PlusSign";
import logo from "../../assets/ThunkableBeaver.png";

/**
 * @param {function} handleAddProjectClick
 */
const HeaderContent = ({ className, handleAddProjectClick }) => (
  <div className={className}>
    <img src={logo} alt='Thunkable Beaver Logo' />
    <h1>My Projects</h1>
    <Button
      onClick={handleAddProjectClick}
      size='large'
      shape='circle'
      icon={<PlusSign />}
    />
  </div>
);

const styledHeaderContent = styled(HeaderContent)`
  img {
    width: 50px;
  }
  h1 {
    color: #424242;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0.8px;
    margin-block: 0px;
  }
  .ant-btn.ant-btn-lg {
    position: absolute;
    right: 130px;
    bottom: -30px;
    width: 60px;
    height: 60px;
    background: #4a475f;
    border: none;
    transition: 0.3s ease-in-out all;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
    .ant-btn-icon {
      margin-block-start: 5px;
    }
    &:hover {
      background: #3d3a4f;
    }
  }
  @media screen and (max-width: 450px) {
    .ant-btn.ant-btn-lg {
      right: 35px;
      bottom: 0;
      top: 85dvh;
    }
  }
`;

export default styledHeaderContent;
