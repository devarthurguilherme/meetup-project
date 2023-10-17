import { Button, ButtonGroup } from '@chakra-ui/react'
import { FaCoffee, FaBeer } from 'react-icons/fa';
import { motion } from "framer-motion"

import Home from "./pages/home"
import SideBar from "./components/SideBar"



function App() {
  return (
    <>
    <SideBar />
    <Home />
    </>
  )
}

export default App
