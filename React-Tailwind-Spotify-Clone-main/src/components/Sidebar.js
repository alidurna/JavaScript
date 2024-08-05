import logo from '../../src/components/img/logo.svg'
import Menu from '../../src/components/Sidebar/Menu.js'
import { Icon } from 'Icons'
import PlayList from '../../src/components/Sidebar/PlayList.js'
import DownloadApp from 'components/Sidebar/DownloadApp'
import { useSelector } from 'react-redux'
import SidebarCover from './Sidebar/SidebarCover'
//------------------------------------------------------------------------------------------------------------------------

function Sidebar() {
  const sidebar = useSelector((state) => state.player.sidebar)
  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      <a href="#" className="mb-5 px-6">
        <img src={logo} className="h-10" />
      </a>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-white bg-opacity-60 group-hover:bg-opacity-100 rounded-sm text-black">
                <Icon name={'plus'} size={12} />
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>

          <li>
            <a
              href="#"
              className="py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white"
            >
              <span className="w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br from-purple-700 text-white rounded-sm to-blue-300 opacity-70 group-hover:opacity-100">
                <Icon name={'heartFilled'} size={12} />
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>

      <PlayList />
      <DownloadApp />
      {sidebar && <SidebarCover />}
    </aside>
  )
}
export default Sidebar
