import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";


  import Coin from "./routes/coin";
  import Coins from "./routes/coins";
  
  
 
function Router () {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins/>}/>  
                <Route path="/:coinId/*" element={<Coin/>}/>
            </Routes>
        </BrowserRouter>
    )

    

   
}

export default Router;

