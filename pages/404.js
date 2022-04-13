import Image from 'next/image'
import { Header } from 'flotiq-components-react'
import Layout from "../layouts/layout";

const title = 'Page not found'
const NotFoundPage = () => (
    <Layout title={title}>
        <main className="flex flex-col h-screen justify-center items-center">
            <div className="text-center mt-5 mb-5">
                <Image src="/Logo.svg" alt="Flotiq" width={300} height={85} />
            </div>
            <Header
                level={1}
                className="text-center m-24 text-5xl text-light-blue font-bold"
                text="Page not found, sorry"
            />
        </main>
    </Layout>
)

export default NotFoundPage
