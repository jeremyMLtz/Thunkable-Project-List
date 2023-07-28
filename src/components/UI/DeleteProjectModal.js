import { Modal } from "antd";
import styled from "@emotion/styled";
import Question from "../svgs/Question.svg";

/**
 * @param {boolean} open
 * @param {function} onOk
 * @param {function} onCancel
 */
const DeleteProjectModal = ({ className, open, onOk, onCancel }) => (
  <Modal
    className={className}
    open={open}
    onOk={onOk}
    onCancel={onCancel}
    centered>
    <div className='modal-content'>
      <img src={Question} className='question-mark' alt='Question Mark' />
      <div className='delete-blurb'>
        <p className='bold'>Are you sure you want to delete this project?</p>
        <p>This action can't be undone.</p>
      </div>
    </div>
  </Modal>
);

const styledDeleteProjectModal = styled(DeleteProjectModal)`
  .modal-content {
    display: flex;
    img {
      height: 25px;
      margin-block-start: 18px;
    }
    .delete-blurb {
      margin-inline-start: 15px;
    }
    p {
      color: rgba(0, 0, 0, 0.5);
      font-size: 1rem;
      font-weight: 400;
    }
    .bold {
      color: rgba(0, 0, 0, 0.85);
    }
  }
`;

export default styledDeleteProjectModal;
