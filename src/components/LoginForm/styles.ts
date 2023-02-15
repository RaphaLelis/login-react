import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: absolute;
  width:100%;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  > .title{
    display: flex;
    justify-content: center;
	font-size: 30px;
	font-weight: bold;
  }
  > input{
	border: 1px solid var(--color-border);
	padding: 13px 18px;
	font-size: 14px;
	margin-top: 18px;
    border-radius: 8px;
  }
  > button{
	margin-top: 18px;
	padding: 13px 18px;
	font-size: 16px;
    font-weight: bold;
	background-color: var(--color-blue);
	color: var(--color-tertiary);
	border: none;
	cursor: pointer;
	&:hover{
		opacity: 0.87;
	}
    box-shadow: 3px 4px black;

  }
  > .terms{
	font-size: 16px;
	opacity: 0.6;
	margin-top: 4px;
  }
`;