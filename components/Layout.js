import Header from "@components/Header"
import Footer from "@components/Footer"

const Layout = ({ children }) => {
    return(
        <div className="overflow-x-hidden min-h-screen">
            <Header />
                <main id="main" className="main-container">
                    { children }
                </main>
            <Footer />
        </div>
    )
}

export default Layout