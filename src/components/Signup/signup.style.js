import styled from 'styled-components'

const Screen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justifiy-content: center;
`

const InputContainer = styled.div`
  margin-top: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  width: 80%;
  border: none;
  border-bottom: solid #97b9b8 2px;
  margin-top: 25px;
  font-size: 18px;
  padding-left: 20px;
  font-weight: bold;
`

const ReisterButton = styled.button`
  background-color: #2d87b5;
  width: 130px;
  height: 35px;
  border-radius: 12px;
  color: #fff;
  margin-top: 10px;
  align-self: center;
`

export { Screen, InputContainer, Input, ReisterButton }
