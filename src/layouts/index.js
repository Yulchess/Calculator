import styled from 'styled-components'

import theme from '@/theme'

const LOADER_WIDTH = 1200

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${LOADER_WIDTH}px;

  padding: ${theme.spaces[4]}px;
  margin: 0 auto;
`
