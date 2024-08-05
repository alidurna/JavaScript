import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'
//----------------------------------------------------------------------------------------------------------

function Auth() {
  const user = {
    name: 'Alis Durna',
    avatar: 'https://i.scdn.co/image/ab6775700000ee8548940b6b3a6ab7f307f5ca34 ',
  }
  return (
    <Menu as="nav" className={'relative'}>
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center h-8 rounded-3xl pr-2 ${
              open ? 'bg-active' : 'bg-black'
            } hover:bg-active`}
          >
            <img
              src={user.avatar}
              className={'w-8 h-8 rounded-full p-0.5 mr-2'}
            />

            <span className="text-sm font-semibold mr-2">{user.name}</span>

            <span className={open && 'rotate-180'}>
              <Icon size={16} name="downDir" />
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              'absolute top-full p-1 right-0 w-48 bg-active rounded translate-y-2'
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && 'bg-white bg-opacity-10'
                  }`}
                  href="#"
                >
                  Hesap
                  <Icon size="16" name="external" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && 'bg-white bg-opacity-10'
                  }`}
                  href="#"
                >
                  Profil
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && 'bg-white bg-opacity-10'
                  }`}
                  href="#"
                >
                  Destek
                  <Icon size="16" name="external" />
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex justify-between items-center px-2 text-sm rounded ${
                    active && 'bg-white bg-opacity-10'
                  }`}
                  href="#"
                >
                  İndir
                  <Icon size="16" name="external" />
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && 'bg-white bg-opacity-10'
                  }`}
                  href="#"
                >
                  Ayarlar
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`h-10 flex items-center px-2 text-sm rounded ${
                    active && 'bg-white bg-opacity-10'
                  }`}
                  href="#"
                >
                  Oturumu kapat
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}

export default Auth
