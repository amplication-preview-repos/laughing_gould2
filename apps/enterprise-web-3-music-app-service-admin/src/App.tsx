import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ArtistList } from "./artist/ArtistList";
import { ArtistCreate } from "./artist/ArtistCreate";
import { ArtistEdit } from "./artist/ArtistEdit";
import { ArtistShow } from "./artist/ArtistShow";
import { AlbumList } from "./album/AlbumList";
import { AlbumCreate } from "./album/AlbumCreate";
import { AlbumEdit } from "./album/AlbumEdit";
import { AlbumShow } from "./album/AlbumShow";
import { SongList } from "./song/SongList";
import { SongCreate } from "./song/SongCreate";
import { SongEdit } from "./song/SongEdit";
import { SongShow } from "./song/SongShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"EnterpriseWeb3MusicAppService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Artist"
          list={ArtistList}
          edit={ArtistEdit}
          create={ArtistCreate}
          show={ArtistShow}
        />
        <Resource
          name="Album"
          list={AlbumList}
          edit={AlbumEdit}
          create={AlbumCreate}
          show={AlbumShow}
        />
        <Resource
          name="Song"
          list={SongList}
          edit={SongEdit}
          create={SongCreate}
          show={SongShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
