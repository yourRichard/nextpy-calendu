

/** @jsxImportSource @emotion/react */

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Box, Text } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export function Box_c963c7ac93c4321d3827ef127af39c40 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__slot_state = useContext(StateContexts.state__slot_state)

  const on_click_8d27e2a5f1f4ecdaf00f126ace3a00f9 = useCallback((_e) => addEvents([Event("state.slot_state.design_o", {})], (_e), {}), [addEvents, Event])

  return (
    <Box className={`w-44 h-12 p-3 border ${state__slot_state.design} border-sky-500 rounded-md hover:border-solid hover:border-sky-600  transition-all duration-400`} onClick={on_click_8d27e2a5f1f4ecdaf00f126ace3a00f9}>
  <Text className={`font-bold text-sky-500`}>
  {`11:10`}
</Text>
</Box>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Box>
  <Box className={`m-20`}>
  <Box_c963c7ac93c4321d3827ef127af39c40/>
</Box>
</Box>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
