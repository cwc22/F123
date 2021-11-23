import './App.css'
import '@material/top-app-bar/dist/mdc.top-app-bar.css'
import '@material/icon-button/dist/mdc.icon-button.css'
import '@material/ripple/dist/mdc.ripple.css'
import '@rmwc/icon/icon.css';
import '@rmwc/tabs/styles';
import { LandingPage } from './Pages/LandingPage'

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  )
}

export default App
