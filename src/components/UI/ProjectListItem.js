import beaver from "../../assets/defaultProjectIcon_2x.png";
import styled from "@emotion/styled";

const ProjectListItem = ({ className, children }) => (
  <li className={className}>
    <img src={beaver} alt='Thunkable Beaver' />
    <div className='content'>{children}</div>
  </li>
);

const styledProjectListItem = styled(ProjectListItem)`
  list-style-type: none;
  background: #fdfdfd;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-inline: 24px;
  padding-block: 20px;
  display: flex;
  flex-direction: row;
  inline-size: calc(100vw - 120px);
  max-inline-size: 800px;
  align-items: center;
  img {
    height: 42px;
    width: 42px;
  }
  .content {
    margin-inline-start: 25px;
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    inline-size: 100vw;
  }
`;

export default styledProjectListItem;
