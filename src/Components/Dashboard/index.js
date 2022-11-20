import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

import classNames from 'classnames/bind'
import styles from './Dashboard.module.scss'


import useLocalStorage from 'use-local-storage'
import like from '../../Components/Assets/img/like.png';


const cx = classNames.bind (styles)

function Dashboard ({children}) {

    const [theme, setTheme] = useLocalStorage ('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    return (
        
        <body className={cx('nk-body',cx('bg-lighter'),cx('npc-default'),cx('has-sidebar'),cx('no-touch'),cx('nk-nio-theme'),cx('nav-show'))} data-theme={theme}>
            <div className={cx('nk-app-root')}>
                <div className={cx('nk-main')}>
                    <div className={cx('dash-head')}>
                        <Header/>
                        <div className={cx('dash-toggle-dard')}>
                          <div onClick={switchTheme} className={cx('Switch',cx('react-switch'))} href="#"></div>
                        </div>
                    </div>

                        <div className={cx('dash-side')}>
                            <Sidebar />
                        </div>
                        
                        <div className={cx('dash-content')}>
                           {children}
                           <Content/>
                        </div>


                </div>
            </div>
            
        </body>
    )
}

export default Dashboard;

