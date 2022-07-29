import Document,{Html,Head,Main,NextScript} from "next/document";
class MyDocument extends Document{
    render(){
        return (
            <Html>
                <Head>
                    <style>
                        {
                            `
                            *{
                                padding:0;
                                margin:0
                            }
                            `
                        }
                    </style>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
export default MyDocument;