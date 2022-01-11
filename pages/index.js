import Head from 'next/head'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Skills from '../components/Skills'
import Box from '@mui/material/Box';
import Separator from '../components/Separator'

export default function App() {
  //const [tab, setTab] = useState(false)
  return (
    <Box display="inline-block">
      <Head>
        <title>Omar Minaya | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div name='Home'>
        <Separator text='FULLSTACK DEVELOPER' mt={25} mb={5} mobilemt={20} mobilemb={-1} />
      </div>
      <Home />
      <div name='Skills'>
        <Separator
          text='RELEVANT SKILLS' mt={15} mb={15} mobilemt={5} mobilemb={5}
        />
      </div>
      <Skills />
      <Separator
        text='CERTIFICATES' mt={15} mb={15} mobilemt={23.5} mobilemb={23.5}
        name='Certificates'
      />
    </Box>
  )
}