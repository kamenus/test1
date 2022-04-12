import styled from 'styled-components'



export const RatingContainer = styled.div`
  height: 100%;
`

export const RatingLayout = styled.span`
  display: inline-block;
  position: relative;
  width: 79px;
  height: 16px;
  overflow: hidden;
  background: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBvbHlnb24gZmlsbD0iI2NjY2NjYyIgcG9pbnRzPSIxMCwwIDEzLDYuNiAyMCw3LjYgMTUsMTIuOCAxNi4yLDIwIDEwLDE2LjYgMy44LDIwIDUsMTIuOCAwLDcuNiA3LDYuNiAiLz48L3N2Zz4K');
  background-size: contain;
  top: 50%;
  transform: translateY(-50%);
`

export const RatingResult = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props: { rating: number }) => props.rating}%;
  height: inherit;
  background: url('data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMXB4IiBoZWlnaHQ9IjIxcHgiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBvbHlnb24gZmlsbD0iI2YxOGUwMCIgcG9pbnRzPSIxMCwwIDEzLDYuNiAyMCw3LjYgMTUsMTIuOCAxNi4yLDIwIDEwLDE2LjYgMy44LDIwIDUsMTIuOCAwLDcuNiA3LDYuNiAiLz48L3N2Zz4K');
  background-size: 16px auto;
  // z-index: 1;
`

export const FeedbackCountContainer = styled.span`
  font-weight: bold;
  vertical-align: middle;
  margin-left: 10px;
`
