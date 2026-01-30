import Header from '@/components/Layout/components/Header';
import Sitebar from './Sitebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className='container'>
                <Sitebar />
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultLayout;
