import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`

const Markets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Title = styled.p`
  color: #bcbbbb;
  text-align: left;
  width: 90%;
  margin-top: 18px;
`
const Info = styled.div`
  brder: solid purple;
  width: 73%;
`

const Market = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #817e7e;
  margin: 15px 5px 10px 40px;
`
const Name = styled.p`
  margin: 2px;
`
const Address = styled.p`
  margin: 2px;
  font-size: 14px;
`
const MarketLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 14px;
`
const RatingIcon = styled.div`
  width: 7px;
  height: 7px;
  background-color: #ffcd05;
  border: solid 1px #ffcd05;
  border-radius: 50%;
  margin-right: 5px;
`
const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Rate = styled.p`
  margin-top: 0;
  margin-left: 4px;
`

const GoogleMap = styled.img`
  width: 90px;
  height: 90px;
  margin-top: auto;
  margin-bottom: 30px;
`
export {
  Container,
  Markets,
  Title,
  Market,
  Name,
  Address,
  MarketLogo,
  Info,
  RatingIcon,
  RatingContainer,
  Rate,
  GoogleMap
}
