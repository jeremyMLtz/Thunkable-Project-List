import { useState } from "react";
import ProjectListItem from "../UI/ProjectListItem";
import InputField from "../UI/InputField";
import EditIcon from "../svgs/EditIcon";
import DeleteIcon from "../svgs/DeleteIcon";
import styled from "@emotion/styled";

/**
 * @param {string} id
 * @param {string} name
 * @param {string} createdDate
 * @param {function} handleRenameProject
 * @param {function} setSelectedProject
 * @param {function} handleDeleteProjectClick
 */
const Project = ({
  className,
  id,
  name,
  createdDate,
  handleRenameProject,
  handleDeleteProjectClick,
  setSelectedProject,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setSelectedProject(id);
    setIsEditing(!isEditing);
  };
  const submitRename = (newName) => {
    setIsEditing(false);
    handleRenameProject(newName);
  };
  const handleDeleteProject = () => {
    setSelectedProject(id);
    handleDeleteProjectClick();
  };
  return (
    <ProjectListItem className={className}>
      <div className='project-content'>
        <div className='name-container'>
          {isEditing ? (
            <InputField onSubmit={submitRename} defaultValue={name} />
          ) : (
            <>
              <p>{name}</p>
              <button className='edit-button' onClick={handleEditClick}>
                <EditIcon />
              </button>
            </>
          )}
          <span className='mobile-date'>{createdDate}</span>
        </div>

        <span className='date'>{createdDate}</span>
        <button className='mobile-edit-button' onClick={handleEditClick}>
          <EditIcon />
        </button>
        <button onClick={handleDeleteProject}>
          <DeleteIcon />
        </button>
      </div>
    </ProjectListItem>
  );
};

const styledProject = styled(Project)`
  .project-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name-container {
    display: flex;
    align-items: center;
    inline-size: 155px;
    justify-content: space-between;
    .mobile-date {
      display: none;
    }
  }
  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1.125rem;
    font-weight: 600;
    display: inline-block;
    margin-inline-end: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    svg path {
      transition: 0.3s ease-in-out all;
    }
    &:hover {
      svg path {
        fill-opacity: 0.9;
      }
    }
  }
  .mobile-edit-button {
    display: none;
  }
  @media screen and (max-width: 450px) {
    .name-container {
      flex-direction: column;
      align-items: baseline;
      .edit-button {
        display: none;
      }
      .mobile-date {
        display: block;
      }
      p {
        margin-block-end: 0;
      }
    }
    .date {
      display: none;
    }
    .mobile-edit-button {
      display: inline-block;
    }
  }
`;

export default styledProject;
