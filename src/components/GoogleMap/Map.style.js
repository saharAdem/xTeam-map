import styled from 'styled-components'

const MapContainer = styled.div`
  width: 100%;
  height: ${({ height }) => height};
`

const LodingElement = styled.div`
  height: 100%;
`

const ContainerElement = styled.div`
  height: 100%;
`

const MapElement = styled.div`
  margin-top: ${({ margin_top }) => margin_top};
  height: ${({ height }) => height};
  border-radius: 27px;
`
export { MapContainer, LodingElement, ContainerElement, MapElement }
