// import components
import {YookSscContext, YookSscProductCarbonFootprint} from "@yookgmbh/storefront-components-react";
import {useState} from "react";

function App() {
    /*
        the staging toggle is only for demonstration purposes. changing it (in the context) will not cause
        a reload, which should not be an issue since this should be a static true/false in any real environment
     */
    const staging = /\?staging/.test(location.href)

    const [target, setTarget] = useState({
        shopId: "test",
        shopProductId: "7151792226454",
    })
    const [shopId, setShopId] = useState(target.shopId)
    const [shopProductId, setShopProductId] = useState(target.shopProductId)
    function load() {
        setTarget({ shopId, shopProductId })
    }
    return (
        <div>
            <div>
                {
                    /* dummy staging toggle for demo purposes */
                    staging ?
                        <a href="/">Currently on 'staging' - go to 'production'</a> :
                        <a href="/?staging">Currently on 'production' - go to 'staging'</a>
                }
            </div>
            <br /><br />
            <div>
                {/* dummy input handling to navigate between products */}
                <label>
                    shopId:
                    <input type="text" value={shopId} onInput={ev => setShopId((ev.target as HTMLInputElement).value)} />
                </label>
                &nbsp;|&nbsp;
                <label>
                    shopProductId:
                    <input type="text" value={shopProductId} onInput={ev => setShopProductId((ev.target as HTMLInputElement).value)} />
                </label>
                &nbsp;&nbsp;&nbsp;
                <button onClick={load}>Aktualisieren</button>
            </div>
            <br /><br />
            <div>
                {/* use components */}
                <YookSscContext staging={staging}>
                    <YookSscProductCarbonFootprint
                        shopId={target.shopId}
                        shopProductId={target.shopProductId}
                    />
                </YookSscContext>
            </div>
        </div>
    )
}

export default App
