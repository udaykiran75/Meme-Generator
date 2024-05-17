import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 40px;
`

export const Heading = styled.h1`
  font-family: Roboto;
  color: #35469c;

  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`

export const Container = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 350px;
  padding: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    order: 2;
    width: 50vw;
    height: 450px;
  }
`

export const MemeText = styled.p`
  font-size: ${props => props.fontsize}px;
  color: #ffffff;
  font-family: Roboto;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-family: Roboto;
  margin-bottom: 7px;
  font-size: 19px;
  color: #7e858e;
`

export const Input = styled.input`
  padding: 12px;
  font-family: Roboto;
  font-size: 19px;
  outline: none;
  color: #7e858e;
`
export const Select = styled.select`
  padding: 12px;
  font-family: Roboto;
  font-size: 19px;
  outline: none;
  color: #7e858e;
`

export const Form = styled.form`
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
export const Button = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  font-size: 19px;
  width: 140px;
  font-family: Roboto;
  padding: 12px;
  border-radius: 7px;
  cursor: pointer;
  border: none;
  outline: none;
`
export const FormContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 40vw;
  }
`
