import NextApp from "next/app";
import React from "react";
// import { Provider } from 'react-redux';
// import { store } from 'src/containers/createStore';
// import { useRedux } from 'src/lib/useRedux';
// import { FormActions } from 'src/containers/FormReducer';
import { GlobalStyles as TwinGlobalStyles } from "twin.macro";
import MainLayout from "src/layouts/MainLayout";
import "src/styles/global.scss";

const App = ({ Component, pageProps }) => {
  // const { dispatch } = useRedux();

  // // Run init logic
  // useEffect(() => {
  //   dispatch(FormActions.init({}));
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <Component {...pageProps} />;
};

class WrappedApp extends NextApp<{ reduxStore }> {
  render() {
    return (
      // <Provider store={store}>
      <>
        <TwinGlobalStyles />
        <App {...this.props} />
      </>
      // </Provider>
    );
  }
}

export default WrappedApp;
