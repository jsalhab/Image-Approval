import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: inherit;
  align-items: center;
  gap: 60px;
`;

export const Image = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 350px;
`;

export const AddImageButton = styled.button`
  height: 200px;
  width: 200px;
  border: 1px solid #efefef;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 16%);
  cursor: pointer;
  border-radius: 6px;
  margin-top: 12px;

  &:hover {
    background-color: #e6e6e6;
  }
  svg {
    width: 40px;
    height: 40px;
    color: #cccccc;
  }
`;

export const ButtonWarpper = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
  margin-top: 12px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 6px;
  border-radius: 6px;
  border: aqua;
  cursor: pointer;
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 16%);

  svg {
    height: 30px;
    width: 30px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight: 600;
  font-size: 18px;
`;
