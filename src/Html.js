export default function Html({
    title = 'Setlife Universal React',
    children,
    reduxState
}) {
    return (
        <html>
            <head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="SetLife React" />
                <meta property="og:url" content="http://setlife.network" />
                <meta property="og:description" content="Description" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="SetLife React" />
            </head>

            <body>
                <div id='app'>${children}</div>
                <script>
                    window.REDUX_DATA = {JSON.stringify(reduxState)}
                </script>
                <script type="text/javascript" src='/app.bundle.js'></script>
                <script type="text/javascript" src='/app.vendor.js'></script>
            </body>
        </html>
    )
}