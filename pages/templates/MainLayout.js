import { modeState ,changeTheme } from "../../public/utils/states"
import { id , createID  , getMode , applyMode} from "../../public/utils/utillities.js"
import { useRouter } from "next/router";
import themes from "../../public/json/themes.json"
import globalStyle from "../../styles/Index.module.css"

const PrimaryLayout = ({tools}) => {
     let router = useRouter()

     let currentMode = modeState.getState().mode
     let currentCSS = getMode(currentMode , themes , true)
     const refresh = () => {
          router.replace(router.asPath)
     }

	const getTools = () => {
        let navs = []
        for (let i = 0; i < tools.length; i++) {
             navs.push(<li key={createID()} className={applyMode(currentCSS , "nav-bars" , globalStyle)}><a href={tools[i]["href"]}>{tools[i]["content"]}</a></li>)           
        }
        return navs
    }
    let allNavs = getTools()
    return (
		<>
			<div>
				<nav>
					<ul>
                              {allNavs}
                         </ul>
				</nav>
			</div>
               <button onClick={() => {
                    changeTheme()
                    refresh()
               }}></button>
		</>
	);
};
export default PrimaryLayout;
