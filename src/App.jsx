import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

import { getDatosInit } from "./store/slices/data/thunks";
import { HeaderComponent } from "./components/header/HeaderComponent";
import { ContentComponent } from "./components/content/ContentComponent";
import { LoadingScreen } from "./components/loading/LoadingScreen";
import { useIsActiveRender } from "./hooks/useIsActiveRender";


function App () {

  const { isActive } = useIsActiveRender( false );
  const dispatch = useDispatch();
  const { data } = useSelector( state => state.data );

  useEffect( () => {
    if ( isActive ) {
      dispatch( getDatosInit() );
    }
  }, [ dispatch, isActive ] );

  return (
    <>
      {
        !data ?
          <>
            <LoadingScreen />
          </>
          :
          <>
            <HeaderComponent />
            <ContentComponent />
          </>
      }

    </>
  )
}

export default App
